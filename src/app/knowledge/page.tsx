import type { Metadata } from "next";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Centre",
  description: "Editorial briefs, newsletters and case studies from R&A Associates.",
  openGraph: {
    title: "Knowledge Centre — R&A Associates",
    description: "Editorial briefs, newsletters and case studies.",
  },
};

const items = [
  { tag: "Newsletter", date: "Q1 · 2026", title: "Companies (Amendment) Rules: what listed entities must redo this quarter." },
  { tag: "Case Study", date: "Mar 2026", title: "Cross-border restructuring for a Singapore-headquartered tech group." },
  { tag: "Brief", date: "Feb 2026", title: "ESOP repricing post-correction: legal mechanics and governance traps." },
  { tag: "Newsletter", date: "Q4 · 2025", title: "FEMA, ODI 2.0 and the new outbound investment regime, one year in." },
  { tag: "Case Study", date: "Nov 2025", title: "NCLT-approved scheme of arrangement for a publicly listed pharma group." },
  { tag: "Brief", date: "Oct 2025", title: "Independent directors' liability: a practical re-reading after recent orders." },
];

export default function Knowledge() {
  return (
    <SiteLayout>
      <section className="pt-32 lg:pt-40 pb-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">— Knowledge Centre</p>
          <h1 className="font-display text-5xl lg:text-8xl leading-[1] text-balance max-w-5xl">
            Editorial, <span className="italic text-foreground/70">written by counsel.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ul>
          {items.map((it) => (
            <li key={it.title} className="group border-b border-border">
              <a href="#" className="grid grid-cols-12 gap-6 items-center py-8 lg:py-10 hover:bg-secondary/40 transition-colors -mx-6 lg:-mx-10 px-6 lg:px-10">
                <span className="col-span-3 lg:col-span-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{it.tag}</span>
                <span className="col-span-3 lg:col-span-2 text-xs text-muted-foreground">{it.date}</span>
                <span className="col-span-5 lg:col-span-7 font-display text-xl lg:text-3xl text-balance leading-snug">{it.title}</span>
                <span className="col-span-1 flex justify-end">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="py-24" />
    </SiteLayout>
  );
}
