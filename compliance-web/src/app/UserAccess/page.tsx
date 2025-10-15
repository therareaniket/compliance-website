"use client"
import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { motion, scale } from 'framer-motion'
import UserAccessAnimation from '@/components/UserAccessAnimations'
 
export default function UserAccess() {

    const userAccessAnimation = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
        initialHead: { opacity: 0, x: -100, },
        animateHead: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },

        initialPara: { opacity: 0, x: -100, },
        animatePara: { opacity: 1, x: 0, transition: { delay: 2, duration: 1 } },

        initialCardRightImg: { opacity: 0, x: 100 },
        animateCardRightImg: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },

        initialCardLeftImg: { opacity: 0, x: -100 },
        animateCardLeftImg: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },

        initialCardDetailsRight: { opacity: 0, x: 100, },
        animateCardDetailsRight: { opacity: 1, x: 0, transition: { delay: 2, duration: 0.5 } },

        initialCardDetailsLeft: { opacity: 0, x: -100 },
        animateCardDetailsLeft: { opacity: 1, x: 0, transition: { delay: 2, duration: 0.5 } },

        initialProcessImg1: { opacity: 0, scale: 0 },
        animateProcessImg1: { opacity: 1, scale:1, transition: { delay: 1, duration: 1 } },

        initialProcessImg2: { opacity: 0, scale: 0 },
        animateProcessImg2: { opacity: 1, scale:1, transition: { delay: 2, duration: 1 } },

        initialProcessImg3: { opacity: 0, scale: 0 },
        animateProcessImg3: { opacity: 1, scale:1, transition: { delay: 4, duration: 1 } },

        initialProcessImg4: { opacity: 0, scale: 0 },
        animateProcessImg4: { opacity: 1, scale:1, transition: { delay: 5, duration: 1 } },
    } : {

        initialHead: { opacity: 1, x: 0, },
        animateHead: { opacity: 1, x: 0, },
        initialPara: { opacity: 1, x: 0, },
        animatePara: { opacity: 1, x: 0, },
        initialCardRightImg: { opacity: 1, x: 0 },
        animateCardRightImg: { opacity: 1, x: 0, },
        initialCardLeftImg: { opacity: 1, x: 0 },
        animateCardLeftImg: { opacity: 1, x: 0, },
        initialCardDetailsRight: { opacity: 1, x: 0, },
        animateCardDetailsRight: { opacity: 1, x: 0, },
        initialCardDetailsLeft: { opacity: 1, x: 0 },
        animateCardDetailsLeft: { opacity: 1, x: 0, },
        initialProcessImg1: { opacity: 1, scale: 1 },
        animateProcessImg1: { opacity: 1, scale:1, },
        initialProcessImg2: { opacity: 1, scale: 1 },
        animateProcessImg2: { opacity: 1, scale:1, },
        initialProcessImg3: { opacity: 1, scale:1 },
        animateProcessImg3: { opacity: 1, scale:1, },
        initialProcessImg4: { opacity: 1, scale: 1 },
        animateProcessImg4: { opacity: 1, scale:1, },

    }

    const MotionImage = motion(Image);

    return (
        <>
        <div className="useraccessbody">
            <Header />

            <section className='user-access-hero'>
                <video src="/images/userAccess/User&Access.mp4" autoPlay loop muted className='user-acc-vid'></video>
                <div className="container">
                        <div className="user-access-hero-head">
                            <h1>User Roles and Access Management</h1>

                            <p className='hero-section-para text-rg text-20'>Driving compliance and transparency by defining clear permissions responsibilities and secure access for every role across the system</p>
                        </div>
                </div>
            </section>

            <section className='section roles-card-section --bg-white overflow-hidden'>
                <div className="container">
                    <div className="roles-wrapper">
                        <motion.h2 className='h3 text-md' variants={userAccessAnimation} initial='initialHead' whileInView='animateHead' viewport={{ once: true, amount: 0.3 }}>Defining Roles for Secure and Compliant Operations</motion.h2>

                        <div className="role-card-wrapper">
                            <div className="role-account-admin admin-anim">
                                <motion.div className="account-admin-main-text" variants={userAccessAnimation} initial='initialCardDetailsLeft' whileInView='animateCardDetailsLeft' viewport={{ once: true, amount: 0.3 }}>
                                    <div className="account-admin-text">
                                        <h3 className='h4 text-md'>Account Admin</h3>

                                        <p className='text-20 text-grey text-rg'>Full access to manage account settings, users and security</p>
                                    </div>

                                    <div className='account-admin-pointers admin-anim-points'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li><p className='text-20 text-grey text-rg'>Enforce security protocols and policies to protect account data and prevent unauthorized access.</p></li>
                                            <li><p className='text-20 text-grey text-rg'>Manage and oversee all users, roles, and permissions to ensure appropriate access levels throughout the account.</p></li>
                                            <li><p className='text-20 text-grey text-rg'>Monitor billing, subscriptions, and financial transactions to ensure accurate account management.</p></li>
                                        </ul>
                                    </div>
                                </motion.div>
                                
                                <motion.div className='roles-images admin-anim-img' variants={userAccessAnimation} initial='initialCardRightImg' whileInView='animateCardRightImg' viewport={{ once: true, amount: 0.3 }}>
                                    <Image src='/images/userAccess/accountAdminImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                    <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse'></Image>
                                        
                                    <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse'></Image>

                                    <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse'></Image>
                                </motion.div>
                            </div>

                            <div className="role-account-admin card-row-reverse compli-officr-anim">
                                <motion.div className="account-admin-main-text" variants={userAccessAnimation} initial='initialCardDetailsRight' whileInView='animateCardDetailsRight' viewport={{ once: true, amount: 0.3 }}>
                                    <div className="account-admin-text ">
                                        <h3 className='h4 text-md'>Compliance Officer</h3>

                                        <p className='text-20 text-grey text-rg'>Oversees organizational compliance and regulatory adherence</p>
                                    </div>

                                    <div className='account-admin-pointers comp-ofcr-points'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li><p className='text-20 text-grey text-rg'>Develop, implement, and enforce compliance policies and procedures across the organization.</p></li>
                                            <li><p className='text-20 text-grey text-rg'>Continuously monitor adherence to external regulations and internal standards to mitigate risk.</p></li>
                                            <li><p className='text-20 text-grey text-rg'>Conduct detailed risk assessments and recommend actionable measures for improvement.</p></li>
                                        </ul>
                                    </div>
                                </motion.div>

                                <motion.div className="roles-images comp-ofcr-imgs" variants={userAccessAnimation} initial='initialCardLeftImg' whileInView='animateCardLeftImg' viewport={{ once: true, amount: 0.3 }}>
                                    <Image src='/images/userAccess/offerCardImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                    <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>
                                        
                                    <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>

                                    <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>
                                </motion.div> 
                            </div>

                            <div className="role-account-admin compli-contri">
                                <motion.div className="account-admin-main-text" variants={userAccessAnimation} initial='initialCardDetailsLeft' whileInView='animateCardDetailsLeft' viewport={{ once: true, amount: 0.3 }}>
                                    <div className="account-admin-text ">
                                        <h3 className='h4 text-md'>Compliance Contributor</h3>

                                        <p className='text-20 text-grey text-rg'>Supports compliance operations by creating and maintaining documentation</p>
                                    </div>

                                    <div className='account-admin-pointers compli-contri-points'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li><p className='text-20 text-grey text-rg'>Create, update, and maintain compliance records and documentation to ensure accuracy.</p></li>
                                            <li><p className='text-20 text-grey text-rg'>Prepare and submit reports or data for review by compliance officers in a timely manner.</p></li>
                                            <li><p className='text-20 text-grey text-rg'>Assist in organizing and maintaining regulatory documents and reference materials.</p></li>
                                        </ul>
                                    </div>
                                </motion.div>
                                
                                <motion.div className="roles-images compli-contri-imgs" variants={userAccessAnimation} initial='initialCardRightImg' whileInView='animateCardRightImg' viewport={{ once: true, amount: 0.3 }}>
                                    <Image src='/images/userAccess/contributionCardImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                    <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse'></Image>
                                        
                                    <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse'></Image>

                                    <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse'></Image>
                                </motion.div>
                            </div>

                            <div className="role-account-admin card-row-reverse compli-auditor">
                                <motion.div className="account-admin-main-text" variants={userAccessAnimation} initial='initialCardDetailsRight' whileInView='animateCardDetailsRight' viewport={{ once: true, amount: 0.3 }}>
                                    <div className="account-admin-text ">
                                        <h3 className='h4 text-md'>Compliance Auditor</h3>

                                        <p className='text-20 text-grey text-rg'>Reviews compliance activities to ensure accuracy and accountability</p>
                                    </div>

                                    <div className='account-admin-pointers compli-auditor-points'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li className='text-20 text-grey text-rg'><p>Examine compliance records and operational activities to verify accuracy and adherence to policies.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Identify gaps, inconsistencies, or non-compliance issues and propose corrective actions.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Ensure accountability, traceability of compliance processes through thorough review and documentation.</p></li>
                                        </ul>
                                    </div>
                                </motion.div>

                                <motion.div className='roles-images compli-auditor-imgs' variants={userAccessAnimation} initial='initialCardLeftImg' whileInView='animateCardLeftImg' viewport={{ once: true, amount: 0.3 }}>
                                    <Image src='/images/userAccess/auditorCardImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                    <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>
                                        
                                    <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>

                                    <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='secure-portal-wrapper'>
                <div className="container">
                    <div className='secure-portal-section'>
                        <motion.div className='secure-portal-text' >
                            <motion.h2 className='h3' variants={userAccessAnimation} initial='initialHead' whileInView='animateHead' viewport={{ once: true, amount: 0.3 }}>Complete Onboarding Process for Secure Portal Access</motion.h2>

                            <motion.p className='text-20 text-rg text-grey' variants={userAccessAnimation} initial='initialPara' whileInView='animatePara' viewport={{ once: true, amount: 0.3 }}>A structured step by step onboarding guide designed to provide secure compliant and role based access to the portal covering registration verification role assignment and final access</motion.p>
                        </motion.div>

                        <div className='access-portal-path'>
                            <div className='path-line' >
                                <Image className='path-line' src='/images/userAccess/access-portal-path-line.webp' alt='path-line' width={1238} height={425} priority={false}></Image>
                            </div>

                            <motion.div className='path-images' >
                                <MotionImage className='path-1' src='/images/userAccess/access-portal-path-1.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg1' whileInView='animateProcessImg1' viewport={{ once: true, amount: 0.3 }}></MotionImage>

                                <MotionImage className='path-2' src='/images/userAccess/access-portal-path-2.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg2' whileInView='animateProcessImg2' viewport={{ once: true, amount: 0.3 }}></MotionImage>

                                <MotionImage className='path-3' src='/images/userAccess/access-portal-path-3.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg3' whileInView='animateProcessImg3' viewport={{ once: true, amount: 0.3 }}></MotionImage>

                                <MotionImage className='path-4' src='/images/userAccess/access-portal-path-4.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg4' whileInView='animateProcessImg4' viewport={{ once: true, amount: 0.3 }}></MotionImage>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section hm-cta">
                <div className="container">
                    <h2 className="h3 text-center">Stay Ahead of Regulations with Effortless Compliance</h2>

                    <div className="cta-links text-center">
                        <Link href="#" title="Get Started" className="btn-padding btn-primary text-md text-18 site-radius-10">Get Started</Link>

                        <Link href="#" title="Schedual a Demo" className="btn-padding btn-white text-md text-18 site-radius-10">Schedual a Demo</Link>

                        <Link href="#" title="Contact Us" className="btn-padding btn-white text-md text-18 site-radius-10">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>

        <UserAccessAnimation />
        </>
    )
}