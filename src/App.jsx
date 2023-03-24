import { useState } from 'react'
import './App.css'

import CardAnimation from "./components/CardAnimation.jsx"
import CardVariant1 from "./components/CardVariant1.jsx"
import CardVariant2 from "./components/CardVariant2.jsx"
import CardVariant3 from "./components/CardVariant3.jsx"

import SlideCard from './components/SlideCard/SlideCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div className='base card-section'>
        <h1 className="base card-section-title">Card Practice Base</h1>
        <h5 className="base credits">Youtube:OnlineTutorial (www.youtube.com/@OnlineTutorialsYT/featured)</h5>
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
      <div className='practice-3 card-section'>
        <h1 className="practice-3 card-section-title">Card Practice 3</h1>
        <h5 className="practice-3 credits">updated hyperlink ...</h5>
        <CardVariant3 />
      </div> */}

      <br></br>

      <div className='slide card-section'>
        <h1 className="slide card-section-title">Sliding Card Practice Base</h1>
        <h5 className="slide credits">Youtube:OnlineTutorial (www.youtube.com/@OnlineTutorialsYT/featured)</h5>
        <SlideCard />
      </div>
    </div>
  )
}

export default App
