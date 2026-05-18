"use client";

import Link from "next/link";
import { Download, ExternalLink, Filter, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { ResourcePreview } from "@/components/resource-preview";
import { allResources } from "@/lib/prototype-data";
import { resourceHref } from "@/lib/resource-links";

const categories = ["All Resources", ...Array.from(new Set(allResources.map((resource) => resource.category)))];

export function ResourcesBrowser() {
  const [category, setCategory] = useState("All Resources");
  const [query, setQuery] = useState("");
  const featuredResource = allResources[0];

  const filtered = useMemo(() => {
    return allResources.filter((resource) => {
      const matchesCategory = category === "All Resources" || resource.category === category;
      const matchesQuery = `${resource.title} ${resource.description} ${resource.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="grid gap-5">
      {featuredResource ? (
        <Link href={`/resources/${featuredResource.id}`} className="group relative min-h-[220px] overflow-hidden rounded-xl bg-bridge-navy shadow-elevated">
          <div className="absolute inset-0 opacity-45 transition duration-300 group-hover:scale-[1.02]">
            <ResourcePreview resource={featuredResource} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-bridge-navy via-bridge-navy/[0.86] to-bridge-navy/40" />
          <div className="relative flex min-h-[220px] flex-col justify-end p-6 text-white">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-bridge-goldLight px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-amber-800">
              <Star className="h-3.5 w-3.5" />
              Featured
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">{featuredResource.category}</p>
            <h3 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">{featuredResource.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">{featuredResource.description}</p>
          </div>
        </Link>
      ) : null}

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

      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        <aside className="hidden h-fit rounded-lg border border-slate-200/70 bg-white p-4 shadow-card lg:block">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">Filters</p>
          <div className="mt-4 space-y-1">
            {categories.map((item) => (
              <button
                key={item}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-bold transition ${
                  item === category ? "bg-bridge-navy text-white" : "text-slate-600 hover:bg-bridge-sky hover:text-bridge-navy"
                }`}
                onClick={() => setCategory(item)}
                type="button"
              >
                {item}
                <span className={`text-xs ${item === category ? "text-bridge-gold" : "text-slate-400"}`}>{item === "All Resources" ? allResources.length : allResources.filter((resource) => resource.category === item).length}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((resource) => (
            <article key={resource.id} className="group overflow-hidden rounded-lg border border-slate-200/70 bg-white shadow-card transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-200 bg-slate-100">
                <div className="h-full w-full transition duration-300 group-hover:scale-[1.03]">
                  <ResourcePreview resource={resource} />
                </div>
                <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-extrabold text-bridge-navy shadow-sm">{resource.format}</span>
                <div className="absolute bottom-2 right-2 flex gap-1.5 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                  <Link href={`/resources/${resource.id}`} className="flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-bridge-navy shadow-sm hover:text-bridge-blue" aria-label={`Preview ${resource.title}`}>
                    <Search className="h-4 w-4" />
                  </Link>
                  <a href={resourceHref(resource)} className="flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-bridge-navy shadow-sm hover:text-bridge-blue" target={resource.href.startsWith("http") ? "_blank" : undefined} rel={resource.href.startsWith("http") ? "noreferrer" : undefined} aria-label={`Open ${resource.title}`}>
                    {resource.href.startsWith("http") ? <ExternalLink className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                  </a>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-bridge-blue">{resource.category}</p>
                <Link href={`/resources/${resource.id}`} className="mt-1 line-clamp-2 block text-sm font-semibold leading-5 text-slate-950 hover:text-bridge-blue">{resource.title}</Link>
                <p className="mt-1 truncate text-xs text-slate-500">{resource.format} · {resource.status}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
