import { Download } from "lucide-react";
import { roles } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // experience
          </p>
          <ul className="mt-6 divide-y divide-slate-800 border-y border-slate-800">
            {roles.map((r) => (
              <li
                key={r.company + r.period}
                className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[1fr_auto] md:items-baseline md:gap-6"
              >
                <div>
                  <p className="text-base text-foreground">{r.title}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    @ {r.company}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {r.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pt-9">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 border border-slate-700 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-slate-900"
          >
            <Download size={14} strokeWidth={1.75} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
