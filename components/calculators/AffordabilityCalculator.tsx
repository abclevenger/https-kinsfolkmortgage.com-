"use client";

import { useState, useMemo } from "react";

function fmtCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

interface Props {
  onGetQuote?: (data: Record<string, string>) => void;
}

export default function AffordabilityCalculator({ onGetQuote }: Props) {
  const [annualIncome, setAnnualIncome] = useState(85000);
  const [monthlyDebt, setMonthlyDebt] = useState(400);
  const [downPaymentSaved, setDownPaymentSaved] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const result = useMemo(() => {
    const monthlyIncome = annualIncome / 12;
    // Use 28% front-end DTI ratio
    const maxMonthlyPayment = monthlyIncome * 0.28;
    // Subtract existing debt for back-end (43% max DTI)
    const backEndMax = monthlyIncome * 0.43 - monthlyDebt;
    const affordablePayment = Math.min(maxMonthlyPayment, backEndMax);

    if (affordablePayment <= 0) return { maxHomePrice: 0, affordablePayment: 0, maxLoan: 0 };

    // Subtract estimated taxes & insurance (~1.6% of home price / 12, solved iteratively)
    const r = rate / 100 / 12;
    const n = term * 12;
    const piPayment = affordablePayment * 0.75; // ~75% of payment goes to P&I (rough estimate)
    let maxLoan: number;
    if (r <= 0) {
      maxLoan = piPayment * n;
    } else {
      maxLoan = (piPayment * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    }
    const maxHomePrice = maxLoan + downPaymentSaved;

    return { maxHomePrice: Math.max(0, maxHomePrice), affordablePayment: Math.max(0, affordablePayment), maxLoan: Math.max(0, maxLoan) };
  }, [annualIncome, monthlyDebt, downPaymentSaved, rate, term]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Annual Gross Income</label>
          <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(+e.target.value || 0)} min={0} step={5000} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Monthly Debts</label>
          <input type="number" value={monthlyDebt} onChange={(e) => setMonthlyDebt(+e.target.value || 0)} min={0} step={50} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
          <p className="text-xs text-text-muted mt-1">Car payments, student loans, credit cards, etc.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Savings for Down Payment</label>
          <input type="number" value={downPaymentSaved} onChange={(e) => setDownPaymentSaved(+e.target.value || 0)} min={0} step={5000} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Interest Rate (%)</label>
          <input type="number" value={rate} onChange={(e) => setRate(+e.target.value || 0)} min={0} max={20} step={0.125} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <p className="text-sm text-text-muted mb-1">Estimated Home You Can Afford</p>
        <p className="text-2xl sm:text-4xl font-bold text-primary">{fmtCurrency(result.maxHomePrice)}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            <p className="text-text-muted">Max Monthly Payment</p>
            <p className="font-semibold text-primary">{fmtCurrency(result.affordablePayment)}/mo</p>
          </div>
          <div>
            <p className="text-text-muted">Estimated Max Loan</p>
            <p className="font-semibold text-primary">{fmtCurrency(result.maxLoan)}</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-text-muted leading-relaxed">
        Estimates are for informational purposes only and are not a loan offer, pre-qualification,
        or commitment to lend. Actual qualification amounts will vary. All loans subject to credit approval.
      </p>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Affordability",
              affordabilityEstimate: String(Math.round(result.maxHomePrice)),
              monthlyPaymentEstimate: String(Math.round(result.affordablePayment)),
              loanAmount: String(Math.round(result.maxLoan)),
              downPayment: String(downPaymentSaved),
              interestRate: String(rate),
              amortizationTerm: String(term),
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
