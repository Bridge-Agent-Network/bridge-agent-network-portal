"use client";

import { useMemo, useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { opportunities, pipelineStages } from "@/lib/prototype-data";

type Opportunity = (typeof opportunities)[number];

export function OpportunitiesWorkspace() {
  const [items, setItems] = useState<Opportunity[]>(opportunities);
  const [seller, setSeller] = useState("");
  const [type, setType] = useState("Reno-to-Sell");
  const [notes, setNotes] = useState("");

  const grouped = useMemo(() => {
    return pipelineStages.map((stage) => ({ stage, items: items.filter((item) => item.stage === stage) }));
  }, [items]);

  function addOpportunity(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setItems((current) => [
      {
        id: `opp-${Date.now()}`,
        seller,
        agent: "Alex Fajardo",
        type,
        stage: "New Opportunity",
        value: "TBD",
        updated: "Just now",
        notes
      },
      ...current
    ]);
    setSeller("");
    setNotes("");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[380px_1fr]">
      <Surface>
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Submit Opportunity</h3>
        <form className="mt-4 grid gap-4" onSubmit={addOpportunity}>
          <label className="grid gap-1 text-sm font-bold text-slate-700">
            Seller / property nickname
            <input className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" value={seller} onChange={(event) => setSeller(event.target.value)} required />
          </label>
          <label className="grid gap-1 text-sm font-bold text-slate-700">
            Opportunity type
            <select className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" value={type} onChange={(event) => setType(event.target.value)}>
              <option>Cash Offer</option>
              <option>As-Is Listing</option>
              <option>Reno-to-Sell</option>
              <option>Builder / Spec Solution</option>
              <option>Hybrid Strategy</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm font-bold text-slate-700">
            Situation notes
            <textarea className="min-h-28 rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" value={notes} onChange={(event) => setNotes(event.target.value)} required />
          </label>
          <button className="rounded-md bg-bridge-navy px-4 py-3 text-sm font-bold text-white hover:bg-bridge-blue" type="submit">Add to Pipeline</button>
        </form>
      </Surface>
      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
        {grouped.map((group) => (
          <Surface key={group.stage} className="min-h-[240px]">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-bridge-navy">{group.stage}</h3>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-500">{group.items.length}</span>
            </div>
            <div className="grid gap-3">
              {group.items.map((item) => (
                <article key={item.id} className="rounded-md border border-slate-200 bg-slate-50 p-3">
                  <p className="font-bold text-slate-950">{item.seller}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-bridge-blue">{item.type}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{item.notes}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>{item.agent}</span>
                    <span>{item.value}</span>
                  </div>
                </article>
              ))}
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
}
