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

export default function RentVsBuyCalculator({ onGetQuote }: Props) {
  const [monthlyRent, setMonthlyRent] = useState(1800);
  const [homePrice, setHomePrice] = useState(350000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [homeInsurance, setHomeInsurance] = useState(1800);
  const [hoa, setHoa] = useState(0);
  const [appreciationRate, setAppreciationRate] = useState(3.5);
  const [timeHorizon, setTimeHorizon] = useState(7);

  const result = useMemo(() => {
    const years = Math.max(1, timeHorizon);
    const months = years * 12;
    const downPayment = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyPI = calcMonthlyPayment(loanAmount, rate, years > 0 ? 30 : 0);

    // Total rent cost with 3% annual increase
    let totalRent = 0;
    let currentRent = monthlyRent;
    for (let y = 0; y < years; y++) {
      totalRent += currentRent * 12;
      currentRent *= 1.03;
    }

    // Monthly ownership costs
    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = homeInsurance / 12;
    const monthlyMaintenance = (homePrice * 0.01) / 12;

    // Total ownership cost over horizon
    const totalMortgagePayments = monthlyPI * months;
    const totalTax = monthlyTax * months;
    const totalInsurance = monthlyInsurance * months;
    const totalHoa = hoa * months;
    const totalMaintenance = monthlyMaintenance * months;
    const totalOwnershipCost =
      downPayment + totalMortgagePayments + totalTax + totalInsurance + totalHoa + totalMaintenance;

    // Home value after appreciation
    const futureHomeValue = homePrice * Math.pow(1 + appreciationRate / 100, years);
    const appreciation = futureHomeValue - homePrice;

    // Equity built (principal paid down)
    let balance = loanAmount;
    const monthlyRate = rate / 100 / 12;
    let totalPrincipalPaid = 0;
    for (let m = 0; m < months; m++) {
      const interestPortion = balance * monthlyRate;
      const principalPortion = monthlyPI - interestPortion;
      totalPrincipalPaid += principalPortion;
      balance = Math.max(0, balance - principalPortion);
    }

    const equityBuilt = downPayment + totalPrincipalPaid;
    const netWealthFromOwning = equityBuilt + appreciation - totalOwnershipCost + futureHomeValue - equityBuilt;
    const netCostOfOwning = totalOwnershipCost - appreciation;
    const netSavings = totalRent - netCostOfOwning;
    const buyingIsBetter = netSavings > 0;

    // Break-even: find month where cumulative ownership cost - equity - appreciation < cumulative rent
    let breakEvenMonth = 0;
    let cumRent = 0;
    let rentNow = monthlyRent;
    let bal = loanAmount;
    let cumOwnerCost = downPayment;
    let cumEquity = downPayment;
    for (let m = 1; m <= months; m++) {
      if (m % 12 === 1 && m > 1) rentNow *= 1.03;
      cumRent += rentNow;

      const intPortion = bal * monthlyRate;
      const prinPortion = monthlyPI - intPortion;
      bal = Math.max(0, bal - prinPortion);
      cumEquity += prinPortion;
      cumOwnerCost += monthlyPI + monthlyTax + monthlyInsurance + hoa + monthlyMaintenance;

      const currentAppreciation = homePrice * (Math.pow(1 + appreciationRate / 100, m / 12) - 1);
      const netOwnerCost = cumOwnerCost - cumEquity - currentAppreciation;

      if (cumRent > netOwnerCost && breakEvenMonth === 0) {
        breakEvenMonth = m;
      }
    }

    return {
      totalRent,
      totalOwnershipCost,
      netCostOfOwning,
      appreciation,
      equityBuilt,
      netSavings: Math.abs(netSavings),
      buyingIsBetter,
      breakEvenMonth,
      monthlyOwnership: monthlyPI + monthlyTax + monthlyInsurance + hoa + monthlyMaintenance,
    };
  }, [monthlyRent, homePrice, downPaymentPct, rate, propertyTaxRate, homeInsurance, hoa, appreciationRate, timeHorizon]);

  const inputClass =
    "w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none text-sm font-sans";
  const labelClass = "block text-sm font-semibold text-primary mb-1 font-sans";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="monthly-rent" className={labelClass}>Monthly Rent ($)</label>
          <input id="monthly-rent" type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(parseFloat(e.target.value) || 0)} min={0} step={100} className={inputClass} />
        </div>
        <div>
          <label htmlFor="home-price" className={labelClass}>Home Price ($)</label>
          <input id="home-price" type="number" value={homePrice} onChange={(e) => setHomePrice(parseFloat(e.target.value) || 0)} min={0} step={5000} className={inputClass} />
        </div>
        <div>
          <label htmlFor="down-payment-pct" className={labelClass}>Down Payment (%)</label>
          <input id="down-payment-pct" type="number" value={downPaymentPct} onChange={(e) => setDownPaymentPct(parseFloat(e.target.value) || 0)} min={0} max={100} step={1} className={inputClass} />
          <p className="text-xs text-text-muted mt-1">{fmtCurrency(homePrice * (downPaymentPct / 100))}</p>
        </div>
        <div>
          <label htmlFor="interest-rate" className={labelClass}>Interest Rate (%)</label>
          <input id="interest-rate" type="number" value={rate} onChange={(e) => setRate(parseFloat(e.target.value) || 0)} min={0} max={20} step={0.125} className={inputClass} />
        </div>
        <div>
          <label htmlFor="property-tax-rate" className={labelClass}>Property Tax Rate (%)</label>
          <input id="property-tax-rate" type="number" value={propertyTaxRate} onChange={(e) => setPropertyTaxRate(parseFloat(e.target.value) || 0)} min={0} max={5} step={0.1} className={inputClass} />
        </div>
        <div>
          <label htmlFor="home-insurance" className={labelClass}>Home Insurance ($/yr)</label>
          <input id="home-insurance" type="number" value={homeInsurance} onChange={(e) => setHomeInsurance(parseFloat(e.target.value) || 0)} min={0} step={100} className={inputClass} />
        </div>
        <div>
          <label htmlFor="hoa" className={labelClass}>HOA ($/mo)</label>
          <input id="hoa" type="number" value={hoa} onChange={(e) => setHoa(parseFloat(e.target.value) || 0)} min={0} step={25} className={inputClass} />
        </div>
        <div>
          <label htmlFor="appreciation-rate" className={labelClass}>Expected Appreciation (%/yr)</label>
          <input id="appreciation-rate" type="number" value={appreciationRate} onChange={(e) => setAppreciationRate(parseFloat(e.target.value) || 0)} min={-5} max={15} step={0.5} className={inputClass} />
        </div>
        <div>
          <label htmlFor="time-horizon" className={labelClass}>Time Horizon (years)</label>
          <input id="time-horizon" type="number" value={timeHorizon} onChange={(e) => setTimeHorizon(parseFloat(e.target.value) || 1)} min={1} max={30} step={1} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <p className="text-sm font-semibold text-blue-600 mb-1">Renting – {timeHorizon} Year Cost</p>
          <p className="text-2xl sm:text-3xl font-bold text-blue-800">{fmtCurrency(result.totalRent)}</p>
          <p className="text-xs text-blue-600 mt-2">Includes 3% annual rent increases</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
          <p className="text-sm font-semibold text-green-600 mb-1">Buying – {timeHorizon} Year Net Cost</p>
          <p className="text-2xl sm:text-3xl font-bold text-green-800">{fmtCurrency(result.netCostOfOwning)}</p>
          <p className="text-xs text-green-600 mt-2">
            Monthly: {fmtCurrency(result.monthlyOwnership)}/mo
          </p>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-text-muted">Equity Built</p>
            <p className="font-semibold text-primary text-lg">{fmtCurrency(result.equityBuilt)}</p>
          </div>
          <div>
            <p className="text-text-muted">Home Appreciation</p>
            <p className="font-semibold text-primary text-lg">{fmtCurrency(result.appreciation)}</p>
          </div>
          <div>
            <p className="text-text-muted">Break-Even Point</p>
            <p className="font-semibold text-primary text-lg">
              {result.breakEvenMonth > 0
                ? `${Math.floor(result.breakEvenMonth / 12)}yr ${result.breakEvenMonth % 12}mo`
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`rounded-2xl p-6 text-center ${
          result.buyingIsBetter
            ? "bg-green-50 border border-green-200"
            : "bg-blue-50 border border-blue-200"
        }`}
      >
        <p className="text-lg font-bold mb-1">
          {result.buyingIsBetter ? "Buying is better" : "Renting is better"}
        </p>
        <p className="text-sm text-text-muted">
          You could save approximately <strong>{fmtCurrency(result.netSavings)}</strong> over{" "}
          {timeHorizon} years by {result.buyingIsBetter ? "buying" : "renting"}.
        </p>
      </div>

      <p className="text-xs text-text-muted leading-relaxed">Estimates are for informational purposes only and are not a loan offer or commitment to lend. Actual costs will vary based on your financial situation. All loans subject to credit approval.</p>

      {onGetQuote && (
        <button
          onClick={() =>
            onGetQuote({
              calculatorType: "Rent vs Buy",
              monthlyRent: String(monthlyRent),
              homePrice: String(homePrice),
              downPayment: String(Math.round(homePrice * (downPaymentPct / 100))),
              interestRate: String(rate),
              timeHorizon: String(timeHorizon),
              verdict: result.buyingIsBetter ? "Buying is better" : "Renting is better",
              netSavings: String(Math.round(result.netSavings)),
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
