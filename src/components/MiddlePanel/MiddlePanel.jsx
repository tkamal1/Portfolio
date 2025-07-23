import React from 'react'
import "./MiddlePanel.css";

import HeroComponents from './MidComponents/HeroComponents.jsx';
import ServiceComponents from './MidComponents/ServiceComponents.jsx';
function MiddlePanel() {
  return (
    <div className='MiddlePanel'>
      <HeroComponents/>
      <ServiceComponents/>



    </div>
  )
}

export default MiddlePanel