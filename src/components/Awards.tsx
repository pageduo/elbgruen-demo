import Reveal from "./Reveal";
import { awards } from "@/lib/content";

export default function Awards() {
  return (
    <section id="auszeichnungen" className="bg-forest py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-10 text-brass-light">// Auszeichnungen & Mitgliedschaften</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, i) => (
            <Reveal
              key={award.label}
              delay={i * 0.06}
              className="flex flex-col gap-2 bg-forest px-6 py-8"
            >
              <span className="font-display text-base font-medium leading-snug text-paper">
                {award.label}
              </span>
              <span className="text-xs uppercase tracking-wide text-brass-light">
                {award.detail}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
