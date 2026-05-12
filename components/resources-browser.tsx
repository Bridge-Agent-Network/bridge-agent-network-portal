"use client";

import Link from "next/link";
import { Download, Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { allResources } from "@/lib/prototype-data";

const categories = ["All Resources", "Presentations", "Tools & Calculators", "Guides", "Marketing", "Listing Tools", "Case Studies", "Land Tools", "Social / Digital"];

export function ResourcesBrowser() {
  const [category, setCategory] = useState("All Resources");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return allResources.filter((resource) => {
      const matchesCategory = category === "All Resources" || resource.category === category;
      const matchesQuery = `${resource.title} ${resource.description} ${resource.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="grid gap-5">
      <Surface>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-1 items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
            <Search className="h-5 w-5 text-slate-400" />
            <input className="w-full bg-transparent text-sm outline-none" placeholder="Search the resource library..." value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Filter className="h-4 w-4" />
            {filtered.length} resources
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              className={`rounded-md border px-3 py-2 text-xs font-bold transition ${
                item === category ? "border-bridge-navy bg-bridge-navy text-white" : "border-slate-200 bg-white text-slate-600 hover:border-bridge-blue"
              }`}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </Surface>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((resource) => (
          <Surface key={resource.id} className="flex min-h-[220px] flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{resource.category}</p>
                <h3 className="mt-2 text-lg font-extrabold text-slate-950">{resource.title}</h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{resource.status}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{resource.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{resource.format}</span>
              {resource.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-bridge-sky px-3 py-1 text-xs font-bold text-bridge-navy">{tag}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <Link href={`/resources/${resource.id}`} className="rounded-md bg-bridge-navy px-4 py-2 text-sm font-bold text-white hover:bg-bridge-blue">
                View Details
              </Link>
              <a href={resource.href} className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-bridge-navy hover:border-bridge-blue">
                <Download className="h-4 w-4" />
                Open
              </a>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
}
