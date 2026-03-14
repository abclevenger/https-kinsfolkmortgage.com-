"use client";

import { useState, useMemo } from "react";

function fmtCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
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

export default function RefinanceCalculator({ onGetQuote }: Props) {
  const [currentBalance, setCurrentBalance] = useState(280000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [currentTerm, setCurrentTerm] = useState(25);
  const [newRate, setNewRate] = useState(6.25);
  const [newTerm, setNewTerm] = useState(30);

  const result = useMemo(() => {
    const currentPayment = calcMonthlyPayment(currentBalance, currentRate, currentTerm);
    const newPayment = calcMonthlyPayment(currentBalance, newRate, newTerm);
    const monthlySavings = currentPayment - newPayment;
    const annualSavings = monthlySavings * 12;
    return { currentPayment, newPayment, monthlySavings, annualSavings };
  }, [currentBalance, currentRate, currentTerm, newRate, newTerm]);

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Current Loan</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="remaining-balance" className="block text-sm font-medium text-primary mb-1">Remaining Balance</label>
            <input id="remaining-balance" type="number" value={currentBalance} onChange={(e) => setCurrentBalance(+e.target.value || 0)} min={0} step={5000} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
          </div>
          <div>
            <label htmlFor="current-rate" className="block text-sm font-medium text-primary mb-1">Current Rate (%)</label>
            <input id="current-rate" type="number" value={currentRate} onChange={(e) => setCurrentRate(+e.target.value || 0)} min={0} max={20} step={0.125} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
          </div>
          <div>
            <label htmlFor="years-remaining" className="block text-sm font-medium text-primary mb-1">Years Remaining</label>
            <input id="years-remaining" type="number" value={currentTerm} onChange={(e) => setCurrentTerm(+e.target.value || 0)} min={1} max={30} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">New Loan</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="new-rate" className="block text-sm font-medium text-primary mb-1">New Rate (%)</label>
            <input id="new-rate" type="number" value={newRate} onChange={(e) => setNewRate(+e.target.value || 0)} min={0} max={20} step={0.125} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
          </div>
          <div>
            <label htmlFor="new-term" className="block text-sm font-medium text-primary mb-1">New Term (years)</label>
            <select id="new-term" value={newTerm} onChange={(e) => setNewTerm(+e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm bg-white">
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-text-muted">Current Payment</p>
            <p className="text-2xl font-bold text-text-dark">{fmtCurrency(result.currentPayment)}/mo</p>
          </div>
          <div>
            <p className="text-sm text-text-muted">New Payment</p>
            <p className="text-2xl font-bold text-primary">{fmtCurrency(result.newPayment)}/mo</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border/50">
          <p className="text-sm text-text-muted">Monthly Savings</p>
          <p className={`text-2xl sm:text-3xl font-bold ${result.monthlySavings > 0 ? "text-green-600" : "text-red-500"}`}>
            {result.monthlySavings > 0 ? "+" : ""}{fmtCurrency(result.monthlySavings)}/mo
          </p>
          <p className="text-sm text-text-muted mt-1">
            {fmtCurrency(result.annualSavings)} per year
          </p>
        </div>
      </div>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Refinance Savings",
              loanAmount: String(currentBalance),
              interestRate: String(newRate),
              amortizationTerm: String(newTerm),
              refinanceSavingsEstimate: String(Math.round(result.monthlySavings)),
              monthlyPaymentEstimate: String(Math.round(result.newPayment)),
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
