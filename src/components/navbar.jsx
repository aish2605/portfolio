import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Portfolio</h1>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; 
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/about" className="link">About</NavLink></li>
        <li><NavLink to="/skill" className="link">Skill</NavLink></li>
        <li><NavLink to="/contact" className="link">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
