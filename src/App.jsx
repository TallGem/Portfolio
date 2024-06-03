import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { FaBars } from "react-icons/fa";
import Sidebar from './Components/Sidebar';
import Aos from 'aos';
import 'aos/dist/aos.css'
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Services from './Components/Services';
import Contact from './Components/Contact';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration:3000
    })
  }, [])
  

  const [isOpen, setisOpen] = useState(false)


  const toggleBarOpen = ()=>{
    setisOpen(true)
  }

  const handleClick=()=>{
    setisOpen(false)
  }
  return (
    <>
    <div>

    <Navbar />

    <ul className='lg:hidden md:hidden'>
      <li>
      <FaBars onClick={toggleBarOpen}/>
      </li>
    </ul>

    <div className={isOpen?'block' : 'hidden'}><Sidebar handleClose={handleClick}/></div>


    
    <About/>
    <Skills/>
    {/* <Project/> */}
    <Services/>
    <Contact/>
    </div>
    </>
  )
}

export default App