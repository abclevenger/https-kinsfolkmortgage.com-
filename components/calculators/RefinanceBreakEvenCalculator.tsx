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

export default function RefinanceBreakEvenCalculator({ onGetQuote }: Props) {
  const [currentBalance, setCurrentBalance] = useState(280000);
  const [currentRate, setCurrentRate] = useState(7.0);
  const [currentPayment, setCurrentPayment] = useState(1863);
  const [newRate, setNewRate] = useState(5.75);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(5600);

  const defaultClosingCosts = Math.round(currentBalance * 0.02);

  const result = useMemo(() => {
    const newMonthlyPayment = calcMonthlyPayment(currentBalance, newRate, newTerm);
    const monthlySavings = currentPayment - newMonthlyPayment;

    const breakEvenMonths =
      monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : Infinity;
    const breakEvenYears = breakEvenMonths / 12;

    // Total interest on new loan
    const newTotalPayments = newMonthlyPayment * newTerm * 12;
    const newTotalInterest = newTotalPayments - currentBalance;

    // Remaining interest on current loan (approximate from current payment & balance)
    // We'll compute by amortizing the remaining balance at the current rate over 30 years
    // Since we don't know remaining term, use implied remaining from payment
    let currentRemainingInterest = 0;
    let bal = currentBalance;
    const curMonthlyRate = currentRate / 100 / 12;
    for (let m = 0; m < 360 && bal > 0; m++) {
      const intPortion = bal * curMonthlyRate;
      const prinPortion = Math.min(bal, currentPayment - intPortion);
      if (prinPortion <= 0) break;
      currentRemainingInterest += intPortion;
      bal = Math.max(0, bal - prinPortion);
    }

    const totalSavingsOverTerm = monthlySavings > 0
      ? monthlySavings * newTerm * 12 - closingCosts
      : -(Math.abs(monthlySavings) * newTerm * 12 + closingCosts);

    const interestSaved = currentRemainingInterest - newTotalInterest;

    const worthIt = monthlySavings > 0 && breakEvenMonths < newTerm * 12;

    return {
      newMonthlyPayment,
      monthlySavings,
      breakEvenMonths,
      breakEvenYears,
      newTotalInterest,
      currentRemainingInterest,
      totalSavingsOverTerm,
      interestSaved,
      worthIt,
    };
  }, [currentBalance, currentRate, currentPayment, newRate, newTerm, closingCosts]);

  const inputClass =
    "w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none text-sm font-sans";
  const labelClass = "block text-sm font-semibold text-primary mb-1 font-sans";

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-primary mb-3 font-sans">Current Loan</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="loan-balance" className={labelClass}>Loan Balance ($)</label>
            <input id="loan-balance" type="number" value={currentBalance} onChange={(e) => setCurrentBalance(parseFloat(e.target.value) || 0)} min={0} step={5000} className={inputClass} />
          </div>
          <div>
            <label htmlFor="current-rate" className={labelClass}>Current Rate (%)</label>
            <input id="current-rate" type="number" value={currentRate} onChange={(e) => setCurrentRate(parseFloat(e.target.value) || 0)} min={0} max={20} step={0.125} className={inputClass} />
          </div>
          <div>
            <label htmlFor="current-payment" className={labelClass}>Current Monthly Payment ($)</label>
            <input id="current-payment" type="number" value={currentPayment} onChange={(e) => setCurrentPayment(parseFloat(e.target.value) || 0)} min={0} step={50} className={inputClass} />
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-primary mb-3 font-sans">New Loan</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="new-rate" className={labelClass}>New Rate (%)</label>
            <input id="new-rate" type="number" value={newRate} onChange={(e) => setNewRate(parseFloat(e.target.value) || 0)} min={0} max={20} step={0.125} className={inputClass} />
          </div>
          <div>
            <label htmlFor="new-term" className={labelClass}>New Term (years)</label>
            <input id="new-term" type="number" value={newTerm} onChange={(e) => setNewTerm(parseFloat(e.target.value) || 1)} min={1} max={40} step={1} className={inputClass} />
          </div>
          <div>
            <label htmlFor="closing-costs" className={labelClass}>Closing Costs ($)</label>
            <input id="closing-costs" type="number" value={closingCosts} onChange={(e) => setClosingCosts(parseFloat(e.target.value) || 0)} min={0} step={500} className={inputClass} />
            <p className="text-xs text-text-muted mt-1">Default: 2% = {fmtCurrency(defaultClosingCosts)}</p>
          </div>
        </div>
      </div>

      <div
        className={`rounded-2xl p-6 text-center border ${
          result.worthIt
            ? "bg-green-50 border-green-200"
            : "bg-red-50 border-red-200"
        }`}
      >
        <p className="text-sm text-text-muted mb-1">Break-Even Point</p>
        {result.monthlySavings > 0 && isFinite(result.breakEvenMonths) ? (
          <>
            <p className="text-2xl sm:text-4xl font-bold text-primary">
              {fmt(result.breakEvenMonths)} months
            </p>
            <p className="text-sm text-text-muted mt-1">
              ({result.breakEvenYears.toFixed(1)} years)
            </p>
          </>
        ) : (
          <p className="text-2xl font-bold text-red-600">Not beneficial</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">New Monthly Payment</p>
          <p className="text-2xl font-bold text-primary">{fmtCurrency(result.newMonthlyPayment)}</p>
        </div>
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">Monthly Savings</p>
          <p className={`text-2xl font-bold ${result.monthlySavings > 0 ? "text-green-600" : "text-red-600"}`}>
            {result.monthlySavings > 0 ? "" : "-"}{fmtCurrency(Math.abs(result.monthlySavings))}
          </p>
        </div>
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">Lifetime Savings</p>
          <p className={`text-2xl font-bold ${result.totalSavingsOverTerm > 0 ? "text-green-600" : "text-red-600"}`}>
            {result.totalSavingsOverTerm > 0 ? "" : "-"}{fmtCurrency(Math.abs(result.totalSavingsOverTerm))}
          </p>
          <p className="text-xs text-text-muted mt-1">After closing costs</p>
        </div>
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">Interest Saved</p>
          <p className={`text-2xl font-bold ${result.interestSaved > 0 ? "text-green-600" : "text-red-600"}`}>
            {result.interestSaved > 0 ? "" : "-"}{fmtCurrency(Math.abs(result.interestSaved))}
          </p>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <p className="text-sm font-semibold text-primary mb-3 font-sans">Interest Comparison</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-muted">Current Loan Remaining Interest</p>
            <p className="font-semibold text-primary text-lg">{fmtCurrency(result.currentRemainingInterest)}</p>
          </div>
          <div>
            <p className="text-text-muted">New Loan Total Interest</p>
            <p className="font-semibold text-primary text-lg">{fmtCurrency(result.newTotalInterest)}</p>
          </div>
        </div>
      </div>

      <div className={`rounded-2xl p-5 text-center ${result.worthIt ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"}`}>
        <p className="text-sm">
          {result.worthIt ? (
            <>
              <strong className="text-green-700">Refinancing makes sense.</strong>{" "}
              <span className="text-text-muted">
                You&apos;ll recover closing costs in {fmt(result.breakEvenMonths)} months and save{" "}
                {fmtCurrency(Math.abs(result.totalSavingsOverTerm))} over the life of the loan.
              </span>
            </>
          ) : result.monthlySavings <= 0 ? (
            <>
              <strong className="text-red-700">Refinancing is not recommended.</strong>{" "}
              <span className="text-text-muted">
                The new rate does not reduce your monthly payment.
              </span>
            </>
          ) : (
            <>
              <strong className="text-yellow-700">Consider carefully.</strong>{" "}
              <span className="text-text-muted">
                It would take {fmt(result.breakEvenMonths)} months to break even, which may be longer than you plan to stay in the home.
              </span>
            </>
          )}
        </p>
      </div>

      <p className="text-xs text-text-muted leading-relaxed">Estimates are for informational purposes only and are not a loan offer or commitment to lend. Actual refinance costs and savings will vary. All loans subject to credit approval.</p>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Refinance Break-Even",
              currentBalance: String(currentBalance),
              currentRate: String(currentRate),
              currentPayment: String(currentPayment),
              newRate: String(newRate),
              newTerm: String(newTerm),
              closingCosts: String(closingCosts),
              newMonthlyPayment: String(Math.round(result.newMonthlyPayment)),
              monthlySavings: String(Math.round(result.monthlySavings)),
              breakEvenMonths: String(result.breakEvenMonths),
              lifetimeSavings: String(Math.round(result.totalSavingsOverTerm)),
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
