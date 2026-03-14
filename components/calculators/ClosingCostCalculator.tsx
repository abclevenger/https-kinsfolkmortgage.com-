"use client";

import { useState, useMemo } from "react";

function fmtCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

interface Props {
  onGetQuote?: (data: Record<string, string>) => void;
}

export default function ClosingCostCalculator({ onGetQuote }: Props) {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [state, setState] = useState("FL");

  const result = useMemo(() => {
    const loanAmount = homePrice * (1 - downPaymentPct / 100);
    const downPayment = homePrice * (downPaymentPct / 100);

    // Estimated closing cost ranges (percentage of loan amount)
    const loanOrigination = loanAmount * 0.01;
    const appraisal = 500;
    const creditReport = 50;
    const titleInsurance = loanAmount * 0.005;
    const titleSearch = 400;
    const recording = 150;
    const survey = 350;
    const attorneyFees = 800;
    const prepaidInsurance = (homePrice * 0.004) / 12 * 14; // ~14 months
    const prepaidTaxes = (homePrice * 0.012) / 12 * 6; // ~6 months escrow
    const prepaidInterest = (loanAmount * 0.065) / 365 * 15; // ~15 days

    const totalClosing = loanOrigination + appraisal + creditReport + titleInsurance +
      titleSearch + recording + survey + attorneyFees + prepaidInsurance + prepaidTaxes + prepaidInterest;

    const totalCashNeeded = downPayment + totalClosing;

    return {
      loanAmount,
      downPayment,
      lineItems: [
        { label: "Loan Origination (1%)", amount: loanOrigination },
        { label: "Appraisal", amount: appraisal },
        { label: "Credit Report", amount: creditReport },
        { label: "Title Insurance", amount: titleInsurance },
        { label: "Title Search", amount: titleSearch },
        { label: "Recording Fees", amount: recording },
        { label: "Survey", amount: survey },
        { label: "Attorney Fees", amount: attorneyFees },
        { label: "Prepaid Insurance", amount: prepaidInsurance },
        { label: "Prepaid Taxes (Escrow)", amount: prepaidTaxes },
        { label: "Prepaid Interest (~15 days)", amount: prepaidInterest },
      ],
      totalClosing,
      totalCashNeeded,
    };
  }, [homePrice, downPaymentPct, state]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Home Price</label>
          <input type="number" value={homePrice} onChange={(e) => setHomePrice(+e.target.value || 0)} min={0} step={5000} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Down Payment (%)</label>
          <input type="number" value={downPaymentPct} onChange={(e) => setDownPaymentPct(+e.target.value || 0)} min={0} max={100} step={1} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">State</label>
          <select value={state} onChange={(e) => setState(e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none text-sm bg-white">
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="TX">Texas</option>
            <option value="NC">North Carolina</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <p className="text-sm text-text-muted mb-1">Estimated Closing Costs</p>
        <p className="text-2xl sm:text-4xl font-bold text-primary">{fmtCurrency(result.totalClosing)}</p>
        <p className="text-sm text-text-muted mt-2">
          Total Cash Needed at Closing: <span className="font-semibold text-primary">{fmtCurrency(result.totalCashNeeded)}</span>
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-primary mb-3">Cost Breakdown</h4>
        <div className="space-y-1">
          {result.lineItems.map((item) => (
            <div key={item.label} className="flex justify-between text-sm py-1.5 border-b border-border/30">
              <span className="text-text-muted">{item.label}</span>
              <span className="font-medium text-text-dark">{fmtCurrency(item.amount)}</span>
            </div>
          ))}
          <div className="flex justify-between text-sm py-2 font-bold border-t-2 border-primary/20 mt-2">
            <span className="text-primary">Total Closing Costs</span>
            <span className="text-primary">{fmtCurrency(result.totalClosing)}</span>
          </div>
        </div>
      </div>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Closing Cost",
              homePrice: String(homePrice),
              downPayment: String(result.downPayment),
              loanAmount: String(result.loanAmount),
              closingCostEstimate: String(Math.round(result.totalClosing)),
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
