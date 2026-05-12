import { FileText } from "lucide-react";
import { Badge, Card, LinkButton, Section } from "@/components/ui";
import { resources } from "@/lib/seed-data";

export function ResourcesPanel() {
  return (
    <Section id="resources" eyebrow="Marketing assets" title="Resource library">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} className="flex flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bridge-sky text-bridge-blue">
                <FileText className="h-5 w-5" aria-hidden />
              </div>
              <Badge tone={resource.status === "Ready" ? "green" : resource.status === "Draft" ? "gold" : "slate"}>{resource.status}</Badge>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-bridge-blue">{resource.category}</p>
            <h3 className="mt-1 text-lg font-semibold text-bridge-ink">{resource.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{resource.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="slate">{resource.format}</Badge>
              {resource.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} tone="blue">{tag}</Badge>
              ))}
            </div>
            <div className="mt-5">
              <LinkButton href={resource.href}>Open asset</LinkButton>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
