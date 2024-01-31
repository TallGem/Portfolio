import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { navObj } from './NavContent';
import { Link } from 'react-scroll';

const Sidebar = ({handleClose}) => {
    return (
        <div className='fixed top-0 z-[1000000] min-h-screen bg-red-600    md:hidden w-2/3 h-2/3'>

            <aside>

                <AiOutlineClose className='float-right' onClick={handleClose}/>
                <div>
                    {navObj.map((items, index) => (
                        <Link smooth key={index} to={items.link}> <div>{items.title}</div></Link>
                    ))}


                </div>
            </aside>

        </div>
    )
}

export default Sidebar