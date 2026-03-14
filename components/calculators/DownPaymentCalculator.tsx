"use client";

import { useState, useMemo } from "react";

function fmtCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

interface Props {
  onGetQuote?: (data: Record<string, string>) => void;
}

export default function DownPaymentCalculator({ onGetQuote }: Props) {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [currentSavings, setCurrentSavings] = useState(30000);
  const [monthlySavings, setMonthlySavings] = useState(1000);

  const result = useMemo(() => {
    const downPaymentNeeded = homePrice * (downPaymentPct / 100);
    const gap = Math.max(0, downPaymentNeeded - currentSavings);
    const monthsToGoal = monthlySavings > 0 ? Math.ceil(gap / monthlySavings) : Infinity;
    return { downPaymentNeeded, gap, monthsToGoal };
  }, [homePrice, downPaymentPct, currentSavings, monthlySavings]);

  const scenarioData = useMemo(() => {
    return [3, 5, 10, 15, 20].map((pct) => {
      const dp = homePrice * (pct / 100);
      const loan = homePrice - dp;
      return { pct, dp, loan };
    });
  }, [homePrice]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Home Price</label>
          <input type="number" value={homePrice} onChange={(e) => setHomePrice(+e.target.value || 0)} min={0} step={5000} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Target Down Payment (%)</label>
          <input type="number" value={downPaymentPct} onChange={(e) => setDownPaymentPct(+e.target.value || 0)} min={0} max={100} step={1} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Current Savings</label>
          <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(+e.target.value || 0)} min={0} step={1000} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Monthly Savings</label>
          <input type="number" value={monthlySavings} onChange={(e) => setMonthlySavings(+e.target.value || 0)} min={0} step={100} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <p className="text-sm text-text-muted mb-1">Down Payment Needed</p>
        <p className="text-2xl sm:text-4xl font-bold text-primary">{fmtCurrency(result.downPaymentNeeded)}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            <p className="text-text-muted">Still Need to Save</p>
            <p className="font-semibold text-primary">{fmtCurrency(result.gap)}</p>
          </div>
          <div>
            <p className="text-text-muted">Months to Goal</p>
            <p className="font-semibold text-primary">
              {result.monthsToGoal === Infinity ? "N/A" : `${result.monthsToGoal} months`}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-primary mb-3">Down Payment Scenarios</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-text-muted font-medium">%</th>
                <th className="text-right py-2 text-text-muted font-medium">Down Payment</th>
                <th className="text-right py-2 text-text-muted font-medium">Loan Amount</th>
              </tr>
            </thead>
            <tbody>
              {scenarioData.map((s) => (
                <tr key={s.pct} className={`border-b border-border/50 ${s.pct === downPaymentPct ? "bg-accent/10 font-semibold" : ""}`}>
                  <td className="py-2">{s.pct}%</td>
                  <td className="py-2 text-right">{fmtCurrency(s.dp)}</td>
                  <td className="py-2 text-right">{fmtCurrency(s.loan)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Down Payment",
              homePrice: String(homePrice),
              downPayment: String(result.downPaymentNeeded),
              loanAmount: String(homePrice - result.downPaymentNeeded),
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
