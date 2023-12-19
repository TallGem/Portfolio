import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <>

    <div className='w-52' data-aos="flip-down">


       I AM Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi, ab omnis labore reiciendis hic ex asperiores eius dolorum placeat. Harum nobis optio dolores ipsam! Dignissimos quisquam ducimus amet? Ullam!

       <h1> I am {" "}
       <TypeAnimation

       sequence={[
            "jojo",500,
            "kiki", 500,
            "lola", 500,
          
       ]}

       style={{fontSize:"1em"}}
       repeat={Infinity}
       />
       </h1>
    </div>
    </>
  )
}

export default Hero