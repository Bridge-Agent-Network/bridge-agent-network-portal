import Link from "next/link";
import { Award, CheckCircle2, Crown, Megaphone, Star, Trophy, Zap } from "lucide-react";
import { Surface } from "@/components/prototype-layout";
import { pointActivities } from "@/lib/seed-data";

const levels = [
  { name: "Bridge Member", threshold: 0, description: "Joined the network and has access to member resources." },
  { name: "Bridge Certified", threshold: 500, description: "Completed core seller-options training and standards." },
  { name: "Bridge Strategist", threshold: 1500, description: "Consistently submits opportunities and uses Bridge tools." },
  { name: "Bridge Elite", threshold: 3000, description: "High-activity agent with proven adoption and network contribution." },
  { name: "Territory Leader", threshold: 5000, description: "Top performer eligible for visibility, training, and priority access." }
];

const rewards = [
  { title: "Featured Agent Spotlight", points: 3000, icon: Star, status: "Next unlock" },
  { title: "Priority Lead Routing", points: 3500, icon: Zap, status: "Locked" },
  { title: "Custom Marketing Asset Pack", points: 4000, icon: Megaphone, status: "Locked" },
  { title: "Private Mastermind Access", points: 4500, icon: Crown, status: "Locked" },
  { title: "Territory Leader Feature", points: 5000, icon: Trophy, status: "Locked" }
];

const currentPoints = 2450;
const nextMilestone = 3000;
const progress = Math.round((currentPoints / nextMilestone) * 100);

export function BridgePointsRewards() {
  return (
    <div className="grid gap-5">
      <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
        <Surface className="overflow-hidden">
          <div className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">Reward System</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Bridge Points unlock status, visibility, and business-useful rewards.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Points should reward the behavior Bridge wants more of: seller education, opportunity submission, marketing adoption, training completion,
                and closed seller-option outcomes.
              </p>
              <div className="mt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-5xl font-extrabold text-bridge-gold">{currentPoints.toLocaleString()}</p>
                    <p className="mt-1 text-sm font-bold text-bridge-navy">Current Bridge Points</p>
                  </div>
                  <p className="text-sm font-bold text-slate-500">{nextMilestone - currentPoints} points to next unlock</p>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-bridge-gold" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-[10px] border-slate-200">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-bridge-gold bg-[radial-gradient(circle,#62411a,#1f170e)] text-bridge-gold shadow-xl">
                <Award className="h-16 w-16" />
              </div>
            </div>
          </div>
        </Surface>

        <Surface>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Next Reward</h3>
          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <Star className="h-8 w-8 text-bridge-gold" />
            <h4 className="mt-3 text-xl font-extrabold text-slate-950">Featured Agent Spotlight</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Unlock a featured placement in the network and public-facing directory once you reach 3,000 Bridge Points.
            </p>
            <p className="mt-4 text-sm font-extrabold text-bridge-gold">3,000 points required</p>
          </div>
        </Surface>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <Surface>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Status Levels</h3>
          <div className="mt-4 space-y-3">
            {levels.map((level) => {
              const unlocked = currentPoints >= level.threshold;
              return (
                <div key={level.name} className={`rounded-md border p-4 ${unlocked ? "border-emerald-200 bg-emerald-50/50" : "border-slate-200 bg-white"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-extrabold text-slate-950">{level.name}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">{level.description}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-extrabold ${unlocked ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {level.threshold.toLocaleString()} pts
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Surface>

        <Surface>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Reward Unlocks</h3>
          <div className="mt-4 grid gap-3">
            {rewards.map((reward) => (
              <div key={reward.title} className="grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-md border border-slate-200 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bridge-sky text-bridge-navy">
                  <reward.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-950">{reward.title}</p>
                  <p className="text-xs text-slate-500">{reward.points.toLocaleString()} points</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${reward.status === "Next unlock" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"}`}>
                  {reward.status}
                </span>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <Surface>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">How Agents Earn Points</h3>
            <p className="mt-2 text-sm text-slate-600">Current working point menu. These are intentionally editable while Brad and Alex finalize the game.</p>
          </div>
          <Link href="/points" className="rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-bridge-navy hover:border-bridge-blue">
            Review Submissions
          </Link>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {pointActivities.map((activity) => (
            <div key={activity.id} className="rounded-md border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-bold text-slate-950">{activity.label}</p>
                <span className="shrink-0 rounded-full bg-bridge-sky px-3 py-1 text-xs font-extrabold text-bridge-navy">{activity.points} pts</span>
              </div>
              <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {activity.proofHint}
              </p>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
