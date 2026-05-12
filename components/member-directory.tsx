import { Mail, Phone } from "lucide-react";
import { Badge, Card, Section } from "@/components/ui";
import { members } from "@/lib/seed-data";
import { getInitials } from "@/lib/utils";

export function MemberDirectory() {
  return (
    <Section id="directory" eyebrow="Territory network" title="Member directory">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {members.map((member) => (
          <Card key={member.id} className="p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-bridge-navy text-sm font-bold text-white">
                {getInitials(member.name)}
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-semibold text-bridge-ink">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.brokerage}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone={member.role === "Agent" ? "blue" : "gold"}>{member.role}</Badge>
              <Badge tone="slate">{member.territory}</Badge>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden /> {member.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden /> {member.email}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.specialties.slice(0, 3).map((specialty) => (
                <Badge key={specialty} tone="slate">{specialty}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
