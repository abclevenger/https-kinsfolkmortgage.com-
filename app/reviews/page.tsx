import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read reviews from real clients of Kinsfolk Mortgage LLC. See why families in Wesley Chapel, FL trust us for their mortgage needs. 4.9-star average rating.",
};

const reviews = [
  {
    name: "Michael T.",
    rating: 5,
    text: "Chaunci made the entire mortgage process seamless. As a first-time homebuyer, I had a lot of questions and he was always available to help. Highly recommend!",
    date: "2 months ago",
  },
  {
    name: "Sarah & James K.",
    rating: 5,
    text: "We refinanced our home with Kinsfolk Mortgage and saved hundreds on our monthly payment. The communication throughout the process was outstanding.",
    date: "3 months ago",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Professional, knowledgeable, and truly cares about his clients. Chaunci went above and beyond to find us the best rate. We couldn't be happier with our new home!",
    date: "4 months ago",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "From start to finish, the experience was incredible. Chaunci kept us informed every step of the way and made what could have been a stressful process feel easy.",
    date: "5 months ago",
  },
  {
    name: "Robert & Maria G.",
    rating: 5,
    text: "As veterans, we were looking for someone who understood VA loans. Chaunci was incredibly knowledgeable and helped us secure a fantastic rate with zero down.",
    date: "6 months ago",
  },
  {
    name: "Ashley P.",
    rating: 5,
    text: "I've worked with several loan officers in the past, but Chaunci is by far the best. He's responsive, transparent, and genuinely invested in his clients' success.",
    date: "7 months ago",
  },
];

const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    name: "Kinsfolk Mortgage LLC",
    url: "https://kinsfolkmortgage.com/",
    telephone: "+1-813-638-0862",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1936 Bruce B Downs Blvd Suite 442",
      addressLocality: "Wesley Chapel",
      addressRegion: "FL",
      postalCode: "33543",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: "5",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section className="bg-linear-to-br from-primary-dark via-primary to-primary-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
          <div className="text-center mt-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Client Reviews</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-sans">
              Our clients are the foundation of our success. Here&apos;s what they say about working with us.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Stars count={5} />
              <span className="text-accent font-bold font-sans">{avgRating}</span>
              <span className="text-white/70 text-sm font-sans">({reviews.length} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/happy-homebuyers.jpg"
                alt="Happy homebuyers celebrating their new home"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/closing-clients.jpg"
                alt="Clients celebrating home closing"
                width={600}
                height={400}
                className="w-full h-64 object-cover object-top"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Review Widget */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Verified Reviews</h2>
            <p className="text-text-muted font-sans">Real feedback from real clients, pulled live from our review profiles.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50">
            <script
              type="text/javascript"
              src="https://reputationhub.site/reputation/assets/review-widget.js"
              async
            />
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/9shGoauPfkjrIkIelST0"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: "100%", width: "100%" }}
              title="Kinsfolk Mortgage Client Reviews"
            />
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">More Client Stories</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={Math.min(i + 1, 4)}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 h-full flex flex-col">
                  <Stars count={review.rating} />
                  <p className="text-text-muted leading-relaxed mt-4 mb-6 text-sm flex-1 font-sans">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {review.name.split(" ")[0].charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm font-sans">{review.name}</p>
                      <p className="text-xs text-text-light font-sans">{review.date}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience CTA */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-border shadow-sm text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Enjoyed working with Chaunci?</h2>
              <p className="text-text-muted mb-8 font-sans max-w-xl mx-auto">
                Your feedback helps other families find a mortgage broker they can trust. Share your experience on your preferred platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://g.page/r/kinsfolkmortgage/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold rounded-lg transition-colors text-sm font-sans shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google Review
                </a>
                <a
                  href="https://www.yelp.com/writeareview/biz/kinsfolk-mortgage-wesley-chapel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D32323] hover:bg-[#B71C1C] text-white font-semibold rounded-lg transition-colors text-sm font-sans shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.16 12.594l-4.995 1.392c-.96.267-1.601 1.004-1.601 1.994v7.013c0 1.377 1.103 2.494 2.463 2.494h1.674c1.36 0 2.463-1.117 2.463-2.494V12.594zM12 2.494c1.36 0 2.463 1.117 2.463 2.494v9.596c0 .99-.641 1.727-1.601 1.994L8.337 16.474V4.988C8.337 3.611 9.44 2.494 10.8 2.494H12zM3.337 8.482v11.018c0 1.377 1.103 2.494 2.463 2.494h1.674c1.36 0 2.463-1.117 2.463-2.494V4.988c0-.99-.641-1.727-1.601-1.994L3.337 8.482z" />
                  </svg>
                  Yelp Review
                </a>
                <a
                  href="https://www.facebook.com/kinsfolkmortgage/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1877F2] hover:bg-[#0d65d9] text-white font-semibold rounded-lg transition-colors text-sm font-sans shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook Review
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Happy Clients?</h2>
          <p className="text-white/70 mb-8 font-sans">
            Get a free, no-obligation quote and see why our clients rate us {avgRating} out of 5 stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-colors shadow-lg shadow-accent/25 text-sm font-sans"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/mortgage-prequalified/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-sm font-sans"
            >
              Get Pre-Qualified
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
