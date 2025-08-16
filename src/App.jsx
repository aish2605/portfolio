import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contacts"
import Skill from "./components/skill"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/navbar" element={<Navbar/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
<Route path="/skill" element={<Skill/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App