import Link from "next/link";
import { PrototypePage, Surface } from "@/components/prototype-layout";
import { allResources } from "@/lib/prototype-data";

export function generateStaticParams() {
  return allResources.map((resource) => ({ id: resource.id }));
}

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  const resource = allResources.find((item) => item.id === params.id) ?? allResources[0];

  return (
    <PrototypePage title={resource.title} subtitle={resource.description}>
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <Surface>
          <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{resource.category}</p>
          <div className="mt-5 aspect-video rounded-lg border border-slate-200 bg-[radial-gradient(circle_at_top_left,#f8fafc,#dbeafe)] p-8">
            <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-bridge-blue/30 bg-white/70 text-center">
              <div>
                <p className="text-2xl font-extrabold text-bridge-navy">{resource.title}</p>
                <p className="mt-2 text-sm text-slate-500">Preview placeholder for {resource.format}</p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            This page is ready for the real file, Canva link, video, or PDF preview. For now it gives the team a place to discuss owner, category, tags,
            approval rules, and whether the asset should earn Bridge Points when used.
          </p>
        </Surface>
        <Surface>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Resource Details</h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div><dt className="font-bold text-slate-500">Format</dt><dd className="mt-1 text-slate-950">{resource.format}</dd></div>
            <div><dt className="font-bold text-slate-500">Status</dt><dd className="mt-1 text-slate-950">{resource.status}</dd></div>
            <div><dt className="font-bold text-slate-500">Tags</dt><dd className="mt-2 flex flex-wrap gap-2">{resource.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}</dd></div>
          </dl>
          <a href={resource.href} className="mt-6 block rounded-md bg-bridge-navy px-4 py-3 text-center text-sm font-bold text-white hover:bg-bridge-blue">Open Asset</a>
          <Link href="/resources" className="mt-3 block rounded-md border border-slate-200 px-4 py-3 text-center text-sm font-bold text-bridge-navy hover:border-bridge-blue">Back to Library</Link>
        </Surface>
      </div>
    </PrototypePage>
  );
}
