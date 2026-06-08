// Standalone entry for the V2 preview. Lets you run ONLY the Mental Wealth
// redesign without going through App.jsx or auth, e.g.:
//
//   npx vite --open /v2-preview.html
//
// This file is not imported by your existing app, so it changes nothing.
import React from 'react'
import { createRoot } from 'react-dom/client'
import MentalWealthApp from './MentalWealthApp'

createRoot(document.getElementById('v2-root')).render(
  <React.StrictMode>
    <MentalWealthApp />
  </React.StrictMode>
)
