"use client"

import Link from "next/link";
// import ComplianceAnimations from "./ComplianceAnimations";
import { Header } from "./Header";
// import { motion } from 'framer-motion'
import { useEffect } from "react";

type ComplianceProps = {
    complianceHeroTitle: string;
    complianceHeroSubtitle: string;
    titleComplianceMatters: string;
    subtitleComplianceMatters1: string;
    subtitleComplianceMatters2: string;
}

export default function ComplianceComponent({ complianceHeroTitle, complianceHeroSubtitle, titleComplianceMatters, subtitleComplianceMatters1, subtitleComplianceMatters2 }: ComplianceProps) {
    useEffect(() => {
        const h1 = document.querySelector(".banner-head h1.compliance-anim");
        const p = document.querySelector(".banner-head p.compliance-anim");

        if (!h1 || !p) return;

        // Animate H1
        requestAnimationFrame(() => h1.classList.add("compliance-anim-active"));

        // Animate P after H1
        setTimeout(() => p.classList.add("compliance-anim-active"), 800);

    }, []);

    useEffect(() => {
        const section = document.querySelector('.compliance-matters-section');
        if (!section) return;

        // Animate h2 and paragraphs
        const observer1 = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const h2 = section.querySelector('h2.h3');
                        h2?.classList.add('animate-from-left');

                        const paras = section.querySelectorAll('.compli-para-anim');
                        paras.forEach((p, index) => {
                            setTimeout(() => p.classList.add('animate-from-right'), 700 * (index + 1));
                        });

                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer1.observe(section);

        // Animate cards after second paragraph fully visible
        const secondPara = section.querySelectorAll('.compli-para-anim')[1];
        if (!secondPara) return;

        const observer2 = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = section.querySelectorAll('.surety-count-cards .card-1');
                        cards.forEach((card, index) => {
                            setTimeout(() => card.classList.add('animate-from-bottom'), 1300 * (index + 1));
                        });
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1.0 } // second paragraph fully visible
        );
        observer2.observe(secondPara);
    }, []);

    useEffect(() => {
        const lists = document.querySelectorAll('.compliance-card-anim');

        if (!lists.length) return;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(lists).indexOf(entry.target);

                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, index * 600); // stagger

                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -80px 0px'
            }
        );

        lists.forEach(list => observer.observe(list));
    }, []);


    // const complyAnimations = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
    //     initialHead: { opacity: 0, x: -100, },
    //     animateHead: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },

    //     initialPara: { opacity: 0, x: -100, },
    //     animatePara: { opacity: 1, x: 0, transition: { delay: 2, duration: 1 } },

    //     initialNumbs1: { opacity: 0, x: 100 },
    //     animateNumbs1: { opacity: 1, x: 0, transition: { delay: 3, duration: 1 } },

    //     initialNumbs2: { opacity: 0, x: 100 },
    //     animateNumbs2: { opacity: 1, x: 0, transition: { delay: 4, duration: 1 } },

    //     initialNumbs3: { opacity: 0, x: 100 },
    //     animateNumbs3: { opacity: 1, x: 0, transition: { delay: 5, duration: 1 } },

    //     initialCardListUp1: { opacity: 0, x: -20 },
    //     animateCardListUp1: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
    // } : {
    //     initialHead: { opacity: 1, x: 0, },
    //     animateHead: { opacity: 1, x: 0,  },
    //     initialPara: { opacity: 1, x: 0, },
    //     animatePara: { opacity: 1, x: 0, },
    //     initialNumbs1: { opacity: 1, x: 0 },
    //     animateNumbs1: { opacity: 1, x: 0,  },
    //     initialNumbs2: { opacity: 1, x: 0 },
    //     animateNumbs2: { opacity: 1, x: 0,  },
    //     initialNumbs3: { opacity: 1, x: 0 },
    //     animateNumbs3: { opacity: 1, x: 0, },
    //     initialCardListUp1: { opacity: 1, x: 0 },
    //     animateCardListUp1: { opacity: 1, x: 0, },
    // }


    return (
        <>
            <div className="compliancebody">
                <Header />

                <section className='com-hero' >
                    <video src="/images/compliance/Compliance.mp4" autoPlay loop muted className='compliance-vid'></video>
                    <div className="container">
                        <div className="banner-head">
                            <div className="banner-head-inner">
                                <h1 className="compliance-anim compliance-delay-1">{complianceHeroTitle}</h1>

                                <p className='text-20 text-rg text-grey compliance-anim compliance-delay-2'>{complianceHeroSubtitle}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section compliance-matters-main --bg-white'>
                    <div className="container">
                        <div className='compliance-matters-section'>
                            <h2 className='h3'>{titleComplianceMatters}</h2>

                            <div className='compliance-matters-text'>
                                <p className='matters-para1 text-20 text-rg text-grey compli-para-anim'>{subtitleComplianceMatters1}</p>

                                <p className='matters-para2 text-20 text-rg text-grey compli-para-anim'>{subtitleComplianceMatters2}</p>

                                <div className='surety-count-cards'>
                                    <div className="card-1">
                                        <h2>50+</h2>
                                        <p className='text-20 text-rg text-grey'>Regulatory frameworks</p>
                                    </div>

                                    <div className="card-1">
                                        <h2>99%</h2>
                                        <p className='text-20 text-rg text-grey'>Data integrity assurance</p>
                                    </div>

                                    <div className="card-1" >
                                        <h2>500+</h2>
                                        <p className='text-20 text-rg text-grey'>Successful inspections</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section --bg-white'>
                    <div className="container">
                        <div className="compliance-matters-cards">
                            <div className='compliance-matters-card-list compliance-card-anim'>
                                    <div className='hipaa-card site-radius-10' >
                                        <div className='compliace-card-heading-text'>
                                            <h2 className='h3'>HIPAA</h2>

                                            <p className='text-20 text-rg text-grey card-list-text'>Ensure the protection of sensitive patient health information through administrative, physical, and technical safeguards. Compliance is mandatory for healthcare providers, insurers, and their business associates.</p>
                                        </div>

                                        <Link href='/HIPPA' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                    </div>

                                    <div className='fda_card site-radius-10' >
                                        <div className='compliace-card-heading-text'>
                                            <h2 className='h3'>FDA 21 CFR Part 11</h2>

                                            <p className='text-20 text-rg text-grey card-list-text'>Regulates electronic records and electronic signatures in FDA-regulated industries, ensuring that they are trustworthy, reliable, and equivalent to paper records.</p>
                                        </div>

                                        <Link href='/FDA21CFR' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                    </div>
                            </div>

                            <div className='compliance-matters-card-list compliance-card-anim'>
                                <div className='annex_11_card site-radius-10'>
                                    <div className='compliace-card-heading-text'>
                                        <h2 className='h3'>EU Annex 11</h2>

                                        <p className='text-20 text-rg text-grey card-list-text'>Provides guidance on computer systems used in GMP-regulated environments within the EU. Ensures that automated systems maintain data integrity and regulatory compliance.</p>
                                    </div>

                                    <Link href='/EUAnnex11' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </div>

                                <div className='gdpr_card site-radius-10'>
                                    <div className='compliace-card-heading-text'>
                                        <h2 className='h3'>GDPR</h2>

                                        <p className='text-20 text-rg text-grey card-list-text'>Protects personal data of EU residents. Organizations must ensure data privacy, transparency, and user rights in data collection, processing, and storage.</p>
                                    </div>

                                    <Link href='/GDPR' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </div>
                            </div>

                            <div className='compliance-matters-card-list compliance-card-anim'>
                                <div className='gcp_card site-radius-10'>
                                    <div className='compliace-card-heading-text'>
                                        <h2 className='h3'  >GCP</h2>

                                        <p className='text-20 text-rg text-grey card-list-text'  >International ethical and scientific quality standard for designing, conducting, recording, and reporting clinical trials. Protects trial subjects and ensures credible data.</p>
                                    </div>

                                    <Link href='/GCP' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </div>

                                <div className='cdsco_card site-radius-10'>
                                    <div className='compliace-card-heading-text'>
                                        <h2 className='h3'  >CDSCO</h2>

                                        <p className='text-20 text-rg text-grey card-list-text'  >Regulatory authority in India governing drug approval, clinical trials, and manufacturing compliance. Ensures safety, efficacy, and quality of pharmaceuticals.</p>
                                    </div>

                                    <Link href='/CDSCO' title="learn-more" className="btn-primary btn-padding text-md text-18 site-radius-10">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* <ComplianceAnimations /> */}
        </>
    );
}