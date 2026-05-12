"use client";

import { useState } from "react";
import { Surface } from "@/components/prototype-layout";
import { currentMember } from "@/lib/seed-data";

export function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: currentMember.name,
    email: currentMember.email,
    phone: currentMember.phone,
    brokerage: currentMember.brokerage,
    territory: currentMember.territory,
    bio: "I help sellers compare every serious path before they decide how to sell.",
    instagram: "@bridgeagent"
  });

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
      <Surface>
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Edit Profile</h3>
        <form className="mt-4 grid gap-4 sm:grid-cols-2">
          {Object.entries(profile).map(([key, value]) => (
            <label key={key} className={`grid gap-1 text-sm font-bold capitalize text-slate-700 ${key === "bio" ? "sm:col-span-2" : ""}`}>
              {key}
              {key === "bio" ? (
                <textarea className="min-h-28 rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" value={value} onChange={(event) => setProfile((current) => ({ ...current, [key]: event.target.value }))} />
              ) : (
                <input className="rounded-md border border-slate-200 px-3 py-2 font-normal outline-none focus:border-bridge-blue" value={value} onChange={(event) => setProfile((current) => ({ ...current, [key]: event.target.value }))} />
              )}
            </label>
          ))}
        </form>
      </Surface>
      <Surface>
        <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">Public Profile Preview</p>
        <h3 className="mt-3 text-2xl font-extrabold text-slate-950">{profile.name}</h3>
        <p className="text-sm font-bold text-slate-500">{profile.brokerage}</p>
        <p className="mt-4 rounded-md bg-bridge-sky p-3 text-sm font-bold text-bridge-navy">Bridge Certified Agent - Seller Options Strategist</p>
        <p className="mt-4 text-sm leading-6 text-slate-600">{profile.bio}</p>
        <div className="mt-4 space-y-1 text-sm text-slate-600">
          <p>{profile.territory}</p>
          <p>{profile.phone}</p>
          <p>{profile.email}</p>
          <p>{profile.instagram}</p>
        </div>
      </Surface>
    </div>
  );
}
