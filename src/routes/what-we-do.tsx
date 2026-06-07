import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services, industries, type ServiceCategory } from "@/lib/services";
import {
  Hotel, Banknote, GraduationCap, Zap, MonitorSmartphone, HeartPulse,
  Wheat, Film, ShoppingBag, TrainFront, Shield, Factory, Radio, Settings2, Swords,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — R&A Associates" },
      { name: "description", content: "An interactive directory of fifteen corporate, secretarial, investment and legal services delivered by R&A Associates." },
      { property: "og:title", content: "What We Do — R&A Associates" },
      { property: "og:description", content: "Fifteen practice areas across corporate secretarial, investments and legal representation." },
    ],
  }),
  component: WhatWeDo,
});

const filters: ("All" | ServiceCategory)[] = [
  "All",
  "Corporate Secretarial",
  "Investments",
  "Legal Representation",
];

const industryIcons: LucideIcon[] = [
  Hotel, Banknote, GraduationCap, Zap, MonitorSmartphone, HeartPulse,
  Wheat, Film, ShoppingBag, TrainFront, Shield, Factory, Radio, Settings2, Swords,
];

function WhatWeDo() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const gridRef = useRef<HTMLDivElement | null>(null);

  const list = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active],
  );

  useLayoutEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-card]");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.04 },
    );
  }, [active]);

  return (
    <SiteLayout>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            — Practice
          </p>
          <h1 className="font-display text-5xl lg:text-8xl leading-[1] text-balance max-w-5xl">
            What we do, <span className="italic text-foreground/70">in service of best practice.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            All companies incorporated in India are required to comply with various
            provisions of the Companies Act 2013, and obtain licences, certificates
            and approvals from several regulatory authorities. We advise a broad
            spectrum of companies — from closely held start-ups to publicly listed
            enterprises — on issues spanning corporate, securities and allied laws.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="flex flex-wrap items-center gap-2 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] border transition-colors ${
                active === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">{list.length} services</span>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
        >
          {list.map((s) => (
            <div key={s.title} data-card className="bg-background">
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} />
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[oklch(0.18_0.03_265)] text-white py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">— Industries Served</p>
              <h2 className="font-display text-4xl lg:text-6xl">Sectors we know intimately.</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-white/10">
            {industries.map((label, i) => {
              const Icon = industryIcons[i % industryIcons.length];
              return (
                <div
                  key={label}
                  className="group relative border-b border-r border-white/10 p-6 lg:p-8 min-h-[140px] flex flex-col justify-between hover:bg-white/[0.03] transition-colors"
                >
                  <Icon className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" strokeWidth={1.25} />
                  <p className="mt-6 text-sm text-white/90 leading-snug">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}