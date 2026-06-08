import { Icon } from './Icons'

const TITLES = {
  today: 'TODAY',
  wealth: 'WEALTH',
  coach: 'COACH',
  knowledge: 'KNOWLEDGE',
  account: 'ACCOUNT',
}

// iOS-style status bar glyphs (signal, wifi, battery). Static, decorative.
function StatusBar() {
  return (
    <div className="mw-statusbar">
      <span>9:41</span>
      <span className="mw-statusbar-right">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M8 2.2c2 0 3.8.8 5.1 2M8 5.2c1.2 0 2.3.5 3 1.3M2.9 4.2C4.3 3 6 2.2 8 2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="8" cy="9" r="1.2" fill="currentColor" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="1" y="1" width="21" height="10" rx="3" stroke="currentColor" strokeOpacity=".5" strokeWidth="1" />
          <rect x="2.6" y="2.6" width="15" height="6.8" rx="1.6" fill="currentColor" />
          <rect x="23" y="4" width="1.6" height="4" rx="1" fill="currentColor" fillOpacity=".5" />
        </svg>
      </span>
    </div>
  )
}

// Phone chrome: status bar, header (menu / title / bell), a scrolling body,
// and a slot for the bottom nav. `screen` selects the centered title.
export default function AppShell({ screen = 'today', onMenu, onBell, nav, children }) {
  return (
    <div className="mw-app">
      <StatusBar />

      <div className="mw-header">
        <button className="mw-iconbtn" onClick={onMenu} aria-label="Menu">
          <Icon name="menu" size={20} />
        </button>
        <div className="mw-header-title">{TITLES[screen] || ''}</div>
        <button className="mw-iconbtn mw-right" onClick={onBell} aria-label="Notifications" style={{ position: 'relative' }}>
          <Icon name="bell" size={20} />
          <span className="mw-bell-dot" />
        </button>
      </div>

      <div className="mw-scroll">{children}</div>

      {nav}
    </div>
  )
}
