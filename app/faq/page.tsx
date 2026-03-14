import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Mortgage FAQ – Kinsfolk Mortgage LLC",
  description:
    "Get answers to the most common mortgage questions — from prequalification and loan types to closing costs, interest rates, and timelines. Kinsfolk Mortgage LLC is here to help.",
};

const gettingStartedFAQs = [
  {
    question: "How do I know if I'm ready to buy a home?",
    answer:
      "Generally you're ready when you have stable income, manageable debt, some savings for a down payment and closing costs, and a credit score of at least 580–620 depending on the loan program. A good first step is getting prequalified so you understand your buying power.",
  },
  {
    question: "What is mortgage prequalification and how is it different from preapproval?",
    answer:
      "Prequalification is a quick, preliminary assessment of your finances that gives you an estimate of what you may be able to borrow. Preapproval is more thorough — it involves a credit check, income verification, and documentation review, resulting in a conditional commitment from the lender. Sellers tend to prefer buyers with preapproval letters.",
  },
  {
    question: "What documents do I need to apply for a mortgage?",
    answer:
      "Most lenders require recent pay stubs (last 30 days), W-2s or tax returns for the past two years, bank statements for the last two to three months, government-issued ID, and proof of any additional income or assets. Self-employed borrowers may also need profit-and-loss statements.",
  },
  {
    question: "What credit score do I need to get a mortgage?",
    answer:
      "Minimum credit score requirements vary by loan type. FHA loans may accept scores as low as 580 with a 3.5% down payment, while conventional loans typically require 620 or higher. VA and USDA loans don't set a hard minimum, but most lenders look for at least 620. Higher scores generally unlock better rates and terms.",
  },
  {
    question: "How much should I save for a down payment?",
    answer:
      "Down payment requirements depend on the loan program. Conventional loans start at 3% down for first-time buyers, FHA loans require 3.5%, and VA and USDA loans offer 0% down options for eligible borrowers. Putting 20% down lets you avoid private mortgage insurance (PMI), but many buyers successfully purchase a home with far less.",
  },
];

const loanTypesFAQs = [
  {
    question: "What is the difference between a fixed-rate and adjustable-rate mortgage?",
    answer:
      "A fixed-rate mortgage keeps the same interest rate and monthly payment for the entire loan term, providing predictable budgeting. An adjustable-rate mortgage (ARM) starts with a lower fixed rate for an introductory period (commonly 5, 7, or 10 years) and then adjusts periodically based on market conditions. ARMs can be a good fit if you plan to sell or refinance before the adjustment period begins.",
  },
  {
    question: "What is an FHA loan?",
    answer:
      "An FHA loan is insured by the Federal Housing Administration and is designed for borrowers who may not qualify for conventional financing. It offers lower down payments (as little as 3.5%), more flexible credit requirements, and competitive interest rates. However, FHA loans require both upfront and annual mortgage insurance premiums.",
  },
  {
    question: "Who qualifies for a VA loan?",
    answer:
      "VA loans are available to active-duty service members, veterans, and eligible surviving spouses. They offer significant benefits including no down payment, no private mortgage insurance, and competitive interest rates. You'll need a Certificate of Eligibility (COE) from the Department of Veterans Affairs to apply.",
  },
  {
    question: "What is a jumbo loan?",
    answer:
      "A jumbo loan exceeds the conforming loan limits set by the Federal Housing Finance Agency. In most areas, that threshold is $766,550 for 2024. Jumbo loans typically require a higher credit score (700+), larger down payment (10–20%), and more cash reserves, but they allow you to finance higher-priced properties.",
  },
  {
    question: "What is a USDA loan and am I eligible?",
    answer:
      "USDA loans are backed by the U.S. Department of Agriculture and are designed for moderate-income borrowers purchasing homes in eligible rural and suburban areas. They offer zero down payment and reduced mortgage insurance costs. Eligibility depends on the property's location and your household income relative to the area median.",
  },
];

const processTimelineFAQs = [
  {
    question: "How long does the mortgage process take from application to closing?",
    answer:
      "The typical timeline is 30 to 45 days from a completed application to closing, though it can vary. Factors like the loan type, property appraisal, and how quickly you provide documentation can speed things up or slow them down. Staying responsive with your loan officer is one of the best ways to keep things on track.",
  },
  {
    question: "What happens during underwriting?",
    answer:
      "During underwriting, a specialist reviews your full financial profile — income, assets, credit, debts, and the property appraisal — to assess risk and determine whether to approve your loan. They may request additional documentation or clarification. This step typically takes one to two weeks and is one of the most important stages of the process.",
  },
  {
    question: "What is a home appraisal and why is it required?",
    answer:
      "A home appraisal is an independent assessment of the property's market value, conducted by a licensed appraiser. Lenders require it to make sure the home is worth at least the amount being financed. If the appraisal comes in lower than the purchase price, you may need to renegotiate, increase your down payment, or explore other options.",
  },
  {
    question: "Can I lock in my interest rate?",
    answer:
      "Yes. A rate lock guarantees a specific interest rate for a set period — typically 30 to 60 days — while your loan is being processed. This protects you from rate increases during that time. Ask your loan officer about the best time to lock based on current market conditions and your closing timeline.",
  },
];

