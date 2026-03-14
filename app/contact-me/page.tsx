import type { Metadata } from "next";
import Link from "next/link";
import MortgageForm from "@/components/MortgageForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Get in Touch — Kinsfolk Mortgage",
  description:
    "Have questions about buying a home or getting pre-qualified? Reach out to Chaunci Witherspoon at Kinsfolk Mortgage. Call (813) 638-0862 or send a message.",
};

export default function ContactMePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
          <div className="text-center mt-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let&apos;s Start a Conversation</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-sans">
              Whether you have a quick question or you&apos;re ready to get started, I&apos;m 
              here to help. Reach out however works best for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-primary mb-2">Office Location</h3>
                <p className="text-text-muted text-sm">
                  1936 Bruce B Downs Blvd Suite 442, Wesley Chapel, FL 33543
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-primary mb-2">Phone</h3>
                <a
                  href="tel:8136380862"
                  className="text-accent hover:text-accent-dark font-semibold transition-colors"
                >
                  (813) 638-0862
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-primary mb-2">Email</h3>
                <a
                  href="mailto:info@kinsfolkmortgage.com"
                  className="text-accent hover:text-accent-dark font-semibold transition-colors"
                >
                  info@kinsfolkmortgage.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <h2 className="text-2xl font-bold text-primary mb-2">Tell Me a Little About Your Situation</h2>
              <p className="text-text-muted text-sm mb-6">
                Answer a few quick questions and I&apos;ll follow up personally — usually within a few hours.
              </p>
              <MortgageForm />
              <div className="mt-6 text-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                >
                  Or go directly to the full quote form
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
