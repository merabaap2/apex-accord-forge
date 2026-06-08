import type { Metadata } from "next";
import { WhoWeAreContent } from "./WhoWeAreContent";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Three decades of ingrained values, distinguished team and unyielding work ethic at R&A Associates.",
  openGraph: {
    title: "Who We Are — R&A Associates",
    description: "The values, people and ethic behind R&A Associates.",
  },
};

export default function Page() {
  return <WhoWeAreContent />;
}
