import {
  Award,
  BarChart3,
  BookOpen,
  Box,
  CalendarClock,
  CalendarDays,
  ChevronRight,
  CirclePlus,
  FileText,
  GraduationCap,
  Handshake,
  Megaphone,
  MoreVertical,
  Trophy,
  UserCircle,
  Video
} from "lucide-react";
import Link from "next/link";
import { currentMember, events } from "@/lib/seed-data";
import { allResources } from "@/lib/prototype-data";
import { resourceHref } from "@/lib/resource-links";
import { getInitials } from "@/lib/utils";

const networkUpdates = [
  { title: "Live Call in 2 hours", detail: "Winning the Renovation Conversation", icon: CalendarDays, href: "/events" },
  { title: "New Resource Added", detail: "Final Bridge Agent Guide", icon: FileText, href: "/resources" },
  { title: "3 New Opportunities", detail: "Review and take action", icon: Handshake, href: "/opportunities" },
  { title: "You earned 125 Bridge Points", detail: "Great work! Keep the momentum.", icon: CalendarClock, href: "/points" }
];

const featuredResources = allResources.slice(0, 5);
const resourceColors = ["bg-[#092f55]", "bg-emerald-700", "bg-sky-700", "bg-stone-500", "bg-[#062a4a]"];

const nextActions = [
  { label: "Next live call", value: "Today at 11:00 AM", icon: CalendarClock, href: "/events" },
  { label: "Pending book requests", value: "1 awaiting review", icon: BookOpen, href: "/books" },
  { label: "Unread training", value: "Reno-to-Sell Math", icon: GraduationCap, href: "/training" }
];

const leaderboard = [
  { name: "Jamie Carter", territory: "Scottsdale, AZ", points: 3250 },
  { name: "Taylor Morgan", territory: "Paradise Valley, AZ", points: 2875 },
  { name: "Jordan Blake", territory: "Phoenix, AZ", points: 2600 },
  { name: currentMember.name, territory: currentMember.territory, points: 2450, active: true },
  { name: "Casey Nguyen", territory: "Mesa, AZ", points: 2125 }
];

const quickActions = [
  { label: "Submit Opportunity", icon: CirclePlus, href: "/opportunities" },
  { label: "Request Resources", icon: Box, href: "/resources" },
  { label: "Book Requests", icon: BookOpen, href: "/books" },
  { label: "Marketing Center", icon: Megaphone, href: "/marketing" },
  { label: "Training Center", icon: GraduationCap, href: "/training" },
  { label: "Update Profile", icon: UserCircle, href: "/profile" }
];

const impact = [
  { label: "Opportunities Submitted", value: "7", icon: CalendarDays },
  { label: "Deals in Progress", value: "3", icon: BarChart3 },
  { label: "Deals Closed", value: "2", icon: Trophy },
  { label: "Total Volume Influenced", value: "$1.2M", icon: Award }
];

function DashboardCard({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`rounded-lg border border-slate-200/70 bg-white shadow-card ${className}`}>
      {children}
    </section>
  );
}

function CardHeader({ title, action, href = "#" }: { title: string; action?: string; href?: string }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">{title}</h2>
      {action ? (
        <Link className="text-xs font-bold text-bridge-blue hover:text-bridge-navy" href={href}>
          {action}
        </Link>
      ) : null}
    </div>
  );
}

