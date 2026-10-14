import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sknliving.com",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  compressHTML: true,
  devToolbar: { enabled: false },
});
