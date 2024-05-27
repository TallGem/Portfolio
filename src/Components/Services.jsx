import React from 'react'
import { FaServicestack } from "react-icons/fa6";
import serviceboy from '../Images/services1.png'
import { SiWebmoney } from "react-icons/si";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { SiSemanticweb } from "react-icons/si";

const Services = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>

      <div className='bg-blue-50'>

        <div className='mx-5 px-10 py-10'>

          <h1 className='text-2xl font-semibold'>⪼⪼⪼ Services:</h1>

          <div className='mt-20'>
            <div className='flex items-center gap-1 '>

              <h3 className='text-purple items-center text-xl '><SiWebmoney /></h3>
              <h3 className='text-xl font-semibold flex'> Web Design</h3>

            </div>

            <p className='font-semibold text-purple-900 pt-2'>
              I believe in crafting web experiences that seamlessly blend form and function. By prioritizing clean aesthetics, intuitive navigation, and purposeful design elements, I strive to create websites that not only look beautiful but also enhance the user's journey.
            </p>

          </div>

          <div className='mt-10'>

            <div className=' flex items-center gap-1'>

              <h3 className='text-purple text-2xl'><PiWebhooksLogoFill /></h3>
              <h3 className='text-xl font-semibold flex gap-2'> Progressive Web Application</h3>

            </div>

            <p className='font-semibold text-purple-900 pt-2'>
              As a seasoned web developer, I specialize in crafting high-performance PWAs that push the boundaries of what's possible on the web.  I ensure that PWAs adapt gracefully to desktops, tablets, and smartphones alike. Whether accessed in portrait or landscape mode, users can expect a consistent and optimized experiece.
            </p>

          </div>

          <div className='mt-10'>

            <div className='flex items-center gap-1'>

              <h3 className='text-purple text-xl'> <SiSemanticweb /></h3>
              <h3 className='text-xl font-semibold'> UI/UX Design</h3>

            </div>

            <p className='font-semibold text-purple-900 pt-2'>
              I specialize in creating visually appealing and functional user interfaces that elevate the overall user experience. From typography and color palettes to layout and visual hierarchy, I pay meticulous attention to every detail to ensure clarity, consistency, and aesthetic appeal.
            </p>

          </div>

        </div>

      </div>

      <div>
        <img src={serviceboy} className="img-fluid lg:mt-16 " width={700} />
      </div>


    </div>
  )
}

export default Services