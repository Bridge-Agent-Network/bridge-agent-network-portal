"use client";

import { useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { pointActivities, pointSubmissions } from "@/lib/seed-data";

export function PointsDetail() {
  const [submissions, setSubmissions] = useState(pointSubmissions);

  return (
    <div className="grid gap-5 lg:grid-cols-[420px_1fr]">
      <Surface>
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Bridge Point Menu</h3>
        <div className="mt-4 grid gap-3">
          {pointActivities.map((activity) => (
            <div key={activity.id} className="rounded-md border border-slate-200 p-3">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-bold text-slate-950">{activity.label}</p>
                <span className="shrink-0 rounded-full bg-bridge-sky px-3 py-1 text-xs font-extrabold text-bridge-navy">{activity.points} pts</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">{activity.proofHint}</p>
            </div>
          ))}
        </div>
      </Surface>
      <Surface>
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Submission Review Simulation</h3>
        <div className="mt-4 divide-y divide-slate-100">
          {submissions.map((submission) => (
            <div key={submission.id} className="py-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-extrabold text-slate-950">{submission.activity}</p>
                  <p className="mt-1 text-sm text-slate-500">{submission.memberName} - {submission.submittedAt}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${submission.status === "Approved" ? "bg-emerald-50 text-emerald-700" : submission.status === "Pending" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{submission.status}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{submission.note}</p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-md bg-emerald-600 px-3 py-2 text-xs font-bold text-white" onClick={() => setSubmissions((items) => items.map((item) => item.id === submission.id ? { ...item, status: "Approved" } : item))}>Approve</button>
                <button className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600" onClick={() => setSubmissions((items) => items.map((item) => item.id === submission.id ? { ...item, status: "Rejected" } : item))}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
