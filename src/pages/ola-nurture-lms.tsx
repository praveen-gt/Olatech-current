import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Banner from '../../Components/Banner'
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
      title: 'Announcements',
      content: "Keep your students in the loop of all the latest information through the announcements feature.",
      icon: FaBullhorn,
    },
    {
      title: 'Collaborative learning',
      content: "Add a group discussion forum in your LMS to promote interaction between trainers and learners.",
      icon: FaBookReader,
    },
    {
      title: 'Cover Sheet',
      content: "The cover sheet helps students for assessment declaration, and on the other hand, trainers can mark satisfactory or not yet satisfactory based on the evaluation.",
      icon: FaWpforms,
    },
    {
      title: 'Competency based grading system',
      content: "Trainer can mark the assessment based on the competency framework. Cutting edge features like feedback comments and attach the evidence of marking assessment.",
      icon: FaChartBar,
    },
    {
      title: 'Reporting',
      content: "Receive online reports of all the enrolled students and use custom filters to generate reports that will help you make better decisions. View reports based on active/non-active users or completion status like completed/non-completed.",
      icon: FaNewspaper,
    },
    {
      title: 'Score management',
      content: "Generate automated scores for written assessments shortly after completion with multiple attempts option to an individual or several students. Let students and trainer access the results of the first attempt so that they do not have to reattempt the correct ones again.",
      icon: FaChartLine,
    },
    {
      title: 'Instant messaging system',
      content: "Real-time messaging between trainer and students. Now group messaging and bulk messaging one click away with Ola Aspire.",
      icon: FaCommentDots,
    },
    {
      title: 'Microsoft tools and Youtube integration',
      content: "Get Microsoft office integration and let students utilize it to prepare informative assignments within the platform. Reach higher user engagement with YouTube integration.",
      icon: FaYoutube,
    },
  ];
  return (
    <>
      <div>
        <Banner
          title={"A new-age LMS for schools and universities for a magnificent digital learning experience"}
          rightImage={'ola-lms-nurture-hero.png'}
          imageWidth={418}
          imageHeight={593}
          bgImage={'ola-lms-nurture-hero-bg.png'}
          alt={'Olatech lms aspire'} />
      </div >

      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-8">
          <Link href="/" className="flex items-center">
            <Image
              src='/static/Ola-Aspire-Logo.svg'
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
                  backgroundColor: 'var(--global-orange)',
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
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Ola Aspire is a learning platform <span style={{ color: 'var(--global-orange)' }}>designed specifically for RTOs</span> with unique capabilities</h2>
            <p>OLA Aspire is a cutting edge features LMS designed for the RTOs keeping in mind their specific needs.</p>
          </div>
          <div className="md:shrink-0">
            <Image
              src={'/static/ola-aspirelms-RTOs.svg'}
              width={600}
              height={600}
              alt='Ola Aspire LMS' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="md:shrink-0">
            <Image
              src={'/static/olaaspire-lms-branding-RTOs.svg'}
              width={600}
              height={600}
              alt='About Olatech' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold"><span style={{ color: 'var(--global-orange)' }}>Customization</span> and <span style={{ color: 'var(--global-orange)' }}>branding</span>.</h2>
            <ul>
              <li className="grid grid-flow-col mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Brand OLA Aspire as your own LMS by adding your logo and color scheme to it.</span>
              </li>
              <li className="grid grid-flow-col mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Get your front page designed in WordPress, HTML, etc. for a personalized feel.</span>
              </li>

              <li className="flex mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Obtain a custom domain that adds a finishing touch of branding to your LMS.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="md:flex items-center">
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Automated <span style={{ color: 'var(--global-orange)' }}>Enrollment process</span></h2>
            <ul>
              <li className="flex mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Enable students to enroll easily by filling up an online form.</span>
              </li>
              <li className="flex mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Receive payments through a fully integrated payment gateway.</span>
              </li>

              <li className="flex mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Send login credentials directly to the user's email ids immediately after enrollment.</span>
              </li>
            </ul>
          </div>
          <div className="md:shrink-0">
            <Image
              src={'/static/ola-aspire-lms-student-automated-enrollment.svg'}
              width={600}
              height={600}
              alt='About Olatech' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="md:shrink-0">
            <Image
              src={'/static/ola-aspire-lms-smartassesment.svg'}
              width={600}
              height={600}
              alt='About Olatech' />
            {/* <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
          </div>
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold">Smart <span style={{ color: 'var(--global-orange)' }}>assessment</span> tools</h2>
            <ul>
              <li className="grid grid-flow-col mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Smart assessment for the trainer to save time during marking and evaluation. Ola Aspire make reattempt written assessment super easy for trainer and students.</span>
              </li>
              <li className="grid grid-flow-col mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Ola Aspire offers competency based grading system with Formative and Summative assessment options.</span>
              </li>

              <li className="flex mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Customized grading methods</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="md:flex items-center">
          <div className="p-8">
            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold"><span style={{ color: 'var(--global-orange)' }}>Competency </span> based <span style={{ color: 'var(--global-orange)' }}>reporting </span></h2>
            <ul>
              <li className="grid grid-flow-col mt-2 text-slate-500">
                <FaCheck size={20} color={'var(--global-orange)'} style={{
                  marginRight: 10
                }} />
                <span>Trainer can mark full unit satisfactory or not yet satisfactory with learning feedback.</span>
              </li>
            </ul>
          </div>
          <div className="md:shrink-0">
            <Image
              src={'/static/ola-aspire-lms-competencbased-reporting.svg'}
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
              <items.icon size={42} color={'var(--global-orange)'} />
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

      <div className="container-fluid" style={{ backgroundColor: '#5A2A03' }}>
        <div className="max-w-md mx-auto py-20 overflow-hidden md:max-w-7xl">
          <div className="grid lg:grid-cols-2 items-center justify-between">
            <div className="p-8">
              <h2 className="capitalise tracking-normal text-5xl text-black-500 font-semibold mb-4"><span style={{ color: 'var(--global-orange)' }}>Get</span></h2>
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
            <h2 className="capitalise tracking-normal text-5xl text-black-500 font-semibold mb-4"><span style={{ color: 'var(--global-orange)' }}>Set</span></h2>
              <p className='text-2xl font-normal text-white'>Create/Upload your course</p>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 items-center justify-between">
            <div className="p-8">
            <h2 className="capitalise tracking-normal text-5xl text-black-500 font-semibold mb-4"><span style={{ color: 'var(--global-orange)' }}>Go</span></h2>
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
              backgroundColor: 'var(--global-orange)',
              marginLeft: 20,
              color: '#fff',
              fontWeight: '400'
            }}>Contact Us</button>
          </Link>
        </div>
      </div>

      {/* Bottom part */}
      <div className="bottomContact" style={{
        background: '#EF710A',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <Image
          src={'/static/ola-aspire-lms-cta-bg.png'}
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