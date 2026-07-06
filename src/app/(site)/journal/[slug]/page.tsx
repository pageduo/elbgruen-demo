import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content";
import { img } from "@/lib/images";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — ELBGRÜN Journal (Demo)` };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = blogPosts[index];

  return (
    <article className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="eyebrow text-brass-dark">// Journal</p>
        <h1 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-sm text-stone">
          {post.date} · {post.author} · {post.readingTime}
        </p>
      </div>

      <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-5xl overflow-hidden sm:rounded-3xl">
        <Image
          src={img.blog[index]}
          alt={post.title}
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-stone">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/#journal"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            ← Zurück zum Journal
          </a>
          <a
            href="/#kontakt"
            className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brass-light"
          >
            Beratung anfragen
          </a>
        </div>
      </div>
    </article>
  );
}
