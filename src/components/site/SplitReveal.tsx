"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function SplitReveal({
  children,
  delay = 0,
  className,
  as: Tag = "h1",
}: {
  children: string;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        delay,
      },
    );
  }, [delay]);

  const words = children.split(" ");
  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-4 -mb-4 pr-3 -mr-3">
          <span data-word className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Comp>
  );
}