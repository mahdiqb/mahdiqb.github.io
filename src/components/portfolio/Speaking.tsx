import { ArrowUpRight, Mic, Headphones } from "lucide-react";
import { talks } from "@/lib/portfolio-data";

export function Speaking() {
  return (
    <section id="speaking" className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              // speaking &amp; podcasts
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              Stage &amp; mic
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {String(talks.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid gap-0 border border-slate-800 md:grid-cols-2">
          {talks.map((t, i) => (
            <a
              key={t.url}
              href={t.url}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col p-6 transition-colors hover:bg-slate-900/40 ${
                i % 2 === 0 ? "md:border-r md:border-slate-800" : ""
              } ${i < talks.length - 2 ? "border-b border-slate-800" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {t.kind === "podcast" ? (
                    <Headphones size={12} strokeWidth={1.75} />
                  ) : (
                    <Mic size={12} strokeWidth={1.75} />
                  )}
                  {t.kind} · {t.year}
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-muted-foreground transition-colors group-hover:text-foreground"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-foreground">{t.title}</h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{t.venue}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
