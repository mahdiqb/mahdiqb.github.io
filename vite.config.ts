// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// The Cloudflare adapter writes the SSR entry as `dist/server/index.js`,
// but TanStack's prerender preview-server imports `dist/server/server.js`.
// Mirror the file after the SSR bundle is written so prerender can find it.
const aliasSsrEntryForPrerender = {
  name: "alias-ssr-entry-for-prerender",
  apply: "build" as const,
  writeBundle(this: unknown, options: { dir?: string }) {
    const dir = options?.dir;
    if (!dir || !dir.endsWith("server")) return;
    const src = resolve(dir, "index.js");
    const dest = resolve(dir, "server.js");
    if (existsSync(src) && !existsSync(dest)) {
      copyFileSync(src, dest);
    }
  },
};

// Only prerender when building for GitHub Pages (set in the GH Actions workflow).
// The prerender crashes Vite's teardown on some Node/Bun runtimes, which would
// fail Lovable's normal Cloudflare Worker build.
const PRERENDER = process.env.PRERENDER === "1";

export default defineConfig({
  tanstackStart: PRERENDER
    ? {
        prerender: { enabled: true, crawlLinks: true, retryCount: 2 },
        pages: [{ path: "/" }],
      }
    : {},
  vite: {
    plugins: PRERENDER ? [aliasSsrEntryForPrerender] : [],
  },
});
