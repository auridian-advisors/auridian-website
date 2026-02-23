import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Auridian Advisors — Executive Product & Engineering Advisory",
    template: "%s · Auridian",
  },
  description:
    "Executive-level product and platform strategy for founders and enterprise teams building intelligent, scalable systems.",
  metadataBase: new URL("https://auridian.io"),
  openGraph: {
    title: "Auridian Advisors — Executive Product & Engineering Advisory",
    description:
      "Executive-level product and platform strategy for founders and enterprise teams building intelligent, scalable systems.",
    url: "https://auridian.io",
    siteName: "Auridian Advisors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auridian Advisors — Executive Product & Engineering Advisory",
    description:
      "Executive-level product and platform strategy for founders and enterprise teams building intelligent, scalable systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
