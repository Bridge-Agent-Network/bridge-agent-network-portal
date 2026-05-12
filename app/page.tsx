import { Dashboard } from "@/components/dashboard";
import { PortalShell } from "@/components/portal-shell";
import { currentMember } from "@/lib/seed-data";

export default function Home() {
  if (currentMember.status !== "Approved") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bridge-mist p-6">
        <section className="max-w-lg rounded-lg border border-bridge-line bg-white p-8 text-center shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-bridge-blue">Bridge Agent Network</p>
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
