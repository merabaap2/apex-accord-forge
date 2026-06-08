import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: "R&A Associates — Excellence Incorporated",
  description: "Integrated Corporate Secretarial & Legal Services. Architecting trust, governance, and lasting corporate relationships for over 30 years.",
  openGraph: {
    title: "R&A Associates — Excellence Incorporated",
    description: "Three decades of architecting trust, governance and lasting corporate relationships.",
  },
};

export default function Page() {
  return <HomeContent />;
}
