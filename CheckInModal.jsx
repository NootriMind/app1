// Circular progress ring. Filled arc is split into a green segment then a gold
// segment (greenFrac of the filled portion is green). Renders any children
// centered inside (e.g. <BrainIcon/>). Rotation is baked in so children stay upright.
export default function ProgressRing({
  score = 78,
  size = 120,
  stroke = 9,
  greenFrac = 0.54,
  children,
}) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - stroke
  const C = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(100, score)) / 100
  const greenLen = C * pct * greenFrac
  const goldLen = C * pct * (1 - greenFrac)

  return (
    <div className="mw-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
        <g transform={`rotate(-90 ${cx} ${cy})`}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(246,239,228,0.10)" strokeWidth={stroke} />
          <circle
            cx={cx} cy={cy} r={r} fill="none"
            stroke="var(--mw-forest-soft)" strokeWidth={stroke} strokeLinecap="round"
            strokeDasharray={`${greenLen} ${C}`} strokeDashoffset={0}
          />
          <circle
            cx={cx} cy={cy} r={r} fill="none"
            stroke="var(--mw-gold)" strokeWidth={stroke} strokeLinecap="round"
            strokeDasharray={`${goldLen} ${C}`} strokeDashoffset={-greenLen}
          />
        </g>
      </svg>
      <div className="mw-ring-center">{children}</div>
    </div>
  )
}