const costsRatesFAQs = [
  {
    question: "What are closing costs and how much should I expect to pay?",
    answer:
      "Closing costs include fees for the loan origination, appraisal, title search, title insurance, attorney fees, taxes, and prepaid items like homeowner's insurance. They typically range from 2% to 5% of the purchase price. You'll receive a Loan Estimate within three business days of applying that breaks down these costs in detail.",
  },
  {
    question: "What is private mortgage insurance (PMI)?",
    answer:
      "PMI is insurance that protects the lender if you default on your loan. It's typically required on conventional loans when you put less than 20% down. PMI costs vary but generally run between 0.5% and 1% of the loan amount annually. Once you reach 20% equity in your home, you can usually request to have PMI removed.",
  },
  {
    question: "Are mortgage interest rates the same for everyone?",
    answer:
      "No. Your interest rate depends on several factors including your credit score, down payment amount, loan type, loan term, and current market conditions. Borrowers with higher credit scores and larger down payments generally receive lower rates. That's why it's important to compare options and work with a loan officer who can help you find the best fit.",
  },
  {
    question: "What is an escrow account?",
    answer:
      "An escrow account is set up by your lender to collect and pay property taxes and homeowner's insurance on your behalf. A portion of each monthly mortgage payment goes into this account, and your lender makes the payments when they're due. This helps ensure these critical bills are always paid on time.",
  },
  {
    question: "Can I pay off my mortgage early without penalties?",
    answer:
      "Most modern mortgage products do not carry prepayment penalties, but it's always worth confirming with your loan officer. Paying extra toward your principal each month — even small amounts — can significantly reduce the total interest you pay over the life of the loan and help you build equity faster.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Mortgage FAQ" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Mortgage Questions, Answered
            </h1>
            <p className="text-white/70 text-lg">
              Buying a home is one of the biggest financial decisions you&apos;ll make. We&apos;ve
              compiled answers to the most frequently asked mortgage questions to help you feel
              confident at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-bg-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-text-muted text-sm mb-4 font-semibold uppercase tracking-wider">
            Jump to a topic
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Getting Started", href: "#getting-started" },
              { label: "Loan Types", href: "#loan-types" },
              { label: "Process & Timeline", href: "#process-timeline" },
              { label: "Costs & Rates", href: "#costs-rates" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 bg-white border border-border rounded-lg text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={gettingStartedFAQs}
              title="Getting Started"
              subtitle="New to the mortgage process? These answers cover the basics you need to know before applying."
              withSchema
            />
          </ScrollReveal>
          <div className="mt-8 font-sans">
            <p className="text-text-muted leading-relaxed">
              Ready to see what you qualify for?{" "}
              <Link
                href="/mortgage-prequalified/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                Get prequalified online
              </Link>{" "}
              in just a few minutes — no obligation and no impact to your credit score.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section id="loan-types" className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={loanTypesFAQs}
              title="Loan Types"
              subtitle="Not sure which mortgage is right for you? Learn how popular loan programs compare."
              withSchema
            />
          </ScrollReveal>
          <div className="mt-8 font-sans">
            <p className="text-text-muted leading-relaxed">
              Explore our full list of{" "}
              <Link
                href="/loan-options/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                loan options
              </Link>{" "}
              to find the right fit for your situation, or talk to{" "}
              <Link
                href="/chaunci-witherspoon/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                Chaunci Witherspoon
              </Link>{" "}
              for personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Process & Timeline */}
      <section id="process-timeline" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={processTimelineFAQs}
              title="Process & Timeline"
              subtitle="Understand what to expect from application to closing day."
              withSchema
            />
          </ScrollReveal>
          <div className="mt-8 font-sans">
            <p className="text-text-muted leading-relaxed">
              Want a more detailed breakdown?{" "}
              <Link
                href="/mortgage-process/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                Read our step-by-step mortgage process guide
              </Link>{" "}
              to see exactly what happens at each stage.
            </p>
          </div>
        </div>
      </section>

      {/* Costs & Rates */}
      <section id="costs-rates" className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={costsRatesFAQs}
              title="Costs & Rates"
              subtitle="Understand what you'll pay and how interest rates work."
              withSchema
            />
          </ScrollReveal>
          <div className="mt-8 font-sans">
            <p className="text-text-muted leading-relaxed">
              Use our{" "}
              <Link
                href="/mortgage-calculator/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                mortgage calculator
              </Link>{" "}
              to estimate your monthly payment and see how different rates, terms, and down payments
              affect your bottom line.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto font-sans">
              Every situation is unique. Reach out and we&apos;ll give you the personalized answers
              you need — no pressure, no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET YOUR FREE QUOTE
              </Link>
              <Link
                href="/contact-me/"
                className="px-8 py-3.5 bg-transparent border-2 border-primary/20 text-primary hover:bg-primary/5 font-bold rounded-lg transition-all duration-200"
              >
                CONTACT US
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
