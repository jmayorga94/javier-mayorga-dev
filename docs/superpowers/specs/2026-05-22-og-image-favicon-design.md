# OG Image & Favicon Redesign

**Date:** 2026-05-22  
**Branch:** `feature/og-image-favicon`  
**Scope:** Replace the default Vercel favicon and redesign the OG image to match the site's visual identity.

---

## Problem

1. **Favicon** — `src/app/favicon.ico` is the default Vercel/Next.js placeholder. It overrides the `icons` config in `layout.tsx` and shows the Vercel triangle in the browser tab.
2. **OG image** — `src/app/opengraph-image.tsx` uses `system-ui` (generic fallback font) instead of Inter, and the composition doesn't match the site's design language well enough.

---

## Design

### OG Image (`src/app/opengraph-image.tsx`)

**Canvas:** 1200×630px, background `#0f1117`.

**Layout:** All content centered on both axes.

**Elements (top to bottom):**

| Element | Spec |
|---|---|
| Corner brackets (×4) | `20×20px`, `2px` stroke, `#1D9E75`, inset `32px` from each corner — all four corners |
| Monogram "JM" | `120px`, weight `500`, color `#f9fafb`, letter-spacing `-4px`, line-height `1` |
| Teal separator | `48px` wide × `2px` tall, `#1D9E75`, `20px` margin above and below |
| Role label | `12px`, `uppercase`, letter-spacing `0.14em`, color `#1D9E75`, centered — text: `"Cloud Architect & Enterprise Solutions Leader"` |

**Font:** Fetch Inter (weight 500) at edge runtime from Google Fonts API and pass to `ImageResponse`. This replaces the current `system-ui` fallback.

**No other changes** to metadata or layout files.

---

### Favicon (`src/app/icon.tsx`) — new file

**Canvas:** 32×32px, background `#0f1117`, `contentType: 'image/png'`, `runtime: 'edge'`.

**Layout:** Centered stack.

| Element | Spec |
|---|---|
| Monogram "JM" | `18px`, weight `500`, color `#f9fafb`, letter-spacing `-0.5px` |
| Teal underline | `14px` wide × `1px` tall, `#1D9E75`, `3px` below the monogram |

**Effect:** Next.js App Router serves `icon.tsx` as the favicon automatically. Delete `src/app/favicon.ico` so it no longer overrides.

---

## Files Changed

| File | Action |
|---|---|
| `src/app/opengraph-image.tsx` | Rewrite — new design + Inter font fetch |
| `src/app/icon.tsx` | Create — generated 32×32 favicon |
| `src/app/favicon.ico` | Delete — replaced by `icon.tsx` |

No new dependencies. `next/og` already in use.

---

## Verification

```bash
npm run build   # must pass
npm run lint    # must pass
```

Manually visit `http://localhost:3000` and confirm the browser tab shows the "JM" favicon. Share a URL to a social preview tool (e.g. https://www.opengraph.xyz) to verify the OG image renders correctly.
