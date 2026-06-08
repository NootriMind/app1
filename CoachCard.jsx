// Small inline SVG icon set for the V2 UI. Strokes use currentColor so the
// parent's `color` (via .tint-* helpers) drives the hue.
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function Icon({ name, size = 20 }) {
  const p = paths[name] || paths.dot
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {p}
    </svg>
  )
}

const paths = {
  menu: <path d="M3 6h14M3 10h14M3 14h14" {...S} />,
  bell: (
    <>
      <path d="M11 3a5 5 0 0 0-5 5c0 4-1.5 5.5-1.5 5.5h13S16 12 16 8a5 5 0 0 0-5-5Z" {...S} />
      <path d="M9.3 18a1.8 1.8 0 0 0 3.4 0" {...S} />
    </>
  ),
  arrow: <path d="M5 9h8M9 5l4 4-4 4" {...S} strokeWidth="1.6" />,
  chevron: <path d="m8 5 5 5-5 5" {...S} strokeWidth="1.6" />,
  caret: <path d="m6 9 3 3 3-3" {...S} strokeWidth="1.4" />,
  close: <path d="M5 5l10 10M15 5 5 15" {...S} strokeWidth="1.7" />,
  up: <path d="M12 18V6M12 6l-5 5M12 6l5 5" {...S} strokeWidth="1.6" />,

  capsule: (
    <>
      <rect x="3.2" y="9.5" width="17.6" height="5" rx="2.5" transform="rotate(-32 12 12)" {...S} strokeWidth="1.6" />
      <path d="M9.5 8.8 14.5 15" {...S} strokeWidth="1.6" />
    </>
  ),
  checkin: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8A2.5 2.5 0 0 1 17.5 17H9l-4 3v-3" {...S} strokeWidth="1.6" />
      <path d="m8.5 10.5 2 2 4-4.5" {...S} strokeWidth="1.6" />
    </>
  ),
  star: <path d="m12 3 2.4 5.3 5.8.6-4.3 3.9 1.2 5.7L12 21.2 6.9 18.5l1.2-5.7-4.3-3.9 5.8-.6L12 3Z" {...S} />,
  recovery: <path d="M12 20c4-2.4 7-5.6 7-9.4A4.6 4.6 0 0 0 12 7a4.6 4.6 0 0 0-7 3.6c0 3.8 3 7 7 9.4Z" {...S} />,

  focus: (
    <>
      <path d="M12 5v3M12 16v3M5 12h3M16 12h3" {...S} strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" {...S} strokeWidth="1.6" />
    </>
  ),
  stress: (
    <>
      <path d="M5 14c2-5 12-5 14 0" {...S} strokeWidth="1.6" />
      <path d="M12 14V8" {...S} strokeWidth="1.6" />
    </>
  ),
  energy: <path d="M13 3 5 13h6l-1 8 8-11h-6l1-7Z" {...S} />,
  consistency: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" {...S} />
      <path d="m8 12 2.5 2.5L16 9" {...S} strokeWidth="1.6" />
    </>
  ),

  breathe: (
    <>
      <circle cx="12" cy="12" r="8" {...S} />
      <circle cx="12" cy="12" r="3.4" {...S} />
    </>
  ),
  music: (
    <>
      <path d="M9 17V6l9-2v11" {...S} />
      <circle cx="6.5" cy="17" r="2.5" {...S} />
      <circle cx="15.5" cy="15" r="2.5" {...S} />
    </>
  ),
  journal: (
    <>
      <path d="M6 4h9l3 3v13H6V4Z" {...S} />
      <path d="M9 11h6M9 14.5h4" {...S} />
    </>
  ),
  book: (
    <>
      <circle cx="12" cy="12" r="8" {...S} />
      <path d="M9 12h6M12 9v6" {...S} />
    </>
  ),

  home: <path d="M4 11 12 4l8 7M6 10v9h12v-9" {...S} strokeWidth="1.6" />,
  chart: <path d="M4 18 9 12l4 3 7-8M20 7h-4M20 7v4" {...S} strokeWidth="1.6" />,
  knowledge: (
    <>
      <path d="M5 5h9l4 4v10H5V5Z" {...S} strokeWidth="1.6" />
      <path d="M8 11h7M8 14h5" {...S} strokeWidth="1.6" />
    </>
  ),
  account: (
    <>
      <circle cx="12" cy="8.5" r="3.4" {...S} strokeWidth="1.6" />
      <path d="M5.5 19c.6-3.2 3.3-5 6.5-5s5.9 1.8 6.5 5" {...S} strokeWidth="1.6" />
    </>
  ),
  check: <path d="m4 9 3.5 3.5L14 5" stroke="#F6EFE4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  dot: <circle cx="12" cy="12" r="2" fill="currentColor" />,
}
