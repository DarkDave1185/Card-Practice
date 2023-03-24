import React from 'react'
import "./SlideCard.css"


function SlideCard() {
  return (
    <div className='slidecard-body'>
        <div className="slidecard">
            <div className='slidecard imagebox'>
                <img src='../../../public/assets/badtzu.jpg' alt="Sanrio Badtzu-maru" />
            </div>
            <div className='slidecard details'>
                <h3 className="slidecard-title">Card Title Section</h3>
                <span className="slidecard-category">Sub-Category Section</span>
                <h4 className="slidecard-info practice-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>
            </div>
        </div>
        <div className="slidecard">
            <div className='slidecard imagebox'>
                <img src='../../../public/assets/airmax.jpg' alt="Sanrio Badtzu-maru" />
            </div>
            <div className='slidecard details'>
                <h3 className="slidecard-title">Card Title Section</h3>
                <span className="slidecard-category">Sub-Category Section</span>
                <p className="slidecard-info practice-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="slidecard-size">Size</h4>
                <ul className="slidecard-size-list">
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                </ul>
                <div className="slidecard-group">
                    <h2>
                        <sup>$</sup>165<small>.00</small>
                    </h2>
                    <a href="#"><img src="../../../public/assets/hand.png" alt="hand icon" /></a>
                </div>
            </div>
        </div>
        <div className="slidecard">
            <div className='slidecard imagebox practice-3'>
                <img src='../../../public/assets/AVATARZ5.png' alt="avatar image" />
            </div>
            <div className='slidecard details practice-3'>
                <h3 className="slidecard-title">Card Title Section</h3>
                <span className="slidecard-category">Sub-Category Section</span>
                <span className="slidecard-profession">Profession Section</span>
                <h4 className="slidecard-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
            </div>
        </div>
    </div>
    
  )
}

export default SlideCard