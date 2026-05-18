import Link from "next/link";
import { notFound } from "next/navigation";
import { PrototypePage, Surface } from "@/components/prototype-layout";
import { ResourcePreview } from "@/components/resource-preview";
import { allResources } from "@/lib/prototype-data";
import { resourceHref } from "@/lib/resource-links";

export function generateStaticParams() {
  return allResources.map((resource) => ({ id: resource.id }));
}

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  const resource = allResources.find((item) => item.id === params.id);

  if (!resource) {
    notFound();
  }

  return (
    <PrototypePage title={resource.title} subtitle={resource.description}>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Surface className="overflow-hidden !p-0">
          <div className="border-b border-slate-200/70 bg-bridge-sky px-5 py-4">
            <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{resource.category}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-950">{resource.title}</h3>
          </div>
          <div className="h-[70vh] min-h-[520px] overflow-hidden bg-[radial-gradient(circle_at_top_left,#f8fafc,#dbeafe)]">
            <ResourcePreview resource={resource} size="detail" />
          </div>
          <p className="p-5 text-sm leading-6 text-slate-600">
            {resource.recommendedUse ??
              "Use this asset in the seller-options workflow. Review the file before sharing externally, then open or download it from the action panel."}
          </p>
        </Surface>
        <Surface className="h-fit lg:sticky lg:top-20">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Resource Details</h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div><dt className="font-bold text-slate-500">Format</dt><dd className="mt-1 text-slate-950">{resource.format}</dd></div>
            <div><dt className="font-bold text-slate-500">Status</dt><dd className="mt-1 text-slate-950">{resource.status}</dd></div>
            <div><dt className="font-bold text-slate-500">Visibility</dt><dd className="mt-1 text-slate-950">{resource.visibility ?? "Public"}</dd></div>
            <div><dt className="font-bold text-slate-500">Review State</dt><dd className="mt-1 text-slate-950">{resource.reviewState ?? "Published"}</dd></div>
            <div><dt className="font-bold text-slate-500">Tags</dt><dd className="mt-2 flex flex-wrap gap-2">{resource.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}</dd></div>
          </dl>
          <a href={resourceHref(resource)} className="mt-6 block rounded-md bg-bridge-navy px-4 py-3 text-center text-sm font-bold text-white shadow-card transition hover:bg-bridge-blue" target={resource.href.startsWith("http") ? "_blank" : undefined} rel={resource.href.startsWith("http") ? "noreferrer" : undefined}>Open Asset</a>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="rounded-md border border-slate-200 px-4 py-3 text-sm font-bold text-bridge-navy hover:border-bridge-blue" type="button">Save</button>
            <button className="rounded-md border border-slate-200 px-4 py-3 text-sm font-bold text-bridge-navy hover:border-bridge-blue" type="button">Share</button>
          </div>
          <Link href="/resources" className="mt-3 block rounded-md border border-slate-200 px-4 py-3 text-center text-sm font-bold text-bridge-navy hover:border-bridge-blue">Back to Library</Link>
        </Surface>
      </div>
    </PrototypePage>
  );
}
