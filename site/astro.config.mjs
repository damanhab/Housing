import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://skn.sa",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  compressHTML: true,
  devToolbar: { enabled: false },
});
