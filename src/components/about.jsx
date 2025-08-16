import React from 'react'
import "../css/about.css"

function about() {
  return (
    <>
    
    <div className="about">
      
      <div className="about-img">
        <img src="../public/selfphoto.jpg" height="300px" width="300px"></img>
      </div>
      <div className="about-text">
        
        <h2>About<span>Me</span></h2>
        <h4>Full Stack Devloper!</h4>
        <p>I’m a Full Stack Java Developer who loves building web applications from start to finish.
           I work with Java, Spring Boot, and Hibernate on the backend, and HTML, CSS, JavaScript, and React on the frontend.

I enjoy creating clean, efficient, and user-friendly solutions,
 and I’m always eager to learn new technologies. I have experience working with databases, REST APIs, and cloud deployment, 
 and I like turning ideas into working products.</p>

      </div>
      
       
    </div>
    </>
  )
}

export default about