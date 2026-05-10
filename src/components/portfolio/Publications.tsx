import { ArrowUpRight } from "lucide-react";
import { publications } from "@/lib/portfolio-data";

export function Publications() {
  const courses = publications.filter((p) => p.kind === "course");
  const articles = publications.filter((p) => p.kind === "article");

  return (
    <>
      <section id="publications" className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                // publications &amp; courses
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Long-form work
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              {String(courses.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-0 border border-slate-800 md:grid-cols-2">
            {courses.map((p, i) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col p-6 transition-colors hover:bg-slate-900/40 ${
                  i % 2 === 0 ? "md:border-r md:border-slate-800" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.outlet} · {p.year}
                  </span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <span className="mt-4 inline-block w-fit border border-slate-800 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  course
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                // articles &amp; writing
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Selected articles
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              {String(articles.length).padStart(2, "0")}
            </span>
          </div>

          <ul className="border-y border-slate-800 divide-y divide-slate-800">
            {articles.map((a) => (
              <li key={a.url}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-2 px-2 py-5 transition-colors hover:bg-slate-900/40 md:grid-cols-[110px_1fr_auto] md:items-baseline md:gap-6 md:px-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {a.year}
                  </span>
                  <div>
                    <p className="text-base text-foreground">{a.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{a.description}</p>
                  </div>
                  <div className="flex items-center gap-3 md:justify-end">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {a.outlet}
                    </span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-muted-foreground transition-colors group-hover:text-foreground"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
