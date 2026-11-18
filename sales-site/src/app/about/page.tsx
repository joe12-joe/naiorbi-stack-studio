import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Nairobi Stack Studio",
  description:
    "Nairobi Stack Studio is a Nairobi-based tech studio building websites, web apps, MVPs and e-commerce (M-Pesa-ready) for startups and SMEs — fixed price, shipped fast.",
};

const principles = [
  { title: "Ship, then polish", body: "A live site that's 90% there beats a perfect mockup in a drive. We launch, measure, iterate." },
  { title: "Fixed price, always", body: "You know the number before we start. No hourly billing surprises, ever." },
  { title: "M-Pesa is a feature", body: "Local payments aren't bolted on at the end — they're designed in, along with WhatsApp-first flows." },
  { title: "Honest scope", body: "If your idea needs a bigger team or a different stack, we'll say so — even if it means losing the work." },
];

const facts = [
  ["Base", "Nairobi, Kenya — on-site, in-person"],
  ["Work style", "Remote-friendly, worldwide"],
  ["Stack", "Next.js, TypeScript, Supabase, Tailwind"],
  ["Payments", "M-Pesa · PayPal · Wise · Payoneer"],
  ["Working with us", "50% deposit · fixed scope · 30 days post-launch support"],
];

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 antialiased">
      <header className="border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 font-mono text-sm font-bold text-zinc-950">&lt;/&gt;</span>
            <span className="text-sm font-extrabold text-white">Nairobi<span className="text-emerald-400">Stack</span> Studio</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-white">← Home</Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">About</p>
        <h1 className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">A Nairobi tech studio that <span className="text-emerald-400">ships</span>.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          Nairobi Stack Studio exists because too many Kenyan businesses lose customers to slow, invisible, or broken websites — and too many startups wait months for an MVP that should ship in weeks. We build the web presence and the product, fixed price, on your deadline.
        </p>

        {/* Founder */}
        <section className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/5 bg-zinc-900/50 p-6 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-3xl font-extrabold text-zinc-950">J</div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Founder</p>
            {/* TODO: replace with a real photo + fuller bio once ready */}
            <h2 className="mt-1 text-xl font-bold text-white">Joe — founder &amp; engineer</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Full-stack developer (Next.js, TypeScript, Supabase) building for Kenyan startups and SMEs from Nairobi. Hands-on with every project — you talk to the person writing the code, not an account manager. Currently taking on Website Sprints, MVP builds and Growth Retainers.
            </p>
            <p className="mt-3 text-xs text-zinc-600">Sat mornings in Westlands/Kilimani cafés, shipping since 2026.</p>
            <p className="mt-2 text-xs text-zinc-500"><a href="mailto:joejoris99@gmail.com" className="hover:text-emerald-300">joejoris99@gmail.com</a> · <a href="mailto:jorisambeyi32@gmail.com" className="hover:text-emerald-300">jorisambeyi32@gmail.com</a></p>
          </div>
        </section>

        {/* Principles */}
        <h2 className="mt-14 text-2xl font-bold tracking-tight text-white">How we work</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/5 bg-zinc-900/40 p-5">
              <p className="font-bold text-emerald-400">{p.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-zinc-400">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Facts */}
        <h2 className="mt-14 text-2xl font-bold tracking-tight text-white">The details</h2>
        <dl className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/5 bg-zinc-900/40">
          {facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 gap-4 p-4 text-sm">
              <dt className="text-zinc-500">{k}</dt>
              <dd className="col-span-2 text-zinc-200">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Why Nairobi */}
        <h2 className="mt-14 text-2xl font-bold tracking-tight text-white">Why Nairobi?</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Because this is where the next wave of African products is being built — and local context is an advantage, not a limitation. We understand M-Pesa flows, WhatsApp-first customer behavior, KRA/eTIMS paperwork, and what a Kenyan SME actually needs from a website: calls, WhatsApp pings and orders, not vanity metrics. And because we're local, we can meet you face-to-face at your premises — try that with an offshore agency.
        </p>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 text-center">
          <p className="font-bold text-white">Want to work with us?</p>
          <p className="mt-1 text-sm text-zinc-500">Free 30-minute audit. No obligation. Real advice either way.</p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
            <a href="https://wa.me/254115338896?text=Hi%20Nairobi%20Stack%20Studio!%20I%27d%20like%20a%20free%20audit." className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-300">WhatsApp us →</a>
            <Link href="/#pricing" className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-zinc-700">See pricing</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
