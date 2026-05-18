import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PrototypePage, Surface } from "@/components/prototype-layout";
import { allResources } from "@/lib/prototype-data";
import { assetPath } from "@/lib/asset-path";
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
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <Surface>
          <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{resource.category}</p>
          <div className="mt-5 aspect-video overflow-hidden rounded-lg border border-slate-200 bg-[radial-gradient(circle_at_top_left,#f8fafc,#dbeafe)]">
            {resource.previewImage ? (
              <Image src={assetPath(resource.previewImage)} alt="" width={1200} height={675} className="h-full w-full object-cover" priority />
            ) : (
              <div className="flex h-full items-center justify-center border border-dashed border-bridge-blue/30 bg-white/70 p-8 text-center">
              <div>
                <p className="text-2xl font-extrabold text-bridge-navy">{resource.title}</p>
                <p className="mt-2 text-sm text-slate-500">{resource.format} asset ready to open or download</p>
              </div>
              </div>
            )}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            {resource.recommendedUse ??
              "Use this asset in the seller-options workflow. Review the file before sharing externally, then open or download it from the action panel."}
          </p>
        </Surface>
        <Surface>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Resource Details</h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div><dt className="font-bold text-slate-500">Format</dt><dd className="mt-1 text-slate-950">{resource.format}</dd></div>
            <div><dt className="font-bold text-slate-500">Status</dt><dd className="mt-1 text-slate-950">{resource.status}</dd></div>
            <div><dt className="font-bold text-slate-500">Visibility</dt><dd className="mt-1 text-slate-950">{resource.visibility ?? "Public"}</dd></div>
            <div><dt className="font-bold text-slate-500">Review State</dt><dd className="mt-1 text-slate-950">{resource.reviewState ?? "Published"}</dd></div>
            <div><dt className="font-bold text-slate-500">Tags</dt><dd className="mt-2 flex flex-wrap gap-2">{resource.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}</dd></div>
          </dl>
          <a href={resourceHref(resource)} className="mt-6 block rounded-md bg-bridge-navy px-4 py-3 text-center text-sm font-bold text-white hover:bg-bridge-blue" target={resource.href.startsWith("http") ? "_blank" : undefined} rel={resource.href.startsWith("http") ? "noreferrer" : undefined}>Open Asset</a>
          <Link href="/resources" className="mt-3 block rounded-md border border-slate-200 px-4 py-3 text-center text-sm font-bold text-bridge-navy hover:border-bridge-blue">Back to Library</Link>
        </Surface>
      </div>
    </PrototypePage>
  );
}
