import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { navObj } from './NavContent';
import { Link } from 'react-scroll';

const Sidebar = ({handleClose}) => {
    return (
        <div className='fixed top-0 bg-red-400   md:hidden w-1/3'>

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