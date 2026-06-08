/* ============================================================
   NootriMind Mental Wealth V2 — Design System
   Dark, premium, mobile-first. Standard CSS (no Tailwind).
   All visual tokens live here. Change a brand color in ONE place.

   Brand-critical anchors use the LOCKED NootriMind palette.
   Dark-theme-only tokens (deep greens, purple, teal) are new
   because the locked palette has no dark variants yet.
   ============================================================ */

.mw-root {
  /* --- Locked brand anchors --- */
  --mw-forest: #446658;
  --mw-gold: #D79D15;
  --mw-coral: #F38552;
  --mw-cream: #FAF6EF;

  /* --- Dark-theme tokens (new) --- */
  --mw-bg-0: #061311;        /* deepest, page edges */
  --mw-bg-1: #0B1F1A;        /* deep background green */
  --mw-bg-2: #0E2620;        /* base for raised areas */
  --mw-forest-soft: #5C8475; /* lighter forest for lines/rings */
  --mw-gold-soft: #E8B94A;
  --mw-purple: #86738C;
  --mw-purple-soft: #A998AE;
  --mw-teal: #4F9D95;
  --mw-teal-soft: #6FB8B0;

  /* --- Text --- */
  --mw-text: #F6EFE4;
  --mw-text-dim: rgba(246, 239, 228, 0.62);
  --mw-text-faint: rgba(246, 239, 228, 0.40);

  /* --- Glass surfaces --- */
  --mw-glass: rgba(246, 239, 228, 0.045);
  --mw-glass-2: rgba(246, 239, 228, 0.06);
  --mw-border: rgba(246, 239, 228, 0.09);
  --mw-border-strong: rgba(246, 239, 228, 0.16);
  --mw-shadow: 0 18px 48px -24px rgba(0, 0, 0, 0.85);

  /* --- Type --- */
  --mw-font-ui: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --mw-font-display: 'Cormorant Garamond', 'Newsreader', Georgia, serif;

  --mw-radius: 22px;
  --mw-radius-sm: 16px;
  --mw-radius-pill: 999px;

  /* phone shell width on desktop preview */
  --mw-phone-w: 402px;

  color: var(--mw-text);
  font-family: var(--mw-font-ui);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* ============================================================
   PHONE SHELL + APP SHELL
   ============================================================ */
.mw-stage {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(1200px 700px at 78% -8%, rgba(68, 102, 88, 0.22), transparent 55%),
    radial-gradient(900px 600px at 12% 8%, rgba(215, 157, 21, 0.06), transparent 50%),
    linear-gradient(180deg, #04100E 0%, #061311 100%);
  padding: 28px 16px;
  box-sizing: border-box;
}

.mw-phone {
  position: relative;
  width: 100%;
  max-width: var(--mw-phone-w);
  height: min(860px, calc(100vh - 56px));
  border-radius: 44px;
  background:
    radial-gradient(700px 420px at 80% -6%, rgba(68, 102, 88, 0.30), transparent 52%),
    linear-gradient(180deg, var(--mw-bg-1) 0%, var(--mw-bg-0) 100%);
  border: 1px solid rgba(246, 239, 228, 0.10);
  box-shadow:
    0 50px 120px -40px rgba(0, 0, 0, 0.9),
    inset 0 1px 0 rgba(246, 239, 228, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

/* On real mobile devices, drop the shell and go full-bleed */
@media (max-width: 480px) {
  .mw-stage { padding: 0; }
  .mw-phone {
    max-width: 100%;
    height: 100vh;
    height: 100dvh;
    border-radius: 0;
    border: none;
  }
}

.mw-app {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

/* --- Status bar --- */
.mw-statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 26px 4px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: var(--mw-text);
  flex-shrink: 0;
}
.mw-statusbar-right { display: flex; align-items: center; gap: 7px; }
.mw-statusbar-right svg { display: block; }

/* --- Header --- */
.mw-header {
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  padding: 8px 18px 14px;
  flex-shrink: 0;
}
.mw-header-title {
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2.6px;
  color: var(--mw-text-dim);
}
.mw-iconbtn {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 12px;
  background: transparent;
  border: none;
  color: var(--mw-text);
  cursor: pointer;
  transition: background 160ms ease;
}
.mw-iconbtn:hover { background: var(--mw-glass); }
.mw-iconbtn.mw-right { justify-self: end; }
.mw-bell-dot {
  position: absolute;
  top: 9px; right: 9px;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--mw-gold);
  box-shadow: 0 0 0 2px var(--mw-bg-1);
}

/* --- Scroll body --- */
.mw-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px 18px 122px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.mw-scroll::-webkit-scrollbar { width: 0; height: 0; }

/* ============================================================
   CARDS / PRIMITIVES
   ============================================================ */
.mw-card {
  background: var(--mw-glass);
  border: 1px solid var(--mw-border);
  border-radius: var(--mw-radius);
  box-shadow: var(--mw-shadow);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}
.mw-card-pad { padding: 20px; }

.mw-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--mw-text-faint);
}
.mw-section-title {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--mw-text-dim);
  margin: 26px 2px 12px;
}
.mw-stack > * + * { margin-top: 14px; }

