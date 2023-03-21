import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Shorty Web App created with create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
    </>
  )
}
