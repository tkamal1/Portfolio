import React from 'react'
import "./Service.css";
import app from "../../../assets/app-dev.png";
import web from "../../../assets/web.png";
import data from "../../../assets/data.png";
import problem from "../../../assets/problem.png";
function ServiceComponents() {
  return (
    <div className='service-container'>
      <div className="about-container">
        <h1>ABOUT ME</h1>
      </div>
      <div className="quets-container">
        <h2>“Code is my canvas, tech is my tool for change.”</h2>
      </div>
      <div className="shorts-bio">
        <p>Hello! I’m Tridib, a passionate full-stack developer and final-year B.Tech Computer Science Engineering student. I specialize in building responsive web and mobile applications that combine clean code with great user experience. I'm also a data enthusiast and enjoy solving problems with tools like Power BI, SQL, and Python.</p>
      </div>
      <div className="what-i-do-box">
        <div className="box1">
          <div className="box-title">
            <h3>What i Do?</h3>
          </div>
          <div className="box-content">
            <div className="box-content1">
              <div className="content1">
                <img src={app} className="img-yellow" alt="App Development" />
                <h4>App Development</h4>
                <p>I create mobile applications that are not only functional but also user-friendly, ensuring a seamless experience across devices.</p>
              </div>
              <div className="content2">
                <img src={web} className="img-yellow" alt="Web Development" />
                <h4>Web Development</h4>
                <p>My web development skills focus on building responsive and interactive websites that engage users and meet business needs.</p>
              </div>
            </div>
            <div className="box-content2">
              <div className="content3">
                <img src={data} className="img-yellow" alt="Data Analysis" />
                <h4>Data Analysis</h4>
                <p>I leverage data analysis tools to extract insights and drive decision-making, enhancing the overall performance of applications.</p>
              </div>
              <div className="content4">
                <img src={problem} className="img-yellow" alt="Problem Solving" />
                <h4>Problem Solving</h4>
                <p>My approach to problem-solving involves critical thinking and innovative solutions, ensuring challenges are met with effective strategies.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="box2">
          <div className="box-title">
            <h3>Fun facts</h3>

          </div>
          <div className="fact-container">
            <div className="fact-item">
              <h1>3+</h1>
              <h3>YEARS EXPERIENCE</h3>
            </div>
            <div className="fact-item">
              <h1>16</h1>
              <h3>PROJECT DONE</h3>
            </div>
            <div className="fact-item">
              <h1>3</h1>
              <h3>AWARDS</h3>
            </div>
            <div className="fact-item">
              <h1>16+</h1>
              <h3>HAPPY CLIENTS</h3>
            </div>
            <div className="fact-item">
              <h1>850</h1>
              <h3>SATISFIED FOLOWERS</h3>
            </div>
            <div className="fact-item">
              <h1>4</h1>
              <h3>NEW PROJECT RUNNING</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServiceComponents