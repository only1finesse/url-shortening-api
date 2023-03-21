import React from 'react'
import Link from 'next/link'

const NavLink = ({isButton, link, title}) => {

    return (
        <li className='duration-300 transition-all'>
            {isButton ?
                <Link className='bg-primaryCyan text-white px-6 py-3 rounded-full hover:brightness-110 duration-400 transition-all' href={link}>{title}</Link> :
                <Link className='text-grayViolet hover:text-darkViolet duration-400 transition-all' href={link}>{title}</Link>
            }
        </li>
    )
}

export default NavLink