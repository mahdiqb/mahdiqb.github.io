import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-foreground">
            mahdi karabiben
          </p>
          <p className="mt-2 font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} · all rights reserved ·{" "}
            <a
              href="https://github.com/mahdiqb"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 hover:text-foreground hover:underline"
            >
              source
            </a>
          </p>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
