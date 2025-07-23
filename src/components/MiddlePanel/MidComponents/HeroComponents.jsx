import React from 'react'
import '../MiddlePanel.css';
import tridibImg from "../../../assets/tridib.png";
function HeroComponents() {
  return (
    <div className="hero">
        <div className="herolinebox">
          <div className="heroline1">
            <h1>I'am Tridib kamal <br />  <span> Back-end </span> Developer</h1>
          </div>
          <div className="heroline2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur a corporis aliquam laudantium nostrum aliquid quaerat dolorem commodi odio.</p>
          </div>
          <div className="heroline3">
            <div className="button">HIRE ME-{">"}</div>
          </div>
        </div>
        <div className="hero-img">
          <img src={tridibImg} alt="" />
        </div>
      </div>
  )
}

export default HeroComponents;