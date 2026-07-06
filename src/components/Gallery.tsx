"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { galleryFilters, galleryProjects } from "@/lib/content";
import { img } from "@/lib/images";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("Alle");

  const items = useMemo(
    () =>
      galleryProjects.map((project, i) => ({ ...project, ...img.gallery[i] })),
    []
  );

  const filtered = filter === "Alle" ? items : items.filter((i) => i.category === filter);

  return (
    <section id="referenzen" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-dark">// Referenzen</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            Ausgewählte Projekte aus Hamburg und Umgebung.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                filter === f
                  ? "border-forest bg-forest text-paper"
                  : "border-ink/15 text-ink/70 hover:border-forest hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Link
                  href={`/referenzen/${item.slug}`}
                  data-cursor="Projekt ansehen"
                  className="absolute inset-0 block cursor-none"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 transition group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="eyebrow text-brass-light">
                      {item.category} · {item.year}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-medium text-paper">{item.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
