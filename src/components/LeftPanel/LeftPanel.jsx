import React from 'react'
import "./leftPanel.css";
import tridib from "../../assets/tridib.png"
function LeftPanel() {
  return (
    <div className='leftPanel'>
{/* image container */}
      <div className='img-container'>
        <img src={tridib} alt="tridib" />
        <h3>Tridib kamal</h3>
        <h4>Back-end Developer</h4>
        <div className='social-media'>
          <img src={tridib} alt="" />
          <img src={tridib} alt="" />
          <img src={tridib} alt="" />
        </div>
      </div>
{/* address container */}
      <div className='address-container'>
        <div className='add-lines'>
          <h1>Age:</h1>
          <h2>25</h2>
        </div>
        <div className='add-lines'>
          <h1>Residence:</h1>
          <h2>india</h2>
        </div>
        <div className='add-lines'>
          <h1>Freelance:</h1>
          <h2>Active</h2>
        </div>
        <div className='add-lines'>
          <h1>Address:</h1>
          <h2>kakdwip,West bengal</h2>
        </div>
      </div>
{/* Language container */}
      <div className='lan-container'>
        <h1>Language</h1>
        <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">Bengali</div>
            <div class="progress" >85%</div>

          </div>
          <div className="progress-bar-b">
          </div>
        </div>
         <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">Hindi</div>
            <div class="progress" >70%</div>

          </div>
          <div className="progress-barH">
          </div>
        </div>
         <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">English</div>
            <div class="progress" >60%</div>

          </div>
          <div className="progress-barE">
          </div>
        </div>


      </div>
{/* Skill container */}
      <div className='skills-container'>
        <h1>Technical Skills</h1>
        <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">C</div>
            <div class="progress" >75%</div>

          </div>
          <div className="progress-bar-c">
          </div>
        </div>

          <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">JavaScript</div>
            <div class="progress" >85%</div>

          </div>
          <div className="progress-bar-js">
          </div>
        </div>
          <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">Python</div>
            <div class="progress" >70%</div>

          </div>
          <div className="progress-bar-py">
          </div>
        </div>
          <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">Java</div>
            <div class="progress" >65%</div>

          </div>
          <div className="progress-bar-j">
          </div>
        </div>
          <div className="lan-prog-container">
          <div className='language'>
            <div className="lan-name">Dart</div>
            <div class="progress" >65%</div>

          </div>
          <div className="progress-bar-d">
          </div>
        </div>
      </div>

      {/* Cv container */}
      <div className='cv-container'>
        
        <h2>Download CV</h2>
      </div>

    </div>
  )
}

export default LeftPanel