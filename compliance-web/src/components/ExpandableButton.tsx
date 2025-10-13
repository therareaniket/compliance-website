"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef  } from 'react';

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
    const featureRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
          if (window.innerWidth < 575 && featureRef.current) {
            const rect = featureRef.current.getBoundingClientRect();
            
            if (rect.top <= 400) {
              setActive("features");
            } else {
              setActive("smrt");
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);   
    
    return (
        <section className="section hm-click-expand --bg-white">
            <div className="container">
                <div className="expnd-contnt-wrapper">
                    <div className={`click-box click-smrt-compliance site-radius-20 ${active === 'smrt' ? 'active' : 'smrt-not-active'}`} onMouseEnter={() => setActive('smrt')} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('smrt')} aria-pressed={active === 'smrt'} >
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

                    <div ref={featureRef} className={`click-box click-key-features site-radius-20 ${active === 'features' ? 'active' : 'key-not-active'}`} onMouseEnter={() => setActive('features')} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('features')} aria-pressed={active === 'features'} >
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
