import {
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  CircleHelp,
  FileText,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Settings,
  Trophy,
  Users
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { GlobalSearch } from "@/components/global-search";
import type { Member } from "@/lib/types";
import { getInitials } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/opportunities", label: "Opportunities", icon: Handshake },
  { href: "/resources", label: "Resources", icon: FileText },
  { href: "/training", label: "Training", icon: GraduationCap },
  { href: "/events", label: "Live Calls", icon: CalendarDays },
  { href: "/marketing", label: "Marketing Center", icon: Megaphone },
  { href: "/points/rewards", label: "Bridge Points", icon: Award },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/agents", label: "Directory", icon: Users },
  { href: "/books", label: "Book Requests", icon: BookOpen },
  { href: "/profile", label: "Settings", icon: Settings },
  { href: "/support", label: "Support", icon: CircleHelp }
];

export function PortalShell({ member, children }: { member: Member; children: ReactNode }) {
  const firstName = member.name.split(" ")[0] || "Agent";

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-bridge-ink">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[296px] flex-col bg-[radial-gradient(circle_at_top_left,#144a86,#062a4a_45%,#031b33)] text-white shadow-2xl xl:flex">
        <div className="px-8 pb-5 pt-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-3 h-12 w-36">
              <div className="absolute left-2 right-2 top-6 h-0.5 bg-bridge-gold" />
              <div className="absolute left-5 top-1 h-10 w-0.5 rotate-[-34deg] bg-bridge-gold" />
              <div className="absolute left-5 top-1 h-10 w-0.5 rotate-[34deg] bg-bridge-gold" />
              <div className="absolute right-5 top-1 h-10 w-0.5 rotate-[-34deg] bg-bridge-gold" />
              <div className="absolute right-5 top-1 h-10 w-0.5 rotate-[34deg] bg-bridge-gold" />
              <div className="absolute left-[4.1rem] top-2 h-9 w-0.5 bg-bridge-gold" />
            </div>
            <p className="font-serif text-3xl uppercase tracking-[0.22em]">Bridge</p>
            <p className="mt-1 text-xs uppercase tracking-[0.32em] text-white/80">Agent Network</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4" aria-label="Portal navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-md px-4 py-3 text-[15px] font-medium transition ${
                index === 0 ? "bg-white/12 text-white shadow-inner" : "text-white/86 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" aria-hidden />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-5 p-6">
          <div className="rounded-md border border-white/18 bg-white/8 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-bridge-gold/60 bg-bridge-gold/12 text-bridge-gold">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide">Bridge Agent</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Elite Member</p>
              </div>
            </div>
          </div>
          <div className="text-xs leading-6 text-white/72">
            <p className="flex items-center gap-2">
              <CircleHelp className="h-4 w-4" /> Need Help?
            </p>
            <p className="font-semibold text-white">(833) 777-BRIDGE</p>
            <p>support@bridgeagentnetwork.com</p>
          </div>
        </div>
      </aside>

      <div className="xl:pl-[296px]">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
          <div className="flex min-h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <button className="rounded-md p-2 text-bridge-navy hover:bg-slate-100 xl:hidden" aria-label="Open navigation">
                <Menu className="h-6 w-6" />
              </button>
              <GlobalSearch />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative rounded-md p-2 text-bridge-navy hover:bg-slate-100" aria-label="Notifications" title="Notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-bridge-navy text-[10px] font-bold text-white">3</span>
              </button>
              <button className="relative rounded-md p-2 text-bridge-navy hover:bg-slate-100" aria-label="Messages" title="Messages">
                <Mail className="h-5 w-5" />
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-bridge-navy text-[10px] font-bold text-white">5</span>
              </button>
              <div className="flex items-center gap-3 rounded-md px-2 py-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bridge-navy text-sm font-bold text-white">{getInitials(member.name)}</div>
                <div className="hidden text-left sm:block">
                  <p className="text-sm font-bold leading-5 text-bridge-ink">{member.name}</p>
                  <p className="text-xs font-medium text-slate-500">{member.territory}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1540px]">
            <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Welcome back, {firstName}!</h1>
                <p className="mt-1 text-base text-slate-600">Here&apos;s what&apos;s happening in the Network.</p>
              </div>
              <div className="flex items-center justify-between gap-5 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm lg:min-w-[360px]">
                <div>
                  <p className="text-xs font-medium text-slate-500">Your Territory</p>
                  <p className="mt-1 font-bold text-slate-950">{member.territory}</p>
                </div>
                <Link href="/agents" className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-bridge-navy hover:border-bridge-blue">
                  View Territory Map
                  <MapPin className="h-4 w-4" />
                </Link>
              </div>
            </div>
            {children}
          </div>
        </main>

        <footer className="border-t border-slate-200 px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1540px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>(c) 2026 Bridge Agent Network. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
              <a href="#support">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
