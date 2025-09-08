"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutUs() {
    return (
        <>
            <section className='abt-hero'>
                <div className="container">
                    <div className="abt-hero-wrapper">
                        <div className="abt-hero-head">
                            <h1>Redefining <span>Compliance</span> for a Smarter Future</h1>

                            <p className='text-rg text-20'>We simplify regulatory complexities with solutions built on security and efficiency. Our platform keeps organizations audit-ready,
                                builds trust, and drives long-term success.</p>

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
                            <h2 className='h3'>Our Mission is to simplify and streamline compliance workflows.</h2>

                            <p className='text-20 text-rg'>Our mission is to streamline and strengthen compliance with automation and actionable insights.</p>

                            <Image src='/images/aboutUs/mission-heading.webp' alt='mission-heading' width={307} height={289} priority={false}></Image>
                        </div>

                        <div className="mis-vis-card-lists">
                            <div className="mis-vis-cards">
                                <div className="mis-vis-card">
                                    <Image src='/images/aboutUs/rebase-icon.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Simplify Workflows</p>

                                    <p>Streamline tasks with automation that saves time, reduces errors.</p>
                                </div>

                                <div className="mis-vis-card">
                                    <Image src='/images/aboutUs/process-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Strengthen Processes</p>

                                    <p>Ensure accuracy and reliability across all compliance activities.</p>
                                </div>
                            </div>

                            <div className="mis-vis-cards">
                                <div className="mis-vis-card">
                                    <Image src='/images/aboutUs/approval-delegation.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Empower Organizations</p>

                                    <p>Help businesses stay audit-ready and confident at all times.</p>
                                </div>

                                <div className="mis-vis-card">
                                    <Image src='/images/aboutUs/clock-arrow-down.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Reduce Manual Effort</p>

                                    <p>Replace repetitive work with technology-driven solutions.</p>
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
                            <h2 className='h3'>Our Vision is a future where readiness is seamless and active.</h2>

                            <p className='text-20 text-rg'>Our mission is to streamline and strengthen compliance with automation and actionable insights.</p>

                            <Image src='/images/aboutUs/vision-heading.webp' alt='mission-heading' width={453} height={289} priority={false}></Image>
                        </div>

                        <div className="mis-vis-card-lists">
                            <div className="mis-vis-cards">
                                <div className="mis-vis-card vis-card">
                                    <Image src='/images/aboutUs/work-history.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Seamless Experience</p>

                                    <p>Deliver compliance processes that are Smooth, user-friendly.</p>
                                </div>

                                <div className="mis-vis-card vis-card">
                                    <Image src='/images/aboutUs/proactive-readiness-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Proactive Readiness</p>

                                    <p>Anticipate regulatory needs before they become challenges.</p>
                                </div>
                            </div>

                            <div className="mis-vis-cards">
                                <div className="mis-vis-card vis-card">
                                    <Image src='/images/aboutUs/arming-countdown.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Trust & Transparency</p>

                                    <p>Build confidence with secure, efficient workflows.</p>
                                </div>

                                <div className="mis-vis-card vis-card">
                                    <Image src='/images/aboutUs/emoji-objects.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                    <p className='mis-vis-para text-md text-20'>Future Innovation</p>

                                    <p>Continuously evolve compliance through modern technology.</p>
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

                            <p className='text-20 text-rg'>Our platform centralizes compliance with global frameworks, keeping you audit-ready.</p>

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

            <section>
                <div className="container">
                    <div className='core-feature-section'>
                        <div className="core-feature-heading">
                            <h2 className='h4'>Core Features That Power Compliance</h2>

                            <p className='text-20 text-rg'>Discover the essential tools that simplify compliance from document control and training to real-time alerts and reporting designed to keep your organization efficient, secure, and audit-ready.</p>
                        </div>

                        <div className='feature-cards'>
                            <div className="featurecard background-blue-tint">
                                <div className='feature-frame'>
                                    <Image src='/images/aboutUs/document-management-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} ></Image>

                                    <p className='feature-card-head text-20 text-md'>Document Management</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Upload and store compliance documents securely.</li>

                                        <li className='text-18 text-rg'>Supports version control for accuracy.</li>

                                        <li className='text-18 text-rg'>Enables e-signatures for approvals.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="featurecard background-green-tint">
                                <div className='feature-frame'>
                                    <Image src='/images/aboutUs/audit-trails-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} ></Image>

                                    <p className='feature-card-head text-20 text-md'>Audit Trails</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Automatically logs all user actions.</li>

                                        <li className='text-18 text-rg'>Maintains transparency and accountability.</li>

                                        <li className='text-18 text-rg'>Essential for regulatory inspections.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="featurecard background-yellow-tint">
                                <div className='feature-frame'>
                                    <Image src='/images/aboutUs/training-sop-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} ></Image>

                                    <p className='feature-card-head text-20 text-md'>Training & SOPs</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Assign training modules and SOPs to users.</li>

                                        <li className='text-18 text-rg'>Track completion and progress in real time.</li>

                                        <li className='text-18 text-rg'>Certify compliance readiness of staff.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="featurecard background-purple-tint">
                                <div className='feature-frame'>
                                    <Image src='/images/aboutUs/risk-management-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} ></Image>

                                    <p className='feature-card-head text-20 text-md'>CAPA & Risk Management</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Track deviations and incidents effectively.</li>

                                        <li className='text-18 text-rg'>Implement corrective and preventive actions.</li>

                                        <li className='text-18 text-rg'>Manage risks with structured workflows.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="featurecard background-blue-tint">
                                <div className='feature-frame'>
                                    <Image src='/images/aboutUs/document-management-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} ></Image>

                                    <p className='feature-card-head text-20 text-md'>Document Management</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Upload and store compliance documents securely.</li>

                                        <li className='text-18 text-rg'>Supports version control for accuracy.</li>

                                        <li className='text-18 text-rg'>Enables e-signatures for approvals.</li>
                                    </ul>
                                </div>
                            </div> */}
{/* 
                            <div className="featurecard background-blue-tint">
                                <div className='feature-frame'>
                                    <Image src='/images/aboutUs/document-management-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} ></Image>

                                    <p className='feature-card-head text-20 text-md'>Document Management</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Upload and store compliance documents securely.</li>

                                        <li className='text-18 text-rg'>Supports version control for accuracy.</li>

                                        <li className='text-18 text-rg'>Enables e-signatures for approvals.</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}