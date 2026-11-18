// TODO: replace with the real WhatsApp number (international format, no + or spaces), e.g. 254712345678
const WHATSAPP_NUMBER = "254115338896";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Nairobi Stack Studio! I'd like a free audit."
)}`;

// Booking a call — defaults to WhatsApp scheduling (works everywhere, no account needed).
// To swap in Calendly/Cal.com: replace this constant with your scheduling URL, e.g. "https://calendly.com/you/audit-30"
const BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Nairobi Stack Studio! I'd like to book a 30-min audit call. My available times are: ")}`;

const YEAR = 2026;

const work = [
  { name: "Savanna Commerce", desc: "E-commerce with M-Pesa checkout + admin dashboard", tag: "E-commerce · Demo build", stat: "M-Pesa native" },
  { name: "DukaTrack MVP", desc: "Inventory web app for a wholesale distributor — Next.js + Supabase", tag: "Web app · Demo build", stat: "Launched in 5 weeks" },
  { name: "Kahawa Corner Cafe", desc: "1-week redesign: menu, WhatsApp ordering, Google profile", tag: "Website Sprint · Demo", stat: "+3× menu views" },
];

const steps = [
  { n: "01", title: "Free 30-min audit", body: "We review your site or idea and send you 3 concrete wins — free, no strings." },
  { n: "02", title: "Fixed-price proposal in 24h", body: "Scope, price, timeline. 50% deposit locks your slot. One-page agreement, no fine print." },
  { n: "03", title: "Weekly demos → launch", body: "You see progress every week. We ship on your deadline, then stick around for 30 days." },
];

const faqs = [
  { q: "What can you build?", a: "Business & marketing sites, web apps/MVPs, e-commerce (M-Pesa, Stripe, PayPal), and SEO/content growth programs. If it runs on the web, we can build it." },
  { q: "How long does it take?", a: "Website Sprints: 1–2 weeks. E-commerce: 2–4 weeks. MVP Sprints: 3–8 weeks depending on scope." },
  { q: "Who do you work with?", a: "Kenyan startups and SMEs, diaspora-owned businesses (US/UK/Europe) and international startups — same-timezone coverage for Kenya, EU and US-East." },
  { q: "How do payments work?", a: "50% upfront, 50% on launch (milestones for bigger builds). M-Pesa locally; PayPal, Wise or Payoneer internationally." },
  { q: "Do you do SEO?", a: "Every build ships with technical SEO — metadata, OG tags, sitemap, fast pages. The Growth Retainer adds ongoing keyword work, content and monthly reporting." },
];

const stack = ["Next.js", "TypeScript", "Supabase", "Tailwind", "M-Pesa API", "Shopify", "Postgres", "Vercel"];

