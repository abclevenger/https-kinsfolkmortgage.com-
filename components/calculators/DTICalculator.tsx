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

function dtiColor(ratio: number): string {
  if (ratio < 36) return "text-green-600";
  if (ratio <= 43) return "text-yellow-600";
  return "text-red-600";
}

function dtiBg(ratio: number): string {
  if (ratio < 36) return "bg-green-50 border-green-200";
  if (ratio <= 43) return "bg-yellow-50 border-yellow-200";
  return "bg-red-50 border-red-200";
}

function dtiLabel(ratio: number): string {
  if (ratio < 36) return "Good";
  if (ratio <= 43) return "Acceptable";
  return "Too High";
}

interface Props {
  onGetQuote?: (data: Record<string, string>) => void;
}

export default function DTICalculator({ onGetQuote }: Props) {
  const [monthlyIncome, setMonthlyIncome] = useState(7000);
  const [carPayment, setCarPayment] = useState(350);
  const [studentLoans, setStudentLoans] = useState(250);
  const [creditCards, setCreditCards] = useState(150);
  const [otherDebts, setOtherDebts] = useState(0);
  const [proposedHousing, setProposedHousing] = useState(1800);

  const result = useMemo(() => {
    const income = Math.max(1, monthlyIncome);
    const totalNonHousingDebt = carPayment + studentLoans + creditCards + otherDebts;
    const totalDebt = totalNonHousingDebt + proposedHousing;

    const frontEndDTI = (proposedHousing / income) * 100;
    const backEndDTI = (totalDebt / income) * 100;

    // Max housing payment at 28% front-end
    const maxHousingPayment28 = income * 0.28;
    // Max total debt at 43% back-end
    const maxTotalDebt43 = income * 0.43;
    const maxHousingFromBackEnd = maxTotalDebt43 - totalNonHousingDebt;
    const maxAffordablePayment = Math.max(0, Math.min(maxHousingPayment28, maxHousingFromBackEnd));

    // Estimate max home price from max affordable payment
    // Assume 30yr loan at 6.5%, taxes+insurance ~25% of payment
    const piPayment = maxAffordablePayment * 0.75;
    const r = 0.065 / 12;
    const n = 360;
    let maxLoan = 0;
    if (r > 0 && piPayment > 0) {
      maxLoan = (piPayment * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    }
    const maxHomePrice = maxLoan * 1.25; // assumes ~20% down payment equivalent

    return {
      frontEndDTI,
      backEndDTI,
      totalNonHousingDebt,
      totalDebt,
      maxAffordablePayment,
      maxHomePrice,
    };
  }, [monthlyIncome, carPayment, studentLoans, creditCards, otherDebts, proposedHousing]);

  const inputClass =
    "w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none text-sm font-sans";
  const labelClass = "block text-sm font-semibold text-primary mb-1 font-sans";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="monthly-income" className={labelClass}>Monthly Gross Income ($)</label>
          <input id="monthly-income" type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(parseFloat(e.target.value) || 0)} min={0} step={500} className={inputClass} />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-primary mb-3 font-sans">Monthly Debts</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="car-payment" className={labelClass}>Car Payment ($)</label>
            <input id="car-payment" type="number" value={carPayment} onChange={(e) => setCarPayment(parseFloat(e.target.value) || 0)} min={0} step={25} className={inputClass} />
          </div>
          <div>
            <label htmlFor="student-loans" className={labelClass}>Student Loans ($)</label>
            <input id="student-loans" type="number" value={studentLoans} onChange={(e) => setStudentLoans(parseFloat(e.target.value) || 0)} min={0} step={25} className={inputClass} />
          </div>
          <div>
            <label htmlFor="credit-cards" className={labelClass}>Credit Card Minimums ($)</label>
            <input id="credit-cards" type="number" value={creditCards} onChange={(e) => setCreditCards(parseFloat(e.target.value) || 0)} min={0} step={25} className={inputClass} />
          </div>
          <div>
            <label htmlFor="other-debts" className={labelClass}>Other Debts ($)</label>
            <input id="other-debts" type="number" value={otherDebts} onChange={(e) => setOtherDebts(parseFloat(e.target.value) || 0)} min={0} step={25} className={inputClass} />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="proposed-housing" className={labelClass}>Proposed Housing Payment ($)</label>
        <input id="proposed-housing" type="number" value={proposedHousing} onChange={(e) => setProposedHousing(parseFloat(e.target.value) || 0)} min={0} step={100} className={inputClass} />
        <p className="text-xs text-text-muted mt-1">Mortgage + property tax + insurance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className={`rounded-2xl p-6 border ${dtiBg(result.frontEndDTI)}`}>
          <p className="text-sm font-semibold text-text-muted mb-1">Front-End DTI</p>
          <p className={`text-2xl sm:text-4xl font-bold ${dtiColor(result.frontEndDTI)}`}>
            {result.frontEndDTI.toFixed(1)}%
          </p>
          <p className={`text-sm font-semibold mt-1 ${dtiColor(result.frontEndDTI)}`}>
            {dtiLabel(result.frontEndDTI)}
          </p>
          <p className="text-xs text-text-muted mt-2">Housing payment ÷ gross income</p>
          <p className="text-xs text-text-muted">Guideline: under 28%</p>
        </div>
        <div className={`rounded-2xl p-6 border ${dtiBg(result.backEndDTI)}`}>
          <p className="text-sm font-semibold text-text-muted mb-1">Back-End DTI</p>
          <p className={`text-2xl sm:text-4xl font-bold ${dtiColor(result.backEndDTI)}`}>
            {result.backEndDTI.toFixed(1)}%
          </p>
          <p className={`text-sm font-semibold mt-1 ${dtiColor(result.backEndDTI)}`}>
            {dtiLabel(result.backEndDTI)}
          </p>
          <p className="text-xs text-text-muted mt-2">All debts ÷ gross income</p>
          <p className="text-xs text-text-muted">Guideline: under 43%</p>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <p className="text-sm text-text-muted mb-3">Based on DTI Guidelines</p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-muted">Max Affordable Payment</p>
            <p className="font-semibold text-primary text-lg">{fmtCurrency(result.maxAffordablePayment)}<span className="text-sm font-normal text-text-muted">/mo</span></p>
          </div>
          <div>
            <p className="text-text-muted">Estimated Max Home Price</p>
            <p className="font-semibold text-primary text-lg">{fmtCurrency(result.maxHomePrice)}</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white/60 rounded-lg text-xs text-text-muted">
          {result.backEndDTI < 36 ? (
            <p>Your debt-to-income ratio looks healthy. You should qualify for most conventional loan programs.</p>
          ) : result.backEndDTI <= 43 ? (
            <p>Your DTI is within acceptable limits but on the higher side. Some lenders may require compensating factors like a larger down payment or higher credit score.</p>
          ) : (
            <p>Your DTI exceeds the standard 43% guideline. Consider paying down existing debts or looking at a lower-priced home to improve your qualification chances.</p>
          )}
        </div>
      </div>

      <p className="text-xs text-text-muted leading-relaxed">Estimates are for informational purposes only and are not a loan offer, pre-qualification, or commitment to lend. Actual qualification amounts will vary. All loans subject to credit approval.</p>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Debt-to-Income",
              monthlyIncome: String(monthlyIncome),
              proposedHousingPayment: String(proposedHousing),
              frontEndDTI: result.frontEndDTI.toFixed(1),
              backEndDTI: result.backEndDTI.toFixed(1),
              maxAffordablePayment: String(Math.round(result.maxAffordablePayment)),
              estimatedMaxHomePrice: String(Math.round(result.maxHomePrice)),
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
