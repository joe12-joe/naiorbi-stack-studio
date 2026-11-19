import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nairobi Stack Studio — Websites, Web Apps & MVPs for Startups & SMEs",
  description:
    "Nairobi Stack Studio builds fast websites, MVPs/web apps, e-commerce with M-Pesa, and growth/SEO programs for Kenyan startups & SMEs, diaspora businesses and international startups. Fixed price, launched in days.",
  openGraph: {
    title: "Nairobi Stack Studio — Websites, Web Apps & MVPs",
    description:
      "Fast websites, MVPs and e-commerce (M-Pesa-ready) for Kenyan startups & SMEs, diaspora businesses and international startups. Fixed price.",
    type: "website",
    locale: "en_KE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Privacy-friendly analytics (cookieless). Uncomment and set your domain once deployed:
        <script defer data-domain="naistack.studio" src="https://plausible.io/js/script.js"></script>
        */}
      </body>
    </html>
  );
}
