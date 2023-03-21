import React from 'react'
import Link from 'next/link'

const LeftHero = () => {
    return (
        <div className='heroSection flex-wrap'>
            <div className='flex flex-col gap-3 flex-wrap justify-center text-center md:text-left'>
                <h1 className='md:text-8xl text-5xl font-bold text-neutralBlue'>More than just shorter links</h1>
                <p className='text-xl md:text-2xl text-grayViolet'>Build your brand's recognition and get detailed insights on how your links are performing</p>
            </div>
            <div className='py-12'>
                <Link className='bg-primaryCyan text-white px-6 py-3 rounded-full hover:brightness-110 duration-400 transition-all' href='/'>Get Started</Link>
            </div>
        </div>
    )
}

export default LeftHero