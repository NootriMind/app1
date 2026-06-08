import { Icon } from './Icons'

// Reusable Coach building blocks.

// Plain insight card with body text.
export function CoachInsight({ text }) {
  return (
    <div className="mw-card mw-card-pad">
      <p className="mw-insight-text">{text}</p>
    </div>
  )
}

// Recommendation row with icon, action, subtitle, and a round arrow.
export function CoachRecommendation({ action, subtitle, icon = 'recovery', tone = 'purple', onClick }) {
  return (
    <div className="mw-card mw-card-pad">
      <div className="mw-reco">
        <span className={`mw-deposit-icon bg-${tone} tint-${tone}`}>
          <Icon name={icon} />
        </span>
        <span className="mw-reco-body">
          <span className="mw-reco-action">{action}</span>
          <span className="mw-reco-sub">{subtitle}</span>
        </span>
        <button type="button" className="mw-round-arrow" style={{ width: 40, height: 40 }} onClick={onClick} aria-label="Start">
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </div>
  )
}

// Tool list item.
export function CoachTool({ title, subtitle, icon = 'dot', tone = 'teal', onClick }) {
  return (
    <button type="button" className="mw-tool" onClick={onClick}>
      <span className={`mw-deposit-icon bg-${tone} tint-${tone}`}>
        <Icon name={icon} />
      </span>
      <span className="mw-reco-body">
        <span className="mw-tool-title">{title}</span>
        <span className="mw-tool-sub">{subtitle}</span>
      </span>
      <span className="mw-acc-row-chev"><Icon name="chevron" size={16} /></span>
    </button>
  )
}
