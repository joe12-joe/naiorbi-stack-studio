"use client";

import { useEffect, useState } from "react";

// TODO: replace with the real WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = "254115338896";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi Nairobi Stack Studio! I'd like a free audit."
      )}`}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30 transition hover:scale-110 hover:bg-emerald-400 md:flex"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-zinc-950" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2.05 22l4.29-1.12a9.87 9.87 0 0 0 5.7 1.8h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.47.65.66-2.4-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.15-.25 0-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.12-.56-1.33-.76-1.82-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.37 1 2.54c.12.16 1.73 2.63 4.19 3.69.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29Z" />
      </svg>
    </a>
  );
}
