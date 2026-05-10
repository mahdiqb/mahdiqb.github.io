import { Download, Mail } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export function Hero() {
  return (
    <section id="top" className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          // data &amp; product leader
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Mahdi Karabiben
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          <span className="text-foreground">Data and Product leader</span> building products in the data space, with a decade of
          experience designing and building <span className="text-foreground">petabyte-scale data products & platforms</span>. Passionate about
          open-source projects and actively contributing to the data space through articles,
          public speaking, online courses, the{" "}
          <span className="text-foreground">Data Espresso</span> newsletter, and open-source
          code. Currently a Senior Product Manager at{" "}
          <span className="text-foreground">Neo4j</span>, focusing on graph analytics.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 border border-slate-700 bg-transparent px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-slate-900"
          >
            <Download size={14} strokeWidth={1.75} /> Download Resume
          </a>
          <a
            href="https://dataespresso.substack.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 bg-transparent px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-slate-900"
          >
            <Mail size={14} strokeWidth={1.75} /> Subscribe to Newsletter
          </a>
        </div>

        <div className="mt-10">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
