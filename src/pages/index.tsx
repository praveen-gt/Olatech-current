import Head from 'next/head'
import Hero from '../../Components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegBuilding, FaCarSide, FaRegCheckCircle } from "react-icons/fa";
import styles from '../styles/Home.module.css'

import localFont from 'next/font/local'


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
      <section className='container-fluid'>
        <main className='container mx-auto'>
          <div className="py-16">
            <div className="py-8">
              <h2>LMS Products</h2>
            </div>
            <ul className={`grid md:grid-flow-col md:grid-cols-3 ${styles.productsList}`}>
              <li className={styles.listitem}>
                <Image
                  src={'/static/Ola-Aspire-Logo.svg'}
                  width={200}
                  height={100}
                  alt='Ola Aspire Logo'
                  style={{
                    objectFit: 'contain'
                  }} />
                <p>Now deliver your RTO training effortlessly with our feature-packed and customizable LMS.</p>
                <div className={styles.product_button_wrapper}>
                  <button onClick={() => { }}>Learn More {`>`}</button>
                </div>
              </li>
              <li key={0} className={styles.listitem}>
                <Image
                  src={'/static/Ola-Nurture-Logo.svg'}
                  width={200}
                  height={100}
                  alt='Ola Aspire Logo'
                  style={{
                    objectFit: 'contain'
                  }} />
                <p>An efficient LMS that encompasses every element that a student would need for a phenomenal learning experience.</p>
                <div className={styles.product_button_wrapper}>
                  <button onClick={() => { }}>Learn More {`>`}</button>
                </div>
              </li>
              <li className={styles.listitem}>
                <Image
                  src={'/static/Ola-Upskill-Logo.svg'}
                  width={200}
                  height={100}
                  alt='Ola Aspire Logo'
                  style={{
                    objectFit: 'contain'
                  }} />
                <p>Turn your workforce into highly productive assets of your company with our best-in-class LMS designed to accelerate organizational learning.</p>
                <div className={styles.product_button_wrapper}>
                  <button onClick={() => { }}>Learn More {`>`}</button>
                </div>
              </li>
            </ul>
          </div>
          {/* Bluebutton */}
          <div className="grid lg:grid-cols-2 justify-between items-center pb-16">
            <div>
              <h2><span style={{
                color: '#3147BF'
              }}>Big blue button</span> and Zoom integrations</h2>
              <p className='py-6 mb-3'>Video conferencing integrations with zoom, big blue button and other third party integrations.</p>
              <Link href={'/'}><button className='globalButton' style={{
                backgroundColor: 'var(--global-green-primary)',
                color: '#fff'
              }}>Request a demo</button></Link>
            </div>
            <div>
              <Image
                src={'/static/big-blue-button.png'}
                // fill={true}
                width={600}
                height={600}
                alt='Olatech Blue Button Integration'
                quality={100}
                style={{

                }}
              />
            </div>
          </div>
          <div className="py-16">
            <div className="pb-10">
              <h2>Training and Assessment Material</h2>
            </div>
            <ul className="grid gap-4 md:grid-flow-col ">
              <li className={styles.training_listitem}>
                <FaRegBuilding size={50} color={'var(--global-green-light)'} style={{
                  marginBottom: 20
                }} />
                <h3 className='font-medium'>Construction, Plumbing & Services Training Package</h3>
              </li>
              <li className={styles.training_listitem}>
                <FaCarSide size={60} color={'var(--global-green-light)'} style={{
                  marginBottom: 10
                }} />
                <h3 className='font-medium'>AUR-Automotive Retail , Service & Repair Training Package</h3>
              </li>
              <li className={styles.training_listitem}>
                <Image
                  src='/static/bsb-icon.svg'
                  width={60}
                  height={60}
                  alt="Olatech Business Services Training Package"
                  className="h-12 mr-3"
                  style={{
                    marginBottom: 10
                  }}
                />
                <h3 className='font-medium'>BSB - Business Services Training Package</h3>
              </li>
              <li className={styles.training_listitem}>
                <Image
                  src='/static/star-icon.svg'
                  width={60}
                  height={60}
                  alt="Olatech Logo"
                  className="h-12 mr-3"
                  style={{
                    marginBottom: 10
                  }}
                />
                <h3 className='font-medium'>Resources & Infrastructure Industry Training Package</h3>
              </li>
            </ul>

          </div>

          {/* interactive dashboard */}
          <div className="grid lg:grid-cols-2 justify-between items-center py-16">
            <div className="md:pr-16">
              <h2>Get an overview of all learning activities with your own <span style={{ color: 'var(--global-green-light)' }}>interactive dashboard</span></h2>
              <p className='leading-8 my-8'>OLA LMS comes with an interactive visual dashboard that enhances the student activity tracking process remarkably. Your own personalized dashboards give a complete overview of all the significant activities like course progress, activity grades, activity submissions, etc. in one go and enable you to administer the learner’s progress comprehensively.</p>
              <Link href={'/contact'}>
                <button
                  className='globalButton'
                  style={{
                    backgroundColor: 'var(--global-green-primary)',
                    color: '#fff',
                    marginTop: 20
                  }}>
                  Request a demo
                </button>
              </Link>
            </div>
            <div>
              <Image
                src={'/static/ola-lms-dashboard.png'}
                // fill={true}
                width={658}
                height={377}
                alt='Olatech LMS Dashboard'
                quality={100}
                style={{
                  margin: 'auto'
                }}
              />
            </div>
          </div>

          {/* Choose Benefits */}

          <div className="py-16">
            <div className="pb-16">
              <h2>Benefits of choosing Ola</h2>
            </div>
            <ul className=" grid gap-6 md:grid-flow-col md:grid-cols-4 ">
              <li className={styles.training_listitem}>
                <Image
                  src='/static/olatech-strategy-icon.svg'
                  width={60}
                  height={60}
                  alt="olatech-strategy-icon"
                  className="h-12 mr-3"
                  style={{
                    marginBottom: 10,
                    fill: '#48B700',

                  }}
                />
                <h3 className='font-medium'>Ola can be tailored based on your teaching strategies</h3>
                <p>Our powerful feature selector facilitates you to choose your own features and methods for a fully customized learning experience, based on your teaching style.</p>
              </li>
              <li className={styles.training_listitem}>
                <Image
                  src='/static/lti-compatible.svg'
                  width={60}
                  height={60}
                  alt="Oltatech LTI Compatible Platform"
                  className="h-12 mr-3"
                  style={{
                    marginBottom: 10
                  }}
                />
                <h3 className='font-medium'>LTI compatible platform</h3>
                <p>OLA tech's platform is LTI compatible which means it conforms to cross-platform specifications and acts consistently across systems.</p>
              </li>
              <li className={styles.training_listitem}>
                <Image
                  src='/static/bsb-icon.svg'
                  width={60}
                  height={60}
                  alt="Olatech Fast and reliable"
                  className="h-12 mr-3"
                  style={{
                    marginBottom: 10
                  }}
                />
                <h3 className='font-medium'>Fast and reliable with no downtime</h3>
                <p>Powered by AWS, OLA LMS is amongst the world's most robust learning systems.</p>
              </li>
              <li className={styles.training_listitem}>
                <Image
                  src='/static/star-icon.svg'
                  width={60}
                  height={60}
                  alt="Ola LMS Features"
                  className="h-12 mr-3"
                  style={{
                    marginBottom: 10
                  }}
                />
                <h3 className='font-medium'>A ton of other new features unique only to OLA LMS</h3>
                <p>Our modern and intuitive LMS incorporates much more exceptional and exclusive features such as group-based custom activity deadlines, custom reports, and interactive dashboards.</p>
              </li>
            </ul>

          </div>

          {/* learning experience */}

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


          {/* After Support */}

          <div className="grid lg:grid-cols-2 justify-between items-center py-16">
            <div className="zoomIntegration pr-16">
              <h2><span style={{ color: 'var(--global-green-light)' }}>After sales support?</span> We got you covered!</h2>
              <p style={{
                lineHeight: '32px',
                paddingBlock: 20,
                marginBottom: 15

              }}>We build innovative products and blend them with top-notch service to make our client’s journey as smooth as possible. Our in-house product experts are always available to resolve any after-sale queries that you may have.</p>
              <Link href={'/'}><button className='globalButton' style={{
                backgroundColor: 'var(--global-green-primary)',
                color: '#fff'
              }}>Contact Us</button></Link>
            </div>
            <div className="zoomIntegrationImage">
              <Image
                src={'/static/ola-lms-support.png'}
                // fill={true}
                width={336}
                height={285}
                alt=''
                quality={100}
                style={{
                  margin: 'auto'
                }}
              />
            </div>
          </div>

          {/* benefits */}

          <div className="text-center py-16">
            <div className="sectionheading mb-16">
              <h2>Our clients have reaped the benefits</h2>
              <p className='my-5'>Have a look at what our clients have got to say about our products and services
              </p>
              <Image
                src={'/static/Path-254.png'}
                width={543}
                height={15}
                quality={100}
                style={{
                  objectFit: 'contain',
                  margin: 'auto'
                }}
                alt='' />
            </div>
            <ul className=" grid grid-flow-col text-center justify-items-center">
              <li className="listitem">
                <Image
                  src={'/static/alata-Inclusion-logo.jpg'}
                  width={148}
                  height={50}
                  quality={100}
                  style={{
                    objectFit: 'contain'
                  }}
                  alt='Alata Inclusion' />
              </li>
              <li className="listitem">
                <Image
                  src={'/static/AAT-automotive-logo.jpg'}
                  width={214}
                  height={50}
                  quality={100}
                  style={{
                    objectFit: 'contain'
                  }}
                  alt='AAT Automotive' />
              </li>
              <li className="listitem">
                <Image
                  src={'/static/acacia-institute-logo.jpg'}
                  width={142}
                  height={50}
                  quality={100}
                  style={{
                    objectFit: 'contain'
                  }}
                  alt='Acacia Institute' />
              </li>
            </ul>

          </div>

          {/* Services */}

          <div className="py-11 services_offer">
            <div className="text-center pb-16">
              <h2 style={{
                // fontWeight: '400'
              }}>We also offer services</h2>
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
                <p className={` text-gray-400 ${lato.className}`} style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  letterSpacing: 0.1
                }}>We are industry experts in course development. Our team of professionals produces courses by following proper process based on your unique requirements.</p>
                <p className='mt-4'><Link href={'/course-development-lms'} style={{
                  color: 'var(--global-green-light)',
                }}>Know More {`>`}</Link>
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
                <p className={` text-gray-400 ${lato.className}`} style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  letterSpacing: 0.1
                }}>We provide all types of technical as well as admin level support that you might need to understand or operate the system.</p>
                <p className='mt-4'><Link href={'/infra-and-it-lms'} style={{
                  color: 'var(--global-green-light)',
                }}>Know More {`>`}</Link>
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
                <p className={` text-gray-400 ${lato.className}`} style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  letterSpacing: 0.1
                }}>We provide end-to-end moodle hosting and installation services along with the set-up of other software required for its optimal performance on Linux, Windows, and Mac OS servers.</p>
                <p className='mt-4'><Link href={'/moodle-hosting-lms'} style={{
                  color: 'var(--global-green-light)',
                }}>Know More {`>`}</Link>
                </p>
              </li>
            </ul>
          </div>

          <div className="py-32 text-center justify-items-center">
            <div className='text-lg font-medium tracking-wide'>
              Can’t find what you’re looking for?
              <Link href={'/contact'}>
                <button className='globalButton' style={{
                  backgroundColor: 'var(--global-green-primary)',
                  marginLeft: 20,
                  color: '#fff',
                  fontWeight: '400'
                }}>Contact Us</button>
              </Link>
            </div>
          </div>
        </main>

        {/* Bottom part */}
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
            <div className={`md:w-1/2 ${styles.bottom_request}`}>
              <div className="">
                <h3 style={{
                  color: '#FFFFFF',
                  fontSize: 40,
                  fontWeight: '500',
                  lineHeight: 1.4,
                }}>Ola LMS is fully customisable, highly advanced and very capable</h3>
              </div>
              <div className="buttongroup flex" style={{
                paddingBlock: 20
              }}>
                <Link href={'/contact'}>
                  <button className='globalButton' style={{
                    backgroundColor: '#fff',
                    color: 'var(--global-green-primary)',
                    marginRight: 15
                  }}>Request a demo</button></Link>
                  
                <Link href={'/contact'}>
                  <button className='globalButton' style={{
                    backgroundColor: 'var(--global-green-primary)',
                    color: '#fff',
                    marginLeft: 15
                  }}>Contact us</button></Link>
              </div>
            </div>


          </div>

        </div>
      </section>


    </div>
  )
}
