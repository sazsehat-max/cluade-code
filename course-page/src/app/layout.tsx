import type { Metadata, Viewport } from "next";
// Fonts are bundled with the site (no Google Fonts request at build or page load).
import "@fontsource/big-shoulders-display/latin-700";
import "@fontsource/big-shoulders-display/latin-800";
import "@fontsource/big-shoulders-display/latin-900";
import "@fontsource-variable/hanken-grotesk/wght";
import "@fontsource/jetbrains-mono/latin-400";
import "@fontsource/jetbrains-mono/latin-500";
import "@fontsource/jetbrains-mono/latin-700";
import Script from "next/script";
import "./globals.css";


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
    <html lang="en">
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
