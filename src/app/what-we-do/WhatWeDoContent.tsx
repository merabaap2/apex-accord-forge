"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services, industries, type ServiceCategory } from "@/lib/services";
import {
  Hotel, Banknote, GraduationCap, Zap, MonitorSmartphone, HeartPulse,
  Wheat, Film, ShoppingBag, TrainFront, Shield, Factory, Radio, Settings2, Swords,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import Link from "next/link";

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

const stats = [
  { value: "15+", label: "Practice Areas" },
  { value: "25+", label: "Years Combined Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "4", label: "Regulatory Authorities" },
];

const regulatoryAuthorities = ["MCA", "SEBI", "NCLT", "RBI"];

export function WhatWeDoContent() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const gridRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const list = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active],
  );

  /* Card stagger on filter change */
  useLayoutEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-card]");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 24, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out", stagger: 0.045 },
    );
  }, [active]);

  /* Hero entrance */
  useLayoutEffect(() => {
    if (!heroRef.current) return;
    const els = heroRef.current.querySelectorAll("[data-hero]");
    gsap.fromTo(
      els,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.1 },
    );
  }, []);

  return (
    <SiteLayout>

      {/* ─── 1. HERO ───────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative pt-36 lg:pt-48 pb-28 overflow-hidden border-b border-border"
      >
        {/* Subtle background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Soft gradient blob top-right */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-end">
            {/* Left: headline */}
            <div>
              <p data-hero className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-muted-foreground/40" />
                Practice Areas
              </p>
              <h1 data-hero className="font-display text-5xl lg:text-7xl xl:text-8xl leading-[0.95] text-balance">
                What we do,{" "}
                <em className="not-italic text-foreground/50 block mt-2">in service of</em>
                <span className="relative inline-block">
                  best practice.
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-accent/60 via-accent to-transparent" />
                </span>
              </h1>
            </div>

            {/* Right: intro copy */}
            <div data-hero className="lg:pb-3">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                All companies incorporated in India are required to comply with various provisions
                of the Companies Act 2013 and obtain licences, certificates and approvals from
                several regulatory authorities. We advise a broad spectrum of companies — from
                closely held start-ups to publicly listed enterprises — on issues spanning
                corporate, securities and allied laws.
              </p>
              <div className="flex flex-wrap gap-2">
                {regulatoryAuthorities.map((auth) => (
                  <span
                    key={auth}
                    className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-border text-muted-foreground"
                  >
                    {auth}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. FILTER + SERVICES GRID ─────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-6 border-b border-border">
          {filters.map((f) => (
            <button
              key={f}
              id={`filter-${f.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] border transition-all duration-300 ${
                active === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground font-mono tabular-nums">
            {list.length} services
          </span>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
        >
          {list.map((s, i) => (
            <div key={s.title} data-card className="bg-background">
              <ServiceCard
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                index={services.indexOf(s)}
                category={s.category}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. STATS / WHY IT MATTERS ─────────────────────────────── */}
      <section
        ref={statsRef}
        className="relative py-28 bg-[oklch(0.14_0.025_265)] text-white overflow-hidden"
      >
        {/* Background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 mb-4 flex items-center justify-center gap-3">
              <span className="inline-block w-6 h-px bg-white/20" />
              By the Numbers
              <span className="inline-block w-6 h-px bg-white/20" />
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white">
              Trusted across{" "}
              <span className="italic text-white/60">multiple disciplines.</span>
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-10 lg:p-14 flex flex-col items-center text-center border-white/10 ${
                  i < stats.length - 1 ? "border-r" : ""
                } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
              >
                <span className="font-display text-6xl lg:text-7xl text-white tracking-tight mb-3">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Regulatory authority labels */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {regulatoryAuthorities.map((auth) => (
              <span
                key={auth}
                className="text-[11px] uppercase tracking-[0.25em] px-4 py-2 border border-white/10 text-white/40"
              >
                {auth}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. INDUSTRIES SERVED ──────────────────────────────────── */}
      <section className="bg-[oklch(0.18_0.03_265)] text-white py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Section heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 mb-4 flex items-center gap-3">
                <span className="inline-block w-6 h-px bg-white/20" />
                Industries Served
              </p>
              <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
                Sectors we know{" "}
                <span className="italic text-white/50">intimately.</span>
              </h2>
            </div>
            <p className="lg:max-w-sm text-sm text-white/50 leading-relaxed lg:text-right">
              Our practice spans 15 sectors — from emerging technology and financial
              institutions to manufacturing, defence, and non-profit organisations.
            </p>
          </div>

          {/* Industries grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-white/10">
            {industries.map((label, i) => {
              const Icon = industryIcons[i % industryIcons.length];
              return (
                <div
                  key={label}
                  className="group relative border-b border-r border-white/10 p-6 lg:p-8 min-h-[160px] flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-300 cursor-default"
                >
                  {/* Top: index + icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-mono text-white/20 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="h-5 w-5 text-white/30 group-hover:text-white/70 transition-colors duration-300"
                      strokeWidth={1.25}
                    />
                  </div>
                  {/* Label */}
                  <p className="text-sm text-white/70 group-hover:text-white leading-snug transition-colors duration-300">
                    {label}
                  </p>
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. CTA STRIP ──────────────────────────────────────────── */}
      <section className="relative py-28 bg-[oklch(0.97_0.005_265)] border-t border-border overflow-hidden">
        {/* Subtle top line */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-5 flex items-center gap-3">
                <span className="inline-block w-6 h-px bg-muted-foreground/40" />
                Get Started
              </p>
              <h2 className="font-display text-4xl lg:text-5xl text-balance leading-[1.05] mb-4">
                Ready to put expertise{" "}
                <span className="italic text-foreground/50">to work for you?</span>
              </h2>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                Whether you are a start-up navigating your first compliance or a listed company
                managing ongoing regulatory obligations, our team is ready to advise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
              <Link
                href="/contact-us"
                id="cta-contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-[0.18em] hover:bg-accent hover:text-white transition-colors duration-300"
              >
                Contact Us
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
              <Link
                href="/who-we-are"
                id="cta-learn-team"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-sm uppercase tracking-[0.18em] text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-300"
              >
                Meet the Team
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
