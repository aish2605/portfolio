import React from 'react'
import "../css/skill.css"

function skill() {
  return (
    <>
     <h1 className="sub-title">My<span>Skills</span></h1>
    <section>
   
    <div class="container1">
        <h1 className="heading1">Technical skill</h1>
        <div className="technical-bar">
            <div className="bar">
                <img src="/html.png" width="40px" height="40px"></img>
                <div className="info">
                    <span>HTML</span>
                </div>
                 <div className="progress html">
                    <span></span>
                   </div>
            </div>
            <div className="bar">
                <img src="/csss.png" width="40px" height="50px"></img>
                <div className="info">
                    <span>CSS</span>
                </div>
                 <div className=" progress css">
                    <span></span>
                   </div>
            </div>
            <div className="bar">
                <img src="/javascript.png" width="40px" height="40px"></img>
                <div className="info">
                    <span>JavaScript</span>
                </div>
                 <div className=" progress js">
                    <span></span>
                   </div>
            </div>
            <div className="bar">
                <img src="/java.png" width="40px" height="40px" ></img>
                <div className="info">
                    <span>Java</span>
                </div>
                 <div className=" progress java">
                    <span></span>
                   </div>
            </div>
            <div className="bar">
                <img src="/reactjs.png" width="40px" height="40px"></img>
                <div className="info">
                    <span>ReactJS</span>
                </div>
                 <div className=" progress reactjs">
                    <span></span>
                   </div>
            </div>
            <div className="bar">
                <img src="/oracle.png" width="40px" height="40px"></img>
                <div className="info">
                    <span>Oracle</span>
                </div>
                 <div className="progress oracle">
                    <span></span>
                   </div>
            </div>
            <div className="bar">
                <img src="/mysql.png" width="40px" height="40px"></img>
                <div className="info">
                    <span>MySQL</span>
                </div>
                 <div className="progress mysql">
                    <span></span>
                   </div>
            </div>

        </div>
    </div>

    <div className="container1">
        <h1 className="heading1">Professional skill</h1>
        <div className="radial-bars">
        <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                   <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Creativity</div>
        </div>
         <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                   <circle className="path path-2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">70%</div>
            <div className="text">Communication skill</div>
        </div>
         <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                   <circle className="path path-3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">60%</div>
            <div className="text">Problem solving</div>
        </div>
         <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                   <circle className="path path-4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Team Work</div>
        </div>
</div>
    </div>
    </section>
    </>
  )
}

export default skill