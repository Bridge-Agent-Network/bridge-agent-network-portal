import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, title, eyebrow, children, action }: { id: string; title: string; eyebrow?: string; children: ReactNode; action?: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-bridge-blue">{eyebrow}</p> : null}
          <h2 className="text-xl font-semibold text-bridge-ink sm:text-2xl">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-bridge-line bg-white shadow-soft", className)}>{children}</div>;
}

export function Badge({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "green" | "gold" | "slate" }) {
  const tones = {
    blue: "bg-bridge-sky text-bridge-navy",
    green: "bg-emerald-50 text-bridge-green",
    gold: "bg-amber-50 text-amber-700",
    slate: "bg-slate-100 text-slate-600"
  };

  return <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold", tones[tone])}>{children}</span>;
}

export function LinkButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-md bg-bridge-blue px-3 py-2 text-sm font-semibold text-white transition hover:bg-bridge-navy"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden />
    </a>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-md border border-bridge-line bg-white px-3 py-2 text-sm text-bridge-ink outline-none transition placeholder:text-slate-400 focus:border-bridge-blue focus:ring-2 focus:ring-bridge-sky";
