import { CheckCircle2, Circle } from "lucide-react";
import { PrototypePage, Surface } from "@/components/prototype-layout";
import { allResources, certificationModules } from "@/lib/prototype-data";
import { resourceHref } from "@/lib/resource-links";
import { trainings } from "@/lib/seed-data";

export default function TrainingPage() {
  const completed = certificationModules.filter((module) => module.complete).length;
  const trainingAssets = allResources.filter((resource) => resource.category === "Training");

  return (
    <PrototypePage title="Training Center" subtitle="Preview certification modules, on-demand videos, and the training progress agents will chase.">
      <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-4 md:grid-cols-2">
          {trainings.map((training) => (
            <Surface key={training.id}>
              <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">{training.type}</p>
              <h3 className="mt-2 text-lg font-extrabold text-slate-950">{training.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{training.description}</p>
              <p className="mt-4 text-sm font-bold text-bridge-navy">{training.length}</p>
            </Surface>
          ))}
          {trainingAssets.map((asset) => (
            <Surface key={asset.id}>
              <p className="text-xs font-extrabold uppercase tracking-wide text-bridge-blue">Asset Pack</p>
              <h3 className="mt-2 text-lg font-extrabold text-slate-950">{asset.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{asset.description}</p>
              <p className="mt-4 text-sm font-bold text-bridge-navy">{asset.format}</p>
              <a href={resourceHref(asset)} className="mt-4 inline-flex rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-bridge-navy hover:border-bridge-blue">
                Open training asset
              </a>
            </Surface>
          ))}
        </div>
        <Surface>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-bridge-navy">Certification Progress</h3>
          <p className="mt-3 text-3xl font-extrabold text-bridge-gold">{completed}/{certificationModules.length}</p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-bridge-gold" style={{ width: `${(completed / certificationModules.length) * 100}%` }} />
          </div>
          <div className="mt-5 space-y-3">
            {certificationModules.map((module) => (
              <div key={module.title} className="flex items-start gap-3">
                {module.complete ? <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> : <Circle className="mt-0.5 h-5 w-5 text-slate-300" />}
                <div>
                  <p className="text-sm font-bold text-slate-950">{module.title}</p>
                  <p className="text-xs text-slate-500">{module.points} points</p>
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </PrototypePage>
  );
}
