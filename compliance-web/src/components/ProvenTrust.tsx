"use client"

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type ProvenProps = {
    proven_title: string;
    proven_subTitle: string;
}

export default function ProvenHome({ proven_title, proven_subTitle }: ProvenProps) {
    const resultHeadRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const compliListRef = useRef<HTMLDivElement>(null);  // for supported-compli-lists
    const compliStatsRef = useRef<HTMLDivElement>(null); // for compli-stats


    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 setTimeout(() => {
    //                     if (titleRef.current) titleRef.current.classList.add('animate');
    //                     if (subtitleRef.current) subtitleRef.current.classList.add('animate');
    //                 }, 100);
    //                 observer.unobserve(entry.target);
    //             }
    //         });
    //     }, { threshold: 0.1 });

    //     // FIX: Add small delay to ensure DOM is ready
    //     const timeoutId = setTimeout(() => {
    //         if (resultHeadRef.current) {
    //             observer.observe(resultHeadRef.current);
    //         }
    //     }, 0);

    //     return () => {
    //         clearTimeout(timeoutId);
    //         if (observer) observer.disconnect();
    //     };
    // }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 1. Title (already working)
                    if (titleRef.current) titleRef.current.classList.add('animate');
                    setTimeout(() => {
                        if (subtitleRef.current) subtitleRef.current.classList.add('animate');
                    }, 200);

                    // 2. Lists from LEFT (0.5s delay)
                    setTimeout(() => {
                        if (compliListRef.current) compliListRef.current.classList.add('animate');
                    }, 500);

                    // 3. Stats from RIGHT (0.8s delay)
                    setTimeout(() => {
                        if (compliStatsRef.current) compliStatsRef.current.classList.add('animate');
                    }, 800);

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        setTimeout(() => {
            if (resultHeadRef.current) {
                observer.observe(resultHeadRef.current);
            }
        }, 100);

        return () => observer.disconnect();
    }, []);



    return (
        <>
            <section className="section hm-proven-result relative z-[2]">
                <div className="container">
                    <div className="result-head" ref={resultHeadRef}>
                        <h2 className="h3 slide-left" ref={titleRef} >{proven_title}</h2>

                        <p className="text-20 slide-right" ref={subtitleRef} >{proven_subTitle}</p>
                    </div>

                    <div className="compli-list-stats">
                        <div className="supported-compli-lists slide-left-list" ref={compliListRef}>
                            <div className="supp-compli-list site-radius-10">
                                <h3 className="h5">FDA 21 CFR Part 11</h3>

                                <p>Reliable records & eSignatures compliance.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10">
                                <h3 className="h5">GDPR</h3>

                                <p>Safeguards EU data privacy.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10">
                                <h3 className="h5">HIPAA</h3>

                                <p>Secure patient data & privacy.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10">
                                <h3 className="h5">GCP</h3>

                                <p>Defines quality standards for trials.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10">
                                <h3 className="h5">CDSCO</h3>

                                <p>Regulates drug and device approvals.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10">
                                <h3 className="h5">EU Annex 11</h3>

                                <p>Sets rules for system data integrity.</p>
                            </div>

                            {/*  EXTRA ELEMENTS FOR SCROLLER  */}

                            <div className="supp-compli-list site-radius-10 element-none">
                                <h3 className="h5">FDA 21 CFR Part 11</h3>

                                <p>Reliable records & eSignatures compliance.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10 element-none">
                                <h3 className="h5">GDPR</h3>

                                <p>Safeguards EU data privacy.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10 element-none">
                                <h3 className="h5">HIPAA</h3>

                                <p>Secure patient data & privacy.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10 element-none">
                                <h3 className="h5">GCP</h3>

                                <p>Defines quality standards for trials.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10 element-none">
                                <h3 className="h5">CDSCO</h3>

                                <p>Regulates drug and device approvals.</p>
                            </div>

                            <div className="supp-compli-list site-radius-10 element-none">
                                <h3 className="h5">EU Annex 11</h3>

                                <p>Sets rules for system data integrity.</p>
                            </div>
                        </div>

                        <div className="compli-stats slide-right-stats" ref={compliStatsRef}>
                            <div className="rotate-eclipse">
                                <div className="eclipse-wrapper">
                                    <Image src='/images/homepage/stat-eclipse-1.svg' alt='eclipse-1' width={432} height={506} className="rotating-eclipse-1"></Image>

                                    <Image src='/images/homepage/stat-eclipse-2.svg' alt='eclipse-2' width={378} height={574} className="rotating-eclipse-2"></Image>

                                    <Image src='/images/homepage/stat-eclipse-3.svg' alt='eclipse-3' width={344} height={522} className="rotating-eclipse-3"></Image>
                                </div>
                            </div>

                            <div className="floating-stats">
                                <div className="stats-nums site-radius-10 text-20 glob-org" >
                                    <span className="h1">500+</span>Global organizations
                                </div>

                                <div className="stats-nums site-radius-10 text-20 sec-doc">
                                    <span className="h1">1M+</span>Secure documents
                                </div>

                                <div className="stats-nums site-radius-10 text-20 fram-covd">
                                    <span className="h1">50+</span>Frameworks covered
                                </div>

                                <div className="stats-nums site-radius-10 text-20 aud-suc">
                                    <span className="h1">99%</span><span>Audit success</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
