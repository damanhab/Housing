# Domain and hosting options for SKN

**Checked:** 14 Oct 2026, by the cloud agent. Availability for gTLDs comes from the registries' RDAP. For `.sa`, the SaudiNIC WHOIS is behind a CAPTCHA, so `.sa` names were checked by DNS only (NXDOMAIN = no delegation, very likely free). Confirm at a registrar before paying.

## Domains

**Taken**

| Domain | Status |
|---|---|
| `skn.sa` | Registered to «شركة ان المحدودة» (SaudiNIC WHOIS, checked by the founder 14 Oct 2026); only a "Hello World!" placeholder page on Cloudflare DNS, DNSSEC off. Not the clinics, as far as the record shows: a possible purchase. |
| `skn.com.sa` | **«عيادات SKN للتجميل» (SKN Clinics)**, an established Saudi brand. See the trademark note below. |
| `skn.com` | For sale through the broker Grails (grails.com/domain/skn-com). No listed price: quote on request, valid 7 days, paid via Escrow.com (buyer pays fees). Grails says ~85 % of its portfolio sells for US$100,000–250,000; 3-letter .coms usually sit at the top of that range or above. Pitched at skincare and beauty. |
| `skn.ai`, `skn.app`, `skn.tech`, `skn.org` | Registered; parked at marketplaces (Atom / Afternic), so probably for sale |
| `skn.io` | Personal site of "Seth W. Klein" (a blog), in use. Unlikely to sell cheaply. |
| `skn.net` | Held since 1998 (Namecheap, renewed to 2029), DNS on Hetzner; no website answers. Probably the same owner as `skn.io` (initials). Long-held and not listed for sale. |
| `getskn.com` | Held since 2007 (Namecheap, to 2027); the site returns 404. Parked but not listed for sale: you could make an offer. |
| `sknhub.com` | Live: a login page for "Skillanation Hub" (GoDaddy, fully locked). In use; not an option. |
| `skn.xyz`, `skn.homes`, `sknsa.com` | Registered |

**Free (as of this check)**

| Domain | How checked |
|---|---|
| `sknhousing.com`, `skn-housing.com`, `skncrew.com`, `sknliving.com` | RDAP: available |
| `skn.co` | RDAP: available. Three-letter `.co` names are often priced as premium. |
| `skn.work` | RDAP: available |
| `sknhousing.sa`, `sknhousing.com.sa`, `skn-housing.sa`, `skngroup.sa`, `skn.net.sa` | DNS: no delegation |

**Trademark note.** "SKN" is already a well-known Saudi brand in cosmetic clinics (`skn.com.sa`). Different business classes can coexist, but the overlap on the exact three letters in the same market is a real risk. Get the IP-lawyer pre-search (brand guide §8) before buying domains or printing anything.

## Hosting

| Need | Pick | Cost | Notes |
|---|---|---|---|
| Lowest price | **Cloudflare Pages** (already running) | $0 | 500 builds/month, 100 custom domains per project; Functions use the Workers free tier. `.com` domains at cost (~$10.46/yr) through Cloudflare Registrar. |
| Agent / MCP setup | **Cloudflare** again | same | Official remote MCP server (`mcp.cloudflare.com/mcp`, OAuth) covers Pages, DNS and Registrar; a Workers Builds MCP covers build logs. The Registrar API (beta, April 2026) can search, check and register `.com`/`.net`/`.org`/`.app`/`.dev` programmatically. |
| Runner-up with MCP | Vercel (`mcp.vercel.com`) or Netlify (`@netlify/mcp`) | Vercel Pro $20/user/month for commercial use (Hobby is non-commercial); Netlify has a free tier | Vercel's MCP started read-only, so check whether it can deploy. Netlify's official MCP can create and deploy sites. Moving would mean re-doing the Cloudflare password gate (`site/functions/_middleware.js`). |

**`.sa` domains can't be bought by an agent.** They go through a SaudiNIC-accredited Saudi registrar (≈ SAR 99–200/yr, e.g. Hyyat, ProHost, stc Cloud) and need a Saudi CR and Nafath verification. The founder registers them, then points the nameservers to Cloudflare; after that an agent can do the rest through the Cloudflare MCP/API.
