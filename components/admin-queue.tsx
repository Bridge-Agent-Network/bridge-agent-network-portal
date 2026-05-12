"use client";

import { Check, ClipboardList, X } from "lucide-react";
import { useState } from "react";
import { Badge, Card, Section } from "@/components/ui";
import { bookRequests, currentMember, pointSubmissions } from "@/lib/seed-data";
import type { PointSubmission } from "@/lib/types";

export function AdminQueue() {
  const [submissions, setSubmissions] = useState<PointSubmission[]>(pointSubmissions);
  const canManage = currentMember.role === "Admin" || currentMember.role === "Regional Admin";

  function updateStatus(id: string, status: PointSubmission["status"]) {
    setSubmissions((items) => items.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  if (!canManage) {
    return null;
  }

  return (
    <Section id="admin" eyebrow="Admin" title="Review queue">
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <Card className="p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bridge-sky text-bridge-blue">
              <ClipboardList className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="font-semibold text-bridge-ink">Bridge Points approvals</h3>
              <p className="text-sm text-slate-600">Approve or reject self-reported activity.</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {submissions.map((submission) => (
              <div key={submission.id} className="rounded-md border border-bridge-line p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-bridge-ink">{submission.memberName}</h4>
                    <p className="mt-1 text-sm text-slate-600">{submission.activity}</p>
                  </div>
                  <Badge tone={submission.status === "Approved" ? "green" : submission.status === "Pending" ? "gold" : "slate"}>{submission.status}</Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{submission.note}</p>
                {submission.proofUrl ? (
                  <a className="mt-2 inline-flex text-sm font-semibold text-bridge-blue hover:text-bridge-navy" href={submission.proofUrl} target="_blank" rel="noreferrer">
                    View proof
                  </a>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    className="inline-flex items-center gap-2 rounded-md bg-bridge-green px-3 py-2 text-sm font-semibold text-white"
                    onClick={() => updateStatus(submission.id, "Approved")}
                    type="button"
                  >
                    <Check className="h-4 w-4" aria-hidden />
                    Approve {submission.points} pts
                  </button>
                  <button
                    className="inline-flex items-center gap-2 rounded-md border border-bridge-line px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-700"
                    onClick={() => updateStatus(submission.id, "Rejected")}
                    type="button"
                  >
                    <X className="h-4 w-4" aria-hidden />
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-bridge-blue">Book request inbox</p>
          <div className="mt-4 space-y-3">
            {bookRequests.map((request) => (
              <div key={request.id} className="rounded-md border border-bridge-line p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-bridge-ink">{request.memberName}</h4>
                    <p className="text-sm text-slate-600">{request.bookType}</p>
                  </div>
                  <Badge tone="gold">{request.status}</Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{request.branding}</p>
                <p className="mt-2 text-sm font-semibold text-bridge-ink">{request.quantity} copies</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
