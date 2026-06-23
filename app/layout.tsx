import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Used only inside the CRM (.crm-theme); the marketing site stays on Montserrat.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | Namibia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "lifeguard Namibia",
    "aquatic safety",
    "rescue training",
    "water safety",
    "Walvis Bay",
    "emergency response",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.legalName} | Namibia`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_NA",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.legalName,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-on-surface font-body-md selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
