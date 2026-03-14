"use client";

import Link from "next/link";
import { useState } from "react";
import type { GeoPage } from "@/lib/geo-pages";
import { geoPages } from "@/lib/geo-pages";
import Breadcrumbs from "./Breadcrumbs";
import ScrollReveal from "./ScrollReveal";
import FAQSection from "./FAQSection";
import ProcessSteps from "./ProcessSteps";
import LeadForm from "./LeadForm";
import MortgagePaymentCalculator from "./calculators/MortgagePaymentCalculator";

interface Props {
  page: GeoPage;
}

export default function GeoLandingPage({ page }: Props) {
  const otherGeoPages = geoPages.filter((p) => p.slug !== page.slug);
  const [showCalcQuote, setShowCalcQuote] = useState(false);
  const [calcData, setCalcData] = useState<Record<string, string>>({});

  function handleCalcQuote(data: Record<string, string>) {
    setCalcData(data);
    setShowCalcQuote(true);
    setTimeout(() => {
      document.getElementById("calc-quote")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    name: "Kinsfolk Mortgage LLC",
    url: "https://kinsfolkmortgage.com/",
    telephone: "+1-813-638-0862",
    email: "info@kinsfolkmortgage.com",
    image: "https://kinsfolkmortgage.com/images/logo.png",
    priceRange: "$$",
    identifier: { "@type": "PropertyValue", name: "NMLS", value: "2610890" },
    knowsAbout: "Equal Housing Opportunity",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1936 Bruce B Downs Blvd Suite 442",
      addressLocality: "Wesley Chapel",
      addressRegion: "FL",
      postalCode: "33543",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.2397,
      longitude: -82.3275,
    },
    areaServed: [
      ...geoPages.map((g) => ({
        "@type": g.city === "Pasco County" ? "AdministrativeArea" : "City",
        name: `${g.city}, ${g.state}`,
      })),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mortgage Services",
      itemListElement: page.loanPrograms.map((lp) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: lp.title, description: lp.description },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light/30 py-20 lg:py-28 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.city }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 font-sans">
                {page.region}, {page.state} — NMLS# 2610890
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                {page.heroHeadline}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 font-sans">
                {page.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all shadow-xl shadow-accent/25 text-sm font-sans"
                >
                  Get Your Free Quote
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:8136380862"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all text-sm font-sans"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (813) 638-0862
                </a>
              </div>
              <div className="flex items-center gap-5 mt-6 text-white/40 text-xs font-sans">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  4.9 Average Rating
                </span>
                <span>500+ Families Helped</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-white font-bold text-lg mb-1 font-sans">Get Pre-Qualified Today</h2>
                <p className="text-white/50 text-sm mb-4 font-sans">No commitment. No obligation. Fast response.</p>
                <LeadForm formName={`Geo - ${page.city}`} buttonText="Get Pre-Qualified" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Stats Bar */}
      <section className="bg-primary-dark py-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {[
              { label: "Median Price", value: page.housingStats.medianPrice },
              { label: "Price Range", value: page.housingStats.priceRange },
              { label: "Avg Days on Market", value: page.housingStats.avgDaysOnMarket },
              { label: "YoY Appreciation", value: page.housingStats.yearOverYearAppreciation },
              { label: "Median Income", value: page.housingStats.medianHouseholdIncome },
              { label: "Population", value: page.housingStats.population },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-accent font-bold text-lg sm:text-xl">{stat.value}</p>
                <p className="text-white/40 text-xs mt-0.5 font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Content + Sidebar */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  Mortgage Services in {page.city}
                </h2>
                {page.intro.map((p, i) => (
                  <p key={i} className="text-text-muted leading-relaxed mb-4 font-sans">{p}</p>
                ))}
              </ScrollReveal>

              {/* Market Overview */}
              <ScrollReveal>
                <h2 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">
                  {page.city} Housing Market Overview
                </h2>
                {page.marketOverview.map((p, i) => (
                  <p key={i} className="text-text-muted leading-relaxed mb-4 font-sans">{p}</p>
                ))}
              </ScrollReveal>

              {/* Why Us */}
              <ScrollReveal>
                <div className="mt-8 bg-bg-light rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-primary mb-3 font-sans">Why {page.city} Clients Choose Kinsfolk Mortgage</h3>
                  <ul className="space-y-2">
                    {page.whyUs.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-muted font-sans">
                        <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={2}>
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm sticky top-24 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3 font-sans">Quick Links</h3>
                    <ul className="space-y-2 text-sm font-sans">
                      <li><Link href="/mortgage-calculator/" className="text-accent hover:text-accent-dark hover:underline">Mortgage Calculator</Link></li>
                      <li><Link href="/mortgage-prequalified/" className="text-accent hover:text-accent-dark hover:underline">Get Pre-Qualified</Link></li>
                      <li><Link href="/loan-options/" className="text-accent hover:text-accent-dark hover:underline">View All Loan Programs</Link></li>
                      <li><Link href="/fha-loans/" className="text-accent hover:text-accent-dark hover:underline">FHA Loans</Link></li>
                      <li><Link href="/va-loans/" className="text-accent hover:text-accent-dark hover:underline">VA Loans</Link></li>
                      <li><Link href="/conventional-loans/" className="text-accent hover:text-accent-dark hover:underline">Conventional Loans</Link></li>
                      <li><Link href="/mortgage-process/" className="text-accent hover:text-accent-dark hover:underline">Mortgage Process Guide</Link></li>
                      <li><Link href="/faq/" className="text-accent hover:text-accent-dark hover:underline">Mortgage FAQ</Link></li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="text-sm font-bold text-primary mb-2 font-sans">{page.city} at a Glance</h3>
                    <dl className="space-y-1.5 text-xs font-sans">
                      <div className="flex justify-between"><dt className="text-text-muted">Median Price</dt><dd className="font-semibold text-primary">{page.housingStats.medianPrice}</dd></div>
                      <div className="flex justify-between"><dt className="text-text-muted">Days on Market</dt><dd className="font-semibold text-primary">{page.housingStats.avgDaysOnMarket}</dd></div>
                      <div className="flex justify-between"><dt className="text-text-muted">Appreciation</dt><dd className="font-semibold text-success">{page.housingStats.yearOverYearAppreciation}</dd></div>
                      <div className="flex justify-between"><dt className="text-text-muted">Population</dt><dd className="font-semibold text-primary">{page.housingStats.population}</dd></div>
                    </dl>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">{page.city} Neighborhoods & Communities</h2>
            <p className="text-text-muted mb-8 max-w-3xl font-sans">{page.areaDescription}</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.neighborhoods.map((n, i) => (
              <ScrollReveal key={n.name} delay={Math.min(i % 4 + 1, 4)}>
                <div className="bg-white rounded-xl p-5 border border-border hover:border-accent/40 hover:shadow-md transition-all h-full">
                  <h3 className="font-bold text-primary text-sm font-sans">{n.name}</h3>
                  <p className="text-accent text-xs font-semibold mt-1 font-sans">{n.priceRange}</p>
                  <p className="text-text-muted text-xs mt-2 leading-relaxed font-sans">{n.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Client Stories</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-2 mb-8">What {page.city} Clients Say</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {page.testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={Math.min(i + 1, 3)}>
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed flex-1 font-sans">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-semibold text-primary text-sm font-sans">{t.name}</p>
                    <p className="text-text-light text-xs font-sans">{t.type}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/reviews/" className="text-accent hover:text-accent-dark text-sm font-semibold font-sans">
              Read all client reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Loan Programs */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              {page.city} Mortgage Programs
            </h2>
            <p className="text-text-muted mb-8 max-w-2xl font-sans">
              We offer a full range of loan programs to serve {page.city} homebuyers and homeowners at every price point.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.loanPrograms.map((lp) => (
              <ScrollReveal key={lp.title}>
                <Link
                  href={lp.href}
                  className="block p-5 bg-white rounded-xl border border-border hover:border-accent/40 hover:shadow-lg transition-all group h-full"
                >
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors font-sans">{lp.title}</h3>
                  <p className="text-text-muted text-sm mt-2 leading-relaxed font-sans">{lp.description}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3 font-sans group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              {page.city} Mortgage Calculator
            </h2>
            <p className="text-text-muted mb-8 max-w-2xl font-sans">
              Estimate your monthly payment for a {page.city} home. The median price is {page.housingStats.medianPrice} — try it below.
            </p>
          </ScrollReveal>
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
              <MortgagePaymentCalculator onGetQuote={handleCalcQuote} />
            </div>
            {showCalcQuote && (
              <div id="calc-quote" className="mt-6 bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-1 font-sans">Get a Personalized {page.city} Rate</h3>
                <p className="text-text-muted text-sm mb-4 font-sans">Your calculator results have been captured. Fill in your info for a personalized quote.</p>
                <LeadForm formName={`Geo Calculator - ${page.city}`} buttonText="Get My Rate" extraData={calcData} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            title={`The ${page.city} Home Loan Process`}
            subtitle="From pre-qualification to closing, we guide you through every step."
          />
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Get Started in {page.city}?
          </h2>
          <p className="text-white/70 mb-8 font-sans">
            Get a free, no-obligation quote and discover the best mortgage options for your {page.city} home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote/" className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-colors shadow-xl shadow-accent/25 text-sm font-sans">
              Request A Free Quote
            </Link>
            <Link href="/mortgage-prequalified/" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-sm font-sans">
              Get Pre-Qualified
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={page.localFaq}
              title={`${page.city} Mortgage FAQ`}
              subtitle={`Common questions about buying or refinancing a home in ${page.city}.`}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Form (full width) */}
      <section className="py-16 bg-bg-light" id="get-quote">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Get Your {page.city} Mortgage Quote</h2>
            <p className="text-text-muted font-sans">
              Tell us about your goals and we&apos;ll connect you with the best loan options for {page.city}. No commitment required.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
            <LeadForm formName={`Geo Quote - ${page.city}`} buttonText="Get My Free Quote" showLoanGoal showMessage />
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-primary mb-4 font-sans">Other Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {otherGeoPages.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}/`}
                className="text-sm text-accent hover:text-accent-dark hover:underline px-3 py-1.5 bg-bg-light rounded-full font-sans"
              >
                {p.city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
