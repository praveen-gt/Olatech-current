import '@/styles/globals.css'
import header from "../styles/header.module.css";
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
// import Navbar from './navbar'
import Footer from '../../components/Footer'

import Head from 'next/head'
// import MegaMenuDemo from '../../Components/MegaMenu'
import { Navbar } from '../../components/menu/Menu'
import { useState } from 'react'

import localFont from 'next/font/local'

const now = localFont({
  src: [
    {
      path: '../../public/fonts/now/Now-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/now/Now-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/now/Now-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/now/Now-Bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/now/NowAlt-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
});

const lato = localFont({
  src: [
    {
      path: '../../public/fonts/lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const graphik = localFont({
  src: [
    {
      path: '../../public/fonts/graphik/GraphikRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/graphik/GraphikMedium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/graphik/GraphikSemibold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/graphik/GraphikBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
});


export default function App({ Component, pageProps }: AppProps) {
  const [background, setBackground] = useState(false);
  return (
    <main className={`${graphik.className}`}>
      <Head>
        <title>Ola Tech LMS for RTOs, Universities, and Corporates</title>
        <meta name="description" content="New age e-learning solutions for RTOs, Universities, and Corporates." />
        <link rel="shortcut icon" href="/static/olatech-favicon.png" />
        <link rel="canonical" href="https://olatech.com.au/" />
      </Head>
      {/* <main className={`${lato.variable} font-sans`}> */}
      
      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </main>
  )
}
