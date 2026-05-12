import { PrototypePage, Surface } from "@/components/prototype-layout";
import { optionDropItems } from "@/lib/prototype-data";

export default function MarketingPage() {
  return (
    <PrototypePage title="Marketing Center" subtitle="A simple Monthly Option Drop workspace for the campaigns agents can use immediately.">
      <div className="grid gap-5 lg:grid-cols-[420px_1fr]">
        <Surface>
          <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">May Option Drop</p>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-950">Know Every Path Before You Sell</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">A full monthly campaign package centered on seller optionality and the four Bridge paths.</p>
          <button className="mt-5 rounded-md bg-bridge-navy px-4 py-3 text-sm font-bold text-white">Mark Campaign Used</button>
        </Surface>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {optionDropItems.map((item) => (
            <Surface key={item}>
              <h3 className="font-extrabold text-slate-950">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Placeholder content ready for the real copy, Canva link, PDF, or script.</p>
              <button className="mt-4 rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-bridge-navy">Open</button>
            </Surface>
          ))}
        </div>
      </div>
    </PrototypePage>
  );
}
