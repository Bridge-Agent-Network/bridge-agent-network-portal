import { PrototypePage, Surface } from "@/components/prototype-layout";
import { allResources } from "@/lib/prototype-data";
import { resourceHref } from "@/lib/resource-links";

const marketingAssets = allResources.filter((resource) => resource.category === "Marketing");

export default function MarketingPage() {
  return (
    <PrototypePage title="Marketing Center" subtitle="A simple Monthly Option Drop workspace for the campaigns agents can use immediately.">
      <div className="grid gap-5 lg:grid-cols-[420px_1fr]">
        <Surface>
          <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">Shared Asset Pack</p>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-950">Campaigns Agents Can Use Now</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Real email and text campaigns from the shared Bridge Agent asset package, grouped around Three Values, Renovate to Sell, Renovate to Buy, and Buy Before You Sell.
          </p>
          <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4">
            <p className="text-3xl font-extrabold text-bridge-gold">{marketingAssets.length}</p>
            <p className="mt-1 text-sm font-bold text-bridge-navy">ready campaign files</p>
          </div>
          <button className="mt-5 rounded-md bg-bridge-navy px-4 py-3 text-sm font-bold text-white">Mark Campaign Used</button>
        </Surface>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketingAssets.map((asset) => (
            <Surface key={asset.id}>
              <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{asset.format}</p>
              <h3 className="mt-2 font-extrabold text-slate-950">{asset.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{asset.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {asset.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full bg-bridge-sky px-3 py-1 text-xs font-bold text-bridge-navy">{tag}</span>
                ))}
              </div>
              <a href={resourceHref(asset)} className="mt-4 inline-flex rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-bridge-navy hover:border-bridge-blue">
                Open file
              </a>
            </Surface>
          ))}
        </div>
      </div>
    </PrototypePage>
  );
}
