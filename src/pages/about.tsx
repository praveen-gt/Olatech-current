import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="max-w-md mx-auto py-20 bg-white overflow-hidden md:max-w-7xl">
        <div className="md:flex flex-row-reverse">
          <div className="md:shrink-0">
            <Image
            src={'/static/about-ola.jpg'}
            width={600}
            height={600} 
            alt='About Olatech'/>
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">About the Ola Tech</h2>
            {/* <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a> */}
            <p className="mt-2 text-slate-500">Ola Tech – An interactive e-learning solution for RTOs, institutions, and corporates.</p>
            <p className="mt-2 text-slate-500">We love to make learning simple and accessible to students.</p>
            <p className="mt-2 text-slate-500">We believe in empowering corporates by providing them the right platform to educate their employees. We care for people who wish to improve their lives by learning a new talent.</p>
          </div>
        </div>
      </div>
    </>
  )
}