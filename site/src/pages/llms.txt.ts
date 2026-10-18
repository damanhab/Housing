import { IS_PROD } from "../lib/site";
import { llmsTxt } from "../lib/markdown";
import { getArticles } from "../lib/articles";
export const GET = async () => new Response(IS_PROD ? llmsTxt(await getArticles()) : "# SKN: internal test build. Not for indexing.\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
