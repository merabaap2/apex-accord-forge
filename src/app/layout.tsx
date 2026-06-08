import "@/styles.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "R&A Associates — Excellence Incorporated",
    template: "%s — R&A Associates",
  },
  description: "Integrated Corporate Secretarial & Legal Services. Architecting trust, governance, and lasting corporate relationships for over 30 years.",
  authors: [{ name: "R&A Associates" }],
  openGraph: {
    title: "R&A Associates — Excellence Incorporated",
    description: "Integrated Corporate Secretarial & Legal Services. Architecting trust, governance, and lasting corporate relationships for over 30 years.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
    title: "R&A Associates — Excellence Incorporated",
    description: "Integrated Corporate Secretarial & Legal Services. Architecting trust, governance, and lasting corporate relationships for over 30 years.",
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
