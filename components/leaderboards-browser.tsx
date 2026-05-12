"use client";

import { Trophy } from "lucide-react";
import { useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { leaderboardBoards } from "@/lib/prototype-data";
import { getInitials } from "@/lib/utils";

export function LeaderboardsBrowser() {
  const [activeId, setActiveId] = useState(leaderboardBoards[0].id);
  const board = leaderboardBoards.find((item) => item.id === activeId) ?? leaderboardBoards[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
      <Surface>
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Leaderboard Types</h3>
        <div className="mt-4 grid gap-2">
          {leaderboardBoards.map((item) => (
            <button
              key={item.id}
              className={`rounded-md border px-4 py-3 text-left transition ${activeId === item.id ? "border-bridge-navy bg-bridge-navy text-white" : "border-slate-200 hover:border-bridge-blue"}`}
              onClick={() => setActiveId(item.id)}
              type="button"
            >
              <p className="font-bold">{item.title}</p>
              <p className={`mt-1 text-xs leading-5 ${activeId === item.id ? "text-white/70" : "text-slate-500"}`}>{item.description}</p>
            </button>
          ))}
        </div>
      </Surface>
      <Surface>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-bridge-sky text-bridge-navy"><Trophy className="h-5 w-5" /></div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-950">{board.title}</h3>
            <p className="text-sm text-slate-500">{board.description}</p>
          </div>
        </div>
        <div className="mt-5 divide-y divide-slate-100">
          {board.agents.map((agent, index) => (
            <div key={`${board.id}-${agent.id}`} className="grid grid-cols-[42px_48px_1fr_auto] items-center gap-4 py-4">
              <p className={`text-lg font-extrabold ${index < 3 ? "text-bridge-gold" : "text-slate-500"}`}>{index + 1}</p>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sm font-extrabold text-bridge-navy">{getInitials(agent.name)}</div>
              <div>
                <p className="font-extrabold text-slate-950">{agent.name}</p>
                <p className="text-sm text-slate-500">{agent.territory} - {agent.brokerage}</p>
              </div>
              <p className="text-xl font-extrabold text-bridge-gold">{agent.score.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
