"use client";

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
  Users,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";
import { GlobalSearch } from "@/components/global-search";
import { assetPath } from "@/lib/asset-path";
import type { Member } from "@/lib/types";
import { getInitials } from "@/lib/utils";

const navItems = [
  {
    group: "Grow",
    items: [
      { href: "/", label: "Dashboard", icon: LayoutDashboard },
      { href: "/opportunities", label: "Opportunities", icon: Handshake },
      { href: "/books", label: "Book Requests", icon: BookOpen }
    ]
  },
  {
    group: "Tools",
    items: [
      { href: "/resources", label: "Resources", icon: FileText },
      { href: "/marketing", label: "Marketing Center", icon: Megaphone },
      { href: "/training", label: "Training", icon: GraduationCap },
      { href: "/events", label: "Live Calls", icon: CalendarDays }
    ]
  },
  {
    group: "Community",
    items: [
      { href: "/points/rewards", label: "Bridge Points", icon: Award },
      { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
      { href: "/agents", label: "Directory", icon: Users }
    ]
  },
  {
    group: "Account",
    items: [
      { href: "/profile", label: "Settings", icon: Settings },
      { href: "/support", label: "Support", icon: CircleHelp }
    ]
  }
];

const bottomNavItems = [
  { href: "/", label: "Home", icon: LayoutDashboard },
  { href: "/resources", label: "Assets", icon: FileText },
  { href: "/opportunities", label: "Deals", icon: Handshake },
  { href: "/points/rewards", label: "Points", icon: Award }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function SidebarContent({ member, pathname, onNavigate }: { member: Member; pathname: string; onNavigate?: () => void }) {
  return (
    <>
      <div className="border-b border-white/10 px-8 pb-7 pt-8">
        <Image
          src={assetPath("/bridge-agent-network-logo.png")}
          alt="Bridge Agent Network"
          width={1536}
          height={2048}
          className="mx-auto h-auto w-56 rounded-sm"
          priority
        />
      </div>

      <nav className="flex-1 space-y-5 px-4 py-5" aria-label="Portal navigation">
        {navItems.map((section) => (
          <div key={section.group}>
            <p className="mb-2 px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">{section.group}</p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={`relative flex min-h-[44px] items-center gap-4 rounded-md px-4 py-2.5 text-[15px] font-medium transition ${
                      active ? "bg-white/10 text-white shadow-inner before:absolute before:inset-y-2 before:left-0 before:w-[3px] before:rounded-full before:bg-bridge-gold" : "text-white/80 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <item.icon className="h-5 w-5" aria-hidden />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="space-y-5 p-6">
        <Link href="/profile" onClick={onNavigate} className="block rounded-md border border-white/[0.14] bg-white/[0.08] p-4 transition hover:bg-white/[0.12]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.12] text-sm font-bold text-white ring-2 ring-bridge-gold/60">
              {getInitials(member.name)}
            </div>
            <div>
              <p className="text-sm font-bold leading-5">{member.name}</p>
              <p className="text-xs font-semibold text-bridge-gold">Strategist</p>
            </div>
          </div>
        </Link>
        <div className="text-xs leading-6 text-white/[0.72]">
          <p className="flex items-center gap-2">
            <CircleHelp className="h-4 w-4" /> Need Help?
          </p>
          <p className="font-semibold text-white">(833) 777-BRIDGE</p>
          <p>support@bridgeagentnetwork.com</p>
        </div>
      </div>
    </>
  );
}

export function PortalShell({ member, children }: { member: Member; children: ReactNode }) {
  const firstName = member.name.split(" ")[0] || "Agent";
  const pathname = usePathname();
  const currentPathname = pathname ?? "/";
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-bridge-ink">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[296px] flex-col bg-bridge-navy text-white shadow-elevated xl:flex">
        <SidebarContent member={member} pathname={currentPathname} />
      </aside>

      <div className={`fixed inset-0 z-40 xl:hidden ${mobileNavOpen ? "" : "pointer-events-none"}`} aria-hidden={!mobileNavOpen}>
        <button
          type="button"
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity ${mobileNavOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Close navigation"
          onClick={() => setMobileNavOpen(false)}
        />
        <aside
          className={`relative flex h-full w-[min(86vw,280px)] flex-col overflow-y-auto bg-bridge-navy text-white shadow-2xl transition-transform duration-200 ${
            mobileNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md p-2 text-white/[0.85] hover:bg-white/10 hover:text-white"
            aria-label="Close navigation"
            onClick={() => setMobileNavOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <SidebarContent member={member} pathname={currentPathname} onNavigate={() => setMobileNavOpen(false)} />
        </aside>
      </div>

      <div className="xl:pl-[296px]">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/[0.92] shadow-xs backdrop-blur">
          <div className="flex min-h-14 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <button
                type="button"
                className="rounded-md p-2 text-bridge-navy hover:bg-slate-100 xl:hidden"
                aria-label="Open navigation"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <GlobalSearch />
            </div>
            <div className="flex items-center gap-3">
              <Link href="/points/rewards" className="hidden items-center gap-2 rounded-full bg-bridge-navy px-3 py-1.5 text-xs font-bold text-white shadow-xs sm:inline-flex">
                <Award className="h-4 w-4 text-bridge-gold" />
                <span className="text-bridge-gold">2,450</span>
                <span className="text-white/70">pts</span>
              </Link>
              <button className="relative rounded-md p-2 text-bridge-navy hover:bg-slate-100" aria-label="Notifications" title="Notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-bridge-gold ring-2 ring-white" />
              </button>
              <button className="relative rounded-md p-2 text-bridge-navy hover:bg-slate-100" aria-label="Messages" title="Messages">
                <Mail className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bridge-navy text-[10px] font-bold text-white">5</span>
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

        <main className="px-4 pb-24 pt-6 sm:px-6 lg:px-8 xl:pb-6">
          <div className="mx-auto max-w-[1540px]">
            <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Welcome back, {firstName}!</h1>
                <p className="mt-1 text-base text-slate-600">Here&apos;s what&apos;s happening in the Network.</p>
              </div>
              <div className="flex items-center justify-between gap-5 rounded-lg border border-slate-200/70 bg-white px-5 py-4 shadow-card lg:min-w-[360px]">
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

        <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-2 py-2 shadow-elevated backdrop-blur xl:hidden" aria-label="Primary mobile navigation">
          <div className="grid grid-cols-4 gap-1">
            {bottomNavItems.map((item) => {
              const active = isActivePath(currentPathname, item.href);

              return (
                <Link key={item.href} href={item.href} className={`flex min-h-[48px] flex-col items-center justify-center rounded-md text-[11px] font-bold transition ${active ? "bg-bridge-navy text-white" : "text-slate-500 hover:bg-bridge-sky hover:text-bridge-navy"}`}>
                  <item.icon className={`mb-1 h-5 w-5 ${active ? "text-bridge-gold" : ""}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
