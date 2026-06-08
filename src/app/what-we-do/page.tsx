import type { Metadata } from "next";
import { WhatWeDoContent } from "./WhatWeDoContent";

export const metadata: Metadata = {
  title: "What We Do",
  description: "An interactive directory of fifteen corporate, secretarial, investment and legal services delivered by R&A Associates.",
  openGraph: {
    title: "What We Do — R&A Associates",
    description: "Fifteen practice areas across corporate secretarial, investments and legal representation.",
  },
};

export default function Page() {
  return <WhatWeDoContent />;
}
