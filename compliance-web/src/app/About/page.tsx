"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function AboutUs() {
    return (
        <>
            <section className='abt-hero'>
                <div className="container">
                    <div className="hero-wrapper">
                        <div className="hero-head">
                            <h1>Redefining <span>Compliance</span> for a Smarter Future</h1>

                            <p className='text-rg text-20'>We simplify regulatory complexities with solutions built on security and efficiency. Our platform keeps organizations audit-ready,
                                builds trust, and drives long-term success.</p>

                            <div className='hero-head-button' >
                                <button className='text-18 text-md' type="button">Connect with us</button>
                            </div>
                        </div>

                        <div className="hero-card">
                            <Image src='/images/aboutUs/hero-card.webp' alt='hero-card' width={590} height={500} priority={false}></Image>
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

                            <Image src='/images/aboutUs/mission-heading.webp' alt='mission-card' width={307} height={290} priority={false}></Image>
                        </div>

                        <div className="heading-cards">
                            <div className='cards'>
                                <div className='card-row'>
                                    <div className='card-lists'>
                                        <Image className='mission-svg' src='/images/aboutUs/rebase.svg' alt='rebase' width={33} height={37} priority={false} ></Image>

                                        <p className='h6'>Simplify Workflows</p>

                                        <p className='text-rg'>Streamline tasks with automation that saves time, reduces errors.</p>
                                    </div>

                                    <div className='card-lists'>
                                        <Image className='mission-svg' src='/images/aboutUs/process.svg' alt='process' width={40} height={40} priority={false} ></Image>

                                        <p className='h6'>Strengthen Processes</p>

                                        <p className='text-rg'>Ensure accuracy and reliability across all compliance activities.</p>
                                    </div>
                                </div>

                                <div className='card-row'>
                                    <div className='card-lists'>
                                        <Image className='mission-svg' src='/images/aboutUs/approval-delegation.svg' alt='approval-delegation' width={33} height={37} priority={false} ></Image>
                                        
                                        <p className='h6'>Empower Organizations</p>
                                        
                                        <p className='text-rg'>Help businesses stay audit-ready and confident at all times.</p>
                                    </div>

                                    <div className='card-lists'>
                                        <Image className='mission-svg' src='/images/aboutUs/clock-arrow-down.svg' alt='clock-arrow-down' width={40} height={40} priority={false} ></Image>
                                        
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
                            <div className='vision-card-row'>
                                <div className="vision-card">
                                    <Image className='vision-img' src='/images/aboutUs/work-history.svg' alt='work-history' width={35} height={35} priority={false} ></Image>
                                   
                                    <p className='h6'>Seamless Experience</p>
                                   
                                    <p className='text-rg'>Deliver compliance processes that are Smooth, user-friendly.</p>
                                </div>

                                <div className="vision-card">
                                    <Image className='vision-img' src='/images/aboutUs/article.svg' alt='article' width={30} height={30} priority={false} ></Image>
                                  
                                    <p className='h6'>Proactive Readiness</p>
                                   
                                    <p className='text-rg'>Anticipate regulatory needs before they become challenges.</p>
                                </div>
                            </div>

                            <div className='vision-card-row'>
                                <div className="vision-card">
                                    <Image className='vision-img' src='/images/aboutUs/arming-countdown.svg' alt='arming-countdown' width={26} height={33} priority={false} ></Image>
                                   
                                    <p className='h6'>Trust & Transparency</p>
                                   
                                    <p className='text-rg'>Build confidence with secure, efficient workflows.</p>
                                </div>    

                                <div className="vision-card">
                                    <Image className='vision-img' src='/images/aboutUs/emoji-objects.svg' alt='emoji-objects' width={24} height={33} priority={false} ></Image>
                                   
                                    <p className='h6'>Future Innovation</p>
                                  
                                    <p className='text-rg'>Continuously evolve compliance through modern technology.</p>
                                </div>
                            </div>
                        </div>

                        <div className="vision-heading">
                            <h2 className='h3'>Our Vision is a future where readiness is seamless and active.</h2>

                            <p>Our mission is to streamline and strengthen compliance with automation and actionable insights.</p>

                            <Image src='/images/aboutUs/vision-heading.webp' alt='vision-heading' width={453} height={289}></Image>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="our-platforms">
                        <div className="platform-images">
                            <div className='platform-card-left'>
                                <Image src='/images/aboutUs/platform-card-left.webp' alt='platform-image-left' width={226} height={220} priority={false}></Image>
                            </div>

                            <div className='platform-card-right'>
                                <Image src='/images/aboutUs/platform-card-right.webp' alt='platform-image-right' width={609} height={570} priority={false}></Image>
                            </div>
                        </div>

                        <div className="our-platform-text">
                            <h2 className='h4'>Our platform supports frameworks to help you stay audit-ready.</h2>

                            <p className='text-20 text-rg'>Our platform centralizes compliance with global frameworks, keeping you audit-ready.</p>

                            <div className="platform-tools">
                                <div>
                                    <ul>
                                        <li><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>HIPAA</p></li>

                                        <li><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>GDPR</p></li>

                                        <li><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>21 CFR Part 11</p></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>CDSCO</p></li>

                                        <li><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>WHO-GMP</p></li>

                                        <li><Image src='/images/aboutUs/check-circle.svg' alt='checked-circle' width={25} height={25} priority={false}></Image><p>EMA</p></li>
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
                            <div className="featurecard document-manage-card">
                                <div className='feature-frame'>
                                    <Image src='/images/aboutUs/document-management-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} ></Image>

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

                            <div className="featurecard audit-card">
                                <div className='feature-frame audit-frame'>
                                    <Image src='/images/aboutUs/audit-trails-icon.svg' alt='audit-trails-icon' width={60} height={60} priority={false} ></Image>

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

                            <div className="featurecard training-sop-card">
                                <div className='feature-frame training-frame'>
                                    <Image src='/images/aboutUs/training-sop-icon.svg' alt='training-sop-icon' width={60} height={60} priority={false} ></Image>

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

                            <div className="featurecard risk-management-card">
                                <div className='feature-frame risk-frame'>
                                    <Image src='/images/aboutUs/risk-management-icon.svg' alt='risk-management-icon' width={60} height={60} priority={false} ></Image>

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
        </>
    )
}