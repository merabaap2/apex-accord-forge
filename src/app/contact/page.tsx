"use client";

import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-32 lg:pt-40 pb-24 mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">— Initiate Consultation</p>
        <h1 className="font-display text-5xl lg:text-8xl leading-[1] text-balance max-w-4xl">
          A first conversation, <span className="italic text-foreground/70">in confidence.</span>
        </h1>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 space-y-8"
          >
            {[
              { id: "name", label: "Your name" },
              { id: "email", label: "Email", type: "email" },
              { id: "company", label: "Company" },
            ].map((f) => (
              <div key={f.id} className="border-b border-border focus-within:border-foreground transition-colors">
                <label htmlFor={f.id} className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type ?? "text"}
                  required
                  className="w-full bg-transparent py-3 text-base focus:outline-none"
                />
              </div>
            ))}
            <div className="border-b border-border focus-within:border-foreground transition-colors">
              <label htmlFor="msg" className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Briefly, the matter
              </label>
              <textarea id="msg" rows={4} required className="w-full bg-transparent py-3 text-base focus:outline-none resize-none" />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all"
            >
              {sent ? <>Received <Check className="h-4 w-4" /></> : <>Send Enquiry <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          <aside className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12 space-y-10">
            {[
              { city: "Hyderabad", phone: "+91 40 4030 0300", email: "hyderabad@rna-cs.com" },
              { city: "Gurgaon", phone: "+91 124 4789 100", email: "gurgaon@rna-cs.com" },
              { city: "Mumbai", phone: "+91 22 2800 1100", email: "mumbai@rna-cs.com" },
              { city: "Chennai", phone: "+91 44 4232 1100", email: "chennai@rna-cs.com" },
            ].map((o) => (
              <div key={o.city}>
                <p className="font-display text-2xl">{o.city}</p>
                <p className="mt-2 text-sm text-muted-foreground">{o.phone}</p>
                <p className="text-sm text-muted-foreground">{o.email}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
