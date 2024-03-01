import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
  return (
    <>
         <div className='mt-20 mx-6'>
            <h1 className='text-5xl'>Hi, I'm <span className='font-bold'>Abdul-Afees</span>, <br/> <span>a Fullstack Developer.</span></h1>

            <h2>
              An expert in {" "}
              <TypeAnimation
              sequence={[

                "Javasript", 500,
                "React", 500,
                "CSS", 500,
                "Node JS", 500,
                "HTML", 500,
                "Firebase", 500,
                "Express", 500,
                "Mongo DB", 500,
                "Tailwind Css", 500,
                "Bootstrap Css", 500,


              ]}

              style={{fontSize: "1em"}}
              repeat={Infinity}
              />
            </h2>
         </div>
    </>
  )
}

export default About