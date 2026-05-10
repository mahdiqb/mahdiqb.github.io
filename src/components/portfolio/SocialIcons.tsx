import { Github, Linkedin, BookOpen, Coffee, Twitter, Cloud, MessageSquareCode } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";

const items = [
  { href: socialLinks.github, label: "GitHub", icon: Github },
  { href: socialLinks.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: socialLinks.medium, label: "Medium", icon: BookOpen },
  { href: socialLinks.substack, label: "Substack", icon: Coffee },
  { href: socialLinks.stackoverflow, label: "StackOverflow", icon: MessageSquareCode },
  { href: socialLinks.x, label: "X", icon: Twitter },
  { href: socialLinks.bluesky, label: "Bluesky", icon: Cloud },
];

export function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-0 border border-slate-800">
      {items.map(({ href, label, icon: Icon }, i) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`inline-flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:bg-slate-900 hover:text-foreground ${
            i > 0 ? "border-l border-slate-800" : ""
          }`}
        >
          <Icon size={15} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
