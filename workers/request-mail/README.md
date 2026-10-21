# request-mail Worker

Two jobs: forwards incoming hello@SKNliving.com mail to every founder inbox (Email Routing rule hello@ → this Worker, since a forward rule takes one address), and emails each website request to hello@.

- **Why a Worker:** Pages Functions can't use the `send_email` binding, so the Pages Function `site/functions/api/request.js` validates the form and calls this Worker through a service binding named `MAILER`.
- **Bindings:** `SEB` = send_email (no fixed destination). Sender `forms@sknliving.com`; the domain must have Email Routing on.
- **Deployed via the Cloudflare API** as script `skn-request-mail` (module worker, compatibility date 2026-10-01). Pages project `housing` → production → service binding `MAILER` → `skn-request-mail`.
- **If the mail fails** the endpoint returns 502 and the form opens WhatsApp with the same request, so nothing is lost silently.
