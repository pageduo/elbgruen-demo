import Image from "next/image";
import Reveal from "./Reveal";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

export default function Services() {
  return (
    <section id="leistungen" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-dark">// Leistungen</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            Ein Team, alle Gewerke, von der Idee bis zur letzten Pflanze.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-mist sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.key} delay={i * 0.06} className="group relative bg-paper">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={img.services[service.key]}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/10 transition group-hover:bg-ink/0" />
              </div>
              <div className="flex h-full flex-col gap-3 p-7">
                <span className="eyebrow text-stone">0{i + 1}</span>
                <h3 className="font-display text-xl font-medium text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-stone">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
