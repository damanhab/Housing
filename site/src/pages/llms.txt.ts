import { IS_PROD } from "../lib/site";
import { llmsTxt } from "../lib/markdown";
export const GET = () => new Response(IS_PROD ? llmsTxt() : "# SakanHub — internal test build. Not for indexing.\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
