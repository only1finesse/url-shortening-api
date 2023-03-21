import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'

export default function Home() {
  return (
    <>
      <div className='md:px-10 mdl:px-24 px-6'>
        <Head>
          <title>Shortly</title>
          <meta name="description" content="Shorty Web App created with create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* navbar */}
        <header>
          <Navbar />
        </header>

        <main className=''>
          <Hero />
        </main>
      </div>
    </>
  )
}