export function Dashboard() {
  return (
    <div id="dashboard" className="grid gap-4">
      <div className="grid gap-3 rounded-lg border border-slate-200/70 bg-white px-4 py-3 shadow-card md:grid-cols-3">
        {nextActions.map((item) => (
          <Link key={item.label} href={item.href} className="flex min-h-[56px] items-center gap-3 rounded-md px-2 py-2 transition hover:bg-bridge-sky">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-bridge-sky text-bridge-blue">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{item.label}</p>
              <p className="truncate text-sm font-bold text-slate-950">{item.value}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.16fr_0.98fr_1.05fr]">
        <DashboardCard className="relative overflow-hidden p-5">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.06]">
            <div className="absolute right-8 top-8 h-72 w-72 rounded-full border-[18px] border-bridge-navy" />
            <div className="absolute right-24 top-24 h-64 w-1 rotate-45 bg-bridge-navy" />
            <div className="absolute right-40 top-20 h-72 w-1 -rotate-45 bg-bridge-navy" />
          </div>
          <CardHeader title="Today in the Network" />
          <div className="relative divide-y divide-slate-100">
            {networkUpdates.map((item) => (
              <Link key={item.title} href={item.href} className="flex min-h-[58px] items-center gap-4 py-3.5 transition hover:bg-slate-50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-bridge-navy ring-1 ring-slate-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-950">{item.title}</p>
                  <p className="truncate text-xs text-slate-500">{item.detail}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard id="events" className="overflow-hidden p-5">
          <CardHeader title="Upcoming Live Call" action="View All" href="/events" />
          <div className="relative min-h-[265px] overflow-hidden rounded-lg bg-[radial-gradient(circle_at_75%_25%,#164b7e,#062a4a_58%,#031a30)] p-6 text-white">
            <div className="absolute bottom-0 right-0 h-64 w-48 rounded-tl-[5rem] bg-white/[0.08]" />
            <div className="absolute bottom-0 right-8 flex h-56 w-36 items-start justify-center rounded-t-full bg-gradient-to-b from-slate-200/95 to-slate-500/75 pt-8 text-5xl font-bold text-bridge-navy">RS</div>
            <span className="inline-flex rounded border border-bridge-gold px-2 py-1 text-xs font-bold uppercase text-bridge-gold">Live</span>
            <h3 className="relative mt-6 max-w-[250px] text-2xl font-bold leading-tight">Winning the Renovation Conversation</h3>
            <div className="relative mt-5 space-y-2 text-sm text-white/90">
              <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {events[0]?.date ?? "Thu, May 14"}</p>
              <p className="flex items-center gap-2"><CalendarClock className="h-4 w-4" /> 11:00 AM - 12:00 PM MST</p>
            </div>
            <div className="relative mt-4 flex items-center gap-3 text-xs text-white/[0.85]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-bold">RS</div>
              <p>Hosted by Ryan Stewart<br />Renovation Strategy Director</p>
            </div>
            <a href={events[0]?.href ?? "#"} className="relative mt-5 inline-flex items-center gap-2 rounded-md bg-bridge-gold px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-[#c08f18]">
              Join Live Call
              <Video className="h-4 w-4" />
            </a>
          </div>
        </DashboardCard>

        <DashboardCard id="points" className="overflow-hidden border-0 bg-gradient-to-br from-bridge-navy to-[#1a3470] p-5 text-white shadow-elevated">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-white/75">Bridge Points</h2>
            <Link className="text-xs font-bold text-bridge-gold hover:text-white" href="/points/rewards">View Details</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-[1fr_150px] sm:items-center">
            <div>
              <p className="text-5xl font-semibold tracking-tight text-white">2,450</p>
              <p className="mt-2 text-sm font-bold text-white/[0.85]">Total Bridge Points</p>
              <p className="mt-1 text-sm text-white/70">Next Milestone: <span className="font-bold text-white">3,000 Points</span></p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/[0.15]"><div className="h-full w-[82%] rounded-full bg-bridge-gold" /></div>
              <p className="mt-3 text-sm leading-5 text-white/75"><span className="font-bold text-bridge-gold">+350</span> this month<br />550 points to Featured Agent Spotlight</p>
            </div>
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[8px] border-white/[0.15]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-bridge-gold bg-[radial-gradient(circle,#62411a,#1f170e)] text-bridge-gold shadow-lg"><Award className="h-11 w-11" /></div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 divide-x divide-white/[0.15] border-t border-white/[0.15] pt-5 text-center">
            <div><p className="text-sm text-white/60">Month</p><p className="mt-1 text-2xl font-bold text-bridge-gold">350</p></div>
            <div><p className="text-sm text-white/60">Quarter</p><p className="mt-1 text-2xl font-bold text-bridge-gold">1,125</p></div>
            <div><p className="text-sm text-white/60">All Time</p><p className="mt-1 text-2xl font-bold text-white">2,450</p></div>
          </div>
        </DashboardCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.16fr_0.98fr_1.05fr]">
        <DashboardCard id="resources" className="p-5">
          <CardHeader title="Resource Library" action="View All" href="/resources" />
          <div className="mb-4 flex flex-wrap gap-2">
            {["All Resources", "Presentations", "Tools & Calculators", "Guides", "Marketing"].map((tab, index) => (
              <Link key={tab} href="/resources" className={`rounded-md border px-4 py-2 text-xs font-bold ${index === 0 ? "border-bridge-navy bg-bridge-navy text-white" : "border-slate-200 bg-white text-slate-600 hover:border-bridge-blue"}`}>{tab}</Link>
            ))}
          </div>
          <div className="divide-y divide-slate-100">
            {featuredResources.map((resource, index) => (
              <div key={resource.id} className="grid grid-cols-[64px_1fr_auto_auto] items-center gap-4 py-3 transition hover:bg-slate-50">
                <div className={`flex h-12 w-16 items-center justify-center rounded ${resourceColors[index % resourceColors.length]} text-white`}><FileText className="h-5 w-5" /></div>
                <div className="min-w-0"><p className="truncate text-sm font-bold text-slate-950">{resource.title}</p><p className="truncate text-xs text-slate-500">{resource.category} - {resource.format}</p></div>
                <a href={resourceHref(resource)} className="hidden rounded-md border border-slate-200 px-4 py-2 text-xs font-bold text-bridge-navy hover:border-bridge-blue sm:inline-flex" target={resource.href.startsWith("http") ? "_blank" : undefined} rel={resource.href.startsWith("http") ? "noreferrer" : undefined}>Open</a>
                <MoreVertical className="h-5 w-5 text-slate-400" />
              </div>
            ))}
          </div>
          <Link href="/resources" className="mt-3 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-bridge-blue">View All Resources <ChevronRight className="h-4 w-4" /></Link>
        </DashboardCard>

        <DashboardCard id="leaderboard" className="p-5">
          <CardHeader title="Top Agents This Month" action="View Leaderboard" href="/leaderboard" />
          <div className="divide-y divide-slate-100">
            {leaderboard.map((agent, index) => (
              <div key={agent.name} className={`grid grid-cols-[32px_42px_1fr_auto] items-center gap-3 rounded-md px-3 py-3 ${agent.active ? "border-l-4 border-l-bridge-gold bg-bridge-sky" : ""}`}>
                <p className={`text-sm font-bold ${index < 3 ? "text-bridge-gold" : "text-slate-700"}`}>{index + 1}</p>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-bridge-navy ${index < 3 ? "ring-2 ring-bridge-gold/50 ring-offset-2" : ""}`}>{getInitials(agent.name)}</div>
                <div className="min-w-0"><p className={`truncate text-sm font-bold ${agent.active ? "text-bridge-blue" : "text-slate-950"}`}>{agent.name}</p><p className="truncate text-xs text-slate-500">{agent.territory}</p></div>
                <p className={`text-sm font-bold ${index < 3 ? "text-bridge-gold" : "text-bridge-blue"}`}>{agent.points.toLocaleString()}</p>
              </div>
            ))}
          </div>
          <Link href="/leaderboard" className="mt-3 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-bridge-blue">View Full Leaderboard <ChevronRight className="h-4 w-4" /></Link>
        </DashboardCard>

        <div className="grid gap-4">
          <DashboardCard className="p-5">
            <CardHeader title="Quick Actions" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {quickActions.map((action) => (
                <Link key={action.label} href={action.href} className="group flex min-h-[88px] flex-col items-center justify-center rounded-md border border-slate-200 bg-white p-3 text-center text-sm font-bold text-bridge-navy transition hover:-translate-y-0.5 hover:border-bridge-gold hover:bg-bridge-sky/60 hover:shadow-card-hover">
                  <action.icon className="mb-2 h-7 w-7 stroke-[1.8]" />
                  {action.label}
                </Link>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard className="p-5">
            <div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Your Impact</h2><p className="text-xs font-medium text-slate-500">This Quarter</p></div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-4">
              {impact.map((item) => (
                <div key={item.label} className="border-r border-slate-200 last:border-r-0">
                  <item.icon className="mb-2 h-5 w-5 text-slate-500" />
                  <p className="text-2xl font-extrabold text-slate-950">{item.value}</p>
                  <p className="mt-1 max-w-[110px] text-xs leading-4 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
