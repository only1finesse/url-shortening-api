import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

const Hero = () => {
  return (
    <section>
        <div className='bg-white flex md:flex-row items-center md:pt-14 flex-col-reverse shrink mb-16'>
            <LeftHero />
            <RightHero />
        </div>
    </section>
  )
}

export default Hero