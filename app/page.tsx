import { Dashboard } from "@/components/dashboard";
import { PortalShell } from "@/components/portal-shell";
import { assetPath } from "@/lib/asset-path";
import { currentMember } from "@/lib/seed-data";
import Image from "next/image";

export default function Home() {
  if (currentMember.status !== "Approved") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bridge-mist p-6">
        <section className="max-w-lg rounded-lg border border-bridge-line bg-white p-8 text-center shadow-soft">
          <Image
            src={assetPath("/bridge-agent-network-logo.svg")}
            alt="Bridge Agent Network"
            width={520}
            height={360}
            className="mx-auto h-auto w-56 rounded-sm"
          />
          <h1 className="mt-3 text-2xl font-semibold text-bridge-ink">Access pending</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Your account is waiting for an admin to approve membership for your region.
          </p>
        </section>
      </main>
    );
  }

  return (
    <PortalShell member={currentMember}>
      <Dashboard />
    </PortalShell>
  );
}
