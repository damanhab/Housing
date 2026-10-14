import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sknliving.sa",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  compressHTML: true,
  devToolbar: { enabled: false },
});
