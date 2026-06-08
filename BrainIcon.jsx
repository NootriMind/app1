import ProgressRing from './ProgressRing'
import BrainIcon from './BrainIcon'
import { Icon } from './Icons'

export default function ScoreCard({ score = 78, delta = 4, deltaLabel = 'points this week' }) {
  return (
    <div className="mw-card mw-scorecard">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="mw-label">Mental Wealth Score</p>
        <div className="mw-score-num">{score}</div>
        <div className="mw-score-delta">
          <Icon name="up" size={12} />
          {delta} {deltaLabel}
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ProgressRing score={score} size={120}>
          <BrainIcon size={46} />
        </ProgressRing>
      </div>
    </div>
  )
}
