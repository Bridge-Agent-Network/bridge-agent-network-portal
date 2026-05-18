import type { ReactNode } from "react";
import { PortalShell } from "@/components/portal-shell";
import { currentMember } from "@/lib/seed-data";

export function PrototypePage({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <PortalShell member={currentMember}>
      <div className="mb-5 border-b border-slate-200/70 pb-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
        <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>
      {children}
    </PortalShell>
  );
}

export function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-lg border border-slate-200/70 bg-white p-5 shadow-card ${className}`}>{children}</section>;
}

export function Pill({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${active ? "bg-bridge-navy text-white" : "bg-slate-100 text-slate-600"}`}>
      {children}
    </span>
  );
}
