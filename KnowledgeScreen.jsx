import { useState } from 'react'
import BrainIcon from '../components/BrainIcon'
import { CoachInsight, CoachRecommendation, CoachTool } from '../components/CoachCard'
import { COACH } from '../mockData'

// COACH: a Coach pane (hero, insight, recommendation, tools) and an Insights
// pane. Subtab state is local. No AI calls yet, content is placeholder copy.
export default function CoachScreen() {
  const [sub, setSub] = useState('coach')

  return (
    <section>
      <div className="mw-subtabs">
        <button
          className={`mw-subtab${sub === 'coach' ? ' is-active' : ''}`}
          onClick={() => setSub('coach')}
        >
          Coach
        </button>
        <button
          className={`mw-subtab${sub === 'insights' ? ' is-active' : ''}`}
          onClick={() => setSub('insights')}
        >
          Insights
        </button>
      </div>

      {sub === 'coach' ? (
        <div>
          <div className="mw-card mw-coach-hero">
            <div>
              <p className="mw-coach-hero-title">Your AI Coach</p>
              <p className="mw-coach-hero-sub">Personalized guidance tailored to you.</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <BrainIcon size={56} />
            </div>
          </div>

          <p className="mw-section-title">Today's Coach Insight</p>
          <CoachInsight text={COACH.insight} />

          <p className="mw-section-title">Today's Recommendation</p>
          <CoachRecommendation
            action={COACH.recommendation.action}
            subtitle={COACH.recommendation.subtitle}
            icon="recovery"
            tone="purple"
          />

          <p className="mw-section-title">Tools to Help You</p>
          <div className="mw-stack">
            {COACH.tools.map((t) => (
              <CoachTool
                key={t.id}
                title={t.title}
                subtitle={t.subtitle}
                icon={t.icon}
                tone={t.tone}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mw-card mw-card-pad" style={{ marginTop: 4 }}>
            <p className="mw-insight-text">
              Insights roll up your check-ins and Brain Wins into weekly patterns.
              Keep depositing and your coach will surface trends here.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
