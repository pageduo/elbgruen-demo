"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { locations } from "@/lib/content";
import { img } from "@/lib/images";

export default function LocationsMap() {
  const [active, setActive] = useState(0);
  const current = locations[active];

  return (
    <section id="standorte" className="bg-forest py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-light">// Einzugsgebiet</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-paper sm:text-5xl">
            Zuhause in Hamburg — im Einsatz in der ganzen Region.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-forest-light">
            <AnimatePresence mode="sync">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={img.locations[active]}
                  alt={current.name}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div>
                <span className="eyebrow text-brass-light">{current.area}</span>
                <p className="mt-1 font-display text-xl font-medium text-paper">{current.name}</p>
              </div>
              {current.isMain && (
                <span className="shrink-0 rounded-full bg-brass px-3 py-1 text-xs font-semibold text-ink">
                  Hauptsitz
                </span>
              )}
            </div>

            <div className="absolute right-6 top-6 flex gap-2">
              {locations.map((loc, i) => (
                <button
                  key={loc.name}
                  onClick={() => setActive(i)}
                  aria-label={loc.name}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-7 bg-brass" : "w-2.5 bg-paper/50 hover:bg-paper/80"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              {locations.map((loc, i) => (
                <button
                  key={loc.name}
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                    active === i
                      ? "border-brass bg-forest-light"
                      : "border-paper/10 hover:border-paper/30"
                  }`}
                >
                  <span>
                    <span className="block font-display text-base font-medium text-paper">
                      {loc.name}
                    </span>
                    <span className="text-xs text-paper/50">{loc.area}</span>
                  </span>
                  {loc.isMain && (
                    <span className="rounded-full bg-brass px-3 py-1 text-xs font-semibold text-ink">
                      Hauptsitz
                    </span>
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={current.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-6 text-sm leading-relaxed text-paper/60"
              >
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
