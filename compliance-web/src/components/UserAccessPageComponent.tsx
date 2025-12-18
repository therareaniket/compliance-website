"use client"
import React from 'react'
import { Header } from './Header';
import { motion, scale } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import UserAccessAnimation from './UserAccessAnimations';

type UserAccessProps = {
    userAccessHeroTitle: string;
    userAccessHeroSubtitle: string;

    rolesTitle: string;
        adminSubtitle: string;
        adminResponsibility1: string;
        adminResponsibility2: string;
        adminResponsibility3: string;

        officerSubtitle: string;
        officerResponsibility1: string;
        officerResponsibility2: string;
        officerResponsibility3: string;

        contributorSubtitle: string;
        contributorResponsibility1: string;
        contributorResponsibility2: string;
        contributorResponsibility3: string;

        auditorSubtitle: string;
        auditorResponsibility1: string;
        auditorResponsibility2: string;
        auditorResponsibility3: string;
    

    onboardingTitle: string;
    onboardingSubtitle: string;
}

export default function UserAccessComponent ({
    userAccessHeroTitle, userAccessHeroSubtitle, rolesTitle,
    adminSubtitle, adminResponsibility1, adminResponsibility2, adminResponsibility3,
    officerSubtitle, officerResponsibility1, officerResponsibility2, officerResponsibility3,
    contributorSubtitle, contributorResponsibility1,contributorResponsibility2, contributorResponsibility3,
    auditorSubtitle, auditorResponsibility1, auditorResponsibility2, auditorResponsibility3,
    onboardingTitle, onboardingSubtitle

} : UserAccessProps) {

    // const userAccessAnimation = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
    //     initialHead: { opacity: 0, x: -100, },
    //     animateHead: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },

    //     initialPara: { opacity: 0, x: -100, },
    //     animatePara: { opacity: 1, x: 0, transition: { delay: 2, duration: 1 } },

    //     initialCardRightImg: { opacity: 0, x: 100 },
    //     animateCardRightImg: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },

    //     initialCardLeftImg: { opacity: 0, x: -100 },
    //     animateCardLeftImg: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },

    //     initialCardDetailsRight: { opacity: 0, x: 100, },
    //     animateCardDetailsRight: { opacity: 1, x: 0, transition: { delay: 2, duration: 0.5 } },

    //     initialCardDetailsLeft: { opacity: 0, x: -100 },
    //     animateCardDetailsLeft: { opacity: 1, x: 0, transition: { delay: 2, duration: 0.5 } },

    //     initialProcessImg1: { opacity: 0, scale: 0 },
    //     animateProcessImg1: { opacity: 1, scale:1, transition: { delay: 1, duration: 1 } },

    //     initialProcessImg2: { opacity: 0, scale: 0 },
    //     animateProcessImg2: { opacity: 1, scale:1, transition: { delay: 2, duration: 1 } },

    //     initialProcessImg3: { opacity: 0, scale: 0 },
    //     animateProcessImg3: { opacity: 1, scale:1, transition: { delay: 4, duration: 1 } },

    //     initialProcessImg4: { opacity: 0, scale: 0 },
    //     animateProcessImg4: { opacity: 1, scale:1, transition: { delay: 5, duration: 1 } },
    // } : {

    //     initialHead: { opacity: 1, x: 0, },
    //     animateHead: { opacity: 1, x: 0, },
    //     initialPara: { opacity: 1, x: 0, },
    //     animatePara: { opacity: 1, x: 0, },
    //     initialCardRightImg: { opacity: 1, x: 0 },
    //     animateCardRightImg: { opacity: 1, x: 0, },
    //     initialCardLeftImg: { opacity: 1, x: 0 },
    //     animateCardLeftImg: { opacity: 1, x: 0, },
    //     initialCardDetailsRight: { opacity: 1, x: 0, },
    //     animateCardDetailsRight: { opacity: 1, x: 0, },
    //     initialCardDetailsLeft: { opacity: 1, x: 0 },
    //     animateCardDetailsLeft: { opacity: 1, x: 0, },
    //     initialProcessImg1: { opacity: 1, scale: 1 },
    //     animateProcessImg1: { opacity: 1, scale:1, },
    //     initialProcessImg2: { opacity: 1, scale: 1 },
    //     animateProcessImg2: { opacity: 1, scale:1, },
    //     initialProcessImg3: { opacity: 1, scale:1 },
    //     animateProcessImg3: { opacity: 1, scale:1, },
    //     initialProcessImg4: { opacity: 1, scale: 1 },
    //     animateProcessImg4: { opacity: 1, scale:1, },
    // }

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 1 } }
      };
      
      const imageVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {  opacity: 1,  scale: 1, transition: { duration: 1 } }
      };

    const MotionImage = motion(Image);

    return (
        <>
            <div className="useraccessbody">
                <Header />

                <section className='user-access-hero' style={{ backgroundColor: '#290047' }}>
                    {/* <video src="/images/userAccess/User&Access.mp4" autoPlay loop muted className='user-acc-vid'></video> */}
                    <div className="container">
                        <div className="user-access-hero-head">
                            <h1>{userAccessHeroTitle}</h1>

                            <p className='hero-section-para text-rg text-20'>{userAccessHeroSubtitle}</p>
                        </div>
                    </div>
                </section>

                <section className='section roles-card-section --bg-white overflow-hidden'>
                    <div className="container">
                        <div className="roles-wrapper">
                            <h2 className='h3 text-md'>{rolesTitle}</h2>

                            <div className="role-card-wrapper">
                                <div className="role-account-admin admin-anim">
                                    <div className="account-admin-main-text">
                                        <div className="account-admin-text">
                                            <h3 className='h4 text-md'>Account Admin</h3>

                                            <p className='text-20 text-grey text-rg'>{adminSubtitle}</p>
                                        </div>

                                        <div className='account-admin-pointers admin-anim-points'>
                                            <h4 className='h6'>Responsibilities</h4>

                                            <ul>
                                                <li><p className='text-20 text-grey text-rg'>{adminResponsibility1}</p></li>
                                                <li><p className='text-20 text-grey text-rg'>{adminResponsibility2}</p></li>
                                                <li><p className='text-20 text-grey text-rg'>{adminResponsibility3}</p></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='roles-images admin-anim-img'>
                                        <Image src='/images/userAccess/accountAdminImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                        <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse'></Image>

                                        <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse'></Image>

                                        <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse'></Image>
                                    </div>
                                </div>

                                <div className="role-account-admin card-row-reverse compli-officr-anim">
                                    <div className="account-admin-main-text">
                                        <div className="account-admin-text ">
                                            <h3 className='h4 text-md'>Compliance Officer</h3>

                                            <p className='text-20 text-grey text-rg'>{officerSubtitle}</p>
                                        </div>

                                        <div className='account-admin-pointers comp-ofcr-points'>
                                            <h4 className='h6'>Responsibilities</h4>

                                            <ul>
                                                <li><p className='text-20 text-grey text-rg'>{officerResponsibility1}</p></li>
                                                <li><p className='text-20 text-grey text-rg'>{officerResponsibility2}</p></li>
                                                <li><p className='text-20 text-grey text-rg'>{officerResponsibility3}</p></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="roles-images comp-ofcr-imgs" >
                                        <Image src='/images/userAccess/offerCardImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                        <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>

                                        <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>

                                        <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>
                                    </div>
                                </div>

                                <div className="role-account-admin compli-contri">
                                    <div className="account-admin-main-text">
                                        <div className="account-admin-text ">
                                            <h3 className='h4 text-md'>Compliance Contributor</h3>

                                            <p className='text-20 text-grey text-rg'>{contributorSubtitle}</p>
                                        </div>

                                        <div className='account-admin-pointers compli-contri-points'>
                                            <h4 className='h6'>Responsibilities</h4>

                                            <ul>
                                                <li><p className='text-20 text-grey text-rg'>{contributorResponsibility1}</p></li>
                                                <li><p className='text-20 text-grey text-rg'>{contributorResponsibility2}</p></li>
                                                <li><p className='text-20 text-grey text-rg'>{contributorResponsibility3}</p></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="roles-images compli-contri-imgs">
                                        <Image src='/images/userAccess/contributionCardImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                        <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse'></Image>

                                        <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse'></Image>

                                        <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse'></Image>
                                    </div>
                                </div>

                                <div className="role-account-admin card-row-reverse compli-auditor">
                                    <div className="account-admin-main-text">
                                        <div className="account-admin-text ">
                                            <h3 className='h4 text-md'>Compliance Auditor</h3>

                                            <p className='text-20 text-grey text-rg'>{auditorSubtitle}</p>
                                        </div>

                                        <div className='account-admin-pointers compli-auditor-points'>
                                            <h4 className='h6'>Responsibilities</h4>

                                            <ul>
                                                <li className='text-20 text-grey text-rg'><p>{auditorResponsibility1}</p></li>
                                                <li className='text-20 text-grey text-rg'><p>{auditorResponsibility2}</p></li>
                                                <li className='text-20 text-grey text-rg'><p>{auditorResponsibility3}</p></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='roles-images compli-auditor-imgs'>
                                        <Image src='/images/userAccess/auditorCardImg.webp' alt='account-admin' width={730} height={450} priority={false} className='role-img'></Image>

                                        <Image src='/images/userAccess/role-eclipse-1.svg' alt='role-eclipse-1' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>

                                        <Image src='/images/userAccess/role-eclipse-2.svg' alt='role-eclipse-2' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>

                                        <Image src='/images/userAccess/role-eclipse-3.svg' alt='role-eclipse-3' width={344} height={520} priority={true} className='role-eclipse eclipse-rev'></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='secure-portal-wrapper'>
                    <div className="container">
                        <div className='secure-portal-section'>
                            <div className='secure-portal-text' >
                                <h2 className='h3' >{onboardingTitle}</h2>

                                <p className='text-20 text-rg text-grey' >{onboardingSubtitle}</p>
                            </div>

                            <div className='access-portal-path'>
                                <div className='path-line' >
                                    <Image className='path-line' src='/images/userAccess/access-portal-path-line.webp' alt='path-line' width={1238} height={425} priority={false}></Image>
                                </div>

                                <div className='path-images'>
                                    {/* <MotionImage className='path-1' src='/images/userAccess/access-portal-path-1.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg1' whileInView='animateProcessImg1' viewport={{ once: true, amount: 0.3 }}></MotionImage> */}
                                    <Image className='path-1' src='/images/userAccess/access-portal-path-1.webp' alt='path-line' width={450} height={160} priority={false} ></Image>

                                    {/* <MotionImage className='path-2' src='/images/userAccess/access-portal-path-2.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg2' whileInView='animateProcessImg2' viewport={{ once: true, amount: 0.3 }}></MotionImage> */}
                                    <Image className='path-2' src='/images/userAccess/access-portal-path-2.webp' alt='path-line' width={450} height={160} priority={false} ></Image>

                                    {/* <MotionImage className='path-3' src='/images/userAccess/access-portal-path-3.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg3' whileInView='animateProcessImg3' viewport={{ once: true, amount: 0.3 }}></MotionImage> */}
                                    <Image className='path-3' src='/images/userAccess/access-portal-path-3.webp' alt='path-line' width={450} height={160} priority={false} ></Image>

                                    {/* <MotionImage className='path-4' src='/images/userAccess/access-portal-path-4.webp' alt='path-line' width={450} height={160} priority={false} variants={userAccessAnimation} initial='initialProcessImg4' whileInView='animateProcessImg4' viewport={{ once: true, amount: 0.3 }}></MotionImage> */}
                                    <Image className='path-4' src='/images/userAccess/access-portal-path-4.webp' alt='path-line' width={450} height={160} priority={false} ></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="section hm-cta">
                    <div className="container">
                        <h2 className="h3 text-center">Stay Ahead of Regulations with Effortless Compliance</h2>

                        <div className="cta-links text-center">
                            <Link href="/Compliance" title="Get Started" className="btn-padding btn-primary text-md text-18 site-radius-10">Get Started</Link>

                            <Link href="/Contact" title="Schedual a Demo" className="btn-padding btn-white text-md text-18 site-radius-10">Schedual a Demo</Link>

                            <Link href="/Contact" title="Contact Us" className="btn-padding btn-white text-md text-18 site-radius-10">Contact Us</Link>
                        </div>
                    </div>
                </section> */}
            </div>

            <UserAccessAnimation />
        </>
    );
}