import { NextResponse } from "next/server";

// Lead capture → email via Resend (https://resend.com) REST API.
//
// Setup (once):
//   1. Create a free Resend account, verify a sender domain (or use onboarding@resend.dev)
//   2. Set env vars (see .env.example):
//        RESEND_API_KEY=re_xxx
//        RESEND_FROM="Nairobi Stack Studio <leads@yourdomain.com>"
//        RESEND_TO=you@yourdomain.com
//   3. Redeploy. Without RESEND_API_KEY the route logs leads to the server console instead —
//      it never silently drops them.

const RESEND_API = "https://api.resend.com/emails";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const name = String(body?.name ?? "").trim();
    const business = String(body?.business ?? "").trim();
    const contact = String(body?.contact ?? "").trim();

    if (!name || !business || !contact) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    if (name.length > 200 || business.length > 200 || contact.length > 300) {
      return NextResponse.json({ ok: false, error: "Field too long" }, { status: 400 });
    }
    // Honeypot/spam guard: reject URLs in contact field
    if (/https?:\/\//i.test(contact)) {
      return NextResponse.json({ ok: false, error: "Invalid contact" }, { status: 400 });
    }

    const at = new Date().toISOString();
    const summary = `Name: ${name}\nBusiness: ${business}\nContact: ${contact}\nAt: ${at}`;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Fallback so leads are never silently lost
      console.log("[lead]", { name, business, contact, at });
      return NextResponse.json({ ok: true, delivered: "log" });
    }

    // Comma-separated recipient list (default: both owner inboxes)
    const to = (process.env.RESEND_TO ?? "joejoris99@gmail.com, jorisambeyi32@gmail.com")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const res = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Nairobi Stack Studio <onboarding@resend.dev>",
        to,
        subject: `New lead: ${business} (${name})`,
        text: summary,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[lead] resend failed", res.status, detail);
      // Still log the lead so it isn't lost even if email fails
      console.log("[lead]", { name, business, contact, at });
      return NextResponse.json({ ok: true, delivered: "log-fallback" });
    }

    return NextResponse.json({ ok: true, delivered: "email" });
  } catch (e) {
    console.error("[lead] error", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
