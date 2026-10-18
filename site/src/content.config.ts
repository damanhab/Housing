// Article drafts live in /content/articles (outside the site) so the founder can edit them on their own.
// Only pairs marked `status: approved` are built into pages (see src/lib/articles.ts).
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "0*.md", base: "../content/articles", generateId: ({ entry }) => entry.replace(/\.md$/, "") }),
});

export const collections = { articles };
