import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { FaBars } from "react-icons/fa";
import Sidebar from './Components/Sidebar';
import Aos from 'aos';
import 'aos/dist/aos.css'
import About from './Components/About';
import Skills from './Components/Skills';

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
    </div>
    </>
  )
}

export default App