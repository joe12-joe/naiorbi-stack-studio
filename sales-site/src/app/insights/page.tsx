import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — Nairobi Stack Studio",
  description:
    "Field notes on web development, M-Pesa integration, SEO and growth for Kenyan businesses — from the studio that ships them.",
};

const articles = [
  {
    slug: "why-nairobi-business-sites-fail",
    title: "Why most Nairobi business websites fail (and it's not the design)",
    read: "3 min read",
    body: [
      "We audit local business sites every week. The failures repeat: the site loads in 8 seconds on a mid-range Android on 3G, there is no WhatsApp button, the menu is a blurry PDF, and the Google Business Profile points to a dead domain.",
      "None of those are design problems. They are conversion problems. A restaurant with a 4.5-star Google rating and a 6-second site loses the customer to the place two doors down with a fast site and a one-tap order button.",
      "Fix the foundations first: sub-2-second loads on 3G, WhatsApp and call one tap away, a crawlable menu (not a PDF), and a Google Business Profile that matches the site — same name, hours, phone and category. Design comes after the plumbing works.",
    ],
  },
  {
    slug: "what-a-website-sprint-includes",
    title: "The Website Sprint: what you actually get for $350–$1,500",
    read: "4 min read",
    body: [
      "A Website Sprint is a fixed-scope engagement, not an open-ended retainer. Website Sprint covers: a mobile-first one-page or small multi-page site, copy written or edited by us, on-page SEO (titles, descriptions, OG tags, sitemap), Google Business Profile setup or cleanup, WhatsApp click-to-chat, a lead capture form, hosting guidance, and 30 days of post-launch support.",
      "What it doesn't cover: custom web apps, e-commerce checkout logic, or ongoing content. Those are scoped separately — MVP Sprint and Growth Retainer respectively.",
      "Why the price gap ($350 launch vs $1,500 standard)? Launch pricing exists to build our local portfolio. Same quality, capped scope, one round of revisions. When the launch slots are gone, standard pricing applies.",
    ],
  },
  {
    slug: "mpesa-integration-for-smes",
    title: "M-Pesa integration for SMEs: what to know before you build",
    read: "5 min read",
    body: [
      "There are three common ways to take M-Pesa on a website. (1) Lipa Na M-Pesa Online (STK push) — the customer gets a prompt on their phone, enters their PIN, done. Best conversion, requires Daraja API credentials from Safaricom and a paybill/till number. (2) Manual paybill/till with a reference — zero integration, near-zero trust; customers drop off or pay twice. (3) Third-party aggregators (e.g. IntaSend, Pesapal) — faster to market, small fee per transaction, handles reconciliation.",
      "For most SMEs we recommend STK push via Daraja for checkouts under ~KES 150k/month, or an aggregator if you need cards too. Either way: always show the expected amount before the prompt fires, handle timeouts gracefully (customers pay then never confirm), and reconcile daily — M-Pesa callbacks occasionally fail.",
      "Budget note: integration itself is a day or two of work; the real cost is reconciliation hygiene and Safaricom onboarding paperwork. We set all of it up as part of e-commerce builds.",
    ],
  },
];

export default function Insights() {
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
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Insights</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Field notes from shipping web products in Nairobi</h1>
        <p className="mt-3 max-w-2xl text-zinc-500">Short, practical essays — no listicles, no fluff. Updated when we learn something worth sharing.</p>

        <div className="mt-12 space-y-12">
          {articles.map((a) => (
            <article key={a.slug} id={a.slug} className="scroll-mt-24 border-t border-white/5 pt-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">{a.read}</p>
              <h2 className="mt-2 text-2xl font-bold text-white">{a.title}</h2>
              {a.body.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-7 text-zinc-400">{p}</p>
              ))}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 text-center">
          <p className="font-bold text-white">Want this thinking applied to your business?</p>
          <a href="/#pricing" className="mt-3 inline-block rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-300">See how we work →</a>
        </div>
      </div>
    </main>
  );
}
