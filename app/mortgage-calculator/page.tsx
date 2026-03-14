"use client";

import { useState } from "react";
import MortgagePaymentCalculator from "@/components/calculators/MortgagePaymentCalculator";
import AffordabilityCalculator from "@/components/calculators/AffordabilityCalculator";
import RefinanceCalculator from "@/components/calculators/RefinanceCalculator";
import DownPaymentCalculator from "@/components/calculators/DownPaymentCalculator";
import ClosingCostCalculator from "@/components/calculators/ClosingCostCalculator";
import LeadForm from "@/components/LeadForm";

const tabs = [
  { id: "payment", label: "Mortgage Payment", icon: "🏠" },
  { id: "affordability", label: "Affordability", icon: "💰" },
  { id: "refinance", label: "Refinance Savings", icon: "📉" },
  { id: "downpayment", label: "Down Payment", icon: "🏦" },
  { id: "closing", label: "Closing Costs", icon: "📋" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function MortgageCalculatorPage() {
  const [activeTab, setActiveTab] = useState<TabId>("payment");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [calcData, setCalcData] = useState<Record<string, string>>({});

  function handleGetQuote(data: Record<string, string>) {
    setCalcData(data);
    setShowQuoteForm(true);
    setTimeout(() => {
      document.getElementById("calc-quote-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore your mortgage options with our interactive calculators. Get instant estimates,
            then connect with us for personalized rates.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-4 bg-bg-light border-b border-border/50 sticky top-20 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto pb-1 -mb-1 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setShowQuoteForm(false); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-text-muted hover:text-primary hover:bg-primary/5 border border-border/50"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {tabs.find((t) => t.id === activeTab)?.label} Calculator
            </h2>

            {activeTab === "payment" && <MortgagePaymentCalculator onGetQuote={handleGetQuote} />}
            {activeTab === "affordability" && <AffordabilityCalculator onGetQuote={handleGetQuote} />}
            {activeTab === "refinance" && <RefinanceCalculator onGetQuote={handleGetQuote} />}
            {activeTab === "downpayment" && <DownPaymentCalculator onGetQuote={handleGetQuote} />}
            {activeTab === "closing" && <ClosingCostCalculator onGetQuote={handleGetQuote} />}
          </div>

          <p className="text-xs text-text-light text-center mt-4 max-w-xl mx-auto">
            These calculators provide estimates for informational purposes only and do not constitute a loan offer, pre-qualification, or commitment to lend. Actual rates, payments, terms, and costs will vary based on your individual credit profile, loan amount, property type, and current market conditions. All mortgage loans are subject to credit and property approval. Not all borrowers will qualify. Contact Kinsfolk Mortgage LLC (NMLS# 2610890) for a personalized loan estimate.
          </p>
        </div>
      </section>

      {/* Quote Form (shown after calculator CTA) */}
      {showQuoteForm && (
        <section id="calc-quote-form" className="py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-2">Get Your Personalized Quote</h3>
              <p className="text-sm text-text-muted mb-6">
                Based on your {tabs.find((t) => t.id === activeTab)?.label.toLowerCase()} calculation,
                let us put together a personalized offer for you.
              </p>
              <LeadForm
                formName={`Calculator — ${tabs.find((t) => t.id === activeTab)?.label}`}
                extraData={{ ...calcData, calculatorSource: activeTab }}
                showMessage={false}
                buttonText="Request My Quote"
              />
            </div>
          </div>
        </section>
      )}

      {/* General CTA */}
      <section className="py-12 bg-primary/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-muted text-lg mb-2">
            Ready to take the next step?
          </p>
          <p className="text-text-muted text-sm mb-4">
            Everyone&apos;s situation is unique. Request personalized rates and fees tailored to your needs.
          </p>
          <a
            href="https://kinsfolkmortgage.my1003app.com/1703351/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-200"
          >
            Apply Online
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
