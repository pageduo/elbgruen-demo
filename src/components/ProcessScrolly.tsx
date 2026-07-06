"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Reveal from "./Reveal";
import { processSteps } from "@/lib/content";
import { img } from "@/lib/images";

export default function ProcessScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(value * processSteps.length))
    );
    setActive(index);
  });

  return (
    <section id="ablauf" className="bg-forest">
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="eyebrow text-brass-light">// So arbeiten wir</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-paper sm:text-5xl">
            Vier Schritte zu Ihrem neuen Garten.
          </h2>
        </Reveal>
      </div>

      <div ref={containerRef} style={{ height: `${processSteps.length * 100}vh` }} className="relative mt-16">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-3xl lg:order-1">
              <AnimatePresence mode="sync">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={img.process[active]}
                    alt={processSteps[active].title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-4 py-1.5 font-display text-sm font-semibold text-ink">
                0{active + 1} / 0{processSteps.length}
              </div>
            </div>

            <div className="order-1 flex flex-col gap-1 lg:order-2">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className={`border-l-2 py-5 pl-6 transition-all duration-500 ${
                    active === i ? "border-brass" : "border-paper/15"
                  }`}
                >
                  <p
                    className={`eyebrow mb-2 transition-colors duration-500 ${
                      active === i ? "text-brass-light" : "text-paper/40"
                    }`}
                  >
                    Schritt 0{i + 1}
                  </p>
                  <h3
                    className={`font-display text-xl font-medium transition-colors duration-500 sm:text-2xl ${
                      active === i ? "text-paper" : "text-paper/40"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-2 max-w-md overflow-hidden text-sm leading-relaxed text-paper/70"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
