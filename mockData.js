import { useState } from 'react'
import './v2.css'

import AppShell from './components/AppShell'
import BottomNav from './components/BottomNav'
import CheckInModal from './components/CheckInModal'
import MarketingPanel from './components/MarketingPanel'

import TodayScreen from './screens/TodayScreen'
import WealthScreen from './screens/WealthScreen'
import CoachScreen from './screens/CoachScreen'
import KnowledgeScreen from './screens/KnowledgeScreen'
import AccountScreen from './screens/AccountScreen'

// ============================================================
// NootriMind Mental Wealth V2 — root preview component.
//
// Self-contained: local state drives navigation and the check-in sheet.
// Reads only from ./mockData. No router, no API, no auth. Drop this anywhere
// (a route, a separate entry, a Storybook story) without touching the live app.
//
// `showPanel` toggles the desktop marketing column. `logoSrc` points at the
// real gold flower mark in /public.
// ============================================================
export default function MentalWealthApp({ showPanel = true, logoSrc = '/icon-192.png' }) {
  const [screen, setScreen] = useState('today')
  const [checkInOpen, setCheckInOpen] = useState(false)

  const SCREENS = {
    today: <TodayScreen onOpenCheckIn={() => setCheckInOpen(true)} />,
    wealth: <WealthScreen />,
    coach: <CoachScreen />,
    knowledge: <KnowledgeScreen />,
    account: <AccountScreen />,
  }

  const go = (id) => {
    setScreen(id)
    // a fresh screen always starts at the top
    const el = document.querySelector('.mw-scroll')
    if (el) el.scrollTop = 0
  }

  return (
    <div className="mw-root">
      <div className={`mw-stage${showPanel ? ' mw-with-panel' : ''}`}>
        {showPanel && <MarketingPanel logoSrc={logoSrc} />}

        <div className="mw-phone">
          <AppShell
            screen={screen}
            onMenu={() => go('account')}
            onBell={() => {}}
            nav={<BottomNav active={screen} onChange={go} />}
          >
            {SCREENS[screen]}
          </AppShell>

          <CheckInModal
            open={checkInOpen}
            onClose={() => setCheckInOpen(false)}
            onSave={(payload) => {
              // Placeholder. Wire to /api/checkin later.
              // eslint-disable-next-line no-console
              console.log('check-in saved (mock):', payload)
            }}
          />
        </div>
      </div>
    </div>
  )
}
