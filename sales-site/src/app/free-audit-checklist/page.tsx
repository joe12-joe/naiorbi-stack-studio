import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 10-Point Website Audit Checklist — Free | Nairobi Stack Studio",
  description:
    "Grab the free checklist we use to audit Kenyan business websites: speed, WhatsApp conversion, Google profile, M-Pesa checkout, and more.",
};

const checklist = [
  "Loads in under 2 seconds on a mid-range Android on 3G (test with PageSpeed Insights on your SITE — not desktop)",
  "WhatsApp click-to-chat and phone call are one tap away on every page — top-right, sticky or floating",
  "Menu/catalog is real HTML, not a PDF or image — Google can't read PDFs, customers can't scroll them",
  "Google Business Profile claimed and matches the site exactly (name, hours, phone, category)",
  "Clear, single primary call-to-action per page — 'Order on WhatsApp' beats five competing buttons",
  "Real photos of your actual business — not stock photos that scream 'template'",
  "Hours, address and prices visible without scrolling into an About page",
  "Contact form works and sends to an inbox you actually check — test it right now if you have one",
  "Site collects emails/WhatsApp numbers with a reason to leave them (offer, waitlist, newsletter)",
  "M-Pesa (or your payment method) checkout is tested end-to-end by you, monthly",
];

export default function FreeAuditChecklist() {
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
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Free checklist</p>
        <h1 className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">The 10-Point Website Audit Checklist</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          The same 10 checks we run on every Nairobi Stack Studio audit — the reason most local business sites leak customers. Leave your email and it's yours below, instantly.
        </p>

        {/* Capture form */}
        <form className="mt-8 flex max-w-md gap-2" action="/api/lead" method="post">
          <input type="hidden" name="business" value="Lead magnet: 10-Point Audit Checklist" />
          <input type="hidden" name="name" value="Checklist subscriber" />
          <input required type="email" name="contact" placeholder="you@company.com" aria-label="Email for the checklist" className="flex-1 rounded-xl border border-white/5 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-emerald-400/40" />
          <button type="submit" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-300">Send it</button>
        </form>

        {/* Checklist — visible inline right away */}
        <ol className="mt-12 space-y-4">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 font-mono text-sm font-bold text-emerald-400">{i + 1}</span>
              <span className="text-sm leading-6 text-zinc-300">{item}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <p className="font-bold text-white">Want this run on your site — by us, for free?</p>
          <p className="mt-1 text-sm text-zinc-500">30 minutes, three concrete wins, no obligation. That's the whole pitch.</p>
          <a href="https://wa.me/254115338896?text=Hi%20Nairobi%20Stack%20Studio!%20Please%20run%20the%2010-point%20audit%20on%20my%20site." className="mt-4 inline-block rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-300">Run it on my site →</a>
        </div>
      </div>
    </main>
  );
}
