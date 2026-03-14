import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { posts, getPostBySlug, categories } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} – Kinsfolk Mortgage LLC`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const postCategories = post.categories
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {postCategories.map((cat) => (
              <Link
                key={cat!.slug}
                href={`/category/${cat!.slug}/`}
                className="text-xs font-semibold text-accent uppercase tracking-wider hover:text-accent-light transition-colors"
              >
                {cat!.name}
              </Link>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Image
              src="/images/chaunci-thumb.png"
              alt="Chaunci Witherspoon"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>Chaunci Witherspoon</span>
            <span className="text-white/30">·</span>
            <time>{post.date}</time>
          </div>
        </div>
      </section>

      {post.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={500}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      )}

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_h2]:text-primary [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3">
            <p className="text-lg text-text-dark leading-relaxed">{post.excerpt}</p>
            <p>
              For personalized advice on this topic and how it relates to your mortgage journey,
              don&apos;t hesitate to reach out. Every situation is unique, and we&apos;re here to
              help you navigate the process with confidence.
            </p>
          </div>

          <div className="mt-12 p-8 bg-bg-light rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/chaunci.png"
                alt="Chaunci Witherspoon"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-primary">Chaunci Witherspoon</h3>
                <p className="text-sm text-text-muted">Owner / Mortgage Broker · NMLS# 1703351</p>
              </div>
            </div>
            <p className="text-text-muted text-sm mb-4">
              Have questions? I&apos;m here to help you navigate your mortgage journey with
              personalized support every step of the way.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote/"
                className="inline-flex items-center px-6 py-2.5 bg-accent hover:bg-accent-dark text-primary-dark font-semibold text-sm rounded-xl transition-colors"
              >
                Request A Quote
              </Link>
              <a
                href="tel:8136380862"
                className="inline-flex items-center px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm rounded-xl transition-colors"
              >
                (813) 638-0862
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Continue Learning
          </h2>
          <p className="text-text-muted mb-6">
            Explore more educational articles in our Learning Center.
          </p>
          <Link
            href="/learning-center/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors text-sm"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
