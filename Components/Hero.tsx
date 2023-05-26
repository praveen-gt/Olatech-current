import React from 'react'
import Image from 'next/image'
import styles from '../src/styles/Hero.module.css'

function Hero() {
  return (
    <section>
      <div className="container-fluid  px-6 mx-auto space-y-0 mad:space-y-0 relative">
        <div className="-z-1">
          <Image
            src="/static/ola-lms-hero-bg.png"
            fill
            quality={100}
            alt=''
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="container flex flex-col md:flex-row px-4 mx-auto mt-10 justify-between">
          <div className={`${styles.herobanner} ${styles.heroWidth}`} style={{zIndex: 1}}>
            <h1 className='text-6xl'>New age e-learning solutions for RTOs, Universities, and Corporates.</h1>
            <div className={styles.buttonWrapper}>
              <button className={styles.bannerButton}>Request a demo</button>
            </div>
          </div>
          <div className={`flex justify-center relative shrink ${styles.heroWidth}`} style={{zIndex: 1}}>
            <Image
              src="/static/ola-lms-hero.png"
              // fill
              width={602} //automatically provided
              height={580} //automatically provided
              quality={100}
              alt=''
              className={styles.heroImage}
            />
          </div>
        </div>


      </div>
    </section>
  )
}

export default Hero