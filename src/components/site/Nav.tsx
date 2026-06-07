import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";

const items = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/knowledge", label: "Knowledge" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group relative px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {it.label}
              <span className="pointer-events-none absolute left-4 right-4 -bottom-0.5 h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 border border-foreground bg-foreground text-background px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] hover:bg-background hover:text-foreground transition-colors"
          >
            Initiate Consultation
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm border-b border-border/50"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}