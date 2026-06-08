// Desktop-only marketing panel shown beside the phone on wide screens.
// Hidden under 1080px via CSS (.mw-panel). The mark is the real uploaded
// gold flower asset served from /icon-192.png (never re-typed or recreated).
export default function MarketingPanel({ logoSrc = '/icon-192.png' }) {
  return (
    <aside className="mw-panel">
      <div className="mw-panel-logo">
        <img className="mw-panel-mark" alt="NootriMind" src={logoSrc} />
        <span className="mw-panel-word">
          NootriMind<sup style={{ fontSize: 11, top: '-.7em' }}>&reg;</sup>
        </span>
      </div>
      <p className="mw-panel-eyebrow">MENTAL WEALTH&trade;</p>
      <h1 className="mw-panel-h1">
        Build it daily.<br />Protect it always.
      </h1>
      <p className="mw-panel-body">
        NootriMind&reg; helps you build and protect your Mental Wealth through
        science-backed nutrition, daily habits, and intelligent coaching.
      </p>
      <div className="mw-panel-feat">
        <div className="mw-panel-feat-row"><span className="mw-dot" data-c="gold" /> Build Your Mental Wealth</div>
        <div className="mw-panel-feat-row"><span className="mw-dot" data-c="teal" /> AI Coaching That Understands You</div>
        <div className="mw-panel-feat-row"><span className="mw-dot" data-c="green" /> Track Progress That Matters</div>
        <div className="mw-panel-feat-row"><span className="mw-dot" data-c="coral" /> Science You Can Trust</div>
        <div className="mw-panel-feat-row"><span className="mw-dot" data-c="purple" /> Products That Support Your Mind</div>
      </div>
      <p className="mw-panel-tag">Mental Wealth is your greatest asset.</p>
    </aside>
  )
}
