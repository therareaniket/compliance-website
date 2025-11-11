"use client"

import Link from "next/link";
import ComplianceAnimations from "./ComplianceAnimations";
import { Header } from "./Header";
import { motion } from 'framer-motion'

type ComplianceProps = {
    complianceHeroTitle: string;
    complianceHeroSubtitle: string;
    titleComplianceMatters: string;
    subtitleComplianceMatters1: string;
    subtitleComplianceMatters2: string;
}

export default function ComplianceComponent({complianceHeroTitle, complianceHeroSubtitle, titleComplianceMatters, subtitleComplianceMatters1, subtitleComplianceMatters2}: ComplianceProps) {


    const complyAnimations = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
        initialHead: { opacity: 0, x: -100, },
        animateHead: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },

        initialPara: { opacity: 0, x: -100, },
        animatePara: { opacity: 1, x: 0, transition: { delay: 2, duration: 1 } },

        initialNumbs1: { opacity: 0, x: 100 },
        animateNumbs1: { opacity: 1, x: 0, transition: { delay: 3, duration: 1 } },

        initialNumbs2: { opacity: 0, x: 100 },
        animateNumbs2: { opacity: 1, x: 0, transition: { delay: 4, duration: 1 } },

        initialNumbs3: { opacity: 0, x: 100 },
        animateNumbs3: { opacity: 1, x: 0, transition: { delay: 5, duration: 1 } },

        initialCardListUp1: { opacity: 0, x: -100 },
        animateCardListUp1: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
    } : {
        initialHead: { opacity: 1, x: 0, },
        animateHead: { opacity: 1, x: 0,  },
        initialPara: { opacity: 1, x: 0, },
        animatePara: { opacity: 1, x: 0, },
        initialNumbs1: { opacity: 1, x: 0 },
        animateNumbs1: { opacity: 1, x: 0,  },
        initialNumbs2: { opacity: 1, x: 0 },
        animateNumbs2: { opacity: 1, x: 0,  },
        initialNumbs3: { opacity: 1, x: 0 },
        animateNumbs3: { opacity: 1, x: 0, },
        initialCardListUp1: { opacity: 1, x: 0 },
        animateCardListUp1: { opacity: 1, x: 0, },
    }


    return (
        <>
            <div className="compliancebody">
                <Header />

                <section className='com-hero'>
                    <video src="/images/compliance/Compliance.mp4" autoPlay loop muted className='compliance-vid'></video>
                    <div className="container">
                        <div className="banner-head">
                            <h1>{complianceHeroTitle}</h1>

                            <p className='text-20 text-rg text-grey'>{complianceHeroSubtitle}</p>
                        </div>
                    </div>
                </section>

                <section className='section compliance-matters-main --bg-white'>
                    <div className="container">
                        <div className='compliance-matters-section'>
                            <motion.h2 className='h3' variants={complyAnimations} initial='initialHead' whileInView='animateHead' viewport={{ once: true, amount: 0.6 }}>{titleComplianceMatters}</motion.h2>

                            <motion.div className='compliance-matters-text' variants={complyAnimations} initial='initialPara' whileInView='animatePara' viewport={{ once: true, amount: 0.6 }}>
                                <motion.p className='matters-para1 text-20 text-rg text-grey compli-para-anim'>{subtitleComplianceMatters1}</motion.p>

                                <motion.p className='matters-para2 text-20 text-rg text-grey compli-para-anim'>{subtitleComplianceMatters2}</motion.p>

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
                            <div className='compliance-matters-card-list'>
                                <motion.div className='hipaa-card site-radius-10' variants={complyAnimations} initial='initialCardListUp1' whileInView='animateCardListUp1' viewport={{ once: true, amount: 1 }}>
                                    <div className='compliace-card-heading-text'>
                                        <motion.h2 className='h3'>HIPAA</motion.h2>

                                        <motion.p className='text-20 text-rg text-grey card-list-text'>Ensure the protection of sensitive patient health information through administrative, physical, and technical safeguards. Compliance is mandatory for healthcare providers, insurers, and their business associates.</motion.p>
                                    </div>

                                    <Link href='/HIPPA' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </motion.div>

                                <motion.div className='fda_card site-radius-10' variants={complyAnimations} initial='initialCardListUp1' whileInView='animateCardListUp1' viewport={{ once: true, amount: 1 }}>
                                    <div className='compliace-card-heading-text'>
                                        <motion.h2 className='h3'>FDA 21 CFR Part 11</motion.h2>

                                        <motion.p className='text-20 text-rg text-grey card-list-text'>Regulates electronic records and electronic signatures in FDA-regulated industries, ensuring that they are trustworthy, reliable, and equivalent to paper records.</motion.p>
                                    </div>

                                    <Link href='/FDA21CFR' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </motion.div>
                            </div>

                            <div className='compliance-matters-card-list'>
                                <motion.div className='annex_11_card site-radius-10' variants={complyAnimations} initial='initialCardListUp1' whileInView='animateCardListUp1' viewport={{ once: true, amount: 1 }}>
                                    <div className='compliace-card-heading-text'>
                                        <motion.h2 className='h3'>EU Annex 11</motion.h2>

                                        <motion.p className='text-20 text-rg text-grey card-list-text'>Provides guidance on computer systems used in GMP-regulated environments within the EU. Ensures that automated systems maintain data integrity and regulatory compliance.</motion.p>
                                    </div>

                                    <Link href='/EUAnnex11' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </motion.div>

                                <motion.div className='gdpr_card site-radius-10' variants={complyAnimations} initial='initialCardListUp1' whileInView='animateCardListUp1' viewport={{ once: true, amount: 1 }}>
                                    <div className='compliace-card-heading-text'>
                                        <motion.h2 className='h3'  >GDPR</motion.h2>

                                        <motion.p className='text-20 text-rg text-grey card-list-text'>Protects personal data of EU residents. Organizations must ensure data privacy, transparency, and user rights in data collection, processing, and storage.</motion.p>
                                    </div>

                                    <Link href='/GDPR' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </motion.div>
                            </div>

                            <div className='compliance-matters-card-list'>
                                <motion.div className='gcp_card site-radius-10' variants={complyAnimations} initial='initialCardListUp1' whileInView='animateCardListUp1' viewport={{ once: true, amount: 1 }}>
                                    <div className='compliace-card-heading-text'>
                                        <motion.h2 className='h3'  >GCP</motion.h2>

                                        <motion.p className='text-20 text-rg text-grey card-list-text'  >International ethical and scientific quality standard for designing, conducting, recording, and reporting clinical trials. Protects trial subjects and ensures credible data.</motion.p>
                                    </div>

                                    <Link href='/GCP' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </motion.div>

                                <motion.div className='cdsco_card site-radius-10' variants={complyAnimations} initial='initialCardListUp1' whileInView='animateCardListUp1' viewport={{ once: true, amount: 1 }}>
                                    <div className='compliace-card-heading-text'>
                                        <motion.h2 className='h3'  >CDSCO</motion.h2>

                                        <motion.p className='text-20 text-rg text-grey card-list-text'  >Regulatory authority in India governing drug approval, clinical trials, and manufacturing compliance. Ensures safety, efficacy, and quality of pharmaceuticals.</motion.p>
                                    </div>

                                    <Link href='/CDSCO' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ComplianceAnimations />
        </>
    );
}