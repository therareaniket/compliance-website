"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutUsSwiperComponents from "@/components/SwiperComponent";

export default function AboutUs() {
    return (
        <>
            <section className='abt-hero'>
                <video src="/images/aboutUs/About-us.mp4" autoPlay loop muted></video>
                <div className="container">
                    <div className="abt-hero-head all-banner-head">
                        <h1>Redefining Clinical Trial <span>Compliance</span> for a Smarter Future</h1>

                        <p className='text-rg text-20 abt-hero-para'>We simplify regulatory complexities with secure, efficient solutions. Our platform keeps trial teams audit-ready, builds trust, and supports long-term success across every phase of clinical research. </p>

                        <div className='abt-hero-head-button' >
                            <Link href='#' title="connect-with-us" className="btn-secondary btn-padding text-md text-18 site-radius-10">Connect With Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='abt-mis'>
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

            <section className='abt-vis'>
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

            <section className="abt-platforms">
                <div className="container">
                    <div className="platform-wrapper site-radius-10">
                        <Image src='/images/aboutUs/platform-section-image.webp' alt='our-platform' width={770} height={549} priority={false} className='platform-showcase-img'></Image>

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
        </>
    )
}