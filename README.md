# NootriMind® Mental Wealth — V2 UI (preview build)

A premium dark, mobile-first redesign of the NootriMind® app, built as a
**self-contained module under `src/v2/`**. It does not import, modify, or depend
on anything in your existing app. Your authentication, Shopify, Cloudflare
Worker, SMS, order, and `/api/*` logic are all untouched.

Core message: **Build it daily. Protect it always.**

## What is in here

```
src/v2/
  MentalWealthApp.jsx     root preview component (local-state nav + check-in)
  PreviewRoute.jsx        optional <Route> wrapper for /v2
  v2-main.jsx             standalone entry (run the preview with no auth)
  v2.css                  the whole dark design system (all tokens are CSS vars)
  mockData.js             ALL placeholder data lives here (one file to swap later)
  components/
    AppShell.jsx          status bar + header + scroll body + nav slot
    BottomNav.jsx         5 tabs, active tab gold, Coach tab uses the brain mark
    BrainIcon.jsx         thin gold line-art brain (not the flower)
    Icons.jsx             inline icon set
    ProgressRing.jsx      green + gold score ring
    ScoreCard.jsx         Mental Wealth score + ring + brain
    DepositItem.jsx       a deposit-opportunity row
    WealthChart.jsx       upward-trend line chart
    BreakdownRow.jsx      one wealth-breakdown row
    CoachCard.jsx         CoachInsight / CoachRecommendation / CoachTool
    CheckInModal.jsx      bottom-sheet check-in (local state, no API)
    KnowledgeCard.jsx     KnowledgeHero / KnowledgeItem
    MarketingPanel.jsx    desktop-only left brand panel
  screens/
    TodayScreen.jsx
    WealthScreen.jsx
    CoachScreen.jsx
    KnowledgeScreen.jsx
    AccountScreen.jsx
public/
  icon-192.png            your real gold flower mark (used by the desktop panel)
v2-preview.html           standalone preview page
preview.html              zero-build clickable preview (just open it in a browser)
```

## See it now (no build)

Open **`preview.html`** directly in any browser. It is a single self-contained
file (fonts from Google Fonts, the logo embedded as base64). It covers all five
screens, the check-in sheet, deposit toggles, the sliders, and the desktop
marketing panel. This is the fastest way to look at the design.

## Run it inside your Vite project (still no risk to the live app)

Copy `src/v2/` into your project's `src/`, and copy `public/icon-192.png` if it
is not already there. Then pick ONE of these. None of them edit `App.jsx`.

**Option A — a separate dev entry (most isolated):**
Copy `v2-preview.html` to your project root, then run:

```bash
npx vite --open /v2-preview.html
```

This boots only the V2 preview. Your real app is not loaded, so there is no way
for it to break.

**Option B — a hidden route in your existing router:**
Add one line near your other routes (this is additive, nothing is removed):

```jsx
import PreviewRoute from './v2/PreviewRoute'
// ...
<Route path="/v2" element={<PreviewRoute />} />
```

Visit `/v2` to see the preview. Every existing route keeps working exactly as
before.

## Wiring real data later (when you are ready)

Everything the UI shows is read from `src/v2/mockData.js`. When you want live
data, you swap that one file for values pulled from your existing `apiFetch`
helpers. The components do not care where the data comes from.

- `MENTAL_WEALTH`, `WEALTH_SERIES`, `BREAKDOWN` <- compute from check-in history
- `USER`, `DEPOSITS` <- from `/api/me` (logged_in, enrolled, current_day, first_name)
- `CheckInModal` `onSave({ values, protocolTaken, note })` <- POST to `/api/checkin`
- the protocol deposit <- POST to `/api/log-dose`

The check-in modal already hands you a clean payload on save. It currently just
logs to the console. There are no real Claude API calls anywhere yet, by design.

## Notes on the design choices

- **Colors.** Brand-critical hues are anchored to your locked palette (Forest
  `#446658`, Gold `#D79D15`, Coral `#F38552`, Cream `#FAF6EF`). The dark-theme
  background greens, the soft teal, and the muted purple are new tokens that
  only exist for this dark UI. They are all CSS variables at the top of
  `v2.css`, so any of them is a one-line change.
- **Logo.** The gold flower mark is your real uploaded `icon-192.png`, embedded
  as a file, never recreated. The word "NootriMind®" beside it in the desktop
  panel is set as live text per your UI brief (so it stays crisp at any size and
  carries the ® correctly).
- **Brain icon.** The score ring, the Coach hero, the Knowledge hero, and the
  Coach nav tab use the thin gold line-art brain, not the flower, exactly as
  specified.
- **Brand rules.** No em dashes anywhere. NootriMind® always carries the
  registered mark in visible copy. Ashwagandha with black pepper extract (no
  KSM-66, Alpha-GPC, or BioPerine references).
