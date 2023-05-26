import React from 'react'
import Image from 'next/image'
import Styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <>
      <div className="max-w-md mx-auto py-20 bg-white overflow-hidden md:max-w-7xl">
        <div className="md:flex flex-row-reverse justify-between">
          <div className="md:shrink-0">
            <Image
              src={'/static/contact-ola-lms.png'}
              width={600}
              height={600}
              alt='Contact Olatech' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold mb-16">Reach us for a discussion!</h2>
            <div className='mb-16'>
              <h3 className={`${Styles.h3} tracking-wide capitalize mb-5` }>Email</h3>
              <p className={`${Styles.p} tracking-wide`}>info@olatech.com.au</p>
            </div>
            <div>
              <h3 className={`${Styles.h3} tracking-wide capitalize mb-3` }>Location</h3>
              <h4 className={`${Styles.h4} my-2 mt-8`}>Springvale</h4>
              <p className={`${Styles.p} tracking-wide`}>10 Blissington Street, Springvale, VIC 3171</p>
              <h4 className={`${Styles.h4} my-2 mt-8`}>Ballarat</h4>
              <p className={`${Styles.p} tracking-wide`}>613 Main Road, Ballarat VIC 3350</p>
              <h4 className={`${Styles.h4} my-2 mt-8`}>Mildura</h4>
              <p className={`${Styles.p} tracking-wide`}>Seventh Street, Mildura VIC 3500</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact