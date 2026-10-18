import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import DemoHinweis from "@/components/DemoHinweis";
import { PAGEDUO_URL } from "@/lib/pageduo";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | ELBGRÜN – Demo",
};

const knopf =
  "group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-ink";

function Pfeil() {
  return (
    <span aria-hidden className="transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

/*
 * Verantwortlich im Sinne der DSGVO ist, wer ueber die Verarbeitung
 * entscheidet - hier die Agentur, nicht der erfundene Betrieb. Der fruehere
 * Abschnitt zu Google Maps ist entfallen: Die Karte gibt es nicht mehr.
 */
export default function DatenschutzPage() {
  return (
    <>
      <LegalHero eyebrow="// Rechtliches" title="Datenschutzerklärung" />
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <DemoHinweis className="mb-10" />

        <div className="prose-legal flex flex-col gap-10 text-sm leading-relaxed text-stone">
          <section>
            <h2 className="mb-3 font-display text-xl font-medium text-ink">
              Formulare und Buchung
            </h2>
            <p>
              Formulare und Buchungsfunktionen dieser Demo sind deaktiviert. Es werden keine
              eingegebenen Daten übermittelt oder gespeichert. Für den technischen Betrieb dieser
              Website gilt die Datenschutzerklärung von PageDuo:
            </p>
            <a
              href={`${PAGEDUO_URL}/datenschutz`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${knopf} mt-6`}
            >
              Datenschutzerklärung von PageDuo
              <Pfeil />
            </a>
          </section>

          <section id="cookies" className="scroll-mt-28">
            <h2 className="mb-3 font-display text-xl font-medium text-ink">Cookies</h2>
            <p>
              Diese Demo setzt keine Cookies, bindet keine Karten ein und lädt beim Aufruf keine
              Inhalte von Drittanbietern. Der Hinweisbalken am
              unteren Rand ist eine Demo-Ansicht: Er zeigt, wie ein Einwilligungsbanner auf der
              fertigen Seite aussähe, und merkt sich lediglich im Browser, dass Sie ihn geschlossen
              haben.
            </p>
            <a
              href={`${PAGEDUO_URL}/cookies`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${knopf} mt-6`}
            >
              Cookie-Hinweise von PageDuo
              <Pfeil />
            </a>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium text-ink">Eingebundene Medien</h2>
            <p>
              Die Fotos dieser Demo stammen von Unsplash, werden aber nicht von dort nachgeladen:
              Sie laufen über den Bildserver dieser Website, Ihr Browser verbindet sich also mit
              keinem Drittanbieter. Für eine echte Kundenseite werden sie durch eigenes Material
              ersetzt.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
