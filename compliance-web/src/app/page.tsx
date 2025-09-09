
"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

    const [active, setActive] = useState<'smrt' | 'features'>('smrt');

  return (
    <div>
        <>
            <section className="hm-hero">
                <div className="container">
                    <div className="hm-hero-content">
                        <h1 className="text-center">Stay Ahead with<br />Smarter Clinical Trial Compliance</h1>

                        <p className="text-center text-20 text-grey">Monitor, manage, and maintain regulatory compliance with precision. Our intelligent portal empowers Sponsors, CROs, and Sites to stay audit-ready and ensure ethical, transparent trial conduct.</p>

                        <div className="hm-hero-btns">
                            <Link href='#' title="Get Started" className="btn-primary btn-padding text-md text-18 site-radius-10">Get Started</Link>

                            <Link href='#' title="Get a Quick Demo" className="btn-white btn-padding text-md text-18 site-radius-10">Get a Quick Demo</Link>  
                        </div>
                    </div>
                </div>
            </section>

            <section className="section hm-click-expand">
                <div className="container">
                    <div className="expnd-contnt-wrapper">
                        <div className={`click-box click-smrt-compliance site-radius-20 ${active === 'smrt' ? 'active' : 'smrt-not-active'}`}
                            onClick={() => setActive('smrt')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('smrt')}
                            aria-pressed={active === 'smrt'}>
                                
                                <div className="box-content">
                                    <div className="cont-head">
                                        <h2 className="h3">Smarter Compliance for Clinical Trials</h2>

                                        <p className="text-20">We simplify how Sponsors, CROs, and Sites manage complex regulations—reducing risk, improving efficiency, and ensuring audit readiness throughout the clinical trial lifecycle.</p>
                                    </div>

                                    <ul className="text-20 smart-usp-lists">
                                        <li><span className="icon-check_circle"></span> Trusted by businesses across industries</li>
                                        <li><span className="icon-check_circle"></span> Simplifies regulatory complexities</li>
                                        <li><span className="icon-check_circle"></span> Ensures audit readiness with confidence</li>
                                        <li><span className="icon-check_circle"></span> Focused on security and accuracy</li>
                                    </ul>
                                </div>

                                <Image src='/images/homepage/smarter-compliance.webp' alt="smarter-compliance" width={613} height={688} priority={false} className="smrt-img"></Image>

                        </div>

                        <div className={`click-box click-key-features site-radius-20 ${active === 'features' ? 'active' : 'key-not-active'}`}
                            onClick={() => setActive('features')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('features')}
                            aria-pressed={active === 'features'}>

                                <div className="box-content">
                                    <div className="cont-head">
                                        <h2 className="h3">Key Features That Drive Clinical Trial Compliance Success</h2>

                                        <p className="text-20">Our platform simplifies regulatory compliance for Sponsors, CROs, and Sites with automated checks and real-time dashboards—making audits and inspections faster, easier, and more efficient.</p>
                                    </div>

                                    <ul className="text-20 key-usp-lists">
                                        <li><span className="icon-check_circle"></span> Automated multi-framework scans</li>
                                        <li><span className="icon-check_circle"></span> Real-time dashboards & analytics</li>
                                        <li><span className="icon-check_circle"></span> Audit-ready reports in clicks</li>
                                        <li><span className="icon-check_circle"></span> Continuous standard updates</li>
                                    </ul>
                                </div>

                                <Image src='/images/homepage/key-features.webp' alt="key-features" width={613} height={688} priority={false} className="key-img"></Image>

                        </div>
                      </div>
                  </div>
            </section>

            <section className="hm-compli-steps">
                <div className="container">
                    <div className="steps-head">
                        <h2 className="h3">Seamless Compliance in Four Simple Steps</h2>

                        <p className="text-20 text-grey">Our platform integrates with your systems, monitors compliance in real-time, flags potential risks, and generates audit-ready reports—making clinical trial compliance effortless and transparent. </p>
                    </div>

                    <div className="steps-path-view">
                        <Image src='images/homepage/steps-dotted-path.svg' alt="steps-path" width={1293} height={425} priority={false} className="steps-path-img"></Image>

                        <Image src='/images/homepage/stp-1-connect.webp' alt="step-1-connect" width={528} height={226} priority={false} className="step-1-img"></Image>
                        <Image src='/images/homepage/stp-2-monitor.webp' alt="step-2-monitor" width={424} height={344} priority={false} className="step-2-img"></Image>
                        <Image src='/images/homepage/stp-3-act.webp' alt="step-3-act" width={454} height={228} priority={false} className="step-3-img"></Image>
                        <Image src='/images/homepage/stp-4-report.webp' alt="step-4-report" width={497} height={276} priority={false} className="step-4-img"></Image>
                        
                    </div>
                </div>
            </section>

            <section className="section hm-why-us">
                <div className="container">
                    <div className="why-us-wrapper">
                        <div className="why-us-content">
                            <div className="why-us-head">
                                <h2 className="h3">Why Leading Clinical Trial Teams Trust Our Compliance Platform</h2>

                                <p className="text-20 text-grey">We offer broad regulatory coverage, real-time monitoring, and smart automation—making compliance simple, secure, and audit-ready for Sponsors, CROs, and Sites.</p>
                            </div>
                        </div>

                        <div className="why-us-cards"></div>
                    </div>
                </div>
            </section>
        </>
    </div>
  );
}