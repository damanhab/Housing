// Articles: the Markdown files in /content/articles, built into pages only when both languages of a pair are approved.
import { getCollection, type CollectionEntry } from "astro:content";
import { routeByKey } from "./routes";
import { LANGS, SITE_URL, type Lang } from "./site";

export type ArticleEntry = CollectionEntry<"articles">;
export interface Article {
  id: string;                 // e.g. "01-group-housing-licence.ar"
  lang: Lang;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  updated: string;
  body: string;               // raw Markdown, front matter removed
  entry: ArticleEntry;
  pair?: Article;
}

/** Path for an article, always with a trailing slash. Articles sit inside the Resources section. */
export const articleHref = (lang: Lang, slug: string) => `/${lang}/${routeByKey("resources").slug[lang]}/${slug}/`;
export const articleAbsUrl = (lang: Lang, slug: string) => SITE_URL + encodeURI(articleHref(lang, slug));

let cache: Article[] | undefined;
/** Approved articles whose pair is approved too, newest number first within each language. */
export async function getArticles(): Promise<Article[]> {
  if (cache) return cache;
  const entries = await getCollection("articles");
  const all: Article[] = entries.map((e) => {
    const d = e.data as Record<string, any>;
    return {
      id: e.id, lang: d.lang as Lang, slug: String(d.slug), title: String(d.title),
      metaTitle: String(d.meta_title || d.title), description: String(d.meta_description || ""),
      updated: String(d.updated || ""), body: (e.body ?? "").replace(/\r\n?/g, "\n"), entry: e,
      status: d.status, pairId: String(d.pair || "").replace(/\.md$/, ""),
    } as Article & { status: string; pairId: string };
  });
  const byId = new Map(all.map((a) => [a.id, a as Article & { status: string; pairId: string }]));
  const ok = all.filter((a: any) => a.status === "approved" && byId.get(a.pairId)?.status === "approved" && LANGS.includes(a.lang));
  ok.forEach((a: any) => { a.pair = byId.get(a.pairId); });
  cache = ok.sort((a, b) => a.id.localeCompare(b.id));
  return cache;
}

/** FAQ pairs from the "## أسئلة شائعة" / "## FAQ" section: each "### question" and the paragraph after it. */
export function articleFaq(a: Article): { q: string; a: string }[] {
  const m = a.body.split(/^## (?:أسئلة شائعة|FAQ)\s*$/m)[1];
  if (!m) return [];
  const section = m.split(/^(?:## |---)/m)[0];
  return section.split(/^### /m).slice(1).map((block) => {
    const [q, ...rest] = block.split("\n");
    return { q: q.trim(), a: plain(rest.join("\n")) };
  }).filter((f) => f.q && f.a);
}

/** Markdown to plain text (for JSON-LD answers). */
export const plain = (md: string) => md.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`>]/g, "").replace(/\s+/g, " ").trim();

/** The "short answer" paragraph at the top, as plain text (for the page lede and descriptions). */
export function articleSummary(a: Article): string {
  const p = a.body.trim().split(/\n\s*\n/)[0] ?? "";
  return plain(p.replace(/^\*\*[^*]+:\*\*\s*/, ""));
}
