"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
function fmtCurrency(n: number): string {
  return "$" + fmt(n);
}

interface ScheduleRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  extraPayment: number;
  balance: number;
}

interface Props {
  onGetQuote?: (data: Record<string, string>) => void;
}

export default function AmortizationCalculator({ onGetQuote }: Props) {
  const [loanAmount, setLoanAmount] = useState(280000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [extraPayment, setExtraPayment] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const result = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = term * 12;

    let basePayment: number;
    if (monthlyRate <= 0) {
      basePayment = totalMonths > 0 ? loanAmount / totalMonths : 0;
    } else {
      basePayment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    // Standard schedule (no extra payments)
    let balanceStd = loanAmount;
    let totalInterestStd = 0;
    for (let m = 0; m < totalMonths && balanceStd > 0; m++) {
      const intPortion = balanceStd * monthlyRate;
      totalInterestStd += intPortion;
      balanceStd = Math.max(0, balanceStd - (basePayment - intPortion));
    }

    // Schedule with extra payments
    const schedule: ScheduleRow[] = [];
    let balance = loanAmount;
    let totalInterest = 0;
    let payoffMonth = 0;

    for (let m = 1; m <= totalMonths && balance > 0; m++) {
      const intPortion = balance * monthlyRate;
      const prinPortion = Math.min(balance, basePayment - intPortion);
      const extra = Math.min(balance - prinPortion, extraPayment);
      const totalPrin = prinPortion + extra;
      const payment = intPortion + totalPrin;

      totalInterest += intPortion;
      balance = Math.max(0, balance - totalPrin);

      schedule.push({
        month: m,
        payment,
        principal: prinPortion + extra,
        interest: intPortion,
        extraPayment: extra,
        balance,
      });

      if (balance <= 0 && payoffMonth === 0) {
        payoffMonth = m;
      }
    }

    if (payoffMonth === 0) payoffMonth = totalMonths;

    const interestSaved = totalInterestStd - totalInterest;
    const monthsSaved = totalMonths - payoffMonth;

    const now = new Date();
    const payoffDateStd = new Date(now.getFullYear(), now.getMonth() + totalMonths, 1);
    const payoffDateExtra = new Date(now.getFullYear(), now.getMonth() + payoffMonth, 1);

    return {
      basePayment,
      schedule,
      totalInterest,
      totalInterestStd,
      interestSaved,
      payoffMonth,
      monthsSaved,
      payoffDateStd,
      payoffDateExtra,
    };
  }, [loanAmount, rate, term, extraPayment]);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const displaySchedule = showAll ? result.schedule : result.schedule.slice(0, 12);

  const inputClass =
    "w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none text-sm font-sans";
  const labelClass = "block text-sm font-semibold text-primary mb-1 font-sans";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="loan-amount" className={labelClass}>Loan Amount ($)</label>
          <input id="loan-amount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)} min={0} step={5000} className={inputClass} />
        </div>
        <div>
          <label htmlFor="interest-rate" className={labelClass}>Interest Rate (%)</label>
          <input id="interest-rate" type="number" value={rate} onChange={(e) => setRate(parseFloat(e.target.value) || 0)} min={0} max={20} step={0.125} className={inputClass} />
        </div>
        <div>
          <label htmlFor="loan-term" className={labelClass}>Loan Term (years)</label>
          <input id="loan-term" type="number" value={term} onChange={(e) => setTerm(parseFloat(e.target.value) || 1)} min={1} max={40} step={1} className={inputClass} />
        </div>
        <div>
          <label htmlFor="extra-payment" className={labelClass}>Extra Monthly Payment ($)</label>
          <input id="extra-payment" type="number" value={extraPayment} onChange={(e) => setExtraPayment(parseFloat(e.target.value) || 0)} min={0} step={50} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">Monthly Payment</p>
          <p className="text-2xl font-bold text-primary">{fmtCurrency(result.basePayment + extraPayment)}</p>
          {extraPayment > 0 && (
            <p className="text-xs text-text-muted mt-1">Base: {fmtCurrency(result.basePayment)}</p>
          )}
        </div>
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">Total Interest</p>
          <p className="text-2xl font-bold text-primary">{fmtCurrency(result.totalInterest)}</p>
          {extraPayment > 0 && (
            <p className="text-xs text-green-600 mt-1">Save {fmtCurrency(result.interestSaved)}</p>
          )}
        </div>
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">Payoff Date</p>
          <p className="text-2xl font-bold text-primary">{formatDate(result.payoffDateExtra)}</p>
          {extraPayment > 0 && (
            <p className="text-xs text-green-600 mt-1">
              {Math.floor(result.monthsSaved / 12)}yr {result.monthsSaved % 12}mo sooner
            </p>
          )}
        </div>
        <div className="bg-primary/5 rounded-2xl p-5">
          <p className="text-xs text-text-muted mb-1">Total Payments</p>
          <p className="text-2xl font-bold text-primary">{fmt(result.payoffMonth)}</p>
          <p className="text-xs text-text-muted mt-1">of {fmt(term * 12)} months</p>
        </div>
      </div>

      {extraPayment > 0 && result.interestSaved > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-green-700">
            Adding {fmtCurrency(extraPayment)}/mo extra saves you{" "}
            <strong>{fmtCurrency(result.interestSaved)}</strong> in interest and pays off your loan{" "}
            <strong>
              {Math.floor(result.monthsSaved / 12)} years and {result.monthsSaved % 12} months
            </strong>{" "}
            early!
          </p>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-primary font-sans">Amortization Schedule</p>
          {result.schedule.length > 12 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-accent hover:text-accent-dark font-semibold transition-colors"
            >
              {showAll ? "Show First 12 Months" : `Show All ${fmt(result.schedule.length)} Months`}
            </button>
          )}
        </div>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left px-4 py-2.5 font-semibold text-primary">Month</th>
                <th className="text-right px-4 py-2.5 font-semibold text-primary">Payment</th>
                <th className="text-right px-4 py-2.5 font-semibold text-primary">Principal</th>
                <th className="text-right px-4 py-2.5 font-semibold text-primary">Interest</th>
                <th className="text-right px-4 py-2.5 font-semibold text-primary">Balance</th>
              </tr>
            </thead>
            <tbody>
              {displaySchedule.map((row) => (
                <tr key={row.month} className="border-t border-border hover:bg-primary/[0.02]">
                  <td className="px-4 py-2 text-text-muted">{row.month}</td>
                  <td className="px-4 py-2 text-right">{fmtCurrency(row.payment)}</td>
                  <td className="px-4 py-2 text-right">{fmtCurrency(row.principal)}</td>
                  <td className="px-4 py-2 text-right">{fmtCurrency(row.interest)}</td>
                  <td className="px-4 py-2 text-right font-medium">{fmtCurrency(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!showAll && result.schedule.length > 12 && (
          <p className="text-xs text-text-muted text-center mt-2">
            Showing 12 of {fmt(result.schedule.length)} months
          </p>
        )}
      </div>

      <p className="text-xs text-text-muted leading-relaxed">Estimates are for informational purposes only and are not a loan offer or commitment to lend. Actual payments and terms will vary. All loans subject to credit approval.</p>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Amortization",
              loanAmount: String(loanAmount),
              interestRate: String(rate),
              loanTerm: String(term),
              extraPayment: String(extraPayment),
              monthlyPayment: String(Math.round(result.basePayment)),
              totalInterest: String(Math.round(result.totalInterest)),
              interestSaved: String(Math.round(result.interestSaved)),
              payoffMonths: String(result.payoffMonth),
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
