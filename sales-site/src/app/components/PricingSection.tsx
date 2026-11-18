"use client";

import { useState } from "react";

type Currency = "USD" | "KES";

const services = [
  {
    name: "Website Sprint",
    usd: 350,
    usdNote: "launch — standard $800–$1,500",
    kes: "KES 45,000",
    kesNote: "launch — standard KES 105k–190k",
    blurb: "A conversion-ready business site in 1–2 weeks.",
    features: ["Next.js + Tailwind, mobile-first", "Copy, SEO basics & Google Business Profile", "WhatsApp chat + lead capture form", "Sub-2s page loads, 90+ Lighthouse", "30 days post-launch support"],
    cta: "Get a quote",
    highlight: false,
  },
  {
    name: "MVP / Web App Sprint",
    usd: 3000,
    usdNote: "fixed scope · 3–8 weeks",
    kes: "KES 390,000",
    kesNote: "fixed scope · 3–8 weeks",
    blurb: "From idea to deployed product — the one startups need to raise or sell.",
    features: ["SaaS, internal tools, customer portals", "Next.js + Supabase, auth, roles", "M-Pesa / Stripe / PayPal payments", "Deployed on Vercel + analytics", "Weekly demos, 2-week checkpoints"],
    cta: "Scope my MVP",
    highlight: true,
  },
  {
    name: "Growth Retainer",
    usd: 300,
    usdNote: "per month · cancel anytime",
    kes: "KES 39,000",
    kesNote: "per month · cancel anytime",
    blurb: "SEO, content and site care so your site compounds, not decays.",
    features: ["Hosting, domain, SSL & backups", "Monthly keyword SEO + report", "2 posts/mo + 1 case study/quarter", "Site updates, priority support", "Quarterly strategy call"],
    cta: "Start retaining",
    highlight: false,
  },
];

export default function PricingSection({ whatsappLink }: { whatsappLink: string }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-white/5 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(52,211,153,.06),transparent)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">04 — Engagements</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Pick your lane</h2>
          </div>
          {/* Currency toggle */}
          <div className="flex rounded-full border border-white/10 bg-zinc-900 p-1 text-xs font-bold" role="group" aria-label="Currency">
            {(["USD", "KES"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                aria-pressed={currency === c}
                className={`rounded-full px-4 py-2 transition ${currency === c ? "bg-emerald-400 text-zinc-950" : "text-zinc-400 hover:text-white"}`}
              >
                {c === "USD" ? "$ USD" : "KES Sh"}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-2 max-w-lg text-sm text-zinc-500">
          Fixed quotes. 50% deposit. M-Pesa / Stripe / PayPal / Wise. E-commerce builds from {currency === "USD" ? "$2,000" : "KES 260,000"}.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-stretch">
          {services.map((o) => (
            <div key={o.name} className={`relative flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 ${o.highlight ? "conic-border border-transparent shadow-[0_0_50px_rgba(52,211,153,.18)] md:-my-4 md:py-10" : "border-white/5 bg-zinc-900/50"}`}>
              {o.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide text-zinc-950">Most popular</span>
              )}
              <h3 className="font-bold text-white">{o.name}</h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{currency === "USD" ? `$${o.usd.toLocaleString()}` : o.kes}</span>
                <span className="text-[11px] text-zinc-500">{currency === "USD" ? o.usdNote : o.kesNote}</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">{o.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-zinc-300">
                {o.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.3 7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={whatsappLink} className={`mt-6 rounded-full py-3 text-center text-sm font-bold transition ${o.highlight ? "bg-emerald-400 text-zinc-950 hover:bg-emerald-300" : "border border-zinc-800 text-zinc-200 hover:border-emerald-400/30 hover:text-emerald-300"}`}>
                {o.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
