"use client";

import { Mail, Phone, Plus, UserRound } from "lucide-react";
import { useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { allMembers } from "@/lib/prototype-data";
import type { Member } from "@/lib/types";
import { getInitials } from "@/lib/utils";

export function AgentsWorkspace() {
  const [agents, setAgents] = useState<Member[]>(allMembers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [territory, setTerritory] = useState("");

  function addAgent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAgents((current) => [
      {
        id: `agent-${Date.now()}`,
        name,
        email,
        phone: "(555) 555-0000",
        role: "Agent",
        region: territory || "North Phoenix",
        territory: territory || "North Phoenix, AZ",
        brokerage: "Pending Brokerage",
        specialties: ["Seller Options"],
        points: 0,
        status: "Pending"
      },
      ...current
    ]);
    setName("");
    setEmail("");
    setTerritory("");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
      <Surface>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bridge-sky text-bridge-navy"><Plus className="h-5 w-5" /></div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Add Agent</h3>
        </div>
        <form className="mt-4 grid gap-4" onSubmit={addAgent}>
          <label className="grid gap-1 text-sm font-bold text-slate-700">Name<input className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" value={name} onChange={(event) => setName(event.target.value)} required /></label>
          <label className="grid gap-1 text-sm font-bold text-slate-700">Email<input className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
          <label className="grid gap-1 text-sm font-bold text-slate-700">Territory<input className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" value={territory} onChange={(event) => setTerritory(event.target.value)} placeholder="Scottsdale, AZ" /></label>
          <button className="rounded-md bg-bridge-navy px-4 py-3 text-sm font-bold text-white hover:bg-bridge-blue" type="submit">Add Dummy Agent</button>
        </form>
      </Surface>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {agents.map((agent) => (
          <Surface key={agent.id}>
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bridge-navy text-sm font-extrabold text-white">{getInitials(agent.name)}</div>
              <div className="min-w-0">
                <p className="truncate text-lg font-extrabold text-slate-950">{agent.name}</p>
                <p className="text-sm text-slate-500">{agent.brokerage}</p>
                <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${agent.status === "Approved" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{agent.status}</span>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><UserRound className="h-4 w-4" /> {agent.territory}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {agent.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {agent.email}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {agent.specialties.map((specialty) => (
                <span key={specialty} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{specialty}</span>
              ))}
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
}
