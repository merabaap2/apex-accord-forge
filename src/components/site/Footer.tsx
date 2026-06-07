import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const offices = [
  { city: "Hyderabad", note: "Head Office", lines: ["6-3-1090, TSR Towers", "Rajbhavan Road"] },
  { city: "Gurgaon", note: "North India", lines: ["DLF Cyber City", "Phase III"] },
  { city: "Mumbai", note: "Western Region", lines: ["Bandra Kurla Complex", "Mumbai 400051"] },
  { city: "Chennai", note: "Southern Region", lines: ["Nungambakkam", "Chennai 600034"] },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-[oklch(0.18_0.03_265)] text-[oklch(0.92_0.005_250)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          {offices.map((o) => (
            <div key={o.city}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{o.note}</p>
              <h4 className="mt-2 font-display text-2xl text-white">{o.city}</h4>
              <div className="mt-3 text-sm text-white/60 space-y-1">
                {o.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16 border-b border-white/10">
          <div className="lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">R&amp;A Associates</p>
            <h3 className="mt-3 font-display text-3xl text-white text-balance">
              Excellence, incorporated for three decades.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">Firm</p>
              <ul className="space-y-2 text-white/70">
                <li>Mission &amp; Values</li>
                <li>Our Team</li>
                <li>Chairperson's Desk</li>
                <li>CSR</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">Knowledge</p>
              <ul className="space-y-2 text-white/70">
                <li>Newsletters</li>
                <li>Resource Links</li>
                <li>FAQs</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">Quarterly Brief</p>
            <p className="text-sm text-white/60 mb-5">
              Compliance intelligence, regulatory updates and editorial essays — delivered four times a year.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (/.+@.+\..+/.test(email)) setDone(true);
              }}
              className="relative border-b border-white/30 focus-within:border-white transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@firm.com"
                className="w-full bg-transparent py-3 pr-10 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 inline-flex items-center justify-center text-white"
                aria-label="Subscribe"
              >
                {done ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
            {done && (
              <p className="mt-3 text-xs text-white/50 animate-in fade-in duration-500">
                Confirmed. Welcome to the brief.
              </p>
            )}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} R&amp;A Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Legal Disclaimer</span>
            <span>Privacy</span>
            <span>ICSI Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}