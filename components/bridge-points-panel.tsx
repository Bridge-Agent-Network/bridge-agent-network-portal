"use client";

import { Award, CheckCircle2, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge, Card, Field, Section, inputClass } from "@/components/ui";
import { currentMember, members, pointActivities, pointSubmissions } from "@/lib/seed-data";
import type { PointSubmission } from "@/lib/types";

export function BridgePointsPanel() {
  const [activityId, setActivityId] = useState(pointActivities[0].id);
  const [note, setNote] = useState("");
  const [proofUrl, setProofUrl] = useState("");
  const [submissions, setSubmissions] = useState<PointSubmission[]>(pointSubmissions);

  const activity = useMemo(() => pointActivities.find((item) => item.id === activityId) ?? pointActivities[0], [activityId]);
  const pendingCount = submissions.filter((submission) => submission.status === "Pending").length;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextSubmission: PointSubmission = {
      id: `ps-${Date.now()}`,
      memberName: currentMember.name,
      activity: activity.label,
      points: activity.points,
      note,
      proofUrl,
      status: "Pending",
      submittedAt: "Just now"
    };
    setSubmissions((items) => [nextSubmission, ...items]);
    setNote("");
    setProofUrl("");
  }

  return (
    <Section id="points" eyebrow="Bridge Points" title="Earn points for daily Bridge Agent activity">
      <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <Card className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-bridge-sky text-bridge-blue">
              <Award className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-bridge-ink">Submit activity for review</h3>
              <p className="mt-1 text-sm text-slate-600">Points post after an admin approves the activity.</p>
            </div>
          </div>
          <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
            <Field label="Activity">
              <select className={inputClass} value={activityId} onChange={(event) => setActivityId(event.target.value)}>
                {pointActivities.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label} ({item.points} pts)
                  </option>
                ))}
              </select>
            </Field>
            <div className="rounded-md bg-bridge-mist p-3 text-sm text-slate-600">{activity.proofHint}</div>
            <Field label="Note">
              <textarea className={inputClass} rows={3} value={note} onChange={(event) => setNote(event.target.value)} placeholder="What did you do?" required />
            </Field>
            <Field label="Proof URL">
              <input className={inputClass} value={proofUrl} onChange={(event) => setProofUrl(event.target.value)} placeholder="https://..." />
            </Field>
            <button className="rounded-md bg-bridge-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-bridge-navy" type="submit">
              Submit for approval
            </button>
          </form>
        </Card>
        <div className="grid gap-4">
          <Card className="p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-bridge-blue">Leaderboard</p>
            <div className="mt-4 space-y-3">
              {members
                .slice()
                .sort((a, b) => b.points - a.points)
                .map((member, index) => (
                  <div key={member.id} className="flex items-center justify-between rounded-md border border-bridge-line p-3">
                    <div>
                      <p className="font-semibold text-bridge-ink">
                        {index + 1}. {member.name}
                      </p>
                      <p className="text-sm text-slate-600">{member.territory}</p>
                    </div>
                    <Badge tone="gold">{member.points} pts</Badge>
                  </div>
                ))}
            </div>
          </Card>
          <Card className="p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-bridge-blue">Submission status</p>
            <p className="mt-2 text-sm text-slate-600">{pendingCount} activity submissions are waiting for admin review.</p>
            <div className="mt-4 space-y-3">
              {submissions.slice(0, 3).map((submission) => (
                <div key={submission.id} className="rounded-md border border-bridge-line p-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-bridge-ink">{submission.activity}</p>
                    <Badge tone={submission.status === "Approved" ? "green" : submission.status === "Pending" ? "gold" : "slate"}>{submission.status}</Badge>
                  </div>
                  <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                    {submission.status === "Approved" ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
                    {submission.memberName} · {submission.submittedAt} · {submission.points} pts
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
