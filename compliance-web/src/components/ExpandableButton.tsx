"use client";

import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
    purpleTitle: string;
    purpleSubtitle: string;
    purpleListItem1: string;
    purpleListItem2: string;
    purpleListItem3: string;
    purpleListItem4: string;

    greenTitle: string;
    greenSubtitle: string;
    greenListItem1: string;
    greenListItem2: string;
    greenListItem3: string;
    greenListItem4: string;
};

export default function ExtendButtons({
    purpleTitle,
    purpleSubtitle,
    purpleListItem1,
    purpleListItem2,
    purpleListItem3,
    purpleListItem4,
    greenTitle,
    greenSubtitle,
    greenListItem1,
    greenListItem2,
    greenListItem3,
    greenListItem4, }: Props) {

    const [active, setActive] = useState<'smrt' | 'features'>('smrt');
    
    return (
        <section className="section hm-click-expand">
            <div className="container">
                <div className="expnd-contnt-wrapper">
                    <div className={`click-box click-smrt-compliance site-radius-20 ${active === 'smrt' ? 'active' : 'smrt-not-active'}`} onClick={() => setActive('smrt')} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('smrt')} aria-pressed={active === 'smrt'} >
                        <div className="box-content">
                            <div className="cont-head">
                                <h2 className="h3">{purpleTitle}</h2>
                                <p className="text-20">{purpleSubtitle}</p>
                            </div>

                            <ul className="text-20 smart-usp-lists">
                                <li><span className="icon-check_circle" /> {purpleListItem1}</li>
                                <li><span className="icon-check_circle" /> {purpleListItem2}</li>
                                <li><span className="icon-check_circle" /> {purpleListItem3}</li>
                                <li><span className="icon-check_circle" /> {purpleListItem4}</li>
                            </ul>
                        </div>

                        <Image src="/images/homepage/smarter-compliance.webp" alt="smarter-compliance" width={613} height={688} priority={false} className="smrt-img" />
                    </div>

                    <div className={`click-box click-key-features site-radius-20 ${active === 'features' ? 'active' : 'key-not-active'}`} onClick={() => setActive('features')} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('features')} aria-pressed={active === 'features'} >
                        <div className="box-content">
                            <div className="cont-head">
                                <h2 className="h3">{greenTitle}</h2>
                                <p className="text-20">{greenSubtitle}</p>
                            </div>

                            <ul className="text-20 key-usp-lists">
                                <li><span className="icon-check_circle" /> {greenListItem1}</li>
                                <li><span className="icon-check_circle" /> {greenListItem2}</li>
                                <li><span className="icon-check_circle" /> {greenListItem3}</li>
                                <li><span className="icon-check_circle" /> {greenListItem4}</li>
                            </ul>
                        </div>

                        <Image src="/images/homepage/key-features.webp" alt="key-features" width={613} height={688} priority={false} className="key-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}



{/* BACKUP CODE
    
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
</section> */}