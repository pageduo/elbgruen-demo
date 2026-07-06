"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/lib/content";

export default function SectionNav() {
  const [active, setActive] = useState(navSections[0].id);

  useEffect(() => {
    const elements = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Seitennavigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {navSections.map((section) => {
        const isActive = section.id === active;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`whitespace-nowrap font-display text-xs tracking-wide transition-all duration-300 ${
                isActive
                  ? "translate-x-0 opacity-100 text-ink"
                  : "pointer-events-none translate-x-2 opacity-0 text-stone group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {section.number} — {section.label}
            </span>
            <span
              className={`h-2 w-2 rounded-full border transition-all duration-300 ${
                isActive
                  ? "scale-125 border-brass bg-brass"
                  : "border-stone/50 bg-transparent group-hover:border-brass"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
