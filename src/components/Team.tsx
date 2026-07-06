import Image from "next/image";
import Reveal from "./Reveal";
import { team } from "@/lib/content";
import { img } from "@/lib/images";

export default function Team() {
  return (
    <section id="team" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-dark">// Das Team</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            Die Menschen hinter jedem Garten.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={img.team[i]}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-ink">{member.name}</h3>
              <p className="text-sm font-medium text-brass-dark">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
