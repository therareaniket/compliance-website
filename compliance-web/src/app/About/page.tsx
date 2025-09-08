"use client"
import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'

export function AboutUs() {
    return (
        <main>
            <section className='Hero'>
                <div className="container">
                    <div className="hero-wrapper">
                        <div className="hero-head">
                            <h1>Redefining <span>Compliance</span> for a Smarter Future</h1>

                            <p className='text-rg text-20'>We simplify regulatory complexities with solutions built on security and efficiency. Our platform keeps organizations audit-ready,
                                builds trust, and drives long-term success.</p>

                            <div className='heroHeadBtn' >
                                <button className='text-18 text-md' type="button">Connect with us</button>
                            </div>
                        </div>

                        <div className="heroCard">
                            <Image src='/images/aboutUs/heroSectionImgCard.webp' alt='HeroCard' width={590} height={500} priority={false}></Image>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mission-section'>
                <div className="container">
                    <div className="mission-main">
                        <div className="mission-heading">
                            <h2 className='h3'>Our Mission is to simplify and streamline compliance workflows.</h2>

                            <p>Our mission is to streamline and strengthen compliance with automation and actionable insights.</p>

                            <Image src='/images/aboutUs/missionHeadImg.webp' alt='missionImg' width={307} height={290} priority={false}></Image>
                        </div>

                        <div className="heading-cards">
                            <div className='Cards'>
                                <div className='card-rw-1'>
                                    <div className='card-1'>
                                        <Image className='missionSvg' src='/images/aboutUs/rebase.svg' alt='rebase' width={33} height={37} priority={false} ></Image>
                                        <p className='h6'>Simplify Workflows</p>
                                        <p className='text-rg'>Streamline tasks with automation that saves time, reduces errors.</p>
                                    </div>

                                    <div className='card-1'>
                                        <Image className='missionSvg' src='/images/aboutUs/process.svg' alt='process' width={40} height={40} priority={false} ></Image>
                                        <p className='h6'>Strengthen Processes</p>
                                        <p className='text-rg'>Ensure accuracy and reliability across all compliance activities.</p>
                                    </div>
                                </div>

                                <div className='card-rw-1'>
                                    <div className='card-1'>
                                        <Image className='missionSvg' src='/images/aboutUs/approval_delegation.svg' alt='approval_delegation' width={33} height={37} priority={false} ></Image>
                                        <p className='h6'>Empower Organizations</p>
                                        <p className='text-rg'>Help businesses stay audit-ready and confident at all times.</p>
                                    </div>

                                    <div className='card-1'>
                                        <Image className='missionSvg' src='/images/aboutUs/clock_arrow_down.svg' alt='clock_arrow_down' width={40} height={40} priority={false} ></Image>
                                        <p className='h6'>Reduce Manual Effort</p>
                                        <p className='text-rg'>Replace repetitive work with technology-driven solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-vision-main'>
                <div className="container">
                    <div className='our-vision'>
                        <div className='our-vision-cards'>
                            <div className='vision-card-r1'>
                                <div className="vision-card1">
                                    <Image className='vision-img' src='/images/aboutUs/work_history.svg' alt='work_history' width={35} height={35} priority={false} ></Image>
                                    <p className='h6'>Seamless Experience</p>
                                    <p className='text-rg'>Deliver compliance processes that are Smooth, user-friendly.</p>
                                </div>

                                <div className="vision-card1">
                                    <Image className='vision-img' src='/images/aboutUs/article.svg' alt='article' width={30} height={30} priority={false} ></Image>
                                    <p className='h6'>Proactive Readiness</p>
                                    <p className='text-rg'>Anticipate regulatory needs before they become challenges.</p>
                                </div>
                            </div>

                            <div className='vision-card-r1'>
                                <div className="vision-card1">
                                    <Image className='vision-img' src='/images/aboutUs/arming_countdown.svg' alt='arming_countdown' width={26} height={33} priority={false} ></Image>
                                    <p className='h6'>Trust & Transparency</p>
                                    <p className='text-rg'>Build confidence with secure, efficient workflows.</p>
                                </div>    

                                <div className="vision-card1">
                                    <Image className='vision-img' src='/images/aboutUs/emoji_objects.svg' alt='emoji_objects' width={24} height={33} priority={false} ></Image>
                                    <p className='h6'>Future Innovation</p>
                                    <p className='text-rg'>Continuously evolve compliance through modern technology.</p>
                                </div>
                            </div>
                        </div>

                        <div className="vision-heading">
                            <h2 className='h3'>Our Vision is a future where readiness is seamless and active.</h2>

                            <p>Our mission is to streamline and strengthen compliance with automation and actionable insights.</p>

                            <Image src='/images/aboutUs/visionImg.webp' alt='missionImg' width={453} height={289}></Image>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="our-platforms">
                        <div className="platform-images">
                            <div className='image-1'>
                                <Image src='/images/aboutUs/platformImg-1.webp' alt='PlatformImg' width={226} height={220} priority={false}></Image>
                            </div>

                            <div className='image-2'>
                                <Image src='/images/aboutUs/platformImg-2.webp' alt='PlatformImg' width={609} height={570} priority={false}></Image>
                            </div>
                        </div>

                        <div className="ourPlatformText">
                            <h2 className='h4'>Our platform supports frameworks to help you stay audit-ready.</h2>

                            <p className='text-20 text-rg'>Our platform centralizes compliance with global frameworks, keeping you audit-ready.</p>

                            <div className="platformtools">
                                <div>
                                    <ul>
                                        <li><Image src='/images/aboutUs/check_circle.svg' alt='checked_circle' width={25} height={25} priority={false}></Image><p>HIPAA</p></li>

                                        <li><Image src='/images/aboutUs/check_circle.svg' alt='checked_circle' width={25} height={25} priority={false}></Image><p>GDPR</p></li>

                                        <li><Image src='/images/aboutUs/check_circle.svg' alt='checked_circle' width={25} height={25} priority={false}></Image><p>21 CFR Part 11</p></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li><Image src='/images/aboutUs/check_circle.svg' alt='checked_circle' width={25} height={25} priority={false}></Image><p>CDSCO</p></li>

                                        <li><Image src='/images/aboutUs/check_circle.svg' alt='checked_circle' width={25} height={25} priority={false}></Image><p>WHO-GMP</p></li>

                                        <li><Image src='/images/aboutUs/check_circle.svg' alt='checked_circle' width={25} height={25} priority={false}></Image><p>EMA</p></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="platform-btn">
                                <button className='text-18 text-rg' type="submit">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='core-feature-section'>
                        <div className="core-feature-heading">
                            <h2 className='h4'>Core Features That Power Compliance</h2>

                            <p className='h6 text-rg'>Discover the essential tools that simplify compliance from document control and training to real-time alerts and reporting designed to keep your organization efficient, secure, and audit-ready.</p>
                        </div>

                        <div className='feature-cards'>
                            <div className="featurecard-1">
                                <div className='Frame1'>
                                    <Image src='/images/aboutUs/Frame-1.svg' alt='PlatformImg' width={60} height={60} priority={false} ></Image>

                                    <p className='text-20 text-md'>Document Management</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Upload and store compliance documents securely.</li>

                                        <li className='text-18 text-rg'>Supports version control for accuracy.</li>

                                        <li className='text-18 text-rg'>Enables e-signatures for approvals.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="featurecard-1 featurecard-2">
                                <div className='Frame1 Frame2'>
                                    <Image src='/images/aboutUs/Frame-2.svg' alt='PlatformImg' width={60} height={60} priority={false} ></Image>

                                    <p className='text-20 text-md'>Audit Trails</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Automatically logs all user actions.</li>

                                        <li className='text-18 text-rg'>Maintains transparency and accountability.</li>

                                        <li className='text-18 text-rg'>Essential for regulatory inspections.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="featurecard-1 featurecard-3">
                                <div className='Frame1 Frame3'>
                                    <Image src='/images/aboutUs/Frame-3.svg' alt='PlatformImg' width={60} height={60} priority={false} ></Image>

                                    <p className='text-20 text-md'>Training & SOPs</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Assign training modules and SOPs to users.</li>

                                        <li className='text-18 text-rg'>Track completion and progress in real time.</li>

                                        <li className='text-18 text-rg'>Certify compliance readiness of staff.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="featurecard-1 featurecard-4">
                                <div className='Frame1 Frame4'>
                                    <Image src='/images/aboutUs/Frame-4.svg' alt='PlatformImg' width={60} height={60} priority={false} ></Image>

                                    <p className='text-20 text-md'>CAPA & Risk Management</p>   
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Track deviations and incidents effectively.</li>

                                        <li className='text-18 text-rg'>Implement corrective and preventive actions.</li>

                                        <li className='text-18 text-rg'>Manage risks with structured workflows.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}