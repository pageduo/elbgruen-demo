import Image from "next/image";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import MapEmbed from "./MapEmbed";
import { company } from "@/lib/content";
import { img } from "@/lib/images";

export default function AboutContact() {
  return (
    <section id="kontakt" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-dark">// Über uns & Kontakt</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            {company.fullName} — seit {company.founded} in Hamburg verwurzelt.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={img.about}
                alt="Üppig bepflanztes Gewächshaus im ELBGRÜN Atelier"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-base leading-relaxed text-stone">
              {company.usp} Was {company.founded} als kleines Ein-Mann-Atelier an der Elbchaussee
              begann, ist heute ein 14-köpfiges Team aus Landschaftsarchitekt:innen,
              Gärtner:innen und Handwerker:innen. Geblieben ist der Anspruch: jeder Garten soll
              wirken, als hätte es ihn schon immer gegeben.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-2 text-stone">Adresse</p>
                <p className="text-sm leading-relaxed text-ink">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2 text-stone">Kontakt</p>
                <p className="text-sm leading-relaxed text-ink">
                  <a href={company.phoneHref} className="block hover:text-brass-dark">
                    {company.phone}
                  </a>
                  <a href={`mailto:${company.email}`} className="block hover:text-brass-dark">
                    {company.email}
                  </a>
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="eyebrow mb-2 text-stone">Öffnungszeiten</p>
                <ul className="text-sm leading-relaxed text-ink">
                  {company.hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-ink/10 py-1.5">
                      <span className="text-stone">{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-3 text-stone">Anfahrt</p>
              <MapEmbed />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
