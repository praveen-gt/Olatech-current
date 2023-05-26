import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../src/styles/Footer.module.css'

const Footer = () => {
    return (
        <div className='container-fluid' style={{
            backgroundColor: 'var(--light-black)'
        }}>
            <div>
                <div className="container mx-auto px-4 sm:px-6">
                    <div className='flex justify-between items-center py-6 md:py-4'>
                        <div>
                            <Link href={'/'}>
                                <Image
                                    src={'/static/ola-lms-logo-footer.png'}
                                    width={100}
                                    height={100}
                                    alt=''
                                />
                            </Link>
                            <div className={styles.services_text}>
                                <span style={{
                                    color: '#ef710a',
                                }}>
                                    Aspire
                                </span>
                                <span style={{
                                    color: '#c70f18',
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: '#ddd',


                                }}>
                                    Nurture
                                </span>
                                <span style={{
                                    color: '#0648CC',
                                }}>
                                    Upskill
                                </span>

                            </div>
                        </div>

                        <div className={styles.footerText}>
                            <p style={{
                                fontSize: 20,
                                color: '#fff'
                            }}>Cloud based LMS with Intuitive UI and feature rich ecosystem.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container mx-auto px-4 sm:px-6 items-center  justify-between py-6 md:justify-start md:space-x-10">

                    <div className="flex justify-between lg:w-0 lg:flex-1">
                        <ul>
                            <li className={styles.footer_link_title}>Ola LMS</li>
                            <Link href={'#'}><li className={styles.footer_links}>Ola Aspire</li></Link>
                            <Link href={'#'}><li className={styles.footer_links}>Ola Nurture</li></Link>
                            <Link href={'#'}><li className={styles.footer_links}>Ola Upskill</li></Link>
                        </ul>
                        <ul>
                            <li className={styles.footer_link_title}>Services</li>
                            <Link href={'#'}><li className={styles.footer_links}>Course Development</li></Link>
                            <Link href={'#'}><li className={styles.footer_links}>Infra and IT</li></Link>
                            <Link href={'#'}><li className={styles.footer_links}>Big Blue Button Integration</li></Link>
                        </ul>
                        <ul>
                            <li className={styles.footer_link_title}>Important Links</li>
                            <Link href={'/contact'}><li className={styles.footer_links}>Contact</li></Link>
                            <Link href={'/about'}><li className={styles.footer_links}>About</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center py-6 copyright'>
                    <p style={{
                        color: '#fff',
                    }}>© Ola Tech {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;