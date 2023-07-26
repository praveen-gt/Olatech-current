import React from 'react'
import Image from 'next/image'
import Banner from '../../components/Banner'
import {
    FaCheck,
    FaServer,
    FaUserClock,
    FaRegStickyNote,
    FaCertificate,
    FaCreativeCommonsSampling
} from "react-icons/fa";

const BlueButtonIntegration = () => {
    const cards = [
        {
            title: "Quick integration",
            content: "Ola Tech experts available 24X7 to setup your Big Blue Buton service",
            icon: FaServer,
        },
        {
            title: "Transparent Pricing",
            content: "BBB is a premium and affordable integration service by Ola Tech",
            icon: FaServer,
        },
        {
            title: "Moodle Integration",
            content: "Ola Tech offer experienced consulting for your Moodle LMS integration",
            icon: FaServer,
        },
    ];
    return (
        <>
            <div>
                <Banner
                    title={"Ola Tech Big Blue Button Integration for LMS"}
                    rightImage={'big-blue-button-moodle-integration.png'}
                    bgImage={'ola-lms-course-development-bg.png'}
                    imageWidth={602}
                    imageHeight={580}
                    alt={'Olatech Blue Button Integration'} />

                <div className="max-w-md mx-auto py-20 bg-white overflow-hidden md:max-w-7xl">
                    <div className="md:flex items-center">
                        <div className="p-8">
                            <h2 className="capitalise tracking-wide text-md text-black-500 font-semibold"><span style={{ color: 'var(--global-green-light)' }}>Interactive whiteboard</span> session with <span style={{ color: 'var(--global-green-light)' }}>screen sharing</span></h2>
                            <ul>
                                <li className="flex mt-2 text-slate-500">
                                    <FaCheck size={20} color={'var(--global-green-light)'} style={{
                                        marginRight: 10
                                    }} />
                                    <span>Real-time whiteboard explainer and drawing activities to present all users</span>
                                </li>
                                <li className="grid grid-flow-col mt-2 text-slate-500">
                                    <FaCheck size={20} color={'var(--global-green-light)'} style={{
                                        marginRight: 10
                                    }} />
                                    <span>Screen sharing can help you with all user to be on the same page with best presentation method</span>
                                </li>

                                <li className="flex mt-2 text-slate-500">
                                    <FaCheck size={20} color={'var(--global-green-light)'} style={{
                                        marginRight: 10
                                    }} />
                                    <span>Interactive chat window</span>
                                </li>
                                <li className="flex mt-2 text-slate-500">
                                    <FaCheck size={20} color={'var(--global-green-light)'} style={{
                                        marginRight: 10
                                    }} />
                                    <span>PDF and documents in real-time</span>
                                </li>
                            </ul>
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
                </div>

                <div className="max-w-md mx-auto pb-20 bg-white md:max-w-7xl">
                    <div className="md:shrink-0 mb-14">
                        <h2>Benefits of choosing Ola</h2>
                    </div>
                    <div className=" grid gap-4 gap-y-12 lg:grid-cols-4">
                        {cards.map((items, key) => (
                            <div className="w-full rounded-lg lg:max-w-sm px-6 py-12" key={key} style={{ boxShadow: '0px 3px 10px 0px rgba(113, 113, 113, 0.16)' }}>
                                <items.icon size={42} color={'var(--global-green-light)'} />
                                <div className="mt-4">
                                    <h4 className="text-xl font-semibold text-gray-700 leading-normal">
                                        {items.title}
                                    </h4>
                                    <p className="my-2 leading-normal">
                                        {items.content}
                                    </p>
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
                            paddingBlock: 60,
                        }}>
                            <div className="">
                                <h3 style={{
                                    color: '#FFFFFF',
                                    fontSize: 40,
                                    fontWeight: '500',
                                    lineHeight: 1.4,
                                }}>Ola Tech Infra and IT support for LMS and e-learning industry</h3>
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

export default BlueButtonIntegration