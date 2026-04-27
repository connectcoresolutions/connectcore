# ConnectCore Solutions

## Security Hardening

This site now includes:

- Contact form validation with required fields, US phone validation, disposable email blocking, input sanitization, honeypot protection, and session throttling.
- Thank-you page conversion tracking that fires once per successful submission instead of on raw form submit.
- Browser-side HTTPS redirect, frame-busting, CSP meta policy, and a deployable `_headers` file for hosts that support custom security headers.

## Lead Endpoint

The contact form sends JSON to `VITE_LEAD_ENDPOINT_URL` when provided, or to `/api/leads` by default.

Requirements for the backend endpoint:

- Accept `POST` requests over HTTPS only.
- Re-run all validation server-side. Do not trust the frontend checks.
- Sanitize and escape stored or rendered values.
- Verify anti-spam controls server-side if reCAPTCHA or bot scoring is added.
- Return JSON with an optional `conversionId` string.

## Tracking Variables

Optional Vite environment variables:

- `VITE_LEAD_ENDPOINT_URL`
- `VITE_GTM_LEAD_EVENT_NAME`
- `VITE_GA_LEAD_EVENT_NAME`
- `VITE_GOOGLE_ADS_SEND_TO`

## Hosting Note

The `public/_headers` file is used by platforms such as Netlify and Cloudflare Pages. GitHub Pages does not apply custom response headers, so HSTS, `X-Frame-Options`, `nosniff`, and related header-based protections must be enforced at the CDN, reverse proxy, or hosting layer if this site remains on GitHub Pages.
