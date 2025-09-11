"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutUsSwiperComponents from "@/components/SwiperComponent";

export default function AboutUs() {
    return (
        <>
            <section className='abt-hero'>
                <div className="container">
                    <div className="abt-hero-wrapper">
                        <div className="abt-hero-head">
                            <h1>Redefining Clinical Trial <span>Compliance</span> for a Smarter Future</h1>

                            <p className='text-rg text-20'>We simplify regulatory complexities with secure, efficient solutions. Our platform keeps trial teams audit-ready, builds trust, and supports long-term success across every phase of clinical research. </p>

                            <div className='abt-hero-head-button' >
                                <Link href='#' title="connect-with-us" className="btn-primary btn-padding text-md text-18 site-radius-10">Connect With Us</Link>
                            </div>
                        </div>

                        <div className="abt-hero-card">
                            <Image src='/images/aboutUs/hero-card.webp' alt='hero-card' width={590} height={500} priority={false}></Image>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="mis-vis-section">
                        <div className="mis-vis-heading">
                            <h2 className='h3'>Our Mission</h2>

                            <p className='text-20 text-rg'>To simplify and strengthen clinical trial compliance through automation and actionable insights. </p>

                            <Image src='/images/aboutUs/mission-heading.webp' alt='mission-heading' width={307} height={289} priority={false}></Image>
                        </div>

                        <div className="mis-vis-card-lists">
                            <div className="mis-vis-cards">
                                <div className="mis-vis-card primary-box-shadow">
                                    <Image src='/images/aboutUs/rebase-icon.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Simplify Workflows</p>

                                    <p>Automate routine tasks to save time and reduce errors in trial operations.</p>
                                </div>

                                <div className="mis-vis-card primary-box-shadow">
                                    <Image src='/images/aboutUs/process-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Empower Organizations</p>

                                    <p>Help Sponsors, CROs, and Sites stay audit-ready and confident at every stage.</p>
                                </div>
                            </div>

                            <div className="mis-vis-cards">
                                <div className="mis-vis-card primary-box-shadow">
                                    <Image src='/images/aboutUs/approval-delegation.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Strengthen Processes</p>

                                    <p>Ensure accuracy and reliability across all clinical compliance activities.</p>
                                </div>

                                <div className="mis-vis-card primary-box-shadow">
                                    <Image src='/images/aboutUs/clock-arrow-down.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Reduce Manual Effort</p>

                                    <p>Automate repetitive tasks with smart, technology-driven solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="mis-vis-section vis-section">
                        <div className="mis-vis-heading vis-heading">
                            <h2 className='h3'>Our Vision </h2>

                            <p className='text-20 text-rg'>A future where clinical trial readiness is seamless, proactive, and technology driven. </p>

                            <Image src='/images/aboutUs/vision-heading.webp' alt='mission-heading' width={453} height={289} priority={false}></Image>
                        </div>

                        <div className="mis-vis-card-lists">
                            <div className="mis-vis-cards">
                                <div className="mis-vis-card greenish-box-shadow vis-card">
                                    <Image src='/images/aboutUs/work-history.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Seamless Experience </p>

                                    <p>Deliver smooth, user-friendly compliance processes for trial teams. </p>
                                </div>

                                <div className="mis-vis-card greenish-box-shadow vis-card">
                                    <Image src='/images/aboutUs/proactive-readiness-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Trust & Transparency </p>

                                    <p>Build confidence with secure, efficient workflows and clear oversight. </p>
                                </div>
                            </div>

                            <div className="mis-vis-cards">
                                <div className="mis-vis-card greenish-box-shadow vis-card">
                                    <Image src='/images/aboutUs/arming-countdown.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Proactive Readiness </p>

                                    <p>Anticipate regulatory needs before they become challenges. </p>
                                </div>

                                <div className="mis-vis-card greenish-box-shadow vis-card">
                                    <Image src='/images/aboutUs/emoji-objects.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Future Innovation </p>

                                    <p>Continuously evolve compliance through modern, scalable technology. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="our-platforms">
                        <div className="platform-images">
                            <Image src='/images/aboutUs/platform-section-image.webp' alt='platform-image' width={798} height={570}></Image>
                        </div>

                        <div className="our-platform-text">
                            <h2 className='h4'>Our platform supports frameworks to help you stay audit-ready.</h2>

                            <p className='platform-para text-20 text-rg'>Our platform centralizes compliance across global frameworks keeping your clinical trial operations secure, aligned, and audit-ready at every step. </p>

                            <div className="platform-tools">
                                <div>
                                    <ul>
                                        <li className='platform-section-links'><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>HIPAA</p></li>

                                        <li className='platform-section-links'><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>GDPR</p></li>

                                        <li className='platform-section-links'><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>21 CFR Part 11</p></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li className='platform-section-links'><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>CDSCO</p></li>

                                        <li className='platform-section-links'><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>WHO-GMP</p></li>

                                        <li className='platform-section-links'><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>EMA</p></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="platform-btn">
                                <Link href='#' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <AboutUsSwiperComponents />
        </>
    )
}