"use client"

import { Header } from '@/components/Header';
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import ComplianceAnimations from '@/components/ComplianceAnimations';

export default function ComplianceListing() {

    const complyAnimations = {
        initialHead: { opacity: 0, y: -100, },
        animateHead: { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } },


        initialNumbs1: { opacity: 0, x: 100 },
        animateNumbs1: { opacity: 1, x: 0, transition: { delay: 2, duration: 1 } },

        initialNumbs2: { opacity: 0, x: 100 },
        animateNumbs2: { opacity: 1, x: 0, transition: { delay: 2.5, duration: 1 } },

        initialNumbs3: { opacity: 0, x: 100 },
        animateNumbs3: { opacity: 1, x: 0, transition: { delay: 3, duration: 1 } },

        initialCardListUp: { opacity: 0, y: -100 },
        animateCardListUp: { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } },
    }

    return(
        <>
        <div className="compliancebody">
            <Header />

            <section className='com-hero'>
                <video src="/images/compliance/Compliance.mp4" autoPlay loop muted className='compliance-vid'></video>
                <div className="container">
                        <div className="banner-head">
                            <h1>Trusted Compliance Management Insights</h1>

                            <p className='text-20 text-rg text-grey'>Empowering organizations with clear, reliable data to ensure regulatory alignment and operational integrity.</p>
                        </div>
                </div>
            </section>

            <section className='section compliance-matters-main --bg-white'>
                <div className="container">
                    <div className='compliance-matters-section'>
                        <motion.h2 className='h3' variants={complyAnimations} initial='initialHead' whileInView='animateHead' viewport={{ once: true, amount: 0.6 }}>Why Compliance Matters</motion.h2>

                        <motion.div className='compliance-matters-text' variants={complyAnimations} initial='initialHead' whileInView='animateHead' viewport={{ once: true, amount: 0.6 }}>
                            <motion.p className='matters-para1 text-20 text-rg text-grey compli-para-anim'>Compliance in clinical trials and pharmaceuticals means following regulatory standards, ethical guidelines, and legal frameworks that safeguard patient safety, ensure product quality, and protect data integrity. It forms the foundation of trust between researchers, regulators, and patients worldwide.</motion.p>

                            <motion.p className='matters-para2 text-20 text-rg text-grey compli-para-anim'>Adhering to compliance standards ensures clinical trials are ethical, drug manufacturing is safe, and regulatory approvals are smooth. Non-compliance, however, can result in delays, financial penalties, or even halts in research and production.</motion.p>

                            <div className='surety-count-cards'>
                                <motion.div className="card-1" variants={complyAnimations} initial='initialNumbs1' whileInView='animateNumbs1' viewport={{ once: true, amount: 0.6 }}>
                                    <h2>50+</h2>
                                    <p className='text-20 text-rg text-grey'>Regulatory frameworks</p>
                                </motion.div>

                                <motion.div className="card-1" variants={complyAnimations} initial='initialNumbs2' whileInView='animateNumbs2' viewport={{ once: true, amount: 0.6 }}>
                                    <h2>99%</h2>
                                    <p className='text-20 text-rg text-grey'>Data integrity assurance</p>
                                </motion.div>

                                <motion.div className="card-1" variants={complyAnimations} initial='initialNumbs3' whileInView='animateNumbs3' viewport={{ once: true, amount: 0.6 }}>
                                    <h2>500+</h2>
                                    <p className='text-20 text-rg text-grey'>Successful inspections</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className='section --bg-white'>
                <div className="container">
                    <div className="compliance-matters-cards">
                        <motion.div className='compliance-matters-card-list' variants={complyAnimations} initial='initialCardListUp' whileInView='animateCardListUp' viewport={{ once: true, amount: 0.9 }}>
                            <div className='hipaa-card site-radius-10'>
                                <div className='compliace-card-heading-text'>
                                    <h2 className='h3'>HIPAA</h2>

                                    <p className='text-20 text-rg text-grey card-list-text'>Ensure the protection of sensitive patient health information through administrative, physical, and technical safeguards. Compliance is mandatory for healthcare providers, insurers, and their business associates.</p>
                                </div>

                                <Link href='/HIPPA' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                            </div>

                            <div className='fda_card site-radius-10'>
                                <div className='compliace-card-heading-text'>
                                    <h2 className='h3'>FDA 21 CFR Part 11</h2>

                                    <p className='text-20 text-rg text-grey card-list-text'>Regulates electronic records and electronic signatures in FDA-regulated industries, ensuring that they are trustworthy, reliable, and equivalent to paper records.</p>
                                </div>

                                <Link href='#' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                            </div>
                        </motion.div>

                        <motion.div className='compliance-matters-card-list' variants={complyAnimations} initial='initialCardListUp' whileInView='animateCardListUp' viewport={{ once: true, amount: 0.9 }}>
                            <div className='annex_11_card site-radius-10'>
                                <div className='compliace-card-heading-text'>
                                    <h2 className='h3'>EU Annex 11</h2>

                                    <p className='text-20 text-rg text-grey card-list-text'>Provides guidance on computer systems used in GMP-regulated environments within the EU. Ensures that automated systems maintain data integrity and regulatory compliance.</p>
                                </div>

                                <Link href='#' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                            </div>
                            <div className='gdpr_card site-radius-10'>
                                <div className='compliace-card-heading-text'>
                                    <h2 className='h3'>GDPR</h2>

                                    <p className='text-20 text-rg text-grey card-list-text'>Protects personal data of EU residents. Organizations must ensure data privacy, transparency, and user rights in data collection, processing, and storage.</p>
                                </div>

                                <Link href='#' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                            </div>
                        </motion.div>

                        <motion.div className='compliance-matters-card-list' variants={complyAnimations} initial='initialCardListUp' whileInView='animateCardListUp' viewport={{ once: true, amount: 0.9 }}>
                            <div className='gcp_card site-radius-10'>
                                <div className='compliace-card-heading-text'>
                                    <h2 className='h3'>GCP</h2>

                                    <p className='text-20 text-rg text-grey card-list-text'>International ethical and scientific quality standard for designing, conducting, recording, and reporting clinical trials. Protects trial subjects and ensures credible data.</p>
                                </div>

                                <Link href='#' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                            </div>
                            <div className='cdsco_card site-radius-10'>
                                <div className='compliace-card-heading-text'>
                                    <h2 className='h3'>CDSCO</h2>

                                    <p className='text-20 text-rg text-grey card-list-text'>Regulatory authority in India governing drug approval, clinical trials, and manufacturing compliance. Ensures safety, efficacy, and quality of pharmaceuticals.</p>
                                </div>

                                <Link href='#' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                            </div>
                        </motion.div>
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

        <ComplianceAnimations />
        </>
    );
}
