import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { galleryProjects } from "@/lib/content";
import { img } from "@/lib/images";

export function generateStaticParams() {
  return galleryProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = galleryProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — ELBGRÜN Referenzen (Demo)` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = galleryProjects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = galleryProjects[index];
  const image = img.gallery[index];

  return (
    <article>
      <div className="relative h-[60svh] min-h-[420px] w-full overflow-hidden bg-ink">
        <Image
          src={image.src}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-12 sm:px-8">
          <p className="eyebrow text-brass-light">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-medium text-paper sm:text-5xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-lg leading-relaxed text-stone">{project.description}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/#referenzen"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            ← Zurück zu allen Referenzen
          </a>
          <a
            href="/#kontakt"
            className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brass-light"
          >
            Ähnliches Projekt anfragen
          </a>
        </div>
      </div>
    </article>
  );
}
