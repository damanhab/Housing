// Plain-Markdown twin of each article, for AI crawlers.
import { routeByKey } from "../../../lib/routes";
import { getArticles, articleAbsUrl, type Article } from "../../../lib/articles";
export async function getStaticPaths() {
  return (await getArticles()).map((a) => ({ params: { lang: a.lang, hub: routeByKey("resources").slug[a.lang], article: a.slug }, props: { a } }));
}
export const GET = ({ props }: { props: { a: Article } }) =>
  new Response(`# ${props.a.title}\n\n${props.a.lang === "ar" ? "الرابط" : "URL"}: ${articleAbsUrl(props.a.lang, props.a.slug)}\n\n${props.a.body.trim()}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
