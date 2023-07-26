import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Banner from '../../components/Banner'
import {
  FaBullhorn,
  FaBookReader,
  FaWpforms,
  FaCheck,
  FaNewspaper,
  FaChartLine,
  FaCommentDots,
  FaYoutube,
  FaChartBar
} from "react-icons/fa";


const OlaNurture = () => {
  const cards = [
    {
      title: 'Remote learning',
      content: "Enhance team performance by continuous learning through exceptional courses, even when they are working remotely.",
      icon: FaBullhorn,
    },
    {
      title: 'Compliance training',
      content: "Ensure that your employees complete their mandatory compliance training on time, every time with Ola Upskill.",
      icon: FaBookReader,
    },
    {
      title: 'Company growth',
      content: "Every organization needs people who are in-sync with the current standards and needs of the business. With Ola upskill, you develop your employees and move towards better business results.",
      icon: FaWpforms,
    },
    {
      title: 'Process-oriented system',
      content: "Ola upskill is a process-oriented system that delivers you quantitative results on employee evaluation and supports your business as well as human resource decisions.",
      icon: FaChartBar,
    },

  ];
  return (
    <>
      <div>
        <Banner
          title={"Boost your company growth with our best-in-class employee LMS"}
          rightImage={'ola-lms-upskill.png'}
          imageWidth={418}
          imageHeight={593}
          bgImage={'ola-lms-upskill-her.png'}
          alt={'Olatech lms aspire'} />
      </div >

      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-8">
          <Link href="/" className="flex items-center">
            <Image
              src='/static/Ola-Upskill-Logo.svg'
              width={300}
              height={300}
              alt="Olatech Logo"
              className="h-12 mr-3"
            />
          </Link>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="items-center flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent hover:text-gray-500">Overview</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent hover:text-gray-500">Features</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent hover:text-gray-500">Benefits</a>
              </li>
              <li>
                <button type="button" className='btn globalButton' style={{
                  backgroundColor: '#0648CC',
                  color: '#fff',
                  fontWeight: '400'
                }}>Request a demo</button>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </nav>

      <div className="max-w-md mx-auto py-20 bg-white overflow-hidden md:max-w-7xl">
        <div className="md:flex items-center">
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Unleash your <span style={{ color: '#0648CC' }}>employee's potential</span> through powerful learning with Ola Upskill</h2>
            <p className='mt-5'>Ola Upskill help you to stay ahead of you competitors. The only tool you need to boost their productivity and your business</p>
          </div>
          <div className="md:shrink-0">
            <Image
              src={'/static/ola-upskill-lms-boot-productivity.svg'}
              width={600}
              height={600}
              alt='Ola Aspire LMS' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="md:shrink-0">
            <Image
              src={'/static/competency-gap-analysis.svg'}
              width={600}
              height={600}
              alt='About Olatech' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Gap <span style={{ color: '#0648CC' }}>analysis</span></h2>
            <ul>
              <li className="grid grid-flow-col mt-2 text-slate-500">
                <FaCheck size={20} color={'#0648CC'} style={{
                  marginRight: 10
                }} />
                <span>Ola Upskill analyses the gaps in learning that an employee needs to possess before applying for a higher role in the company. It even suggests the required courses that they can take up to reach their goals.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="md:flex items-center">
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Performance <span style={{ color: '#0648CC' }}>evaluation</span></h2>
            <ul>
              <li className="flex mt-2 text-slate-500">
                <FaCheck size={20} color={'#0648CC'} style={{
                  marginRight: 10
                }} />
                <span>We make the appraisal procedure less hectic with our fact and evidence-based employee performance evaluation system.</span>
              </li>
            </ul>
          </div>
          <div className="md:shrink-0">
            <Image
              src={'/static/employee-performance-evaluation.svg'}
              width={600}
              height={600}
              alt='About Olatech' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto pb-20 bg-white md:max-w-7xl">
        <div className="md:shrink-0 mb-14">
          <h2>Benefits of choosing Ola</h2>
        </div>
        <div className=" grid gap-4 gap-y-12 lg:grid-cols-4">
          {cards.map((items, key) => (
            <div className="w-full rounded-lg lg:max-w-sm px-6 py-12" key={key} style={{ boxShadow: '0px 3px 10px 0px rgba(113, 113, 113, 0.16)' }}>
              <items.icon size={42} color={'#0648CC'} />
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-black leading-normal">
                  {items.title}
                </h4>
                <p>{items.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#001A4D' }}>
        <div className="max-w-md mx-auto py-20 overflow-hidden md:max-w-7xl">
          <div className="grid lg:grid-cols-2 items-center justify-between">
            <div className="p-8">
              <h2 className="capitalise tracking-normal text-5xl text-black-500 font-semibold mb-4"><span style={{ color: '#0648CC' }}>Get</span></h2>
              <p className='text-2xl font-normal text-white'>Sign up for Ola Aspire</p>
            </div>
            <div className="md:shrink-0">
              <Image
                src={'/static/lms-login.png'}
                width={648}
                height={371}
                alt='Ola Aspire LMS' />
              {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center justify-between py-32">
            <div className="md:shrink-0">
              <Image
                src={'/static/ola-aspire-lms-course-upload.png'}
                width={580}
                height={438}
                alt='About Olatech' />
              {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
            </div>
            <div className="p-8">
            <h2 className="capitalise tracking-normal text-5xl text-black-500 font-semibold mb-4"><span style={{ color: '#0648CC' }}>Set</span></h2>
              <p className='text-2xl font-normal text-white'>Create/Upload your course</p>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 items-center justify-between">
            <div className="p-8">
            <h2 className="capitalise tracking-normal text-5xl text-black-500 font-semibold mb-4"><span style={{ color: '#0648CC' }}>Go</span></h2>
              <p className='text-2xl font-normal text-white'>Your learning platform is ready to go</p>
            </div>
            <div className="md:shrink-0">
              <Image
                src={'/static/lms-my-courses.png'}
                width={648}
                height={371}
                alt='About Olatech' />
              {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
            </div>
          </div>

        </div>
      </div>

      <div className="py-32 text-center justify-items-center">
        <div className='text-lg font-medium tracking-wide'>
          Can’t find what you’re looking for?
          <Link href={'/contact'}>
            <button className='globalButton' style={{
              backgroundColor: '#0648CC',
              marginLeft: 20,
              color: '#fff',
              fontWeight: '400'
            }}>Contact Us</button>
          </Link>
        </div>
      </div>

      {/* Bottom part */}
      <div className="bottomContact" style={{
        background: '#0648CC',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <Image
          src={'/static/ola-lms-upskill-pattern.png'}
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
            paddingBlock: 60,
          }}>
            <div className="">
              <h3 style={{
                color: '#FFFFFF',
                fontSize: 40,
                fontWeight: '500',
                lineHeight: 1.4,
              }}>Ola LMS is fully customisable, highly advanced and very capable</h3>
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
    </>
  )
}

export default OlaNurture