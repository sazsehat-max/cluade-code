import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Big_Shoulders({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--f-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--f-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--f-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "The Day Trading Warrior Course | Market Titans",
  description:
    "Demark Davis's step-by-step price action system for US30, Gold and futures. 19 modules, lifetime access and a private Telegram trading room.",
  openGraph: {
    title: "Stop guessing. Start executing. | Market Titans",
    description: "The Day Trading Warrior Course by Demark Davis: a structured trading system for US30, Gold and futures.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0e0d0c", width: "device-width", initialScale: 1 };

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        {children}
        {PIXEL_ID ? (
          <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}</Script>
        ) : null}
      </body>
    </html>
  );
}
