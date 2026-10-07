// Cloudflare Pages: password-protect the internal test site.
// Set env vars REVIEW_USER and REVIEW_PASS in the Pages project. Remove this file (or unset REVIEW_PASS) at launch.
export async function onRequest({ request, env, next }) {
  if (!env.REVIEW_PASS) return next();
  const auth = request.headers.get("Authorization") || "";
  const [scheme, encoded] = auth.split(" ");
  if (scheme === "Basic" && encoded) {
    const [user, pass] = atob(encoded).split(":");
    if (user === (env.REVIEW_USER || "sakanhub") && pass === env.REVIEW_PASS) {
      const res = await next();
      const out = new Response(res.body, res);
      out.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
      return out;
    }
  }
  return new Response("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="SakanHub review", charset="UTF-8"', "X-Robots-Tag": "noindex" },
  });
}