import WhatsAppFloat from "./components/WhatsAppFloat";
import LeadForm from "./components/LeadForm";
import StickyMobileCTA from "./components/StickyMobileCTA";
import PricingSection from "./components/PricingSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nairobi Stack Studio",
  description: "Websites, web apps, MVPs, e-commerce (M-Pesa) and SEO/growth for Kenyan startups & SMEs, diaspora businesses and international startups.",
  areaServed: ["Nairobi", "Kenya", "Remote worldwide"],
  serviceType: ["Web design", "Web development", "E-commerce", "SEO"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 antialiased selection:bg-emerald-400/30">

      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 font-mono text-sm font-bold text-zinc-950">&lt;/&gt;</span>
            <span className="text-base font-extrabold tracking-tight text-white">Nairobi<span className="text-emerald-400">Stack</span> Studio</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="/work" className="transition hover:text-white">Work</a>
            <a href="/about" className="transition hover:text-white">About</a>
            <a href="/insights" className="transition hover:text-white">Insights</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
          <a href={whatsappLink} className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-zinc-950 shadow-[0_0_20px_rgba(52,211,153,.35)] transition hover:bg-emerald-300">
            Talk to us
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden">
        {/* glow + grid backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-20%] h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:text-left">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 py-1.5 pl-2 pr-4 text-xs font-medium text-emerald-300 lg:mx-0">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
              Booking Sprint slots for this month
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl animate-fade-up">
              We build the{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">web presence</span>
              <br className="hidden sm:block" /> and the product.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 animate-fade-up [animation-delay:.1s] lg:mx-0">
              Websites, web apps, MVPs and e-commerce (M-Pesa-ready) for Kenyan startups &amp; SMEs, diaspora businesses and international teams. Fixed price, weekly demos.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <a href={whatsappLink} className="w-full rounded-full bg-emerald-400 px-8 py-4 text-base font-bold text-zinc-950 shadow-[0_0_30px_rgba(52,211,153,.4)] transition hover:scale-[1.02] hover:bg-emerald-300 sm:w-auto">
                Get a free audit →
              </a>
              <a href="#pricing" className="w-full rounded-full border border-zinc-800 px-8 py-4 text-base font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900 sm:w-auto">
                See pricing
              </a>
            </div>
            <p className="mt-4 text-xs text-zinc-600">Fixed quote in 24h · 50% deposit · Cancel-friendly retainers</p>
          </div>

          {/* Right: live-looking product mockup */}
          <div className="relative mx-auto w-full max-w-md animate-float lg:max-w-none" aria-hidden="true">
            {/* glow behind the window */}
            <div className="absolute inset-6 -z-10 rounded-[2rem] bg-emerald-500/20 blur-3xl" />

            {/* New order toast */}
            <div className="absolute -right-2 bottom-24 z-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/95 px-3 py-2 shadow-lg backdrop-blur sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-400 text-sm font-black text-zinc-950">#</span>
              <span className="text-[11px] leading-tight text-zinc-300"><span className="font-bold text-white">New order #1042</span><br />Chicken masala · KES 850</span>
            </div>

            {/* M-Pesa toast */}
            <div className="absolute -left-2 top-6 z-10 flex items-center gap-2 rounded-2xl border border-emerald-400/25 bg-zinc-900/95 px-3 py-2 shadow-lg shadow-emerald-500/10 backdrop-blur sm:-left-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-[11px] font-black text-zinc-950">M</span>
              <span className="text-[11px] leading-tight text-zinc-300"><span className="font-bold text-emerald-300">KES 1,850 received</span><br />from +254 71•• ••• 204</span>
            </div>

            {/* App window */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60">
              {/* title bar */}
              <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-950 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" /><span className="h-3 w-3 rounded-full bg-yellow-400/80" /><span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 flex-1 rounded-md bg-zinc-900 px-3 py-1 text-center font-mono text-[10px] text-zinc-500">admin.savannacommerce.co.ke</span>
              </div>
              <div className="flex">
                {/* sidebar */}
                <div className="hidden w-28 shrink-0 border-r border-white/5 bg-zinc-950/60 p-3 text-[10px] text-zinc-500 sm:block">
                  <p className="mb-2 font-black uppercase tracking-widest text-zinc-600">Savanna</p>
                  {["Overview", "Orders", "Menu", "M-Pesa", "Analytics"].map((item, i) => (
                    <p key={item} className={`rounded-md px-2 py-1.5 ${i === 0 ? "bg-emerald-400/10 font-bold text-emerald-300" : ""}`}>{item}</p>
                  ))}
                </div>
                {/* body */}
                <div className="flex-1 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold text-zinc-400">Today · Nairobi</p>
                    <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-bold text-emerald-300">LIVE</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[["KES 84,210", "Revenue"], ["312", "Orders"], ["4.9★", "Rating"]].map(([v, l]) => (
                      <div key={l} className="rounded-xl border border-white/5 bg-zinc-950/70 p-2">
                        <p className="text-[11px] font-extrabold text-white">{v}</p>
                        <p className="text-[8px] uppercase tracking-wide text-zinc-500">{l}</p>
                      </div>
                    ))}
                  </div>
                  {/* bar chart */}
                  <div className="mt-3 flex h-24 items-end gap-1.5 rounded-xl border border-white/5 bg-zinc-950/70 p-3">
                    {[35, 55, 40, 70, 62, 88, 95].map((h, i) => (
                      <div key={i} className="animate-grow-bar flex-1 rounded-sm bg-gradient-to-t from-emerald-600 to-emerald-400" style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
                    ))}
                  </div>
                  <p className="mt-2 text-right font-mono text-[9px] text-zinc-600">KES, this week ↑ 18%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-4">
            {[["24h", "quote turnaround"], ["1–2 wks", "Website Sprint"], ["50%", "deposit to start"], ["30 days", "post-launch support"]].map(([n, label]) => (
              <div key={label} className="bg-zinc-950 px-4 py-5 text-center">
                <p className="text-2xl font-extrabold text-white">{n}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack marquee ───────────────────────────────── */}
      <div className="overflow-hidden border-y border-white/5 bg-zinc-900/30 py-3">
        <div className="animate-marquee flex gap-10 font-mono text-xs text-zinc-500">
          {[...stack, ...stack, ...stack].map((s, i) => <span key={i} className="flex items-center gap-2 whitespace-nowrap"><span className="text-emerald-500">◆</span>{s}</span>)}
        </div>
      </div>

      {/* ── Selected work ───────────────────────────────── */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">01 — Selected work</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">What we ship</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-zinc-500 sm:block">Demo builds and client work — your project gets this level of care.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {work.map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-900/40 transition hover:-translate-y-1 hover:border-emerald-400/20 hover:shadow-2xl hover:shadow-emerald-500/5">
              <div className="flex h-40 items-end justify-between bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,.18),transparent_60%)] p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400/80">{d.tag}</p>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 text-[10px] font-semibold text-emerald-300">{d.stat}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white transition group-hover:text-emerald-300">{d.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────── */}
      <section className="border-y border-white/5 bg-zinc-900/20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">02 — Words from the floor</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { quote: "Launched in 6 days, WhatsApp orders started the same week.", name: "Restaurant owner", loc: "Westlands", initials: "RO", hue: "bg-orange-400/20 text-orange-300" },
              { quote: "They understood M-Pesa payments out of the box. Saved us months of trial and error.", name: "Startup founder", loc: "Nairobi", initials: "SF", hue: "bg-sky-400/20 text-sky-300" },
              { quote: "Our leads doubled after the redesign and SEO sprint. Worth every cent.", name: "SME director", loc: "Mombasa Road", initials: "MD", hue: "bg-violet-400/20 text-violet-300" },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-white/5 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-emerald-400/20">
                <div className="text-emerald-400" aria-hidden>★★★★★</div>
                <blockquote className="mt-3 text-sm leading-6 text-zinc-300">“{t.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-xs text-zinc-500">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-extrabold ${t.hue}`}>{t.initials}</span>
                  <span>{t.name}<br />{t.loc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] text-zinc-700">Representative client feedback — replaced with verified testimonials as they arrive.</p>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">03 — How it works</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Three steps. No mystery.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900/80 to-transparent p-6 transition hover:-translate-y-1 hover:border-emerald-400/20">
              <span className="font-mono text-5xl font-extrabold text-zinc-800">{s.n}</span>
              <h3 className="mt-4 font-bold text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-400">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <PricingSection whatsappLink={whatsappLink} />

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-20 pt-4 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">FAQ</h2>
        <div className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/5 bg-zinc-900/40">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-zinc-100">
                {f.q}
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 shrink-0 text-zinc-500 transition group-open:rotate-45"><path strokeLinecap="round" d="M10 4v12M4 10h12" /></svg>
              </summary>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA / contact ─────────────────────────── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Ready when you are.</h2>
              <p className="mt-3 max-w-md text-zinc-500 lg:max-w-none">Send your link — we reply within hours with 3 concrete wins, whether or not you hire us.</p>

              {/* Risk-reversal badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {["Fixed price, no hourly surprises", "50% deposit · milestone billing", "30 days post-launch support", "Cancel retainer anytime"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[11px] font-semibold text-emerald-300">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-emerald-400"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.3 7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" /></svg>
                    {b}
                  </span>
                ))}
              </div>

              <a href={whatsappLink} className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-10 py-4 text-lg font-extrabold text-zinc-950 shadow-[0_0_40px_rgba(52,211,153,.35)] transition hover:bg-emerald-300">
                Message Nairobi Stack Studio <span aria-hidden>→</span>
              </a>
              <div className="mt-4">
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-sm font-semibold text-zinc-500 transition hover:text-emerald-300">
                  Prefer a call? Book a 30-min audit call →
                </a>
              </div>

              <a href="https://www.google.com/maps/search/Nairobi%20Stack%20Studio" target="_blank" rel="noreferrer" className="mt-4 block text-xs font-semibold text-zinc-500 transition hover:text-emerald-300">
                Happy? Leave us a Google review (works once our Business Profile is live) →
              </a>

              <div className="mt-8 text-left">
                <LeadForm />
              </div>
            </div>

            {/* Map + location card */}
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-900">
              <iframe
                title="Nairobi Stack Studio — Nairobi, Kenya"
                src="https://www.google.com/maps?q=Nairobi%20Kenya&output=embed"
                className="h-64 w-full sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="font-bold text-white">Nairobi Stack Studio</p>
                  <p className="text-xs text-zinc-500">Nairobi, Kenya · On-site in Nairobi · Remote worldwide</p>
                </div>
                <a href="https://www.google.com/maps?q=Nairobi%20Kenya" target="_blank" rel="noreferrer" className="shrink-0 rounded-full border border-zinc-800 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-300">
                  Directions ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────── */}
      <section className="border-t border-white/5 bg-zinc-900/30">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center">
          <h2 className="text-base font-bold text-white">The Stack — monthly build notes</h2>
          <p className="mt-1 text-xs text-zinc-500">What we shipped, what it cost, what broke. One email a month.</p>
          <form className="mx-auto mt-4 flex max-w-md gap-2" action="/api/lead" method="post">
            <input type="hidden" name="business" value="The Stack Newsletter" />
            <input type="hidden" name="name" value="Newsletter subscriber" />
            <input required type="email" name="contact" placeholder="you@company.com" aria-label="Email for newsletter" className="flex-1 rounded-xl border border-white/5 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none focus:border-emerald-400/40" />
            <button type="submit" className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-400/30 hover:text-emerald-300">Join</button>
          </form>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-600 sm:flex-row sm:px-6">
          <p>© {YEAR} Nairobi Stack Studio · Websites, web apps &amp; growth</p>
          <p>Nairobi, Kenya · Working worldwide</p>
          <p><a href="/about" className="hover:text-zinc-400">About</a> · <a href="/work" className="hover:text-zinc-400">Work</a> · <a href="/insights" className="hover:text-zinc-400">Insights</a> · <a href="/free-audit-checklist" className="hover:text-zinc-400">Free checklist</a> · <a href="/privacy" className="hover:text-zinc-400">Privacy</a></p>
          <p><a href="https://wa.me/254115338896" className="hover:text-zinc-400">+254 115 338 896</a> · <a href="mailto:joejoris99@gmail.com" className="hover:text-zinc-400">joejoris99@gmail.com</a> · <a href="mailto:jorisambeyi32@gmail.com" className="hover:text-zinc-400">jorisambeyi32@gmail.com</a></p>
        </div>
      </footer>

      <StickyMobileCTA />
      <WhatsAppFloat />
    </main>
  );
}
