# Bridge Agent Network Security Guardrails

Date: May 16, 2026

This file tracks the common MVP security failures called out in the Reddit post and the current status of this portal.

## Current Status

| Rule | Currently broken? | Status | Action taken |
| --- | --- | --- | --- |
| Auth tokens committed to the repo | False | `.env.local` exists locally but is ignored by `.gitignore`; only `.env.local.example` is tracked, and it contains empty placeholders. `git log --all -- .env.local .env .env.production .env.development` returned no commits. | No key rotation appears necessary from this repo evidence. Keep real keys only in `.env.local` or GitHub environment secrets. |
| Supabase RLS misconfigured | False / Not applicable | This app does not use Supabase. | No Supabase action needed. |
| Backend authorization too broad | True, now fixed for the Convex scaffold | The existing Convex functions were callable without checking Clerk identity, member approval status, or admin role. This matters once Convex is deployed/wired to the UI. | Added Clerk-backed member lookup, approved-member checks, admin checks, and member ownership checks in `convex/portal.ts`. Added a `by_clerk_user_id` index in `convex/schema.ts`. |
| No rate limiting on endpoints | Partially true, now mitigated for write mutations | There are no Next.js API routes in this static GitHub Pages build. Convex write mutations could still be spammed by authenticated users. | Added basic per-member hourly limits for point submissions and book requests in `convex/portal.ts`. |
| No error handling past happy path | Partially true | The current frontend is mostly dummy/local UI with no live third-party calls. Convex functions now throw explicit auth/rate/validation errors. Future live UI wiring still needs user-facing error states. | Treat user-facing error handling as required when wiring Convex, Clerk, OneSignal, R2, or any external links/uploads. |

## Rules Going Forward

1. Never commit real `.env`, `.env.local`, `.env.production`, `.env.development`, service account JSON, private keys, or API tokens.
2. Commit only example env files with blank or obviously fake values.
3. Any backend query or mutation must answer three questions before shipping:
   - Who is calling this?
   - Are they approved to access the portal?
   - Are they allowed to access or mutate this specific record?
4. Do not trust client-supplied role, points, member IDs, prices, quantities, or approval status.
5. Any write endpoint or mutation needs an abuse limit, even if it is simple at MVP stage.
6. Any external service call needs a visible failure state, not silent failure.
7. Public pages may use public demo data, but private member data must require authentication and authorization.
8. GitHub Pages is static hosting only. Anything secret or privileged must stay out of the browser bundle and run through Convex or another backend.

## Environment Handling

Safe to commit:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_ONESIGNAL_APP_ID=
ONESIGNAL_REST_API_KEY=
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_PUBLIC_BASE_URL=
```

Do not commit values for any of those keys.

Important distinction:

- `NEXT_PUBLIC_*` values are visible in the browser bundle.
- Non-public values such as `CLERK_SECRET_KEY`, `ONESIGNAL_REST_API_KEY`, and R2 secrets must never be referenced in client components or static pages.

## Convex Authorization Baseline

Current baseline added to `convex/portal.ts`:

- Every resource query requires an authenticated approved member.
- Admin review queues require `Admin` or `Regional Admin`.
- Agents can only submit Bridge Points for their own member record.
- Point values are calculated on the server from an allowed activity menu, not trusted from the client.
- Admin review uses the authenticated reviewer, not a client-supplied reviewer ID.
- Agents can only create book requests for themselves.
- Point submissions are limited to 20 per member per hour.
- Book requests are limited to 5 per member per hour.

## Remaining Before Real Launch

These are not blockers for the static prototype, but they should be done before real member data goes live:

1. Add a Convex `currentMember` query that maps Clerk identity to the portal member profile.
2. Wire the frontend to Convex with explicit loading, empty, and error states.
3. Add audit fields to sensitive tables where useful, such as `createdBy`, `updatedBy`, and `updatedAt`.
4. Add admin-only screens for disabling members and changing roles.
5. Add file upload validation before R2 is introduced.
6. Add OneSignal server-side notification sending only from backend code.
7. Review GitHub repo visibility before adding real operational data.
8. Use GitHub environment secrets for any deploy-time secrets; do not put secrets in workflow YAML.

## Immediate Key-Rotation Answer

Based on the current repo check, I do not see evidence that `.env.local` or real secret values have been committed to this repository.

No immediate key rotation is required from this audit result. Rotate keys only if they were pasted somewhere else, shared externally, or committed in a different repo/history.
