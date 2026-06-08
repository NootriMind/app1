import { Icon } from './Icons'
import BrainIcon from './BrainIcon'
import { NAV_TABS } from '../mockData'

// Maps each tab to its glyph. Coach uses the gold line-art brain.
const ICON_FOR = {
  today: 'home',
  wealth: 'chart',
  knowledge: 'knowledge',
  account: 'account',
}

// Fixed bottom navigation. Active tab renders gold (driven by .is-active in CSS).
export default function BottomNav({ active = 'today', onChange }) {
  return (
    <nav className="mw-bottomnav">
      {NAV_TABS.map((t) => {
        const isActive = t.id === active
        return (
          <button
            key={t.id}
            type="button"
            className={`mw-navbtn${isActive ? ' is-active' : ''}`}
            onClick={() => onChange?.(t.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            {t.id === 'coach' ? (
              <BrainIcon size={22} color="currentColor" />
            ) : (
              <Icon name={ICON_FOR[t.id]} size={22} />
            )}
            <span>{t.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
