import React from 'react'
import "./RightPanel.css";
function RightPanel({ toggleTheme, currentTheme }) {
  return (
    <div className='RightPanel'>

      <span>Tridib's Portfolio</span>
      <button className="nav-btn" onClick={toggleTheme}>
        Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

export default RightPanel