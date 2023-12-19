import React from 'react'
import { navObj } from './NavContent'
import { Link } from 'react-scroll'
import Logo from '../Images/tgmlogo.png'

const Navbar = () => {
  return (
    <>
      <div className='hidden md:block lg:block'>

        <nav className=' flex items-center justify-between'>
          <div><img src={Logo} style={{ width: '200px' }} alt="" /></div>

          <div className='justify-end'>

            <ul>

              <li className=' flex flex-row gap-16  me-20 mt-5'>
                {navObj.map((items, index) => (
                  <Link smooth key={index} to={items.link} >
                    <div>{items.title}</div>
                  </Link>
                ))}
              </li>

            </ul>
          </div>
        </nav>

      </div>
    </>
  )
}

export default Navbar