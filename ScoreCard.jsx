// Upward-trend line chart drawn as SVG. Pure presentational: pass a series of
// 0–100 numbers. Renders gridlines, y labels (0/25/50/75/100), area fill, line,
// and a gold endpoint dot. Scales responsively (viewBox).
export default function WealthChart({ series = [], width = 320, height = 150 }) {
  const padL = 26, padR = 6, padT = 14, padB = 6
  const iw = width - padL - padR
  const ih = height - padT - padB
  const ys = [0, 25, 50, 75, 100]
  const n = series.length

  const pts = series.map((v, i) => {
    const x = padL + iw * (n > 1 ? i / (n - 1) : 0)
    const y = padT + ih * (1 - v / 100)
    return [x, y]
  })

  const line = pts.length
    ? 'M ' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L ')
    : ''
  const area = pts.length
    ? `${line} L ${pts[pts.length - 1][0].toFixed(1)} ${(padT + ih).toFixed(1)} L ${pts[0][0].toFixed(1)} ${(padT + ih).toFixed(1)} Z`
    : ''
  const last = pts[pts.length - 1]

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mw-chart-svg">
      <defs>
        <linearGradient id="mwArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--mw-forest-soft)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--mw-forest-soft)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {ys.map((v) => {
        const y = padT + ih * (1 - v / 100)
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={width - padR} y2={y} stroke="rgba(246,239,228,0.07)" strokeWidth="1" />
            <text x={padL - 6} y={y + 3} textAnchor="end" className="mw-axis-label">{v}</text>
          </g>
        )
      })}
      {area && <path d={area} fill="url(#mwArea)" />}
      {line && (
        <path d={line} fill="none" stroke="var(--mw-forest-soft)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {last && (
        <circle cx={last[0]} cy={last[1]} r="4.5" fill="var(--mw-gold)" stroke="var(--mw-bg-1)" strokeWidth="2" />
      )}
    </svg>
  )
}
