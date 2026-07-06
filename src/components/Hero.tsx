"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { company } from "@/lib/content";
import { img } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <Image
        src={img.hero}
        alt="Abendliche Gartenlounge mit Natursteinmauer und Pergola"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-5 text-brass-light"
        >
          Hamburg · seit {company.founded}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="max-w-3xl font-display text-4xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
        >
          {company.claim}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg"
        >
          {company.subline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#referenzen"
            className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-brass-light"
          >
            Projekte entdecken
          </a>
          <a
            href="#kontakt"
            className="rounded-full border border-paper/40 px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-paper/10"
          >
            Beratung anfragen
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#leistungen"
        aria-label="Zum nächsten Abschnitt scrollen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-5 z-10 flex flex-col items-center gap-2 text-paper/70 sm:right-8"
      >
        <span className="eyebrow [writing-mode:vertical-lr]">Scrollen</span>
        <span className="h-12 w-px animate-pulse bg-paper/50" />
      </motion.a>
    </section>
  );
}
