# request-mail Worker

Two jobs: forwards incoming hello@SKNliving.com mail to every founder inbox (Email Routing rule hello@ → this Worker, since a forward rule takes one address), and emails each website request to hello@.

- **Why a Worker:** Pages Functions can't use the `send_email` binding, so the Pages Function `site/functions/api/request.js` validates the form and calls this Worker through a service binding named `MAILER`.
- **Bindings:** `SEB` = send_email (no fixed destination). Sender `forms@sknliving.com`; the domain must have Email Routing on.
- **Deployed via the Cloudflare API** as script `skn-request-mail` (module worker, compatibility date 2026-10-01). Pages project `housing` → production → service binding `MAILER` → `skn-request-mail`.
- **Recipients:** `FORWARD_TO` in `worker.js`. `send_email` only delivers to *verified* Email Routing destinations (exact, lowercase), so requests go straight to the founders' inboxes with `Reply-To: hello@`; hello@ itself is a route, not a verified address. To add a person: verify their address in Email Routing, then add it to `FORWARD_TO` and redeploy.
- **If the mail fails** the endpoint returns 502 and the form opens WhatsApp with the same request, so nothing is lost silently.
