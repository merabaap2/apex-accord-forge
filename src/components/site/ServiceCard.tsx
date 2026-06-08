import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/services";

const categoryColors: Record<ServiceCategory, string> = {
  "Corporate Secretarial": "bg-blue-50 text-blue-700 border-blue-200",
  "Investments": "bg-amber-50 text-amber-700 border-amber-200",
  "Legal Representation": "bg-slate-100 text-slate-600 border-slate-200",
};

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
  category,
}: {
  icon: LucideIcon;
  title: string;
  desc?: string;
  index?: number;
  category?: ServiceCategory;
}) {
  return (
    <div className="group relative bg-card border border-border p-7 transition-all duration-500 hover:border-accent hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(43,74,158,0.15)] flex flex-col h-full">
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <Icon
            className="h-7 w-7 text-accent transition-all duration-500 group-hover:scale-110 group-hover:text-primary shrink-0"
            strokeWidth={1.25}
          />
          {index !== undefined && (
            <span className="text-[11px] font-mono text-muted-foreground/50 tracking-widest select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <ArrowUpRight
          className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <h3 className="text-base font-medium leading-snug text-balance mb-3">{title}</h3>
      {desc && (
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
      )}

      {/* Category badge */}
      {category && (
        <div className="mt-5 pt-4 border-t border-border/50">
          <span
            className={`inline-block text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 border rounded-sm font-medium ${categoryColors[category]}`}
          >
            {category}
          </span>
        </div>
      )}

      {/* Hover bottom line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </div>
  );
}