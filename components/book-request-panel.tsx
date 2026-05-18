"use client";

import { BookOpen } from "lucide-react";
import { useState } from "react";
import { Badge, Card, Field, Section, inputClass } from "@/components/ui";
import { allResources } from "@/lib/prototype-data";
import { resourceHref } from "@/lib/resource-links";
import { bookRequests, currentMember } from "@/lib/seed-data";
import type { BookRequest } from "@/lib/types";

const miniBookResource = allResources.find((resource) => resource.id === "renovate-mini-book");

export function BookRequestPanel() {
  const [bookType, setBookType] = useState("Residential Mini Book");
  const [quantity, setQuantity] = useState(25);
  const [branding, setBranding] = useState("");
  const [requests, setRequests] = useState<BookRequest[]>(bookRequests);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRequests((items) => [
      {
        id: `br-${Date.now()}`,
        memberName: currentMember.name,
        bookType,
        branding,
        quantity,
        status: "New"
      },
      ...items
    ]);
    setBranding("");
    setQuantity(25);
  }

  return (
    <Section id="books" eyebrow="Branded books" title="Request agent-branded mini books">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1fr]">
        <Card className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-bridge-sky text-bridge-blue">
              <BookOpen className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-bridge-ink">Branding request</h3>
              <p className="mt-1 text-sm text-slate-600">Admins fulfill book orders manually until vendor ordering is wired in.</p>
            </div>
          </div>
          {miniBookResource ? (
            <div className="mt-5 rounded-md border border-bridge-line bg-bridge-sky/50 p-4">
              <p className="text-sm font-bold text-bridge-navy">{miniBookResource.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{miniBookResource.description}</p>
              <a href={resourceHref(miniBookResource)} className="mt-3 inline-flex rounded-md bg-white px-4 py-2 text-sm font-bold text-bridge-navy ring-1 ring-slate-200 hover:ring-bridge-blue">
                Review sample
              </a>
            </div>
          ) : null}
          <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
            <Field label="Book type">
              <select className={inputClass} value={bookType} onChange={(event) => setBookType(event.target.value)}>
                <option>Residential Mini Book</option>
                <option>Land Mini Book</option>
                <option>Residential + Land Bundle</option>
              </select>
            </Field>
            <Field label="Quantity">
              <input className={inputClass} min={1} type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
            </Field>
            <Field label="Branding instructions">
              <textarea
                className={inputClass}
                rows={4}
                value={branding}
                onChange={(event) => setBranding(event.target.value)}
                placeholder="Headshot, logo, phone, email, brokerage, delivery notes..."
                required
              />
            </Field>
            <button className="rounded-md bg-bridge-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-bridge-navy" type="submit">
              Send book request
            </button>
          </form>
        </Card>
        <Card className="p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-bridge-blue">Recent requests</p>
          <div className="mt-4 space-y-3">
            {requests.map((request) => (
              <div key={request.id} className="rounded-md border border-bridge-line p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-bridge-ink">{request.bookType}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {request.memberName} · {request.quantity} copies
                    </p>
                  </div>
                  <Badge tone={request.status === "Fulfilled" ? "green" : "gold"}>{request.status}</Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{request.branding}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
