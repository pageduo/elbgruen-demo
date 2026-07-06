"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { company, navSections } from "@/lib/content";

const primaryLinks = navSections.filter((s) =>
  ["start", "leistungen", "referenzen", "team", "kontakt"].includes(s.id)
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-paper/90 shadow-sm backdrop-blur-md"
            : "bg-gradient-to-b from-ink/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className={`font-display text-lg font-semibold tracking-wide transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            {company.name}
            <span className={scrolled ? "text-brass-dark" : "text-brass-light"}>.</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryLinks.map((section) => (
              <a
                key={section.id}
                href={`/#${section.id}`}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled ? "text-ink/80 hover:text-ink" : "text-paper/85 hover:text-paper"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={company.phoneHref}
              className={`hidden text-sm font-semibold tracking-wide sm:block ${
                scrolled ? "text-ink" : "text-paper"
              }`}
            >
              {company.phone}
            </a>
            <a
              href="/#kontakt"
              className="hidden rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-brass-light sm:block"
            >
              Kontakt aufnehmen
            </a>
            <button
              aria-label="Menü öffnen"
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
                scrolled ? "text-ink" : "text-paper"
              }`}
            >
              <span className="h-px w-6 bg-current" />
              <span className="h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-forest text-paper lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-lg font-semibold">{company.name}</span>
              <button
                aria-label="Menü schließen"
                onClick={() => setMenuOpen(false)}
                className="relative h-10 w-10"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper" />
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-paper" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {navSections.map((section, i) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`/#${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl font-medium text-paper/90 transition hover:text-brass-light"
                  >
                    <span className="mr-3 text-sm text-brass-light">{section.number}</span>
                    {section.label}
                  </a>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-2 px-8 pb-10 text-sm text-paper/70">
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
