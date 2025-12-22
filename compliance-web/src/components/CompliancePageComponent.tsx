"use client"

import Link from "next/link";
import { Header } from "./Header";
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

        requestAnimationFrame(() => h1.classList.add("compliance-anim-active"));

        setTimeout(() => p.classList.add("compliance-anim-active"), 800);

    }, []);

    // Replace the first useEffect (the one handling compliance-matters-section) with this:
    useEffect(() => {
        const section = document.querySelector('.compliance-matters-section');
        if (!section) return;

        // Refs for title and paragraphs (like the reference)
        const titleRef = section.querySelector('h2.h3');
        const para1Ref = section.querySelector('.matters-para1');
        const para2Ref = section.querySelector('.matters-para2');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate title from left
                    if (titleRef) titleRef.classList.add('animate');

                    // Animate paragraphs from right with small delay
                    setTimeout(() => {
                        if (para1Ref) para1Ref.classList.add('animate');
                        if (para2Ref) para2Ref.classList.add('animate');
                    }, 100);

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        // Small delay to ensure DOM ready (like reference)
        const timeoutId = setTimeout(() => {
            observer.observe(section);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const section = document.querySelector('.compliance-matters-section');
        if (!section) return;

        const cardsContainer = section.querySelector('.surety-count-cards');
        if (!cardsContainer) return;

        const cards = cardsContainer.querySelectorAll('.card-1');
        const para2Ref = section.querySelector('.matters-para2'); // Second paragraph
        if (!para2Ref) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Wait for paragraph animation to complete (1s + 100ms delay = ~1.1s)
                    setTimeout(() => {
                        // Animate cards from right with 500ms stagger
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animate');
                            }, 500 * index); // 0ms, 500ms, 1000ms
                        });
                    }, 1200); // Wait 1.2s after paragraphs start animating

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const timeoutId = setTimeout(() => {
            observer.observe(section);
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);


useEffect(() => {
    const section = document.querySelector('.compliance-matters-cards');
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Force staggered animation with unique classes
                const cardLists = section.querySelectorAll('.compliance-matters-card-list');
                cardLists.forEach((cardList, index) => {
                    setTimeout(() => {
                        // Remove any existing animate classes first
                        cardList.classList.remove('animate-1', 'animate-2', 'animate-3');
                        // Add specific staggered class
                        cardList.classList.add(`animate-${index + 1}`);
                    }, index * 800); // 0s, 800ms, 1600ms
                });
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    });

    setTimeout(() => observer.observe(section), 100);
    return () => observer.disconnect();
}, []);



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