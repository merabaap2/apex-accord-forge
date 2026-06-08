"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SiteLayout } from "@/components/site/SiteLayout";
import office from "@/assets/office-editorial.jpg";
import boardroom from "@/assets/boardroom.jpg";
import { Target, Users, UserSquare2, Briefcase, Image as ImageIcon, HeartHandshake } from "lucide-react";

const sections = [
  { id: "values", label: "Mission & Values" },
  { id: "team", label: "Our Team" },
  { id: "chair", label: "Desk of Chairperson" },
  { id: "facilities", label: "Facilities" },
  { id: "gallery", label: "Photo Gallery" },
  { id: "csr", label: "CSR" },
];

const sectionIcons = [Target, Users, UserSquare2, Briefcase, ImageIcon, HeartHandshake];

export function WhoWeAreContent() {
  const [active, setActive] = useState(sections[0].id);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <SiteLayout>
      <section className="pt-32 lg:pt-40 pb-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">— The Firm</p>
          <h1 className="font-display text-5xl lg:text-8xl leading-[1] text-balance max-w-5xl">
            Ingrained <span className="italic text-foreground/70">values.</span>
          </h1>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-lg leading-relaxed text-muted-foreground">
              Established in 1996, R&amp;A Associates is an integrated Corporate
              Secretarial &amp; Legal Services firm, offering a one-stop solution
              for all corporate compliances and legal requirements. The firm is
              distinguished by the expertise of its team, the esteem of its
              clients and an enduring reputation for unyielding work ethic.
            </p>
            <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border border border-border self-start">
              {[
                { k: "1996", v: "Year founded" },
                { k: "150+", v: "Yrs collective experience" },
                { k: "4", v: "Pan-India offices" },
                { k: "ICSI", v: "Registered firm" },
              ].map((s) => (
                <div key={s.k} className="bg-background p-6">
                  <p className="font-display text-3xl">{s.k}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky nav */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">— Index</p>
              <ul className="flex lg:flex-col gap-1 overflow-x-auto">
                {sections.map((s, i) => {
                  const Icon = sectionIcons[i];
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-center gap-3 px-4 py-3 text-sm border-l-2 transition-all whitespace-nowrap ${
                          isActive
                            ? "border-foreground text-foreground bg-secondary"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 space-y-32">
            <article id="values" className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">01 — Mission &amp; Values</p>
              <h2 className="font-display text-4xl lg:text-5xl text-balance">
                Substance, governance, and unyielding work ethic.
              </h2>
              <div className="mt-10 grid md:grid-cols-2 gap-10 text-muted-foreground">
                <p>To consistently deliver outstanding service to our clients, provide fulfilling careers and professional satisfaction to our people, and achieve financial success — so that we can grow and reward ourselves with prosperity.</p>
                <p>To play a wider role in implementing robust control mechanisms that facilitate proper compliance — in accordance with the ever-changing regulations of this country.</p>
              </div>
            </article>

            <article id="team" className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">02 — Our Team</p>
              <h2 className="font-display text-4xl lg:text-5xl text-balance">
                A core team with 150+ years of collective experience.
              </h2>
              <div className="mt-10 aspect-[16/10] overflow-hidden bg-muted relative">
                <Image
                  src={office}
                  alt="Our team"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-8 text-muted-foreground max-w-2xl">
                Headquartered in Hyderabad, with branches in Gurgaon, Chennai and Mumbai —
                advising and guiding companies in India and abroad.
              </p>
            </article>

            <article id="chair" className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">03 — Desk of Chairperson</p>
              <h2 className="font-display text-4xl lg:text-5xl text-balance">
                A note from the Chairperson.
              </h2>
              <blockquote className="mt-10 border-l-2 border-foreground pl-8 font-display text-2xl lg:text-3xl leading-snug text-foreground/85 text-balance">
                "We have spent thirty years building a firm where the standard of work
                speaks before any of us does. That, more than anything, is the value we
                are proud to compound."
              </blockquote>
            </article>

            <article id="facilities" className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">04 — Facilities</p>
              <h2 className="font-display text-4xl lg:text-5xl text-balance">
                Modern offices, considered tools.
              </h2>
              <div className="mt-10 aspect-[16/9] overflow-hidden bg-muted relative">
                <Image
                  src={boardroom}
                  alt="Boardroom"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-8 text-muted-foreground max-w-2xl">
                R&amp;A is a pioneer in adopting tools and technologies that help us
                perform efficiently and serve clients better.
              </p>
            </article>

            <article id="gallery" className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">05 — Photo Gallery</p>
              <h2 className="font-display text-4xl lg:text-5xl text-balance">In the workplace.</h2>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[office, boardroom, office, boardroom].map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-muted relative">
                    <Image
                      src={src}
                      alt=""
                      placeholder="blur"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </article>

            <article id="csr" className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">06 — CSR</p>
              <h2 className="font-display text-4xl lg:text-5xl text-balance">
                A wider responsibility, taken seriously.
              </h2>
              <p className="mt-10 text-muted-foreground max-w-2xl">
                R&amp;A undertakes knowledge-sharing initiatives, mentorship programmes,
                and community contributions across the cities in which we work.
              </p>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
