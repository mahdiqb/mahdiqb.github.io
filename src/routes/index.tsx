import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";

import { Experience } from "@/components/portfolio/Experience";
import { Publications } from "@/components/portfolio/Publications";
import { Speaking } from "@/components/portfolio/Speaking";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mahdi Karabiben — Data & Product Leader" },
      {
        name: "description",
        content:
          "Data and Product leader. A decade designing petabyte-scale data platforms. Now Senior PM at Neo4j, focused on graph analytics.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Publications />
        <Speaking />
      </main>
      <Footer />
    </div>
  );
}
