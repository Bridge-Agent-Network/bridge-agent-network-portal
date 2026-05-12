"use client";

import { useMemo, useState } from "react";
import { Surface } from "@/components/prototype-layout";

export function SellerOptionsCalculator() {
  const [asIs, setAsIs] = useState(500000);
  const [cashOffer, setCashOffer] = useState(430000);
  const [renovated, setRenovated] = useState(610000);
  const [renoBudget, setRenoBudget] = useState(45000);
  const [commissionRate, setCommissionRate] = useState(5);
  const [closingRate, setClosingRate] = useState(1.2);

  const rows = useMemo(() => {
    const closing = (value: number) => value * (closingRate / 100);
    const commission = (value: number) => value * (commissionRate / 100);
    return [
      { path: "Cash Offer", gross: cashOffer, costs: closing(cashOffer), net: cashOffer - closing(cashOffer), timeline: "7-14 days", certainty: "High" },
      { path: "As-Is Listing", gross: asIs, costs: commission(asIs) + closing(asIs), net: asIs - commission(asIs) - closing(asIs), timeline: "30-60 days", certainty: "Medium" },
      { path: "Reno-to-Sell", gross: renovated, costs: commission(renovated) + closing(renovated) + renoBudget, net: renovated - commission(renovated) - closing(renovated) - renoBudget, timeline: "45-90 days", certainty: "Medium" },
      { path: "Builder / Spec Path", gross: renovated + 120000, costs: commission(renovated + 120000) + closing(renovated + 120000), net: renovated + 120000 - commission(renovated + 120000) - closing(renovated + 120000), timeline: "90+ days", certainty: "Exploratory" }
    ];
  }, [asIs, cashOffer, renovated, renoBudget, commissionRate, closingRate]);

  return (
    <div className="grid gap-5 xl:grid-cols-[380px_1fr]">
      <Surface>
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Calculator Inputs</h3>
        <div className="mt-4 grid gap-4">
          {[
            ["Cash offer", cashOffer, setCashOffer],
            ["As-is value", asIs, setAsIs],
            ["Renovated value", renovated, setRenovated],
            ["Renovation budget", renoBudget, setRenoBudget],
            ["Commission %", commissionRate, setCommissionRate],
            ["Closing cost %", closingRate, setClosingRate]
          ].map(([label, value, setter]) => (
            <label key={label as string} className="grid gap-1 text-sm font-bold text-slate-700">
              {label as string}
              <input className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" type="number" value={value as number} onChange={(event) => (setter as (value: number) => void)(Number(event.target.value))} />
            </label>
          ))}
        </div>
      </Surface>
      <Surface>
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Property Pathway Report Preview</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <th className="py-3">Path</th>
                <th>Gross</th>
                <th>Costs</th>
                <th>Estimated Net</th>
                <th>Timeline</th>
                <th>Certainty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row.path}>
                  <td className="py-4 font-extrabold text-slate-950">{row.path}</td>
                  <td>${row.gross.toLocaleString()}</td>
                  <td>${Math.round(row.costs).toLocaleString()}</td>
                  <td className="font-extrabold text-bridge-green">${Math.round(row.net).toLocaleString()}</td>
                  <td>{row.timeline}</td>
                  <td>{row.certainty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Surface>
    </div>
  );
}
