import Reveal from "./Reveal";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { beforeAfterProject } from "@/lib/content";
import { img } from "@/lib/images";

export default function BeforeAfter() {
  return (
    <section id="verwandlung" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-dark">// Die Verwandlung</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            Ziehen Sie den Regler und sehen Sie, was möglich ist.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <BeforeAfterSlider
            before={img.beforeAfter.before}
            after={img.beforeAfter.after}
            beforeAlt={`${beforeAfterProject.title} vor der Umgestaltung`}
            afterAlt={`${beforeAfterProject.title} nach der Umgestaltung`}
          />
          <div>
            <h3 className="font-display text-2xl font-medium text-ink">{beforeAfterProject.title}</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-stone">
              {beforeAfterProject.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
