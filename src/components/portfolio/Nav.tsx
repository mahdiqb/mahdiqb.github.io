const links = [
  { href: "#experience", label: "experience" },
  { href: "#publications", label: "publications" },
  { href: "#articles", label: "articles" },
  { href: "#speaking", label: "speaking" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-foreground">
          mahdi<span className="text-muted-foreground">@karabiben</span>
          <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-foreground" />
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
