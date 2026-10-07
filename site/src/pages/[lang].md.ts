import { LANGS, type Lang } from "../lib/site";
import { pageMarkdown } from "../lib/markdown";
export function getStaticPaths() { return LANGS.map((lang) => ({ params: { lang } })); }
export const GET = ({ params }: { params: { lang: Lang } }) =>
  new Response(pageMarkdown("home", params.lang), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
