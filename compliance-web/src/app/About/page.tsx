"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutUsSwiperComponents from "@/components/SwiperComponent";
import { Header } from '@/components/Header';

export default function AboutUs() {
    return (
        <>
        <div className="aboutbody">
            <Header/>

            <section className='abt-hero'>
                <video src="/images/aboutUs/About-us.mp4" autoPlay loop muted className='about-hero-vid'></video>

                <div className="container">
                    <div className="abt-hero-head all-banner-head">
                        <h1>Redefining Compliance for a Smarter Future</h1>

                        <p className='text-rg text-20 abt-hero-para'>Streamlines clinical trial compliance with secure, efficient solutions—keeping teams audit-ready, building trust, and driving long-term success.</p>

                        {/* <div className='abt-hero-head-button' >
                            <Link href='#' title="connect-with-us" className="btn-secondary btn-padding text-md text-18 site-radius-10">Connect With Us</Link>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className='section abt-mis --bg-white'>
                <div className="container">
                    <div className="mis-vis-section">
                        <div className="mis-vis-heading">
                            <h2 className='h3'>Our Mission</h2>

                            <p className='text-20 text-rg'>To simplify and strengthen clinical trial compliance through automation and actionable insights. </p>

                            <Image src='/images/aboutUs/mission-heading.webp' alt='mission-heading' width={692} height={295} priority={false}></Image>
                        </div>

                        <div className="mis-vis-card-lists">
                            <div className="mis-vis-cards">
                                <div className="mis-vis-card primary-box-shadow">
                                    <Image src='/images/aboutUs/rebase-icon.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Simplify Workflows</p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg'>Automate routine tasks to save time and reduce errors in trial operations.</p>
                                </div>

                                <div className="mis-vis-card primary-box-shadow">
                                    <Image src='/images/aboutUs/process-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Empower Organizations</p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg'>Help Sponsors, CROs, and Sites stay audit-ready and confident at every stage.</p>
                                </div>
                            </div>

                            <div className="mis-vis-cards">
                                <div className="mis-vis-card primary-box-shadow removed-margin-btm">
                                    <Image src='/images/aboutUs/approval-delegation.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Strengthen Processes</p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg'>Ensure accuracy and reliability across all clinical compliance activities.</p>
                                </div>

                                <div className="mis-vis-card primary-box-shadow removed-margin-btm">
                                    <Image src='/images/aboutUs/clock-arrow-down.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Reduce Manual Effort</p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg'>Automate repetitive tasks with smart, technology-driven solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='abt-vis --bg-white'>
                <div className="container">
                    <div className="mis-vis-section vis-section">
                        <div className="mis-vis-heading vis-heading">
                            <h2 className='h3'>Our Vision </h2>

                            <p className='text-20 text-rg'>A future where clinical trial readiness is seamless, proactive, and technology driven. </p>

                            <Image src='/images/aboutUs/vision-heading.webp' alt='mission-heading' width={692} height={295} priority={false}></Image>
                        </div>

                        <div className="mis-vis-card-lists">
                            <div className="mis-vis-cards">
                                <div className="mis-vis-card greenish-box-shadow vis-card">
                                    <Image src='/images/aboutUs/work-history.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Seamless Experience </p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg'>Deliver smooth, user-friendly compliance processes for trial teams. </p>
                                </div>

                                <div className="mis-vis-card greenish-box-shadow vis-card">
                                    <Image src='/images/aboutUs/proactive-readiness-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Trust & Transparency </p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg'>Build confidence with secure, efficient workflows and clear oversight. </p>
                                </div>
                            </div>

                            <div className="mis-vis-cards">
                                <div className="mis-vis-card greenish-box-shadow vis-card removed-margin-btm">
                                    <Image src='/images/aboutUs/arming-countdown.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Proactive Readiness </p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg'>Anticipate regulatory needs before they become challenges. </p>
                                </div>

                                <div className="mis-vis-card greenish-box-shadow vis-card removed-margin-btm">
                                    <Image src='/images/aboutUs/emoji-objects.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Future Innovation </p>

                                    <p className='mis-vis-detail-para text-grey test-18 text-rg '>Continuously evolve compliance through modern, scalable technology. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="abt-platforms section --bg-white">
                <div className="container">
                    <div className="platform-wrapper site-radius-10">
                        <div className="left-gif-platform">
                            <Image src='/images/aboutUs/platform-side-img.webp' alt='platform-side-img' width={452} height={440} priority={false} className='platform-side-image site-radius-10'></Image>

                            <Image src='/images/aboutUs/about-us-platform.gif' alt='our-platform' width={770} height={549} priority={false} className='platform-showcase-img site-radius-10'></Image>
                        </div>

                        <div className="platform-info">
                            <h2 className='h4'>Our platform supports frameworks to help you stay audit-ready.</h2>

                            <p className='text-20 text-grey'>Our platform centralizes compliance with global frameworks, keeping you audit-ready.</p>

                            <div className="platform-lists text-20">
                                <ul>
                                    <li><span className='icon-check_circle'></span> HIPAA</li>
                                    <li><span className='icon-check_circle'></span> GDPR</li>
                                    <li><span className='icon-check_circle'></span> 21 CFR Part 11</li>
                                </ul>

                                <ul>
                                    <li><span className='icon-check_circle'></span>CDSCO</li>
                                    <li><span className='icon-check_circle'></span>WHO-GMP</li>
                                    <li><span className='icon-check_circle'></span>EMA</li>
                                </ul>
                            </div>

                            <Link href='/Compliance' title='Learn More' className='btn-padding site-radius-10 btn-primary'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <AboutUsSwiperComponents />

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
        </>
    )
}