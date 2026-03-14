import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Homebuyer Learning Center",
  description:
    "Learn everything you need to know about buying a home. 27 educational articles covering mortgages, financing, and the homebuying process from Kinsfolk Mortgage.",
};

const learnPosts = posts.filter((p) => p.categories.includes("learn"));

const articleCategories = [
  { name: "Getting Started", image: "/images/shopping-home.jpg", range: [0, 5] as const },
  { name: "Finding a Home", image: "/images/modern-house-sunset.jpg", range: [6, 10] as const },
  { name: "Financing", image: "/images/underwriter-docs.jpg", range: [11, 16] as const },
  { name: "The Process", image: "/images/woman-calendar.jpg", range: [17, 21] as const },
  { name: "Market & Strategy", image: "/images/home-for-sale.jpg", range: [22, 26] as const },
];

export default function LearningCenterPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Learning Center</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Learn everything you need to know about buying a home. Please read through the articles
            below to help you learn more about the home buying process.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/a-step-by-step-guide-to-shopping-for-a-new-home/" className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group hover:shadow-xl transition-shadow">
            <div className="relative h-64 lg:h-full">
              <Image
                src="/images/excited-woman.jpg"
                alt="Happy homebuyer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider">
                Featured Article
              </span>
              <h2 className="text-2xl font-bold text-primary mt-2 mb-3 group-hover:text-accent transition-colors">
                A Step-by-Step Guide to Shopping for a New Home
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Whether this is your first or tenth home purchase, shopping for a new home is an
                exciting time. It can also be a complex process. This guide walks you through
                every step from pre-approval to closing day.
              </p>
              <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:text-accent-dark transition-colors">
                Read article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articleCategories.map((cat) => (
            <div key={cat.name} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">{cat.name}</h2>
                  <p className="text-sm text-text-muted">
                    {cat.range[1] - cat.range[0] + 1} articles
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {learnPosts.slice(cat.range[0], cat.range[1] + 1).map((post, idx) => (
                  <Link
                    key={post.slug}
                    href={`/${post.slug}/`}
                    className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-border/50 hover:border-accent/30"
                  >
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                        {cat.range[0] + idx + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-primary text-sm leading-snug group-hover:text-primary-light transition-colors">
                          {post.title}
                        </h3>
                        <span className="text-xs text-accent font-medium mt-1 inline-block">
                          Read article →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Put Your Knowledge to Work?
          </h2>
          <p className="text-white/70 mb-8">
            Request a free consultation to discuss your mortgage goals.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-xl transition-colors shadow-lg shadow-accent/20 text-sm"
          >
            Get Started
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
