"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
function fmtCurrency(n: number): string {
  return "$" + fmt(n);
}

function calcMonthlyPayment(principal: number, annualRate: number, years: number): number {
  if (principal <= 0 || years <= 0) return 0;
  if (annualRate <= 0) return principal / (years * 12);
  const r = annualRate / 100 / 12;
  const n = years * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

interface Props {
  onGetQuote?: (data: Record<string, string>) => void;
}

export default function MortgagePaymentCalculator({ onGetQuote }: Props) {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const result = useMemo(() => {
    const downPayment = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyPI = calcMonthlyPayment(loanAmount, rate, term);
    const estTaxes = (homePrice * 0.012) / 12;
    const estInsurance = (homePrice * 0.004) / 12;
    const totalMonthly = monthlyPI + estTaxes + estInsurance;
    return { downPayment, loanAmount, monthlyPI, estTaxes, estInsurance, totalMonthly };
  }, [homePrice, downPaymentPct, rate, term]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="home-price" className="block text-sm font-medium text-primary mb-1">Home Price</label>
          <input id="home-price" type="number" value={homePrice} onChange={(e) => setHomePrice(+e.target.value || 0)} min={0} step={5000} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label htmlFor="down-payment-pct" className="block text-sm font-medium text-primary mb-1">Down Payment (%)</label>
          <input id="down-payment-pct" type="number" value={downPaymentPct} onChange={(e) => setDownPaymentPct(+e.target.value || 0)} min={0} max={100} step={1} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
          <p className="text-xs text-text-muted mt-1">{fmtCurrency(homePrice * (downPaymentPct / 100))}</p>
        </div>
        <div>
          <label htmlFor="interest-rate" className="block text-sm font-medium text-primary mb-1">Interest Rate (%)</label>
          <input id="interest-rate" type="number" value={rate} onChange={(e) => setRate(+e.target.value || 0)} min={0} max={20} step={0.125} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label htmlFor="loan-term" className="block text-sm font-medium text-primary mb-1">Loan Term (years)</label>
          <select id="loan-term" value={term} onChange={(e) => setTerm(+e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm bg-white">
            <option value={30}>30 years</option>
            <option value={20}>20 years</option>
            <option value={15}>15 years</option>
            <option value={10}>10 years</option>
          </select>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <p className="text-sm text-text-muted mb-1">Estimated Monthly Payment</p>
        <p className="text-2xl sm:text-4xl font-bold text-primary">{fmtCurrency(result.totalMonthly)}<span className="text-lg font-normal text-text-muted">/mo</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
          <div>
            <p className="text-text-muted">Principal &amp; Interest</p>
            <p className="font-semibold text-primary">{fmtCurrency(result.monthlyPI)}</p>
          </div>
          <div>
            <p className="text-text-muted">Est. Taxes</p>
            <p className="font-semibold text-primary">{fmtCurrency(result.estTaxes)}</p>
          </div>
          <div>
            <p className="text-text-muted">Est. Insurance</p>
            <p className="font-semibold text-primary">{fmtCurrency(result.estInsurance)}</p>
          </div>
        </div>
        <p className="text-xs text-text-light mt-3">Loan Amount: {fmtCurrency(result.loanAmount)}</p>
      </div>

      <p className="text-xs text-text-muted leading-relaxed">
        Estimates are for informational purposes only and are not a loan offer or commitment to lend.
        Actual payments will vary. All loans subject to credit approval.
      </p>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Mortgage Payment",
              homePrice: String(homePrice),
              downPayment: String(result.downPayment),
              loanAmount: String(result.loanAmount),
              interestRate: String(rate),
              amortizationTerm: String(term),
              monthlyPaymentEstimate: String(Math.round(result.totalMonthly)),
            })
          }
          className="w-full px-6 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-xl transition-colors text-sm"
        >
          Get a Personalized Quote
        </button>
      )}
    </div>
  );
}
