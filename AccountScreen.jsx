// ============================================================
// NootriMind Mental Wealth V2 — placeholder mock data
// Swap these for live /api/me data later. UI reads from here only.
// ============================================================

export const USER = {
  firstName: 'Joe',
  phaseLabel: 'Optimize',
  day: 12,
  totalDays: 30,
}

export const MENTAL_WEALTH = {
  score: 78,
  weekDelta: 4,
  monthDelta: 12,
}

export const DEPOSITS = [
  {
    id: 'protocol',
    title: 'Take your protocol',
    subtitle: 'Morning Stack · Day 12',
    icon: 'capsule',
    tone: 'green',
    done: true,
  },
  {
    id: 'checkin',
    title: 'Complete check-in',
    subtitle: 'How are you feeling?',
    icon: 'checkin',
    tone: 'teal',
    done: false,
    opens: 'checkin',
  },
  {
    id: 'win',
    title: 'Log one Brain Win',
    subtitle: 'Capture your win for today',
    icon: 'star',
    tone: 'gold',
    done: false,
  },
  {
    id: 'recovery',
    title: '10 min recovery',
    subtitle: 'Breathe. Reset. Refocus.',
    icon: 'recovery',
    tone: 'purple',
    done: false,
  },
]

export const TODAYS_FOCUS = 'Protect your energy, own your day.'

// Trend series for the Wealth chart (0–100). Gentle climb 52 -> 78.
export const WEALTH_SERIES = [52, 55, 53, 58, 60, 57, 62, 66, 64, 68, 72, 70, 74, 77, 76, 78]
export const WEALTH_X_LABELS = ['Apr 10', 'Apr 20', 'Apr 30', 'May 10']

export const BREAKDOWN = [
  { id: 'focus',       name: 'Focus',          score: 82, color: 'var(--mw-forest-soft)', icon: 'focus' },
  { id: 'stress',      name: 'Stress Control', score: 71, color: 'var(--mw-teal-soft)',   icon: 'stress' },
  { id: 'energy',      name: 'Energy',         score: 76, color: 'var(--mw-coral)',       icon: 'energy' },
  { id: 'consistency', name: 'Consistency',    score: 89, color: 'var(--mw-gold)',        icon: 'consistency' },
  { id: 'recovery',    name: 'Recovery',       score: 72, color: 'var(--mw-purple-soft)', icon: 'recovery' },
  { id: 'confidence',  name: 'Confidence',     score: 69, color: '#C58BB0',               icon: 'star' },
]

export const BRAIN_WINS = [
  { id: 1, text: 'Stayed calm during a stressful meeting and made a clear decision.', when: 'Today' },
]

export const COACH = {
  insight:
    'Your stress has been high the past 2 days and focus is trending down. ' +
    "Let's protect your Mental Wealth today.",
  recommendation: {
    action: 'Take a 5-minute reset',
    subtitle: 'Step away. Breathe. Reset your nervous system.',
  },
  tools: [
    { id: 'breathe', title: 'Breathing exercise', subtitle: '3–5 min',        icon: 'breathe', tone: 'teal' },
    { id: 'focus',   title: 'Focus playlist',     subtitle: 'Deep Work Mode', icon: 'music',   tone: 'green' },
    { id: 'journal', title: 'Journal it out',     subtitle: 'Process your thoughts', icon: 'journal', tone: 'gold' },
  ],
}

export const CHECKIN_SLIDERS = [
  { id: 'focus',  name: 'Focus',         value: 2, knob: 'var(--mw-forest-soft)' },
  { id: 'stress', name: 'Stress',        value: 4, knob: 'var(--mw-coral)' },
  { id: 'energy', name: 'Energy',        value: 3, knob: 'var(--mw-coral)' },
  { id: 'mood',   name: 'Mood',          value: 3, knob: 'var(--mw-teal-soft)' },
  { id: 'sleep',  name: 'Sleep Quality', value: 3, knob: 'var(--mw-purple-soft)', span: true },
]

export const KNOWLEDGE = {
  heroTitle: 'The Science Behind Mental Wealth',
  heroSub: 'NootriMind® supports your brain in 4 key areas.',
  items: [
    { id: 'focus',  title: 'Focus & Clarity',     subtitle: 'Support mental sharpness and concentration.',   tone: 'green' },
    { id: 'stress', title: 'Stress & Resilience', subtitle: 'Stay calm and perform under pressure.',         tone: 'teal' },
    { id: 'energy', title: 'Energy & Stamina',    subtitle: 'Fuel your brain and body sustainably.',         tone: 'coral' },
    { id: 'memory', title: 'Memory & Learning',   subtitle: 'Support recall, learning and long-term health.', tone: 'purple' },
  ],
}

export const ACCOUNT_ROWS = [
  'Your protocol',
  'Notifications',
  'Reorder supply',
  'Subscription',
  'Help & support',
  'Sign out',
]

export const NAV_TABS = [
  { id: 'today',     label: 'Today' },
  { id: 'wealth',    label: 'Wealth' },
  { id: 'coach',     label: 'Coach' },
  { id: 'knowledge', label: 'Knowledge' },
  { id: 'account',   label: 'Account' },
]
