import { PlayCircle } from "lucide-react";
import { Badge, Card, LinkButton, Section } from "@/components/ui";
import { trainings } from "@/lib/seed-data";

export function TrainingPanel() {
  return (
    <Section id="training" eyebrow="On-demand" title="Training center">
      <div className="grid gap-4 lg:grid-cols-3">
        {trainings.map((training) => (
          <Card key={training.id} className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bridge-navy text-white">
                <PlayCircle className="h-5 w-5" aria-hidden />
              </div>
              <Badge tone="blue">{training.length}</Badge>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-bridge-blue">{training.type}</p>
            <h3 className="mt-1 text-lg font-semibold text-bridge-ink">{training.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{training.description}</p>
            <div className="mt-5">
              <LinkButton href={training.href}>Watch training</LinkButton>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
