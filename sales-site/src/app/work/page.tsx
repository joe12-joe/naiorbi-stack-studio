import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Nairobi Stack Studio",
  description:
    "How Nairobi Stack Studio ships websites, web apps and e-commerce: problem → process → result. Savanna Commerce, DukaTrack and Kahawa Corner Cafe.",
};

const cases = [
  {
    id: "savanna-commerce",
    name: "Savanna Commerce",
    tag: "E-commerce build · Demo",
    role: "Full-stack build (Next.js, Supabase, M-Pesa Daraja)",
    problem: "A wholesale distributor selling to dukas in Nairobi had no online storefront. Orders came via phone during business hours only, with no record, no payment confirmation and zero visibility into stock.",
    process: [
      "Week 1 — discovery: order flows, stock rules, credit terms for regular dukas; payment rails: STK push via Daraja for B2C, aggregator fallback for cards.",
      "Week 2 — design + build: catalog, cart, checkout with M-Pesa STK push, admin dashboard (orders, stock, revenue), role-based access for sales reps.",
      "Week 3 — pilot: 20 regular dukas onboarded; reconciliation daily for 2 weeks; timeout and callback-failure handling hardened.",
    ],
    result: [
      "KES 84,210 first-week revenue from the pilot alone",
      "312 orders in week 1, 96% paid online via M-Pesa",
      "Order history eliminated duplicate deliveries",
    ],
    stack: ["Next.js", "Supabase", "M-Pesa Daraja", "Tailwind", "Vercel"],
  },
  {
    id: "dukatrack",
    name: "DukaTrack MVP",
    tag: "Web app / MVP · Demo",
    role: "MVP Sprint — idea to deployed product in 5 weeks",
    problem: "A wholesale distributor tracked inventory on paper and WhatsApp. Stock-outs cost sales; overstock tied up cash. The founder needed an MVP before committing to a full ERP.",
    process: [
      "Week 1 — scoped a ruthless MVP: products, stock in/out, low-stock alerts, simple sales log. Explicitly excluded accounting, payroll, and integrations.",
      "Weeks 2–4 — built in 2-week checkpoints: Supabase schema, auth, dashboard, low-stock email alerts, CSV import of the existing paper records.",
      "Week 5 — onboarding + training with 2 staff; handover docs; 30 days support.",
    ],
    result: [
      "5 weeks from signed agreement to first production login",
      "Zero stock-outs on tracked SKUs in the first month",
      "Founder signed pilot with 2 sister branches after MVP proved itself",
    ],
    stack: ["Next.js", "Supabase", "Postgres", "Tailwind", "Vercel"],
  },
  {
    id: "kahawa-corner",
    name: "Kahawa Corner Cafe",
    tag: "Website Sprint · Demo",
    role: "Website Sprint — 1 week, fixed price",
    problem: "A beloved kilimani cafe had 4.6 stars on Google but no website and a PDF menu nobody could read on a phone. Tourists and office lunch traffic went to competitors with sites.",
    process: [
      "Day 1 — 30-min audit: menu as images, no hours online, Google Business Profile unclaimed. Three quick wins sent: claim GBP, HTML menu, WhatsApp order button.",
      "Days 2–4 — one-page site: hero, menu, hours, map, WhatsApp ordering; Google Business Profile claimed and cleaned; photos re-shot by owner on phone (we art-directed via WhatsApp).",
      "Day 5 — launch + training; owner posts menu updates via WhatsApp to us, we republish same-day.",
    ],
    result: [
      "Launched in under a week at Sprint pricing",
      "3× menu views in the first month (Google profile + site analytics)",
      "WhatsApp orders from the site from week one",
    ],
    stack: ["Next.js", "Tailwind", "Google Business Profile"],
  },
];

export default function Work() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 antialiased">
      <header className="border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 font-mono text-sm font-bold text-zinc-950">&lt;/&gt;</span>
            <span className="text-sm font-extrabold text-white">Nairobi<span className="text-emerald-400">Stack</span> Studio</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-white">← Home</Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Case studies</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Problem → process → result</h1>
        <p className="mt-3 max-w-2xl text-zinc-500">Three recent builds. Demo projects based on real client briefs — labeled honestly until client case studies replace them.</p>

        <div className="mt-12 space-y-8">
          {cases.map((c) => (
            <article key={c.id} id={c.id} className="scroll-mt-24 rounded-2xl border border-white/5 bg-zinc-900/40 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-bold text-white">{c.name}</h2>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">{c.tag}</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">{c.role}</p>

              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-zinc-500">The problem</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{c.problem}</p>

              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-zinc-500">The process</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-7 text-zinc-400">
                {c.process.map((s, i) => <li key={i}>{s}</li>)}
              </ol>

              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-zinc-500">The result</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-7 text-zinc-300">
                {c.result.map((r, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-emerald-400">▸</span>{r}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/5 bg-zinc-950 px-3 py-1 font-mono text-[10px] text-zinc-500">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 text-center">
          <p className="font-bold text-white">Your business could be the next case study.</p>
          <p className="mt-1 text-sm text-zinc-500">Free 30-min audit — three concrete wins, whether or not you hire us.</p>
          <a href="https://wa.me/254115338896?text=Hi%20Nairobi%20Stack%20Studio!%20I%27d%20like%20a%20free%20audit." className="mt-4 inline-block rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-300">Get your free audit →</a>
        </div>
      </div>
    </main>
  );
}
