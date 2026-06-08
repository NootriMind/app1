import { useState } from 'react'
import { Icon } from './Icons'
import { CHECKIN_SLIDERS } from '../mockData'

// Bottom-sheet check-in. Self-contained local state (sliders, protocol toggle,
// note). onSave receives the collected values; onClose dismisses. No API calls.
export default function CheckInModal({ open, onClose, onSave }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(CHECKIN_SLIDERS.map((s) => [s.id, s.value]))
  )
  const [protocolTaken, setProtocolTaken] = useState(true)
  const [note, setNote] = useState('')

  if (!open) return null

  const setVal = (id, v) => setValues((prev) => ({ ...prev, [id]: Number(v) }))

  const handleSave = () => {
    onSave?.({ values, protocolTaken, note })
    onClose?.()
  }

  return (
    <div className="mw-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="mw-sheet" role="dialog" aria-label="Check-in">
        <div className="mw-sheet-grab" />
        <div className="mw-sheet-head">
          <span className="mw-sheet-title">CHECK-IN</span>
          <button type="button" className="mw-iconbtn" onClick={onClose} aria-label="Close">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="mw-sheet-body">
          <p className="mw-q">How are you feeling right now?</p>
          <p className="mw-q-sub">Honest answers help us coach you better.</p>

          <div className="mw-slider-grid">
            {CHECKIN_SLIDERS.map((s) => (
              <div
                key={s.id}
                className={`mw-slider-card${s.span ? ' span-2' : ''}`}
                style={{ '--mw-knob': s.knob }}
              >
                <div className="mw-slider-top">
                  <span className="mw-slider-name">{s.name}</span>
                  <span className="mw-slider-val">{values[s.id]}/5</span>
                </div>
                <input
                  type="range" min="1" max="5" step="1"
                  className="mw-range"
                  value={values[s.id]}
                  onChange={(e) => setVal(s.id, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="mw-slider-card span-2" style={{ marginTop: 12 }}>
            <div className="mw-slider-top"><span className="mw-slider-name">Protocol Taken</span></div>
            <div className="mw-toggle">
              <button type="button" className={protocolTaken ? 'is-on' : ''} onClick={() => setProtocolTaken(true)}>Yes</button>
              <button type="button" className={!protocolTaken ? 'is-on' : ''} onClick={() => setProtocolTaken(false)}>No</button>
            </div>
          </div>

          <p className="mw-slider-name" style={{ marginTop: 18 }}>What's on your mind?</p>
          <textarea
            className="mw-textarea"
            placeholder="Write anything…"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button type="button" className="mw-btn mw-btn-block" onClick={handleSave}>
            Save Check-in
          </button>
        </div>
      </div>
    </div>
  )
}