.mw-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 13px;
  border-radius: var(--mw-radius-pill);
  background: var(--mw-glass-2);
  border: 1px solid var(--mw-border);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--mw-text);
  cursor: pointer;
}
.mw-up { color: #6FBF8E; font-weight: 600; }

.mw-display {
  font-family: var(--mw-font-display);
  font-style: italic;
  font-weight: 500;
  line-height: 1.02;
  color: var(--mw-text);
}

/* ============================================================
   SCORE CARD + RING
   ============================================================ */
.mw-scorecard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 22px;
  position: relative;
  overflow: hidden;
}
.mw-scorecard::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(220px 160px at 88% 12%, rgba(215,157,21,0.10), transparent 60%);
  pointer-events: none;
}
.mw-score-num {
  font-family: var(--mw-font-display);
  font-style: italic;
  font-size: 64px;
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -1px;
  color: var(--mw-cream);
  margin-top: 6px;
}
.mw-score-delta {
  margin-top: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #6FBF8E;
  display: flex; align-items: center; gap: 5px;
}

.mw-ring { position: relative; flex-shrink: 0; }
.mw-ring svg { display: block; transform: rotate(-90deg); }
.mw-ring-center {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}

/* ============================================================
   FOCUS CARD (image / gradient hero)
   ============================================================ */
