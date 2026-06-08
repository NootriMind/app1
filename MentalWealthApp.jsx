import BrainIcon from './BrainIcon'
import { Icon } from './Icons'

// Knowledge building blocks.

// Hero card with title, subtitle, a "Learn more" link, and the gold brain mark.
export function KnowledgeHero({ title, subtitle, onLearnMore }) {
  return (
    <div className="mw-card mw-know-hero">
      <div>
        <p className="mw-know-hero-title">{title}</p>
        <p className="mw-know-hero-sub">{subtitle}</p>
        <p className="mw-link mw-mt-2" onClick={onLearnMore} role="button" tabIndex={0}>
          Learn more &rarr;
        </p>
      </div>
      <div style={{ flexShrink: 0 }}>
        <BrainIcon size={56} />
      </div>
    </div>
  )
}

// One area-of-support row: tinted icon chip, title, supporting line.
export function KnowledgeItem({ title, subtitle, tone = 'green', icon = 'book', onClick }) {
  const interactive = typeof onClick === 'function'
  return (
    <div
      className="mw-know-item"
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      <span className={`mw-deposit-icon bg-${tone} tint-${tone}`}>
        <Icon name={icon} />
      </span>
      <span>
        <span className="mw-know-item-title">{title}</span>
        <span className="mw-know-item-sub">{subtitle}</span>
      </span>
    </div>
  )
}
