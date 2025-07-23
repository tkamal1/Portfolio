import './App.css'
import LeftPanel from "./components/LeftPanel/LeftPanel.jsx";
import RightPanel from './components/Rightpanel/RightPanel.jsx';
import MiddlePanel from './components/MiddlePanel/MiddlePanel.jsx';
function App() {


  return (
    <div className='main-container'>
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  )
}

export default App
