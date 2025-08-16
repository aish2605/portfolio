import React from 'react'
import Navbar from "./navbar"
import About from "./about"
import Contact from "./contacts"
import Skill from "./skill"
import "../css/home.css"
import { Link } from 'react-router-dom'

function home() {

  const openPdf = () => {
    window.open("/download-resume.pdf", "_blank");  
  };
  return (
      <>
  
      <Navbar />
     
      <div className="home">
        <div className="child1">
          <div className="home-content"> 
          <h3>Hello, It's Me  </h3>
        <h1>Jadhav Aishwarya</h1>
        <h3>And I'm a <span>Full Stack Devloper</span></h3>
        <p>I'm Java Developer And Web Designer with 1 year of experience. <br>
        </br> experience in website design, frontend design, backend logic and may more.... </p>
        
       
        </div>
        
      
       <div className="image">
          <img src="/selfphoto.jpg" height="300px" width="300px"></img>
        </div>
      
        </div>
        <div className='child3'>
          <button className="resume">Hire Me</button>
       <button   onClick={openPdf} className="resume"> My resume</button>
        </div>
       
      </div>
      <About/>
      <Skill/>
      <Contact />

      
    </>
  )
}

export default home