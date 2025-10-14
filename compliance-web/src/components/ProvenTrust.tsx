"use client"

import { delay, motion, scale } from 'framer-motion'
import Image from 'next/image';

type ProvenProps = {
    proven_title: string;
    proven_subTitle: string;
}

export default function ProvenHome( { proven_title, proven_subTitle } : ProvenProps) {

    const provenAnimation = {
        initialHead: { opacity: 0, y: -100},
        animateHead: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 }},

        initialSubHead: { opacity: 0, y: -100},
        animateSubHead: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2, }},

        initialList: { opacity: 0, x: -100 },
        animateList: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.7 } },

        initialList2: { opacity: 0, x: 100 },
        animateList2: { opacity: 1, x: 0, transition: { duration: 1, delay: 2 } },

    }

    return(
        <>
            <section className="section hm-proven-result">
                <div className="container">
                    <div className="result-head">
                        <motion.h2 className="h3" variants={provenAnimation} initial='initialHead' whileInView='animateHead' viewport={{ once: true, amount: 0.6 }}>{proven_title}</motion.h2>

                        <motion.p className="text-20" variants={provenAnimation} initial='initialSubHead' whileInView='animateSubHead' viewport={{ once: true, amount: 0.6 }}>{proven_subTitle}</motion.p>
                    </div>

                    <div className="compli-list-stats">
                        <motion.div className="supported-compli-lists" variants={provenAnimation} initial='initialList' whileInView='animateList' viewport={{ once: true, amount: 0.3 }}>
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
                        </motion.div>

                        <div className="compli-stats">
                            <div className="rotate-eclipse">
                                <div className="eclipse-wrapper">
                                    <Image src='/images/homepage/stat-eclipse-1.svg' alt='eclipse-1' width={432} height={506} className="rotating-eclipse-1"></Image>

                                    <Image src='/images/homepage/stat-eclipse-2.svg' alt='eclipse-2' width={378} height={574} className="rotating-eclipse-2"></Image>

                                    <Image src='/images/homepage/stat-eclipse-3.svg' alt='eclipse-3' width={344} height={522} className="rotating-eclipse-3"></Image>
                                </div>
                            </div>

                            <motion.div className="floating-stats" variants={provenAnimation} initial='initialList2' whileInView='animateList2' viewport={{ once: true, amount: 0.6 }}>
                                <motion.div className="stats-nums site-radius-10 text-20 glob-org" >
                                    <span className="h1">500+</span>Global organizations
                                </motion.div>

                                <motion.div className="stats-nums site-radius-10 text-20 sec-doc">
                                    <span className="h1">1M+</span>Secure documents
                                </motion.div>

                                <motion.div className="stats-nums site-radius-10 text-20 fram-covd">
                                    <span className="h1">50+</span>Frameworks covered
                                </motion.div>

                                <motion.div className="stats-nums site-radius-10 text-20 aud-suc">
                                    <span className="h1">99%</span><span>Audit success</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}