import { IS_PROD, SITE_URL } from "../lib/site";

const TEST = `# SakanHub — INTERNAL TEST BUILD. Not for indexing.
User-agent: *
Disallow: /
`;

const PROD = `# SakanHub — robots.txt
User-agent: *
Allow: /
Disallow: /api/

# OpenAI
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /

# Anthropic
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /

# Google (Gemini) and Apple
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

# Perplexity, Microsoft, Common Crawl
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: bingbot
Allow: /
User-agent: CCBot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const GET = () => new Response(IS_PROD ? PROD : TEST, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
