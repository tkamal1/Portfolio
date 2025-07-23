import './App.css'
import "./index.css";
import React, { useState, useEffect } from 'react';
import LeftPanel from "./components/LeftPanel/LeftPanel.jsx";
import RightPanel from './components/Rightpanel/RightPanel.jsx';
import MiddlePanel from './components/MiddlePanel/MiddlePanel.jsx';
function App() {


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='main-container'>
      <LeftPanel />
      <MiddlePanel />
      <RightPanel toggleTheme={toggleTheme} currentTheme={theme} />
    </div>
  )
}

export default App
