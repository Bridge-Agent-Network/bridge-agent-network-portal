import { Download, Eye, Link as LinkIcon } from "lucide-react";
import { PrototypePage, Surface } from "@/components/prototype-layout";
import { allResources } from "@/lib/prototype-data";
import { resourceHref } from "@/lib/resource-links";

const marketingAssets = allResources.filter((resource) => resource.category === "Marketing");
const tabs = ["Social", "Print", "Email", "Video", "Scripts"];

export default function MarketingPage() {
  return (
    <PrototypePage title="Marketing Center" subtitle="A simple Monthly Option Drop workspace for the campaigns agents can use immediately.">
      <div className="grid gap-5 lg:grid-cols-[420px_1fr]">
        <Surface className="border-l-4 border-l-bridge-gold">
          <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">Shared Asset Pack</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Campaigns Agents Can Use Now</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Real email and text campaigns from the shared Bridge Agent asset package, grouped around Three Values, Renovate to Sell, Renovate to Buy, and Buy Before You Sell.
          </p>
          <div className="mt-5 rounded-md border border-slate-200 bg-bridge-sky p-4">
            <p className="text-3xl font-semibold tracking-tight text-bridge-gold">{marketingAssets.length}</p>
            <p className="mt-1 text-sm font-bold text-bridge-navy">ready campaign files</p>
          </div>
          <button className="mt-5 rounded-md bg-bridge-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-bridge-blue" type="button">Mark Campaign Used</button>
        </Surface>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <button key={tab} type="button" className={`rounded-full border px-4 py-2 text-xs font-bold transition ${index === 2 ? "border-bridge-navy bg-bridge-navy text-white" : "border-slate-200 bg-white text-slate-600 hover:border-bridge-navy hover:text-bridge-navy"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
          {marketingAssets.map((asset) => (
            <article key={asset.id} className="group overflow-hidden rounded-lg border border-slate-200/70 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover">
              <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_top_left,#ffffff,#eef2f8)] p-4">
                <span className="rounded-md bg-bridge-navy px-2.5 py-1 text-[11px] font-extrabold text-white">{asset.format}</span>
                <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                  {[Eye, Download, LinkIcon].map((Icon, index) => (
                    <a key={index} href={resourceHref(asset)} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-bridge-navy shadow-sm hover:text-bridge-blue" aria-label="Open marketing asset">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-bridge-blue">{asset.tags[0] ?? "campaign"}</p>
                <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-slate-950">{asset.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{asset.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {asset.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="rounded-full bg-bridge-sky px-3 py-1 text-xs font-bold text-bridge-navy">{tag}</span>
                ))}
              </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </PrototypePage>
  );
}
