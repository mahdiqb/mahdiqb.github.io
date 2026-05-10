import { techStack } from "@/lib/portfolio-data";

export function TechStack() {
  return (
    <section id="stack" className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-baseline gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            $ cat
          </span>
          <h2 className="font-mono text-sm text-foreground">~/.config/stack.toml</h2>
        </div>

        <div className="border border-slate-800 bg-slate-950/40">
          <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2">
            <span className="h-2.5 w-2.5 border border-slate-700" />
            <span className="h-2.5 w-2.5 border border-slate-700" />
            <span className="h-2.5 w-2.5 border border-slate-700" />
            <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              core stack
            </span>
          </div>
          <div className="divide-y divide-slate-900">
            {techStack.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:gap-6"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground md:w-28">
                  [{group.label}]
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-slate-800 px-2 py-0.5 font-mono text-[11px] text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
