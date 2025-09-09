
"use client"

import { useState } from "react";
import Link from "next/link";

export default function Home() {

    const [active, setActive] = useState<'smrt' | 'features'>('smrt');

  return (
    <div>
        <>
            <section className="hm-hero">
                <div className="container">
                    <div className="hm-hero-content">
                        <h1 className="text-center">Stay Ahead with<br />Smarter <span>Compliance</span> Monitoring</h1>

                        <p className="text-center text-20 text-grey">Stay ahead of audits with automated compliance scanning that detects gaps across HIPAA, GDPR, 21 CFR Part 11, and more. Our platform centralizes reporting, reduces manual effort, and shortens audit preparation.</p>

                        <div className="hm-hero-btns">
                            <Link href='#' title="Get Started" className="btn-primary btn-padding text-md text-18 site-radius-10">Get Started</Link>

                            <Link href='#' title="Get a Quick Demo" className="btn-white btn-padding text-md text-18 site-radius-10">Get a Quick Demo</Link>  
                        </div>
                    </div>
                </div>
            </section>

            <section className="hm-click-expand">
                <div className="container">
                    <div className="expnd-contnt-wrapper">
                        <div className={`click-box click-smrt-compliance ${active === 'smrt' ? 'active' : ''}`}
                            onClick={() => setActive('smrt')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('smrt')}
                            aria-pressed={active === 'smrt'}>

                        </div>

                        <div className={`click-box click-key-features ${active === 'features' ? 'active' : ''}`}
                            onClick={() => setActive('features')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('features')}
                            aria-pressed={active === 'features'}>

                        </div>
                      </div>
                  </div>
            </section>
        </>
    </div>
  );
}
