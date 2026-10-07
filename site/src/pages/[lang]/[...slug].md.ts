import { LANGS, type Lang } from "../../lib/site";
import { LIVE_ROUTES as ROUTES, type PageKey } from "../../lib/routes";
import { pageMarkdown } from "../../lib/markdown";
export function getStaticPaths() {
  return LANGS.flatMap((lang) => ROUTES.filter((r) => r.slug[lang] !== "" && r.inSitemap !== false)
    .map((r) => ({ params: { lang, slug: r.slug[lang] }, props: { key: r.key } })));
}
export const GET = ({ params, props }: { params: { lang: Lang }; props: { key: PageKey } }) =>
  new Response(pageMarkdown(props.key, params.lang), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
