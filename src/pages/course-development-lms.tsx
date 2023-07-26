import React from 'react'
import Image from 'next/image'
import Banner from '../../components/Banner'
import {
  FaCheck,
  FaLayerGroup,
  FaPenNib,
  FaMicrophoneAlt,
  FaRegFileVideo,
  FaRegFilePdf,
  FaRegPlayCircle,
  FaRegCheckSquare,
  FaMobileAlt
} from "react-icons/fa";

const CourseDevelopemnt = () => {
  const cards = [
    {
      content: "Tailored design strategy",
      icon: FaLayerGroup,
    },
    {
      content: "Unique Illustration and Graphics",
      icon: FaPenNib,
    },
    {
      content: "Professional voice",
      icon: FaMicrophoneAlt
    },
    {
      content: "Optimized videos and transcript",
      icon: FaRegFileVideo
    },
    {
      content: "eBook PDF and ePubs",
      icon: FaRegFilePdf
    },
    {
      content: "Videos - Instructional",
      icon: FaRegPlayCircle
    },
    {
      content: "Smart assessment",
      icon: FaRegCheckSquare
    },
    {
      content: "Mobile-first templates",
      icon: FaMobileAlt
    },
  ];
  return (
    <>
      <div>
        <Banner
          title={"Jumpstart e-learning compliance course development by Ola Tech"}
          rightImage={'lms-e-learning-course-design-development.png'}
          bgImage={'ola-lms-course-development-bg.png'}
          imageWidth={602}
          imageHeight={580}
          alt={'Olatech Course Development'} />

        <div className="max-w-md mx-auto py-20 bg-white overflow-hidden md:max-w-7xl">
          <div className="md:flex items-center">
            <div className="p-8">
              <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Ola Tech believes learning aspects of <span style={{ color: 'var(--global-green-light)' }}>cognitive, learning,</span> and <span style={{ color: 'var(--global-green-light)' }}>emotional behaviour</span></h2>
              <p className="mt-2 text-slate-500">At Ola Tech we design and develop the interactive course for humans with the punch of experiential and cognitive learning to understand behaviour with emotions.</p>
            </div>
            <div className="md:shrink-0">
              <Image
                src={'/static/olatech-lms-course-development-e-learning.svg'}
                width={600}
                height={600}
                alt='About Olatech' />
              {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="md:shrink-0">
              <Image
                src={'/static/e-learning-course-omnichannel.svg'}
                width={600}
                height={600}
                alt='About Olatech' />
              {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
            </div>
            <div className="p-8">
              <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Omnichannel experience interactive course the way you imagine</h2>
              <ul>
                <li className="flex mt-2 text-slate-500">
                  <FaCheck size={20} color={'var(--global-green-light)'} style={{
                    marginRight: 10
                  }} />
                  <span>Mobile-first interactive course the way you imagine</span>
                </li>
                <li className="flex mt-2 text-slate-500">
                  <FaCheck size={20} color={'var(--global-green-light)'} style={{
                    marginRight: 10
                  }} />
                  <span>PDF to interactive media rich PDF, eBooks, ePub, Kindle, and custom HTML5 courses.</span>
                </li>
                <li className="flex mt-2 text-slate-500">
                  <FaCheck size={20} color={'var(--global-green-light)'} style={{
                    marginRight: 10
                  }} />
                  <span>ILT To eLearning Conversion and Diagrams to explainer videos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto pb-20 bg-white md:max-w-7xl">
          <div className="md:shrink-0 mb-14">
            <h2>Benefits of choosing Ola Tech for e-learning interactive course development</h2>
          </div>
          <div className=" grid gap-4 gap-y-12 lg:grid-cols-4">
            {cards.map((items, key) => (
              <div className="w-full rounded-lg lg:max-w-sm px-6 py-12" key={key} style={{ boxShadow: '0px 3px 10px 0px rgba(113, 113, 113, 0.16)' }}>
                <items.icon size={42} color={'var(--global-green-light)'} />
                {/* <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        /> */}
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-black leading-normal">
                    {items.content}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bottomContact" style={{
          background: 'linear-gradient(-1.518deg, #48B703 0%, #60CD00 100%)',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden'
        }}>
          <Image
            src={'/static/btm-cta-green-bg.png'}
            width={650}
            height={650}
            // fill= {true}   
            quality={100}
            style={{
              objectFit: 'contain',
              position: 'absolute',
              right: 0,
              zIndex: -1,
              // bottom: 0,
              // top: 0,
            }}
            alt=''
          />
          <div className=" container mx-auto">
            <div className='w-1/2' style={{
              paddingBlock: 35,
            }}>
              <div className="">
                <h3 style={{
                  color: '#FFFFFF',
                  fontSize: 40,
                  fontWeight: '500',
                  lineHeight: 1.4,
                }}>Ola Tech design & develop LMS, e-learning courses for human with cognitive, learning, and emotional behaviour</h3>
              </div>
              <div className="buttongroup" style={{
                paddingBlock: 20
              }}>
                <button className='globalButton' style={{
                  backgroundColor: '#fff',
                  color: 'var(--global-green-primary)',
                  marginRight: 15
                }}>Request a demo</button>
                <button className='globalButton' style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  marginLeft: 15
                }}>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>

  )
}

export default CourseDevelopemnt