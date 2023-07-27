import Head from 'next/head'
import Hero from '../../Components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegBuilding, FaCarSide, FaRegCheckCircle } from "react-icons/fa";
import styles from '../styles/Home.module.css'
import ImageSlider from '../../Components/slider/slider';
import images from '../../Components/slider/images'
import { Tabs, Tab } from "../../Components/tabs";

import localFont from 'next/font/local'
// import SliderItems from '../../components/slider/slider';


const lato = localFont({
  src: [
    {
      path: '../../public/fonts/lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ola Tech LMS for RTOs, Universities, and Corporates</title>
        <meta name="description" content="New age e-learning solutions for RTOs, Universities, and Corporates." />
        <link rel="shortcut icon" href="/static/olatech-favicon.png" />
        <link rel="canonical" href="https://olatech.com.au/" />
      </Head>
      <Hero />
      <section className="padding_4">
        <ImageSlider images={images} />
      </section>

      <section className='learning_section padding_4'>
        <div className="container-fluid mx-auto">
          <div className="container mx-auto sectionTitle text-center pb-12">
            <h2>Seamless student, learning, and on-the-job training management</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
          </div>
          <div className="main_">
            <div className="learning_column" style={{
              display: 'flex',

            }}>
              <div className="learning_column_left">
                <div>
                  <h4>Student Management System</h4>
                  <p>Complete compliance, student, and finance management.</p>
                  <Link href={'#'} className='learning--link'>Learn More</Link>
                </div>
                <div>
                  <h4>Learning Management System</h4>
                  <p>Complete compliance, student, and finance management.</p>
                  <Link href={'#'} className='learning--link'>Learn More</Link>
                </div>
                <div>
                  <h4>Work-Based Learning</h4>
                  <p>Complete compliance, student, and finance management.</p>
                  <Link href={'#'} className='learning--link'>Learn More</Link>
                </div>
              </div>
              <div className="learning_column_right">
                <Image
                  src="/static/ola-lms-dashboard.png"
                  width={1000}
                  height={580}
                  quality={100}
                  alt=''
                  style={{
                    objectFit: 'contain'
                  }}
                  className={'learning_img_right'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='learning_section_white padding_4'>
        <div className="container-fluid mx-auto">
          <div className="container mx-auto sectionTitle text-center pb-12">
            <h2>Get an overview of all learning activities with your own <span style={{ color: 'var(--global-green-light)' }}>interactive dashboard</span></h2>
            <p>OLA LMS comes with an interactive visual dashboard that enhances the student activity tracking process remarkably. Your own personalized dashboards give a complete overview of all the significant activities like course progress, activity grades, activity submissions, etc. in one go and enable you to administer the learner’s progress comprehensively.</p>
          </div>
          <div className="main_">
            <div className="learning_column flex flex-row-reverse" style={{
              // display: 'flex',

            }}>
              <div className="learning_column_left">
                <div>
                  <h4>Student Management System</h4>
                  <p>Complete compliance, student, and finance management.</p>
                  <Link href={'#'} className='learning--link'>Learn More</Link>
                </div>
                <div>
                  <h4>Learning Management System</h4>
                  <p>Complete compliance, student, and finance management.</p>
                  <Link href={'#'} className='learning--link'>Learn More</Link>
                </div>
                <div>
                  <h4>Work-Based Learning</h4>
                  <p>Complete compliance, student, and finance management.</p>
                  <Link href={'#'} className='learning--link'>Learn More</Link>
                </div>
              </div>
              <div className="learning_column_right">
                <Image
                  src="/static/ola-lms-dashboard.png"
                  width={1000}
                  height={580}
                  quality={100}
                  alt=''
                  style={{
                    objectFit: 'contain'
                  }}
                  className={'learning_img_right'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='learning_experience padding_4'>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 justify-between items-center py-16">
            <div className={styles.learning_exp_box}>
              <div className='grid grid-flow-row justify-center' style={{
                height: '100%',
                paddingBlock: 40
              }}>
                <h2>How Ola helps in making learning a better experience</h2>
                <div className='mb-4 xl:mb-0'>
                  <div className='flex items-center mb-2'>
                    <FaRegCheckCircle size={25} color={'#70e826'} style={{
                      marginRight: 5
                    }} />
                    <h3>Group Learning</h3>
                  </div>
                  <p>With OLA LMS, even make group learning possible. Our platform enables you to create student groups for class projects, discussion boards and seamless interaction through web-conferencing tools.</p>
                </div>

                <div className='mb-4 xl:mb-0'>
                  <div className='flex items-center mb-2'>
                    <FaRegCheckCircle size={25} color={'#70e826'} style={{
                      marginRight: 5
                    }} />
                    <h3>Enrollment Management</h3>
                  </div>
                  <p>Transform the way you manage admissions with our robust and automated enrollment system. OLA LMS provides you with a self-user enrollment feature which saves your vital time and resources.</p>
                </div>
                <div className='mb-4 xl:mb-0'>
                  <div className='flex items-center mb-2'>
                    <FaRegCheckCircle size={25} color={'#70e826'} style={{
                      marginRight: 5
                    }} />
                    <h3>Smart Quiz, Reports, and Analytics</h3>
                  </div>
                  <p>Whether you have 5 or 5000 students, OLA LMSs' smart assessment system helps you track, evaluate, and keep a record of their performance in real- time. For instance, OLA LMS allows the trainer as well as the student to maintain a record of the previous test results while reattempting it, thereby saving their time and efforts.</p>
                </div>
              </div>

            </div>
            <div className="zoomIntegrationImage hidden lg:block">
              <Image
                src={'/static/ola-tech-lms-learning-experience-better.jpg'}
                // fill={true}
                width={599}
                height={700}
                alt=''
                quality={100}
                style={{
                  margin: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <div className="container mx-auto padding_4 services_offer">
        <div className="container mx-auto sectionTitle text-center pb-12">
          <h2 className=''>We also offer services</h2>
        </div>
        <ul className=" grid grid-flow-col gap-8 justify-items-center">
          <li className="listitem">
            <Image
              src={'/static/ic-lms-course-development.png'}
              width={80}
              height={80}
              style={{
                objectFit: 'contain',
                height: 60
              }}
              alt=''
            />
            <h3 className='my-4'>Course Developemnt</h3>
            <p>We are industry experts in course development. Our team of professionals produces courses by following proper process based on your unique requirements.</p>
            <p className='learning--link mt-4'><Link href={'/course-development-lms'}>Know More</Link>
            </p>
          </li>
          <li className="listitem">
            <Image
              src={'/static/ic-it-infra.png'}
              width={80}
              height={80}
              style={{
                objectFit: 'contain',
                height: 60
              }}
              alt=''
            />
            <h3 className='my-4'>Infra & IT</h3>
            <p>We provide all types of technical as well as admin level support that you might need to understand or operate the system.</p>
            <p className='mt-4 learning--link'><Link href={'/infra-and-it-lms'}>Know More</Link>
            </p>
          </li>
          <li className="listitem">
            <Image
              src={'/static/ic-moodle.png'}
              width={80}
              height={80}
              style={{
                objectFit: 'contain',
                height: 60
              }}
              alt=''
            />
            <h3 className='my-4'>Moodle Hosting</h3>
            <p>We provide end-to-end moodle hosting and installation services along with the set-up of other software required for its optimal performance on Linux, Windows, and Mac OS servers.</p>
            <p className='mt-4 learning--link'><Link href={'/moodle-hosting-lms'}>Know More</Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
