import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="flex h-10 w-10 items-center justify-center border border-foreground/20 group-hover:border-foreground transition-colors">
        <span className="font-display text-base font-semibold tracking-tight">ra</span>
      </div>
      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Celebrating</span>
        <span className="text-sm font-semibold tracking-tight">30 Years · 1996–2026</span>
      </div>
    </Link>
  );
}