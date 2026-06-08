import MentalWealthApp from './MentalWealthApp'

// Thin wrapper so you can mount the V2 preview behind a route without pulling
// any V2 concern into your existing App.jsx. Example (does not modify App.jsx):
//
//   import PreviewRoute from './v2/PreviewRoute'
//   <Route path="/v2" element={<PreviewRoute />} />
//
// Visiting /v2 shows the full Mental Wealth preview. Everything else in your
// app keeps working exactly as before.
export default function PreviewRoute() {
  return <MentalWealthApp />
}
