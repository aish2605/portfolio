import React from 'react'
import "../css/contact.css"

function contacts() {
  return (
  <section>
   <div className="contact">
    <div>
       <h1 className="heading">Contact<span>Me</span></h1>
    <h4>let's work together!</h4>
    </div>
   
    <div className="info">
      <div className='child1'>
        <img src="../public/call.webp" height="40px" width="40px"></img>
    <span>7620833506</span>
      </div>
      <div className='child1'>
        <img src="../public/mail.png" height="40px" width="40px"></img>
    <span>jadhavgaishwarya2003@gmail.com</span></div>
     
    </div>
  
    
   </div>
  </section>
  )
}

export default contacts