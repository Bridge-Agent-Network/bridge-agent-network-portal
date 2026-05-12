import { CalendarDays } from "lucide-react";
import { PrototypePage, Surface } from "@/components/prototype-layout";
import { events } from "@/lib/seed-data";

export default function EventsPage() {
  return (
    <PrototypePage title="Live Calls" subtitle="Preview Coffee with Brad, Deal Lab calls, and live trainings with external meeting links.">
      <div className="grid gap-4 lg:grid-cols-3">
        {events.map((event) => (
          <Surface key={event.id}>
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-bridge-sky text-bridge-navy"><CalendarDays className="h-5 w-5" /></div>
            <p className="mt-4 text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{event.type}</p>
            <h3 className="mt-2 text-lg font-extrabold text-slate-950">{event.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{event.date} at {event.time}</p>
            <p className="text-sm text-slate-500">{event.location}</p>
            <a className="mt-5 inline-flex rounded-md bg-bridge-navy px-4 py-2 text-sm font-bold text-white" href={event.href}>Join / Open Link</a>
          </Surface>
        ))}
      </div>
    </PrototypePage>
  );
}
