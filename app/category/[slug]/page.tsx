import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { categories, getPostsByCategory, getCategoryBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: `${category.name} – Kinsfolk Mortgage LLC`,
    description: `Browse all ${category.name} articles from Kinsfolk Mortgage LLC.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const categoryPosts = getPostsByCategory(params.slug);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{category.name}</h1>
          <p className="text-white/70 text-lg">
            {categoryPosts.length} article{categoryPosts.length !== 1 ? "s" : ""} in this category
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50"
              >
                <div className="h-48 relative overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-primary to-primary-light flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.map((catSlug) => {
                      const cat = categories.find((c) => c.slug === catSlug);
                      return (
                        <span
                          key={catSlug}
                          className="text-xs font-semibold text-accent uppercase tracking-wider"
                        >
                          {cat?.name}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="font-bold text-primary leading-snug group-hover:text-primary-light transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-text-light">
                    <span>Chaunci Witherspoon</span>
                    <span>·</span>
                    <time>{post.date}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">What Are Your Goals?</h2>
          <p className="text-text-muted mb-6">
            Everyone is unique. Request your personalized rates and fees.
          </p>
          <Link
            href="/quote/"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-xl transition-colors shadow-lg shadow-accent/20 text-sm"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
