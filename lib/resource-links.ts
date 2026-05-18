import { assetPath } from "@/lib/asset-path";
import type { Resource } from "@/lib/types";

export function isPublishedResource(resource: Resource) {
  return (resource.visibility ?? "Public") !== "Admin" && (resource.reviewState ?? "Published") === "Published";
}

export function isPublicFileResource(resource: Pick<Resource, "href">) {
  return /^\/resources\/.+\.[a-z0-9]+$/i.test(resource.href);
}

export function resourceHref(resource: Pick<Resource, "href">) {
  return resource.href.startsWith("/") ? assetPath(resource.href) : resource.href;
}

export function resourcePreviewHref(resource: Pick<Resource, "href" | "previewHref">) {
  const previewHref = resource.previewHref ?? resource.href;
  return previewHref.startsWith("/") ? assetPath(previewHref) : previewHref;
}
