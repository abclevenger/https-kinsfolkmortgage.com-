import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts, categories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Mortgage Blog & Resources",
  description:
    "Mortgage tips, homebuying guides, and market insights from Kinsfolk Mortgage LLC. Expert articles for first-time buyers, refinancers, and real estate investors.",
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            The Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            All Things Mortgage: Insights, Trends, and Resources
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our blog articles are geared towards first-time home buyers and mortgage market news.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-bg-light border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}/`}
                className="px-4 py-1.5 bg-white text-text-muted text-xs font-semibold uppercase tracking-wider rounded-full border border-border/50 hover:border-accent/50 hover:text-accent transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => {
              const postCategories = post.categories
                .map((slug) => categories.find((c) => c.slug === slug))
                .filter(Boolean);

              return (
                <Link
                  key={post.slug}
                  href={`/${post.slug}/`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg hover:border-accent/30 transition-all duration-200 group"
                >
                  <div className="aspect-[16/10] bg-primary/5 relative overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-primary/20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    {postCategories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {postCategories.map((cat) => (
                          <span
                            key={cat!.slug}
                            className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded"
                          >
                            {cat!.name}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-2">{post.excerpt}</p>
                    <p className="text-text-light text-xs mt-3">{post.date}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-muted text-lg mb-4">
            What are your goals? Everyone is unique, request your personalized rates and fees.
          </p>
          <Link
            href="/quote/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-200"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
