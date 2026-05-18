"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ExternalLink, FileText, Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { allResources } from "@/lib/prototype-data";
import { assetPath } from "@/lib/asset-path";
import { resourceHref } from "@/lib/resource-links";

const categories = ["All Resources", ...Array.from(new Set(allResources.map((resource) => resource.category)))];

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
          <Surface key={resource.id} className="flex min-h-[300px] flex-col overflow-hidden !p-0">
            <div className="relative h-36 overflow-hidden border-b border-slate-200 bg-slate-100">
              {resource.previewImage ? (
                <Image src={assetPath(resource.previewImage)} alt="" width={800} height={450} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,#eff6ff,#dbeafe)] text-bridge-navy">
                  <FileText className="h-10 w-10" />
                </div>
              )}
              <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-extrabold text-bridge-navy shadow-sm">{resource.format}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{resource.category}</p>
                <h3 className="mt-2 text-lg font-extrabold text-slate-950">{resource.title}</h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{resource.status}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{resource.description}</p>
            {resource.recommendedUse ? <p className="mt-3 rounded-md bg-bridge-sky/70 px-3 py-2 text-xs font-semibold leading-5 text-bridge-navy">{resource.recommendedUse}</p> : null}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{resource.reviewState ?? "Published"}</span>
              {resource.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-bridge-sky px-3 py-1 text-xs font-bold text-bridge-navy">{tag}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <Link href={`/resources/${resource.id}`} className="rounded-md bg-bridge-navy px-4 py-2 text-sm font-bold text-white hover:bg-bridge-blue">
                View Details
              </Link>
              <a href={resourceHref(resource)} className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-bridge-navy hover:border-bridge-blue" target={resource.href.startsWith("http") ? "_blank" : undefined} rel={resource.href.startsWith("http") ? "noreferrer" : undefined}>
                {resource.href.startsWith("http") ? <ExternalLink className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                Open
              </a>
            </div>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
}
