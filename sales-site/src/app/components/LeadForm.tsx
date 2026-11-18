"use client";

import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="mt-8 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-400">
        Thanks! We'll get back to you within a few hours on WhatsApp/email.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 text-left grid gap-3">
      <label htmlFor="lead-name" className="sr-only">Your name</label>
      <input id="lead-name" required name="name" aria-label="Your name" placeholder="Your name" className="rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 placeholder-zinc-600" />
      <label htmlFor="lead-business" className="sr-only">Company / project</label>
      <input id="lead-business" required name="business" aria-label="Company or project" placeholder="Company / project" className="rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 placeholder-zinc-600" />
      <label htmlFor="lead-contact" className="sr-only">Email / phone / WhatsApp</label>
      <input id="lead-contact" required name="contact" aria-label="Email, phone or WhatsApp" placeholder="Email / phone / WhatsApp" className="rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 placeholder-zinc-600" />
      <button type="submit" disabled={status === "sending"} className="rounded-lg bg-emerald-600 font-bold px-4 py-2 hover:bg-emerald-500 text-zinc-950 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request free audit"}
      </button>
      {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please WhatsApp us instead.</p>}
    </form>
  );
}
