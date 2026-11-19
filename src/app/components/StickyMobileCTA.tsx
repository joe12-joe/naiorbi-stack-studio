// Sticky bottom bar on small screens — the #1 local-business conversion pattern:
// Call / WhatsApp / Quote always one thumb-tap away.
// TODO: replace with the real phone number in international format
const PHONE_DISPLAY = "0115 338 896";
const PHONE_INTL = "+254115338896";
const WA = "254115338896";

export default function StickyMobileCTA() {
  return (
    <>
      {/* spacer so footer content isn't hidden behind the bar on mobile */}
      <div aria-hidden className="h-16 md:hidden" />
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden">
        <a href={`tel:${PHONE_INTL}`} className="flex flex-col items-center justify-center gap-0.5 border-r border-white/5 py-2 text-center active:bg-zinc-900">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-emerald-400"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.25a1.5 1.5 0 0 0-1.2-1.47l-3.45-.86a1.5 1.5 0 0 0-1.63.58l-.44.66a12.03 12.03 0 0 1-6.33-6.33l.66-.44a1.5 1.5 0 0 0 .58-1.63l-.86-3.45A1.5 1.5 0 0 0 6.75 3.75h-2.25a1.5 1.5 0 0 0-1.5 1.5v1.5Z" transform="translate(0 0) scale(0.9)"/></svg>
          <span className="text-[10px] font-bold text-zinc-300">Call</span>
        </a>
        <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi Nairobi Stack Studio! I'd like a free audit.")}`} className="flex flex-col items-center justify-center gap-0.5 border-r border-white/5 py-2 text-center active:bg-zinc-900">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-400"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2.05 22l4.29-1.12a9.87 9.87 0 0 0 5.7 1.8h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" /></svg>
          <span className="text-[10px] font-bold text-zinc-300">WhatsApp</span>
        </a>
        <a href="#pricing" className="flex flex-col items-center justify-center gap-0.5 py-2 text-center active:bg-zinc-900">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-emerald-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1m6 11H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.5L20 8.5V17a2 2 0 0 1-2 2Z" /></svg>
          <span className="text-[10px] font-bold text-zinc-300">Get quote</span>
        </a>
      </nav>
    </>
  );
}
