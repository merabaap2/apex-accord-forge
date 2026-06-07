import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc?: string;
}) {
  return (
    <div className="group relative bg-card border border-border p-7 transition-all duration-500 hover:border-foreground hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,19,43,0.25)]">
      <div className="flex items-start justify-between mb-10">
        <Icon
          className="h-7 w-7 text-foreground transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.25}
        />
        <ArrowUpRight
          className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-base font-medium leading-snug text-balance">{title}</h3>
      {desc && (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </div>
  );
}