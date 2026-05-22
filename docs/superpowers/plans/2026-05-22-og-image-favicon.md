# OG Image & Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the default Vercel favicon with a generated "JM" icon and redesign the OG image to the approved centered-monogram layout.

**Architecture:** Both images use Next.js App Router's special metadata file conventions (`opengraph-image.tsx`, `icon.tsx`) with `ImageResponse` from `next/og` at edge runtime. Deleting `src/app/favicon.ico` lets `icon.tsx` take over automatically. No new dependencies — `next/og` is already in use.

**Tech Stack:** Next.js 15 App Router, `next/og` (ImageResponse, edge runtime), TypeScript.

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/app/opengraph-image.tsx` | Rewrite | OG image — centered JM monogram design |
| `src/app/icon.tsx` | Create | 32×32 generated favicon — JM on dark background |
| `src/app/favicon.ico` | Delete | Removes Vercel default; `icon.tsx` takes over |
| `.gitignore` | Modify | Add `.superpowers/` entry |

---

## Task 1: Gitignore cleanup

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add `.superpowers/` to `.gitignore`**

Open `.gitignore` and append:

```
# Visual brainstorming session files
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm directory"
```

---

## Task 2: Rewrite the OG image

**Files:**
- Modify: `src/app/opengraph-image.tsx`

> Note: `ImageResponse` uses Satori under the hood. Every layout `<div>` needs `display: 'flex'`. CSS shorthand (`border`) is not supported — use individual properties (`borderTop`, `borderLeft`, etc.). `textTransform` has limited support, so the role string is pre-uppercased.

- [ ] **Step 1: Read the current file**

```bash
cat src/app/opengraph-image.tsx
```

- [ ] **Step 2: Replace the file with the new design**

Write the following to `src/app/opengraph-image.tsx`:

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Javier Mayorga — Cloud Architect & Enterprise Solutions Leader'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Top-left corner bracket */}
        <div
          style={{
            position: 'absolute',
            top: 32,
            left: 32,
            width: 20,
            height: 20,
            borderTop: '2px solid #1D9E75',
            borderLeft: '2px solid #1D9E75',
            display: 'flex',
          }}
        />
        {/* Top-right corner bracket */}
        <div
          style={{
            position: 'absolute',
            top: 32,
            right: 32,
            width: 20,
            height: 20,
            borderTop: '2px solid #1D9E75',
            borderRight: '2px solid #1D9E75',
            display: 'flex',
          }}
        />
        {/* Bottom-left corner bracket */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: 32,
            width: 20,
            height: 20,
            borderBottom: '2px solid #1D9E75',
            borderLeft: '2px solid #1D9E75',
            display: 'flex',
          }}
        />
        {/* Bottom-right corner bracket */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            right: 32,
            width: 20,
            height: 20,
            borderBottom: '2px solid #1D9E75',
            borderRight: '2px solid #1D9E75',
            display: 'flex',
          }}
        />

        {/* JM monogram */}
        <div
          style={{
            color: '#f9fafb',
            fontSize: 120,
            fontWeight: 500,
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          JM
        </div>

        {/* Teal separator */}
        <div
          style={{
            width: 48,
            height: 2,
            background: '#1D9E75',
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
          }}
        />

        {/* Role label — pre-uppercased; 0.14em × 12px ≈ 2px letter-spacing */}
        <div
          style={{
            color: '#1D9E75',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '2px',
          }}
        >
          CLOUD ARCHITECT & ENTERPRISE SOLUTIONS LEADER
        </div>
      </div>
    ),
    { ...size }
  )
}
```

- [ ] **Step 3: Run the build to verify no errors**

```bash
npm run build
```

Expected: build completes with no TypeScript or compilation errors.

- [ ] **Step 4: Start dev server and preview the OG image**

```bash
npm run dev -- -p 3001
```

Open `http://localhost:3001/opengraph-image` in the browser. You should see the 1200×630 dark image with centered "JM", teal separator, role label, and corner brackets.

- [ ] **Step 5: Commit**

```bash
git add src/app/opengraph-image.tsx
git commit -m "feat(design-system): redesign OG image — centered JM monogram with corner brackets"
```

---

## Task 3: Create the favicon and remove the Vercel default

**Files:**
- Create: `src/app/icon.tsx`
- Delete: `src/app/favicon.ico`

- [ ] **Step 1: Create `src/app/icon.tsx`**

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: '#f9fafb',
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          JM
        </div>
        <div
          style={{
            width: 14,
            height: 1,
            background: '#1D9E75',
            marginTop: 3,
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
```

- [ ] **Step 2: Delete `src/app/favicon.ico`**

```bash
rm src/app/favicon.ico
```

- [ ] **Step 3: Run the build**

```bash
npm run build
```

Expected: build completes cleanly.

- [ ] **Step 4: Preview the favicon**

```bash
npm run dev -- -p 3001
```

Open `http://localhost:3001/icon.png` — should show a 32×32 dark square with white "JM" and a teal underline. Check the browser tab at `http://localhost:3001` — the favicon should update within a few seconds (may require a hard refresh).

- [ ] **Step 5: Run lint**

```bash
npm run lint
```

Expected: no errors or warnings.

- [ ] **Step 6: Commit**

```bash
git add src/app/icon.tsx
git rm src/app/favicon.ico
git commit -m "feat(design-system): add generated JM favicon, remove Vercel default"
```

---

## Done

Both images are generated at edge runtime, match the approved design, and share the same dark background + teal accent token. No new dependencies added.
