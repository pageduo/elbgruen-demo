import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { blogPosts } from "@/lib/content";
import { img } from "@/lib/images";

export default function Blog() {
  return (
    <section id="journal" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-brass-dark">// Journal</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            Gedanken, Trends und Pflegetipps aus dem Atelier.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={img.blog[i]}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-wide text-stone">{post.date}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink transition group-hover:text-brass-dark">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
