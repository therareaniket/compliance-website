"use client"

import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion'

type stepsProps = {
    steps_title: string;
    steps_subTitle: string;
}

export default function StepsHome({ steps_title, steps_subTitle }: stepsProps) {
    const resultHeadRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    
        useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        if (titleRef.current) titleRef.current.classList.add('animate');
                        if (subtitleRef.current) subtitleRef.current.classList.add('animate');
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // FIX: Add small delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            if (resultHeadRef.current) {
                observer.observe(resultHeadRef.current);
            }
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            if (observer) observer.disconnect();
        };
    }, []);

    return(
        <>
            <section className="hm-compli-steps relative z-[2]">
                <div className="container">
                    <div className="steps-head"  ref={resultHeadRef}>
                        <h2 className="h3 slide-left" ref={titleRef} >{steps_title}</h2>

                        <p className="text-20 text-grey slide-right" ref={subtitleRef}>{steps_subTitle}</p>
                    </div>

                    <div className="steps-video-wrapper site-radius-20 ">
                        <video src="/images/homepage/homepage-section-3.mp4" autoPlay muted loop controls controlsList="nodownload noplaybackrate" disablePictureInPicture contextMenu="return false" width='3840' height='2160' className="steps-vid site-radius-20"></video>
                    </div>
                </div>
                <span className="white-box"></span>
            </section>
        </>
    );
}