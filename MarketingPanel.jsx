import { Icon } from './Icons'

// A single deposit-opportunity row. `done` controls the green check.
// onToggle is called on click (parent owns state). Tone maps to color helpers.
export default function DepositItem({ title, subtitle, icon = 'dot', tone = 'green', done = false, onClick }) {
  return (
    <button
      type="button"
      className={`mw-deposit${done ? ' is-done' : ''}`}
      onClick={onClick}
    >
      <span className={`mw-deposit-icon bg-${tone} tint-${tone}`}>
        <Icon name={icon} />
      </span>
      <span className="mw-deposit-body">
        <span className="mw-deposit-title">{title}</span>
        <span className="mw-deposit-sub">{subtitle}</span>
      </span>
      <span className={`mw-check${done ? ' is-done' : ''}`}>
        {done && <Icon name="check" size={14} />}
      </span>
    </button>
  )
}
