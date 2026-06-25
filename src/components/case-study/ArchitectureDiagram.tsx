import type { Project } from "@/data/projects";

export function ArchitectureDiagram({ project }: { project: Project }) {
  return (
    <div className="card rounded-2xl p-6 sm:p-8">
      <p className="text-sm leading-relaxed text-stone-600">{project.architecture.summary}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {project.architecture.layers.map((layer) => (
          <div key={layer.name} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
              {layer.name}
            </p>
            <ul className="mt-3 space-y-2">
              {layer.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
                  <span className="h-1 w-1 rounded-full bg-stone-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
