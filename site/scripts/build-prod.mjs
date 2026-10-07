// Production build: serves the real robots.txt / llms.txt, removes noindex. Only run after founder sign-off.
import { spawnSync } from "node:child_process";
const env = { ...process.env, SITE_MODE: "production" };
for (const cmd of ["npx astro build", "node scripts/postbuild.mjs"]) {
  const r = spawnSync(cmd, { stdio: "inherit", shell: true, env });
  if (r.status) process.exit(r.status);
}
