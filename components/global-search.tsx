"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { searchableItems } from "@/lib/prototype-data";

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return [];
    }

    return searchableItems
      .filter((item) => `${item.type} ${item.title} ${item.detail}`.toLowerCase().includes(normalized))
      .slice(0, 6);
  }, [query]);

  return (
    <div className="relative hidden h-11 min-w-[280px] max-w-xl flex-1 items-center gap-3 rounded-md bg-slate-100 px-4 text-slate-500 ring-1 ring-slate-200 sm:flex">
      <Search className="h-5 w-5" />
      <input
        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
        placeholder="Search resources, training, members..."
        aria-label="Search resources, training, members"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {results.length > 0 ? (
        <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-lg border border-slate-200 bg-white text-bridge-ink shadow-xl">
          {results.map((item) => (
            <Link key={`${item.type}-${item.title}`} href={item.href} className="block border-b border-slate-100 px-4 py-3 last:border-b-0 hover:bg-bridge-sky/40">
              <p className="text-xs font-bold uppercase tracking-wide text-bridge-blue">{item.type}</p>
              <p className="mt-1 text-sm font-bold text-slate-950">{item.title}</p>
              <p className="text-xs text-slate-500">{item.detail}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
