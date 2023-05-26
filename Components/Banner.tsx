import React from 'react'
import Image from 'next/image'
import styles from '../src/styles/Banner.module.css'

function Banner(props: any) {
  return (

    <div className="container-fluid flex flex-col lg:flex-row px-6 mx-auto space-y-0 mad:space-y-0 relative">
      <div className="-z-1">
        <Image
          src={`/static/${props.bgImage}`}
          fill
          quality={100}
          alt=''
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="max-w-md md:max-w-7xl mx-auto overflow-hidden " style={{zIndex: 1}}>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center p-8">
            <h1 className="capitalise tracking-wide  text-white ">{props.title}</h1>
          </div>
          <div className="sm:shrink md:shrink-0">
            <Image
              src={`/static/${props.rightImage}`}
              width={props.imageWidth}
              height={props.imageHeight}
              quality={100}
              style={{
                objectFit: "contain",
              }}
              alt={props.alt} />
          </div>
        </div>
      </div>
    </div>


    // <div>
    //     <div className={styles.bannerSection} >
    //     <h1 style={{
    //         fontSize: 40,
    //         zIndex: 2,
    //         position: 'relative',
    //         width: '50%',
    //         margin: 'auto',
    //         color: '#fff'
    //     }}>{props.title}</h1>
    //     </div>

    // </div>
  )
}

export default Banner