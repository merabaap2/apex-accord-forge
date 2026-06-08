import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { NetworkCanvas } from "@/components/site/NetworkCanvas";
import { SplitReveal } from "@/components/site/SplitReveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/lib/services";
import office from "@/assets/office-editorial.jpg";
import boardroom from "@/assets/boardroom.jpg";
import partner1 from "@/assets/partner-1.jpg";
import partner2 from "@/assets/partner-2.jpg";
import partner3 from "@/assets/partner-3.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R&A Associates — Excellence Incorporated" },
      { name: "description", content: "Integrated Corporate Secretarial & Legal Services. Architecting trust, governance, and lasting corporate relationships for over 30 years." },
      { property: "og:title", content: "R&A Associates — Excellence Incorporated" },
      { property: "og:description", content: "Three decades of architecting trust, governance and lasting corporate relationships." },
    ],
  }),
  component: Index,
});

const featured = services.slice(0, 9);

const partners = [
  { name: "Rashida Adenwala", role: "Founder Partner", img: partner1 },
  { name: "Ramakrishna Gupta Racharla", role: "Senior Partner", img: partner2 },
  { name: "B. Bhavani Raj", role: "Partner", img: partner3 },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-background pt-16">
        <NetworkCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-24 lg:pb-32">
          <div className="flex items-center gap-3 mb-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/30" />
            Est. 1996 · Hyderabad · India
          </div>
          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] font-medium text-balance">
            <SplitReveal as="span" className="block">Excellence</SplitReveal>
            <SplitReveal as="span" delay={0.15} className="block italic text-foreground/80">Incorporated.</SplitReveal>
          </h1>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <p className="lg:col-span-6 text-base lg:text-lg text-muted-foreground max-w-xl text-balance">
              Architecting trust, governance and lasting corporate relationships
              for India's most consequential companies — for over thirty years.
            </p>
            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.18em] hover:gap-3 transition-all"
              >
                Initiate Consultation <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
              >
                Explore Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={office}
                alt="R&A Associates office"
                width={1280}
                height={1600}
                loading="lazy"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              — Three decades since the inception of R&amp;A Associates
            </p>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] text-balance">
              An integrated firm built around one quiet promise — substance over noise.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Established in 1996, R&amp;A Associates is an integrated Corporate Secretarial
                &amp; Legal Services firm offering a one-stop solution for all corporate
                compliances and legal requirements.
              </p>
              <p>
                Headquartered in Hyderabad with branches in Gurgaon, Chennai and Mumbai,
                the firm has stood at the forefront of the corporate legal services sector —
                with a core team of over 150 years of collective experience.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-px bg-border border border-border">
              {[
                { k: "30+", v: "Years of practice" },
                { k: "150+", v: "Years of collective experience" },
                { k: "4", v: "Offices across India" },
              ].map((s) => (
                <div key={s.k} className="bg-background p-6">
                  <p className="font-display text-4xl">{s.k}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION editorial band */}
      <section className="relative bg-[oklch(0.18_0.03_265)] text-[oklch(0.92_0.005_250)] py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {[
            { k: "Our Mission", v: "To consistently deliver outstanding service to our clients, provide fulfilling careers and professional satisfaction to our people, and achieve financial success — so that we can grow and reward ourselves with prosperity." },
            { k: "Our Vision", v: "To play a wider role in implementing robust control mechanisms that facilitate proper compliance — in accordance with the ever-changing regulations of this country." },
          ].map((b) => (
            <div key={b.k}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">{b.k}</p>
              <p className="font-display text-2xl lg:text-3xl leading-snug text-balance text-white/95">
                {b.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              — Bouquet of Services
            </p>
            <h2 className="font-display text-4xl lg:text-6xl text-balance max-w-3xl">
              A full spectrum of corporate counsel, refined over thirty years.
            </h2>
          </div>
          <Link
            to="/what-we-do"
            className="group inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 self-start"
          >
            View all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {featured.map((s) => (
            <div key={s.title} className="bg-background">
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} />
            </div>
          ))}
        </div>
      </section>

      {/* TOP BRASS */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                — The Top Brass
              </p>
              <h2 className="font-display text-4xl lg:text-6xl">Stewardship.</h2>
            </div>
            <p className="hidden md:block max-w-sm text-sm text-muted-foreground">
              Senior counsel and managing partners whose judgment shapes every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((p) => (
              <div key={p.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.role}</p>
                    <h3 className="font-display text-2xl mt-1">{p.name}</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 mt-2 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS strip */}
      <section className="border-y border-border py-20 bg-secondary/35">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-12">
            — Trusted by Leading Enterprises &amp; Partners
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-1 gap-y-2 items-center justify-items-center">
            {[
              { name: "ADP", logo: "/Partners/ADP.png" },
              { name: "Alimak Hek", logo: "/Partners/Alimak-hek.png" },
              { name: "Andhra Bank", logo: "/Partners/Andhra-bank.png" },
              { name: "DE Shaw & Co", logo: "/Partners/DE Shaw-co.png" },
              { name: "DMIA", logo: "/Partners/DMIA.png" },
              { name: "DQ", logo: "/Partners/DQ.png" },
              { name: "IITH", logo: "/Partners/IITH.png" },
              { name: "Lockheed Martin", logo: "/Partners/Lockhead-martin.png" },
              { name: "Nava Bharat Ventures Ltd", logo: "/Partners/Nava-bharat-ventures-ltd.png" },
              { name: "Nest Con", logo: "/Partners/Nest-con.png" },
              { name: "Nikunj", logo: "/Partners/Nikunj.png" },
              { name: "Operation Mercy", logo: "/Partners/Operation-mercy.png" },
              { name: "Patil Rail", logo: "/Partners/Patil-rail.png" },
              { name: "SINE", logo: "/Partners/SINE.png" },
              { name: "Swastik Species", logo: "/Partners/Swastik-speices.png" },
              { name: "VAYA", logo: "/Partners/VAYA.png" },
              { name: "Aha", logo: "/Partners/aha.png" },
              { name: "Amara Raja", logo: "/Partners/amararaja.png" },
              { name: "Arcesium", logo: "/Partners/arcesium.png" },
              { name: "Bourntec", logo: "/Partners/bourntec.png" },
              { name: "Clippers", logo: "/Partners/clippers.png" },
              { name: "Cognigix", logo: "/Partners/cognigix.png" },
              { name: "Connect India", logo: "/Partners/connectindia.png" },
              { name: "Hyundai", logo: "/Partners/hyundai.png" },
              { name: "Manthan International School", logo: "/Partners/manthan-international-school.png" },
              { name: "Medplus", logo: "/Partners/medplus.png" },
              { name: "My Home Group", logo: "/Partners/my-home-group.png" },
              { name: "NCL Group", logo: "/Partners/ncl-group.png" },
              { name: "Nephroplus", logo: "/Partners/nephroplus.png" },
              { name: "Ravi Leela", logo: "/Partners/ravi-leela.png" },
              { name: "Sierra Cedar", logo: "/Partners/sierra-cedar.png" },
              { name: "Suryalata", logo: "/Partners/suryalata.png" },
              { name: "T-Hub", logo: "/Partners/t-hub.png" },
              { name: "TV9", logo: "/Partners/tv9.png" },
            ].map((p) => (
              <div key={p.name} className="flex items-center justify-center h-24 w-full -mx-8 -my-4 transition-transform duration-300 hover:scale-110 hover:z-10">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src={boardroom}
          alt=""
          width={1600}
          height={1024}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-20"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-32 lg:py-40 text-center">
          <h2 className="font-display text-5xl lg:text-7xl text-balance">
            A first conversation, in confidence.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Tell us about the matter at hand. A senior partner will respond within one business day.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Initiate Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
