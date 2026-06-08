// Thin geometric line-art brain. Gold by default. NOT the flower mark.
// Color is driven by `color` (inherits currentColor on strokes).
export default function BrainIcon({ size = 24, color = 'var(--mw-gold)', style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ color, display: 'block', ...style }}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5.4C11 4 8.7 3.9 7.5 5.1 5.9 4.8 4.4 6 4.4 7.6 3.1 8.2 2.8 9.9 3.8 10.9 3 12 3.9 13.6 5.3 13.6 5.4 15.1 7.2 16 8.6 15.2 9.4 16.4 11.2 16.2 12 15" />
        <path d="M12 5.4C13 4 15.3 3.9 16.5 5.1 18.1 4.8 19.6 6 19.6 7.6 20.9 8.2 21.2 9.9 20.2 10.9 21 12 20.1 13.6 18.7 13.6 18.6 15.1 16.8 16 15.4 15.2 14.6 16.4 12.8 16.2 12 15" />
        <path d="M12 5.4V19" />
        <path d="M8.4 7.7C9.6 8 10.3 9 10.3 10.3" />
        <path d="M15.6 7.7C14.4 8 13.7 9 13.7 10.3" />
        <path d="M9 12.2C9.9 12.3 10.5 13 10.6 13.9" />
        <path d="M15 12.2C14.1 12.3 13.5 13 13.4 13.9" />
      </g>
    </svg>
  )
}
