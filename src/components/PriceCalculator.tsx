"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { pricingCalculator } from "@/lib/content";

const currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export default function PriceCalculator() {
  const [sizeIndex, setSizeIndex] = useState(1);
  const [serviceIndex, setServiceIndex] = useState(2);
  const [extras, setExtras] = useState<boolean[]>(
    pricingCalculator.extras.map(() => false)
  );

  const size = pricingCalculator.gardenSizes[sizeIndex];
  const service = pricingCalculator.services[serviceIndex];

  const total = useMemo(() => {
    const base = service.base * size.multiplier;
    const extraSum = pricingCalculator.extras.reduce(
      (sum, extra, i) => (extras[i] ? sum + extra.price : sum),
      0
    );
    return base + extraSum;
  }, [service, size, extras]);

  const lower = Math.round((total * 0.9) / 100) * 100;
  const upper = Math.round((total * 1.15) / 100) * 100;

  return (
    <section id="preise" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-light">// Preise & Konfigurator</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-paper sm:text-5xl">
            Verschaffen Sie sich in 60 Sekunden eine erste Kosteneinschätzung.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/60">
            Unverbindlich und ohne Anmeldung. Die finale Kalkulation erfolgt immer nach einem
            kostenfreien Vor-Ort-Termin.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="eyebrow mb-4 text-paper/50">Grundstücksgröße</h3>
              <div className="flex flex-wrap gap-3">
                {pricingCalculator.gardenSizes.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setSizeIndex(i)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                      sizeIndex === i
                        ? "border-brass bg-brass text-ink"
                        : "border-paper/20 text-paper/70 hover:border-brass"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-4 text-paper/50">Leistungspaket</h3>
              <div className="flex flex-col gap-3">
                {pricingCalculator.services.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setServiceIndex(i)}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-medium transition ${
                      serviceIndex === i
                        ? "border-brass bg-forest-light text-paper"
                        : "border-paper/15 text-paper/70 hover:border-brass"
                    }`}
                  >
                    {s.label}
                    <span className="text-paper/40">ab {currency.format(s.base)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-4 text-paper/50">Zusatzleistungen</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {pricingCalculator.extras.map((extra, i) => (
                  <label
                    key={extra.label}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border px-5 py-4 text-sm transition ${
                      extras[i]
                        ? "border-brass bg-forest-light text-paper"
                        : "border-paper/15 text-paper/70 hover:border-brass"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={extras[i]}
                        onChange={() =>
                          setExtras((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                        }
                        className="h-4 w-4 accent-brass"
                      />
                      {extra.label}
                    </span>
                    <span className="text-paper/40">+{currency.format(extra.price)}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-forest-light p-8 sm:p-10">
            <div>
              <p className="eyebrow text-brass-light">Ihre Richtpreis-Spanne</p>
              <p className="mt-4 font-display text-4xl font-medium text-paper sm:text-5xl">
                {currency.format(lower)}
                <span className="text-paper/40"> – </span>
                {currency.format(upper)}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paper/60">
                Unverbindliche Schätzung auf Basis von {size.label} und dem Paket „{service.label}“.
                Endpreise hängen von Bodenverhältnissen, Materialwahl und Zugänglichkeit ab.
              </p>
            </div>
            <a
              href="#kontakt"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-brass-light"
            >
              Unverbindliches Angebot anfragen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
