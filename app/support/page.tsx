import { PrototypePage, Surface } from "@/components/prototype-layout";

export default function SupportPage() {
  return (
    <PrototypePage title="Support" subtitle="A lightweight support and FAQ page for questions agents will ask during the early portal rollout.">
      <div className="grid gap-5 lg:grid-cols-2">
        <Surface>
          <h3 className="text-lg font-extrabold text-slate-950">Need Help?</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">Use this page to collect the first support categories before we overbuild a ticketing system.</p>
          <div className="mt-5 space-y-2 text-sm font-bold text-bridge-navy">
            <p>(833) 777-BRIDGE</p>
            <p>support@bridgeagentnetwork.com</p>
          </div>
        </Surface>
        <Surface>
          <h3 className="text-lg font-extrabold text-slate-950">Common Questions</h3>
          <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
            <p><strong className="text-slate-950">Can I use the badge yet?</strong><br />In the real version, badge usage should unlock after certification.</p>
            <p><strong className="text-slate-950">How do points post?</strong><br />Most activity should be submitted by agents and reviewed by an admin.</p>
            <p><strong className="text-slate-950">Where do real files go?</strong><br />For MVP, external links are fine. Later, R2 can host portal files.</p>
          </div>
        </Surface>
      </div>
    </PrototypePage>
  );
}
