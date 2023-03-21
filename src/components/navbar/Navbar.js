import React from 'react'
import { FiMenu } from 'react-icons/fi'
import Image from 'next/image'

import Link from 'next/link'
import NavLink from './NavLink'

import { logo } from '@/assets'

const Navbar = () => {
    return (
        <div className='bg-white top-0 w-[100%] z-10 font-body'>
            <div className='container mx-auto flex items-center py-10 justify-between'>
                {/* logo and nav-links */}
                <div className='flex items-center gap-10'>
                    {/* logo */}
                    <div className='min-w-max py-2'>
                        <Link href='/'>
                            <Image className='' src={logo} alt="bit avatar" />
                        </Link>
                    </div>

                    {/* nav-links */}
                    <ul className='hidden md:flex flex-row space-x-10'>
                        <NavLink link={'features'} title={'Features'} />
                        <NavLink link={'pricing'} title={'Pricing'} />
                        <NavLink link={'resources'} title={'Resources'} />
                    </ul>
                </div>

                {/* login and signup links */}
                <ul className='hidden md:flex flex-row space-x-10'>
                    <NavLink link={'login'} title={'Login'} />
                    <NavLink isButton link={'signup'} title={'Sign Up'} />
                </ul>

                <div className='md:hidden text-3xl text-grayViolet'>
                    <button><FiMenu /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar