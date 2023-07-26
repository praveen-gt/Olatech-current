import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../src/styles/Footer.module.css'

export default function Footer() {
    return (
        <div className='container-fluid' style={{
            backgroundColor: 'var(--background-dark-blue)'
        }}>
            <div className="container mx-auto px-4 sm:px-6 items-center  padding_4  justify-between py-6 md:justify-start md:space-x-10">

                <div className="flex footer justify-between lg:w-0 lg:flex-1">
                    <ul>
                        <li>
                            <Link href={'/'}>
                                <Image
                                    src={'/static/ola-lms-logo-footer.png'}
                                    width={100}
                                    height={100}
                                    alt=''
                                />
                            </Link>
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
            <div className='flex justify-center py-6 copyright'>
                <p style={{
                    color: '#fff',
                }}>© Ola Tech {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
        </div>
    )
}