import Link from "next/link";
import Image from "next/image";
import MortgageForm from "@/components/MortgageForm";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

const testimonials = [
  {
    name: "Maria S.",
    text: "I was so nervous about buying my first home — I didn't even know where to start. Chaunci sat down with me and explained everything in plain English. He never rushed me, and I always felt like I could call with questions.",
    role: "First-Time Home Buyer",
  },
  {
    name: "James & Lisa R.",
    text: "We'd been putting off refinancing because the paperwork seemed overwhelming. Chaunci walked us through the whole thing and handled most of the heavy lifting. We ended up saving over $400 a month.",
    role: "Refinance Client",
  },
  {
    name: "David T.",
    text: "What stood out was how much Chaunci actually listened. He didn't try to push us into something — he helped us figure out what made sense for our family. That kind of honesty is rare.",
    role: "Home Purchase Client",
  },
];

const loanTypes = [
  { title: "Conventional", href: "/conventional-loans/", desc: "A solid option if you have good credit and some money saved", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { title: "FHA", href: "/fha-loans/", desc: "Great for first-time buyers — lower down payment, easier to qualify", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "VA", href: "/va-loans/", desc: "If you've served, you may qualify with zero down", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
  { title: "USDA", href: "/loan-options/", desc: "No money down for homes in eligible areas", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Jumbo", href: "/loan-options/", desc: "For homes above standard loan limits", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "Refinance", href: "/loan-options/", desc: "Already own a home? Let's see if we can improve your rate", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

const homeFaq = [
  { question: "How do I get pre-approved for a mortgage in Wesley Chapel?", answer: "The best starting point is a quick conversation. You can fill out the short questionnaire on this page or just give me a call. I'll review your income, credit, and goals, then walk you through what you may qualify for. Pre-qualification can happen in as little as 24 hours — no commitment required." },
  { question: "How long does it take to close on a home loan in Florida?", answer: "From application to closing, most loans take about 30-45 days. The very first step — getting pre-qualified — can happen in as little as 24 hours. That gives you a clear picture of what you can afford before you start shopping for homes in Wesley Chapel or the Tampa Bay area." },
  { question: "What credit score do I need to buy a home in Florida?", answer: "It depends on the loan type. FHA loans work with credit scores as low as 580, conventional loans typically require 620+, and VA loans have flexible requirements. I'll look at your full picture — not just one number — and help you find the right program." },
  { question: "How much do I need for a down payment on a house?", answer: "Less than you might think. VA and USDA loans offer zero down payment. Conventional loans start at just 3%, and FHA loans at 3.5%. Florida also has down payment assistance programs like Hometown Heroes. I'll go over every option so there are no surprises." },
  { question: "What types of home loans does Kinsfolk Mortgage offer?", answer: "We offer conventional, FHA, VA, USDA, jumbo, and refinance loans. Each works differently depending on your credit, income, and goals. As your Wesley Chapel mortgage broker, I'll help you compare programs side by side and find the best fit for your situation." },
  { question: "Do I need a mortgage broker, or should I go directly to a bank?", answer: "A mortgage broker shops multiple lenders on your behalf — so you get more options and often better rates than going to a single bank. I work for you, not the lender, which means my goal is finding the loan that makes the most sense for your situation." },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "MortgageBroker",
  name: "Kinsfolk Mortgage LLC",
  image: "https://kinsfolkmortgage.com/images/logo.png",
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
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "127",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.text,
  })),
  areaServed: [
    { "@type": "City", name: "Wesley Chapel, FL" },
    { "@type": "City", name: "Tampa, FL" },
    { "@type": "City", name: "Lutz, FL" },
    { "@type": "City", name: "New Tampa, FL" },
    { "@type": "City", name: "Land O' Lakes, FL" },
    { "@type": "AdministrativeArea", name: "Pasco County, FL" },
    { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
  ],
  priceRange: "$$",
  knowsAbout: [
    "Mortgage Pre-Approval",
    "FHA Loans",
    "VA Loans",
    "Conventional Loans",
    "USDA Loans",
    "Refinancing",
    "First-Time Homebuyer Programs",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/40" />
        <div className="hero-grid absolute inset-0 opacity-[0.03]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                Wesley Chapel, FL Mortgage Broker — NMLS# 2610890
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
                Your Wesley Chapel{" "}
                <span className="text-gradient">Mortgage Broker</span>{" "}
                — Making Home Loans Simple
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl font-sans">
                The mortgage process can feel overwhelming — especially if it&apos;s your first time. 
                I&apos;m here to walk you through it step by step, explain everything in plain 
                language, and help you feel confident about one of the biggest decisions of your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-xl shadow-accent/25 text-sm active:scale-95"
                >
                  See What You Qualify For
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/mortgage-prequalified/"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  Start a Conversation
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-white/40 text-xs font-sans">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  4.9 Average Rating
                </span>
                <span>500+ Families Helped</span>
                <span>NMLS# 2610890</span>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <Image
                    src="/images/chaunci.png"
                    alt="Chaunci Witherspoon, mortgage broker in Wesley Chapel, FL — Kinsfolk Mortgage"
                    width={72}
                    height={72}
                    className="w-[72px] h-[72px] rounded-full border-2 border-accent mx-auto mb-3 object-cover"
                    loading="eager"
                    sizes="72px"
                  />
                  <p className="text-white font-bold text-lg font-sans">Chaunci Witherspoon</p>
                  <p className="text-white/50 text-sm font-sans">Owner / Mortgage Broker</p>
                  <p className="text-accent text-xs font-mono mt-1">NMLS# 1703351</p>
                </div>
                <div className="space-y-2 font-sans">
                  <a href="tel:8136380862" className="flex items-center gap-3 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white/80 text-sm">(813) 638-0862</span>
                  </a>
                  <a href="mailto:info@kinsfolkmortgage.com" className="flex items-center gap-3 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white/80 text-sm">info@kinsfolkmortgage.com</span>
                  </a>
                  <a href="https://kinsfolkmortgage.my1003app.com/1703351/register" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2.5 bg-accent/20 hover:bg-accent/30 text-accent font-semibold text-sm rounded-lg transition-colors mt-3">
                    Apply Online →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Loan Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Loan Options</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">
                Home Loan Options in Wesley Chapel, FL
              </h2>
              <p className="text-text-muted mt-3 max-w-2xl mx-auto font-sans">
                There are a lot of loan types out there, and they all work a little differently.
                Here&apos;s a quick overview — or <Link href="/loan-options/" className="text-accent hover:text-accent-dark underline">explore all mortgage loan options</Link> in detail.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanTypes.map((loan, i) => (
              <ScrollReveal key={loan.title} delay={Math.min(i + 1, 4)}>
                <Link
                  href={loan.href}
                  className="block p-6 bg-white rounded-xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-3 transition-colors duration-300">
                    <svg className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={loan.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors font-sans">
                    {loan.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-1 font-sans">{loan.desc}</p>
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

      {/* Process */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            title="Here's What the Process Looks Like"
            subtitle="It's simpler than you think. I'll be with you at every step — answering questions, handling paperwork, and making sure nothing falls through the cracks."
          />
          <div className="text-center mt-10">
            <Link href="/mortgage-process/" className="text-accent hover:text-accent-dark font-semibold text-sm font-sans underline">
              Read the full home loan process guide →
            </Link>
          </div>
        </div>
      </section>

      {/* About / Welcome */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Meet Chaunci</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6 leading-tight">
                  A Mortgage Broker Who Takes the Time to Explain Things
                </h2>
                <p className="text-text-muted leading-relaxed mb-4 font-sans">
                  A lot of people tell me the same thing: &ldquo;I didn&apos;t even know what questions 
                  to ask.&rdquo; That&apos;s exactly why I do what I do. I sit down with every client, 
                  explain how the{" "}
                  <Link href="/mortgage-process/" className="text-accent hover:text-accent-dark underline">mortgage process</Link>
                  {" "}works, go over the paperwork together, and make sure you 
                  understand every step before we move forward.
                </p>
                <p className="text-text-muted leading-relaxed mb-4 font-sans">
                  Buying a home is personal. You deserve someone who treats it that way — not a 
                  call center or a chatbot, but a real person who picks up the phone and knows your name.
                </p>
                <p className="text-text-muted leading-relaxed mb-8 font-sans">
                  Whether you&apos;re a{" "}
                  <Link href="/first-time-home-buyer/" className="text-accent hover:text-accent-dark underline">first-time homebuyer</Link>
                  , looking into{" "}
                  <Link href="/fha-loans/" className="text-accent hover:text-accent-dark underline">FHA loans</Link>
                  {" "}or{" "}
                  <Link href="/va-loans/" className="text-accent hover:text-accent-dark underline">VA loans</Link>
                  , or ready to{" "}
                  <Link href="/mortgage-prequalified/" className="text-accent hover:text-accent-dark underline">get pre-qualified</Link>
                  , I&apos;ll walk you through every option.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/chaunci-witherspoon/" className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors text-sm font-sans">
                    Learn More About Chaunci
                  </Link>
                  <Link href="/reviews/" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors text-sm font-sans">
                    Hear from Past Clients
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
                <Image
                  src="/images/happy-homebuyers.jpg"
                  alt="First-time homebuyers closing on their new home with help from a Wesley Chapel mortgage broker"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary diagonal-top diagonal-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Real Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              What Wesley Chapel Homebuyers Say About Working with Chaunci
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={Math.min(i + 1, 3)}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative">
                  <span className="absolute top-3 right-4 text-accent/20 text-5xl leading-none font-serif select-none" aria-hidden="true">&ldquo;</span>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 font-sans relative">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm font-sans">{t.name}</p>
                      <p className="text-white/40 text-xs font-sans">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/reviews/" className="text-accent hover:text-accent-light font-semibold text-sm font-sans">
              Read all reviews →
            </Link>
            <a
              href="https://g.page/r/kinsfolkmortgage/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium text-sm font-sans"
            >
              Leave a review →
            </a>
          </div>
        </div>
      </section>

      {/* Mortgage Form */}
      <section className="py-20" id="questionnaire">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Let&apos;s Talk</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6 leading-tight">
                  Get Pre-Approved for a Home Loan in Wesley Chapel
                </h2>
                <p className="text-text-muted leading-relaxed mb-4 font-sans">
                  You don&apos;t need to have all the answers right now. Most people don&apos;t.
                  That&apos;s what this conversation is for — I&apos;ll help you understand your options
                  so you can make a decision that feels right.
                </p>
                <p className="text-text-muted leading-relaxed mb-6 font-sans">
                  Fill out the short questionnaire, and I&apos;ll personally reach out to walk through your situation.
                  No obligation, no sales pitch. Or take our{" "}
                  <Link href="/prequalify/" className="text-accent hover:text-accent-dark underline">2-minute pre-qualification quiz</Link>
                  {" "}to see your options instantly.
                </p>
                <div className="bg-bg-light rounded-xl p-5 border border-border font-sans">
                  <p className="text-sm font-semibold text-primary mb-2">What to expect when you reach out:</p>
                  <ul className="space-y-2">
                    {["A real conversation — not a script", "Honest answers about what you qualify for", "A clear explanation of your loan options", "No surprise fees or hidden costs"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                        <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <MortgageForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-border flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
                  Free Mortgage Calculators — Estimate Your Payment
                </h2>
                <p className="text-text-muted font-sans">
                  Use our free{" "}
                  <Link href="/mortgage-calculator/" className="text-accent hover:text-accent-dark underline">mortgage payment calculator</Link>
                  {" "}to estimate monthly costs, see{" "}
                  <Link href="/how-much-house-can-i-afford/" className="text-accent hover:text-accent-dark underline">how much house you can afford</Link>
                  , or check{" "}
                  <Link href="/mortgage-rates-florida/" className="text-accent hover:text-accent-dark underline">today&apos;s Florida mortgage rates</Link>.
                </p>
              </div>
              <Link
                href="/mortgage-calculator/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors text-sm whitespace-nowrap font-sans"
              >
                Try the Calculators
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={homeFaq}
              title="Mortgage FAQ — Common Questions from Wesley Chapel Homebuyers"
              subtitle="These come up in almost every conversation. If yours isn't here, just ask — I'm happy to help."
            />
          </ScrollReveal>
          <div className="text-center mt-6">
            <Link href="/faq/" className="text-accent hover:text-accent-dark font-semibold text-sm font-sans">
              View all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Service Areas</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">
                Serving Wesley Chapel, Tampa Bay &amp; Surrounding Communities
              </h2>
              <p className="text-text-muted mt-3 max-w-3xl mx-auto font-sans">
                As a local mortgage broker based in Wesley Chapel, I work with homebuyers and
                homeowners across Pasco and Hillsborough counties. Whether you&apos;re buying your
                first home in New Tampa, refinancing in Lutz, or investing in Land O&apos; Lakes,
                I&apos;m here to help.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Wesley Chapel", href: "/wesley-chapel-mortgage-broker/" },
              { name: "Tampa", href: "/tampa-mortgage-broker/" },
              { name: "Lutz", href: "/lutz-mortgage-broker/" },
              { name: "New Tampa", href: "/new-tampa-mortgage/" },
              { name: "Land O' Lakes", href: "/land-o-lakes-mortgage-broker/" },
              { name: "Pasco County", href: "/pasco-county-mortgage/" },
              { name: "Odessa", href: "/odessa-fl-mortgage/" },
            ].map((area) => (
              <ScrollReveal key={area.name}>
                <Link
                  href={area.href}
                  className="block p-4 bg-white rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all text-center group"
                >
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors font-sans">
                    {area.name}
                  </h3>
                  <p className="text-text-muted text-xs mt-1 font-sans">Mortgage broker in {area.name}</p>
                </Link>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <Link
                href="/loan-options/"
                className="flex items-center justify-center p-4 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-all text-center group"
              >
                <span className="font-semibold text-primary group-hover:text-accent transition-colors text-sm font-sans">
                  View all service areas →
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light/30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Talk to a Wesley Chapel Mortgage Broker?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto font-sans">
            Whether you&apos;re just starting to think about buying or you&apos;re ready to move forward, 
            I&apos;m here to help you make sense of it all. Let&apos;s have a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote/" className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-xl shadow-accent/25 text-sm font-sans active:scale-95">
              Let&apos;s Walk Through Your Options
            </Link>
            <a href="https://kinsfolkmortgage.my1003app.com/1703351/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-sm font-sans">
              Start Your Application
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