.mw-focuscard {
  position: relative;
  overflow: hidden;
  border-radius: var(--mw-radius);
  border: 1px solid var(--mw-border);
  min-height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 20px 20px;
  color: var(--mw-cream);
  background:
    linear-gradient(105deg, rgba(6,19,17,0.20) 0%, rgba(6,19,17,0.72) 100%),
    linear-gradient(160deg, #16322A 0%, #0A1C18 60%, #07140F 100%);
  box-shadow: var(--mw-shadow);
}
.mw-focuscard::before {
  /* layered "forest ridge" silhouette */
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 64%;
  background:
    linear-gradient(180deg, transparent, rgba(0,0,0,0.28)),
    conic-gradient(from 180deg at 50% 140%, #11261F, #0c1d18 40%, #112a22 60%, #0c1d18);
  -webkit-mask: linear-gradient(180deg, transparent, #000 38%);
          mask: linear-gradient(180deg, transparent, #000 38%);
  clip-path: polygon(0 62%, 14% 40%, 26% 56%, 40% 30%, 55% 52%, 70% 26%, 84% 48%, 100% 34%, 100% 100%, 0 100%);
  opacity: 0.9;
}
.mw-focuscard-body { position: relative; z-index: 1; max-width: 74%; }
.mw-focuscard-text {
  font-family: var(--mw-font-display);
  font-style: italic;
  font-size: 22px;
  line-height: 1.18;
  margin-top: 8px;
}
.mw-round-arrow {
  position: relative; z-index: 1;
  flex-shrink: 0;
  width: 46px; height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(246,239,228,0.30);
  background: rgba(246,239,228,0.06);
  display: flex; align-items: center; justify-content: center;
  color: var(--mw-cream);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}
.mw-round-arrow:hover { transform: translateX(2px); background: rgba(246,239,228,0.12); }

/* ============================================================
   DEPOSIT ITEMS
   ============================================================ */
.mw-deposit {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 16px;
  border-radius: var(--mw-radius-sm);
  background: var(--mw-glass);
  border: 1px solid var(--mw-border);
  cursor: pointer;
  text-align: left;
  transition: border-color 160ms ease, background 160ms ease, transform 120ms ease;
}
.mw-deposit:hover { border-color: var(--mw-border-strong); background: var(--mw-glass-2); }
.mw-deposit:active { transform: scale(0.992); }
.mw-deposit.is-done { background: rgba(68,102,88,0.10); }

.mw-deposit-icon {
  width: 42px; height: 42px;
  flex-shrink: 0;
  border-radius: 13px;
  display: flex; align-items: center; justify-content: center;
  background: var(--mw-glass-2);
  border: 1px solid var(--mw-border);
}
.mw-deposit-body { flex: 1; min-width: 0; }
.mw-deposit-title {
  font-size: 15px; font-weight: 600; color: var(--mw-text);
}
.mw-deposit-sub {
  font-size: 12.5px; color: var(--mw-text-dim); margin-top: 2px;
}
.mw-check {
  flex-shrink: 0;
  width: 26px; height: 26px;
  border-radius: 50%;
  border: 1.6px solid var(--mw-border-strong);
  display: flex; align-items: center; justify-content: center;
  transition: all 180ms ease;
}
.mw-check.is-done {
  border-color: transparent;
  background: linear-gradient(160deg, #5C8475, var(--mw-forest));
  box-shadow: 0 6px 16px -6px rgba(68,102,88,0.8);
}

/* tint helpers for icons/knobs */
.tint-green  { color: var(--mw-forest-soft); }
.tint-gold   { color: var(--mw-gold); }
.tint-coral  { color: var(--mw-coral); }
.tint-purple { color: var(--mw-purple-soft); }
.tint-teal   { color: var(--mw-teal-soft); }
.bg-green  { background: rgba(92,132,117,0.16);  border-color: rgba(92,132,117,0.30); }
.bg-gold   { background: rgba(215,157,21,0.14);   border-color: rgba(215,157,21,0.30); }
.bg-coral  { background: rgba(243,133,82,0.14);   border-color: rgba(243,133,82,0.30); }
.bg-purple { background: rgba(134,115,140,0.18);  border-color: rgba(134,115,140,0.34); }
.bg-teal   { background: rgba(79,157,149,0.16);   border-color: rgba(79,157,149,0.32); }

/* ============================================================
   WEALTH — chart + breakdown + wins
   ============================================================ */
.mw-chart-head {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
}
.mw-chart-num {
  font-family: var(--mw-font-display);
  font-style: italic; font-size: 46px; font-weight: 500;
  line-height: 1; color: var(--mw-cream); margin-top: 6px;
}
.mw-chart-sub { font-size: 12.5px; color: var(--mw-text-dim); margin-top: 4px; }
.mw-chart-wrap { margin-top: 14px; }
.mw-chart-wrap svg { display: block; width: 100%; height: auto; overflow: visible; }
.mw-axis-label { font-size: 9.5px; fill: var(--mw-text-faint); font-family: var(--mw-font-ui); }
.mw-xlabels {
  display: flex; justify-content: space-between;
  margin-top: 8px; padding: 0 2px;
  font-size: 10px; color: var(--mw-text-faint);
}

.mw-breakdown-row {
  display: flex; align-items: center; gap: 13px; padding: 11px 0;
}
.mw-breakdown-row + .mw-breakdown-row { border-top: 1px solid var(--mw-border); }
.mw-breakdown-ic {
  width: 34px; height: 34px; flex-shrink: 0; border-radius: 11px;
  display: flex; align-items: center; justify-content: center;
  background: var(--mw-glass-2); border: 1px solid var(--mw-border);
}
.mw-breakdown-mid { flex: 1; min-width: 0; }
.mw-breakdown-top {
  display: flex; align-items: baseline; justify-content: space-between;
  margin-bottom: 7px;
}
.mw-breakdown-name { font-size: 14px; font-weight: 500; color: var(--mw-text); }
.mw-breakdown-score { font-size: 14px; font-weight: 600; color: var(--mw-cream); font-variant-numeric: tabular-nums; }
.mw-bar {
  height: 6px; border-radius: 999px;
  background: rgba(246,239,228,0.08);
  overflow: hidden;
}
.mw-bar-fill { height: 100%; border-radius: 999px; }

.mw-win {
  border-radius: var(--mw-radius-sm);
  border: 1px solid var(--mw-border);
  background: var(--mw-glass);
  padding: 15px 16px;
}
.mw-win-quote {
  font-family: var(--mw-font-display);
  font-style: italic; font-size: 16.5px; line-height: 1.3; color: var(--mw-text);
}
.mw-win-meta { margin-top: 9px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: var(--mw-gold); }

.mw-link { font-size: 12.5px; font-weight: 600; color: var(--mw-gold); cursor: pointer; }
.mw-row-between { display: flex; align-items: center; justify-content: space-between; }

/* ============================================================
   COACH
   ============================================================ */
.mw-subtabs {
  display: flex; gap: 26px;
  padding: 2px 4px 0;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--mw-border);
}
.mw-subtab {
  background: none; border: none; cursor: pointer;
  padding: 0 0 12px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.2px;
  color: var(--mw-text-faint);
  position: relative;
}
.mw-subtab.is-active { color: var(--mw-text); }
.mw-subtab.is-active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
  background: var(--mw-gold); border-radius: 2px;
}

.mw-coach-hero {
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  padding: 22px;
  background:
    radial-gradient(260px 180px at 92% 10%, rgba(215,157,21,0.14), transparent 60%),
    var(--mw-glass);
}
.mw-coach-hero-title { font-family: var(--mw-font-display); font-style: italic; font-size: 26px; color: var(--mw-cream); }
.mw-coach-hero-sub { font-size: 13.5px; color: var(--mw-text-dim); margin-top: 5px; max-width: 78%; }

.mw-insight-text {
  font-size: 15px; line-height: 1.5; color: var(--mw-text); margin-top: 10px;
}
.mw-reco {
  display: flex; align-items: center; gap: 14px;
  margin-top: 10px;
}
.mw-reco-body { flex: 1; }
.mw-reco-action { font-size: 16px; font-weight: 600; color: var(--mw-cream); }
.mw-reco-sub { font-size: 12.5px; color: var(--mw-text-dim); margin-top: 3px; }

.mw-tool {
  width: 100%; display: flex; align-items: center; gap: 14px;
  padding: 15px 16px; border-radius: var(--mw-radius-sm);
  background: var(--mw-glass); border: 1px solid var(--mw-border);
  cursor: pointer; text-align: left;
  transition: border-color 160ms ease, background 160ms ease;
}
.mw-tool:hover { border-color: var(--mw-border-strong); background: var(--mw-glass-2); }
.mw-tool-title { font-size: 14.5px; font-weight: 600; color: var(--mw-text); }
.mw-tool-sub { font-size: 12px; color: var(--mw-text-dim); margin-top: 2px; }

/* ============================================================
   CHECK-IN MODAL
   ============================================================ */
.mw-modal-overlay {
  position: absolute; inset: 0;
  background: rgba(4, 12, 10, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex; align-items: flex-end;
  z-index: 50;
  animation: mw-fade 180ms ease;
}
@keyframes mw-fade { from { opacity: 0; } to { opacity: 1; } }
.mw-sheet {
  width: 100%;
  max-height: 92%;
  display: flex; flex-direction: column;
  background: linear-gradient(180deg, var(--mw-bg-2), var(--mw-bg-1));
  border-top-left-radius: 28px; border-top-right-radius: 28px;
  border-top: 1px solid var(--mw-border-strong);
  box-shadow: 0 -30px 80px -20px rgba(0,0,0,0.8);
  animation: mw-rise 240ms cubic-bezier(.2,.8,.2,1);
  overflow: hidden;
}
@keyframes mw-rise { from { transform: translateY(16px); } to { transform: translateY(0); } }
.mw-sheet-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 22px 8px; flex-shrink: 0;
}
.mw-sheet-grab {
  width: 38px; height: 4px; border-radius: 999px;
  background: rgba(246,239,228,0.18);
  margin: 10px auto 0;
}
.mw-sheet-title { font-size: 12px; font-weight: 600; letter-spacing: 2.4px; color: var(--mw-text-dim); }
.mw-sheet-body { overflow-y: auto; padding: 6px 22px 22px; scrollbar-width: none; }
.mw-sheet-body::-webkit-scrollbar { width: 0; }
.mw-q {
  font-family: var(--mw-font-display); font-style: italic;
  font-size: 25px; line-height: 1.15; color: var(--mw-cream); margin-top: 6px;
}
.mw-q-sub { font-size: 13px; color: var(--mw-text-dim); margin-top: 7px; }

.mw-slider-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px;
}
.mw-slider-card {
  grid-column: span 1;
  border-radius: var(--mw-radius-sm);
  border: 1px solid var(--mw-border);
  background: var(--mw-glass);
  padding: 14px 14px 16px;
}
.mw-slider-card.span-2 { grid-column: span 2; }
.mw-slider-top { display: flex; align-items: baseline; justify-content: space-between; }
.mw-slider-name { font-size: 13px; font-weight: 600; color: var(--mw-text); }
.mw-slider-val { font-size: 13px; font-weight: 600; color: var(--mw-text-dim); font-variant-numeric: tabular-nums; }

.mw-range {
  -webkit-appearance: none; appearance: none;
  width: 100%; height: 6px; margin-top: 13px;
  border-radius: 999px; outline: none;
  background: rgba(246,239,228,0.10);
  cursor: pointer;
}
.mw-range::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--mw-knob, var(--mw-forest-soft));
  border: 3px solid var(--mw-bg-1);
  box-shadow: 0 2px 8px -1px rgba(0,0,0,0.6), 0 0 0 1px var(--mw-knob, var(--mw-forest-soft));
  cursor: pointer;
}
.mw-range::-moz-range-thumb {
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--mw-knob, var(--mw-forest-soft));
  border: 3px solid var(--mw-bg-1);
  box-shadow: 0 0 0 1px var(--mw-knob, var(--mw-forest-soft));
  cursor: pointer;
}

