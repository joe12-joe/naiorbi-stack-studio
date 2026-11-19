import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Nairobi Stack Studio",
  description: "What data Nairobi Stack Studio collects, why, and your rights.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 antialiased">
      <header className="border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 font-mono text-sm font-bold text-zinc-950">&lt;/&gt;</span>
            <span className="text-sm font-extrabold text-white">Nairobi<span className="text-emerald-400">Stack</span> Studio</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-white">← Home</Link>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Privacy</h1>
        <p className="mt-2 text-xs text-zinc-600">Last updated: November 2026</p>

        <h2 className="mt-8 text-xl font-bold text-white">What we collect</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-400">When you submit our audit or newsletter form, we collect your name, business name and contact details (email/phone/WhatsApp). That is it — we do not run ads pixels, we do not sell data, and we do not track you across the web.</p>

        <h2 className="mt-6 text-xl font-bold text-white">Why</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-400">To respond to your inquiry, prepare your quote, and — only if you opt in — send The Stack, a monthly email. Every email includes a one-line unsubscribe.</p>

        <h2 className="mt-6 text-xl font-bold text-white">Where it lives</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-400">Form submissions are currently logged on our server and/or held by our form-delivery provider (e.g. Resend) until wired to our CRM. We retain inquiry data for 24 months, then delete it.</p>

        <h2 className="mt-6 text-xl font-bold text-white">Your rights</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-400">Write to us on WhatsApp (+254 115 338 896) and we will show you what we hold, correct it, or delete it — within 7 days. No forms, no fees.</p>

        <h2 className="mt-6 text-xl font-bold text-white">Analytics</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-400">If/when we enable privacy-friendly, cookieless analytics (e.g. Plausible or Umami), we will count visits without fingerprinting or personal data, and update this page.</p>
      </div>
    </main>
  );
}
