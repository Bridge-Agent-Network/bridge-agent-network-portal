import { CalendarDays } from "lucide-react";
import { Badge, Card, LinkButton, Section } from "@/components/ui";
import { events } from "@/lib/seed-data";

export function EventsPanel() {
  return (
    <Section id="events" eyebrow="Live meetings" title="Events and calls">
      <Card className="divide-y divide-bridge-line">
        {events.map((event) => (
          <div key={event.id} className="grid gap-4 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-bridge-sky text-bridge-blue">
              <CalendarDays className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-bridge-ink">{event.title}</h3>
                <Badge tone="blue">{event.type}</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {event.date} at {event.time} · {event.location}
              </p>
            </div>
            <LinkButton href={event.href}>Join</LinkButton>
          </div>
        ))}
      </Card>
    </Section>
  );
}
