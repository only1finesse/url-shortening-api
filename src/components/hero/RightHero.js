import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { working, blob } from '@/assets'

const RightHero = () => {
    return (
        <div className='heroSection'>
            <div className='flex'>
                <Image className='object-none scale-75 md:ml-17 ml-24 overflow-visible md:object-left md:scale-105' src={working} />
            </div>
        </div>
    )
}

export default RightHero