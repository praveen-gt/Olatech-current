import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../src/styles/Footer.module.css'
import {
    AiOutlineInstagram,
    AiFillLinkedin
} from "react-icons/ai";
import localFont from 'next/font/local'

const lato = localFont({
    src: [
      {
        path: '../public/fonts/lato/Lato-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
  });



export default function Footer() {
    return (
        <div className='container-fluid' style={{
            backgroundColor: 'var(--background-dark-blue)'
        }}>
            <div className="container mx-auto px-4 sm:px-6 items-center  padding_4  justify-between py-6 md:justify-start md:space-x-10">

                <div className={styles.footer}>
                    <ul>
                        <li>
                            <Link href={'/'} className={styles.logo}>
                                <Image
                                    src={'/static/ola-lms-logo-footer.png'}
                                    width={100}
                                    height={100}
                                    alt=''
                                />
                                <h2 className={`${lato.className}`}>Tech</h2>
                            </Link>
                            <p className={styles.tagline}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div className={styles.footerIcons}>
                            <AiOutlineInstagram color="#5A6C80" size={30} style={{marginRight: 5 }} />
                            <AiFillLinkedin color="#5A6C80" size={30}/>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className={styles.footer_link_title}>Ola LMS</li>
                        <li className={styles.footer_links}><Link href={'#'}>Ola Aspire</Link></li>
                        <li className={styles.footer_links}><Link href={'#'}>Ola Nurture</Link></li>
                        <li className={styles.footer_links}><Link href={'#'}>Ola Upskill</Link></li>
                    </ul>
                    <ul>
                        <li className={styles.footer_link_title}>Services</li>
                        <li className={styles.footer_links}><Link href={'#'}>Course Development</Link></li>
                        <li className={styles.footer_links}><Link href={'#'}>Infra and IT</Link></li>
                        <li className={styles.footer_links}><Link href={'#'}>Big Blue Button Integration</Link></li>
                    </ul>
                    <ul>
                        <li className={styles.footer_link_title}>Important Links</li>
                        <li className={styles.footer_links}><Link href={'/contact'}>Contact</Link></li>
                        <li className={styles.footer_links}><Link href={'/about'}>About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto">
                <hr style={{borderTopColor: '#dddddd38'}} />
            </div>
            <div className={styles.copyright}>
                <p style={{
                    color: '#fff',
                }}>© Ola Tech {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
        </div>
    )
}