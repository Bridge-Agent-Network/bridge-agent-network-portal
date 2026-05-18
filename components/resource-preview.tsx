import Image from "next/image";
import { FileText } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { resourcePreviewHref } from "@/lib/resource-links";
import type { Resource } from "@/lib/types";

export function ResourcePreview({ resource, size = "card" }: { resource: Resource; size?: "card" | "detail" }) {
  const isDetail = size === "detail";
  const isPdf = resource.format === "PDF";

  if (isPdf) {
    return (
      <iframe
        src={`${resourcePreviewHref(resource)}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
        title={`${resource.title} PDF preview`}
        loading="lazy"
        className={`h-full w-full border-0 bg-white ${isDetail ? "" : "pointer-events-none"}`}
      />
    );
  }

  if (resource.previewImage) {
    return (
      <Image
        src={assetPath(resource.previewImage)}
        alt=""
        width={isDetail ? 1200 : 800}
        height={isDetail ? 675 : 450}
        className="h-full w-full object-cover"
        priority={isDetail}
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,#eff6ff,#dbeafe)] text-bridge-navy">
      <FileText className={isDetail ? "h-14 w-14" : "h-10 w-10"} />
    </div>
  );
}