.mw-toggle {
  display: inline-flex; padding: 4px; gap: 4px;
  border-radius: 999px; background: rgba(246,239,228,0.08);
  border: 1px solid var(--mw-border); margin-top: 12px;
}
.mw-toggle button {
  border: none; cursor: pointer;
  padding: 7px 18px; border-radius: 999px;
  font-size: 13px; font-weight: 600;
  background: transparent; color: var(--mw-text-dim);
  transition: all 160ms ease;
}
.mw-toggle button.is-on {
  background: linear-gradient(160deg, #5C8475, var(--mw-forest));
  color: var(--mw-cream);
}

.mw-textarea {
  width: 100%; box-sizing: border-box;
  margin-top: 10px; min-height: 92px; resize: none;
  border-radius: var(--mw-radius-sm);
  border: 1px solid var(--mw-border);
  background: var(--mw-glass);
  color: var(--mw-text);
  font-family: var(--mw-font-ui); font-size: 14px; line-height: 1.5;
  padding: 14px 15px;
}
.mw-textarea::placeholder { color: var(--mw-text-faint); }
.mw-textarea:focus { outline: none; border-color: var(--mw-border-strong); }

.mw-btn {
  width: 100%; box-sizing: border-box;
  border: none; cursor: pointer;
  padding: 16px; border-radius: 16px;
  font-family: var(--mw-font-ui); font-size: 15px; font-weight: 600;
  letter-spacing: 0.3px;
  color: #14201A;
  background: linear-gradient(135deg, var(--mw-gold-soft), var(--mw-gold) 55%, #B8830F);
  box-shadow: 0 16px 34px -16px rgba(215,157,21,0.7);
  transition: transform 120ms ease, filter 160ms ease;
}
.mw-btn:hover { filter: brightness(1.04); }
.mw-btn:active { transform: scale(0.99); }
.mw-btn-block { margin-top: 18px; }

/* ============================================================
   KNOWLEDGE
   ============================================================ */
.mw-know-hero {
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  padding: 22px;
  background:
    radial-gradient(240px 170px at 90% 14%, rgba(215,157,21,0.13), transparent 60%),
    var(--mw-glass);
}
.mw-know-hero-title { font-family: var(--mw-font-display); font-style: italic; font-size: 24px; line-height: 1.12; color: var(--mw-cream); max-width: 80%; }
.mw-know-hero-sub { font-size: 13px; color: var(--mw-text-dim); margin-top: 8px; max-width: 88%; }

.mw-know-item {
  display: flex; gap: 14px; align-items: flex-start;
  padding: 16px;
  border-radius: var(--mw-radius-sm);
  border: 1px solid var(--mw-border);
  background: var(--mw-glass);
}
.mw-know-item-title { font-size: 15px; font-weight: 600; color: var(--mw-text); }
.mw-know-item-sub { font-size: 13px; color: var(--mw-text-dim); margin-top: 3px; line-height: 1.45; }

/* ============================================================
   ACCOUNT
   ============================================================ */
.mw-account-head { display: flex; align-items: center; gap: 16px; padding: 22px; }
.mw-avatar-lg {
  width: 58px; height: 58px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(160deg, #5C8475, var(--mw-forest));
  font-family: var(--mw-font-display); font-style: italic; font-size: 26px; color: var(--mw-cream);
  flex-shrink: 0;
}
.mw-account-name { font-size: 18px; font-weight: 600; color: var(--mw-text); }
.mw-account-meta { font-size: 12.5px; color: var(--mw-text-dim); margin-top: 2px; }
.mw-acc-row {
  width: 100%; display: flex; align-items: center; gap: 13px;
  padding: 15px 16px; background: none; border: none; cursor: pointer; text-align: left;
  color: var(--mw-text);
}
.mw-acc-row + .mw-acc-row { border-top: 1px solid var(--mw-border); }
.mw-acc-row-title { flex: 1; font-size: 14.5px; font-weight: 500; }
.mw-acc-row-chev { color: var(--mw-text-faint); }

/* ============================================================
   BOTTOM NAV
   ============================================================ */
.mw-bottomnav {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px));
  display: flex; justify-content: space-around;
  background: linear-gradient(180deg, rgba(11,31,26,0.55), rgba(6,19,17,0.96));
  border-top: 1px solid var(--mw-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 40;
}
.mw-navbtn {
  flex: 1; background: none; border: none; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 8px 2px 4px;
  color: var(--mw-text-faint);
  transition: color 160ms ease;
}
.mw-navbtn.is-active { color: var(--mw-gold); }
.mw-navbtn span { font-size: 10.5px; font-weight: 600; letter-spacing: 0.2px; }
.mw-navbtn svg { display: block; }

/* ============================================================
   DESKTOP MARKETING PANEL (optional, shows beside phone >= 1080px)
   ============================================================ */
.mw-stage.mw-with-panel { justify-content: center; gap: 64px; }
.mw-panel { display: none; }
@media (min-width: 1080px) {
  .mw-stage.mw-with-panel { align-items: center; }
  .mw-panel {
    display: block;
    max-width: 460px;
    color: var(--mw-text);
  }
  .mw-panel-logo { display: flex; align-items: center; gap: 12px; }
  .mw-panel-mark { width: 40px; height: 40px; }
  .mw-panel-word { font-size: 22px; font-weight: 600; letter-spacing: 0.2px; color: var(--mw-cream); }
  .mw-panel-eyebrow { font-size: 11px; letter-spacing: 3px; color: var(--mw-gold); margin-top: 14px; }
  .mw-panel-h1 {
    font-family: var(--mw-font-display); font-style: italic;
    font-size: 52px; line-height: 1.04; color: var(--mw-cream); margin: 14px 0 18px;
  }
  .mw-panel-body { font-size: 15px; line-height: 1.6; color: var(--mw-text-dim); max-width: 400px; }
  .mw-panel-feat { margin-top: 26px; display: flex; flex-direction: column; gap: 13px; }
  .mw-panel-feat-row { display: flex; align-items: center; gap: 12px; font-size: 14.5px; color: var(--mw-text); }
  .mw-panel-tag {
    margin-top: 34px; font-size: 11px; letter-spacing: 2.6px;
    color: var(--mw-text-faint); text-transform: uppercase;
  }
}

/* small util */
.mw-mt-2 { margin-top: 8px; }
.mw-flex { display: flex; }
.mw-gap { gap: 10px; }
.mw-center { align-items: center; }

/* panel feature dots (used by the desktop marketing panel) */
.mw-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.mw-dot[data-c="gold"]   { background: var(--mw-gold); }
.mw-dot[data-c="teal"]   { background: var(--mw-teal-soft); }
.mw-dot[data-c="green"]  { background: var(--mw-forest-soft); }
.mw-dot[data-c="coral"]  { background: var(--mw-coral); }
.mw-dot[data-c="purple"] { background: var(--mw-purple-soft); }
