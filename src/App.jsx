import { useState } from 'react'
import './App.css'

import CardAnimation from "./components/CardAnimation.jsx"
import CardVariant1 from "./components/CardVariant1.jsx"
import CardVariant2 from "./components/CardVariant2.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='card-section'>
        <h1 className="card-section-title">Card Practice Base</h1>
        <h5 className="credits">Youtube:OnlineTutorial (www.youtube.com/@OnlineTutorialsYT/featured)</h5>
        <CardAnimation />
      </div>
      <div className='practice-1 card-section'>
        <h1 className="ractice-1 card-section-title">Card Practice 1</h1>
        <h5 className="practice-1 credits">updated angle and hover effect...</h5>
        <CardVariant1 />
      </div>
      <div className='practice-2 card-section'>
        <h1 className="ractice-2 card-section-title">Card Practice 2</h1>
        <h5 className="practice-2 credits">updated hyperlink and hover effect...</h5>
        <CardVariant2 />
      </div>
    </div>
  )
}

export default App
