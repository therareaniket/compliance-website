"use client"

import Image from "next/image";
import { Header } from "./Header";
// import { motion, } from 'framer-motion';
import AboutUsSwiperComponents from "./SwiperComponent";
import Link from "next/link";
// import AboutAnimations from "./AboutAnimations";
import { useEffect, useRef } from "react";



type MissionVisionPoints = {
    point1Title: string;
    point1Subtitle: string;
    point2Title: string;
    point2Subtitle: string;
    point3Title: string;
    point3Subtitle: string;
    point4Title: string;
    point4Subtitle: string;
};

type AboutProps = {
    aboutHeroTitle: string;
    aboutHeroSubtitle: string;

    missionSubtitle: string;
    missionPoints: MissionVisionPoints;

    visionSubtitle: string;
    visionPoints: MissionVisionPoints;

    platformSupportTitle: string;
    platformSupportSubtitle: string;
}

// const textAnimations = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
//     initialLeft: {
//         opacity: 0,
//         x: -200,
//     },

//     initialRight: {
//         opacity: 0,
//         x: 200,
//     },

//     animateLeft: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 1,
//         },
//     },

//     animateRight: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             delay: 1,
//             duration: 1,
//             staggerChildren: 0.3,
//             delayChildren: 0.5,
//         },
//     },

//     initialBtn: {
//         opacity: 0,
//         scale: 0,
//     },

//     animateBtn: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: 1,
//         },
//     },
// } : {
//     // Static values for screens < 1200px
//     initialLeft: { opacity: 1, x: 0 },
//     initialRight: { opacity: 1, x: 0 },
//     animateLeft: { opacity: 1, x: 0 },
//     animateRight: { opacity: 1, x: 0 },
//     initialBtn: { opacity: 1, scale: 1 },
//     animateBtn: { opacity: 1, scale: 1 },
// };

export default function AboutComponent({ aboutHeroTitle, aboutHeroSubtitle, missionSubtitle, missionPoints, visionSubtitle, visionPoints, platformSupportTitle, platformSupportSubtitle }: AboutProps) {

    const missionRef = useRef<HTMLDivElement | null>(null);
    const missionCardsRef = useRef<HTMLDivElement | null>(null);
    const visionRef = useRef<HTMLDivElement | null>(null);
    const visionCardsRef = useRef<HTMLDivElement | null>(null);
    const platformRef = useRef<HTMLDivElement | null>(null);



    useEffect(() => {
        const h1 = document.querySelector(".abt-hero h1.compliance-anim");
        const p = document.querySelector(".abt-hero p.compliance-anim");

        if (!h1 || !p) return;

        // Animate H1
        requestAnimationFrame(() => h1.classList.add("compliance-anim-active"));

        // Animate P after H1
        setTimeout(() => p.classList.add("compliance-anim-active"), 800);

    }, []);

    useEffect(() => {
        const cardsEl = missionCardsRef.current;
        if (!cardsEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger animate only the 4 cards
                    const allCards = cardsEl.querySelectorAll('.mis-vis-card'); 
                    allCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-card');
                        }, index * 200); // 200ms stagger between cards
                    });

                    observer.unobserve(cardsEl); // Animate once
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(cardsEl);
        return () => observer.disconnect();
    }, []);

useEffect(() => {
    const cardsEl = visionCardsRef.current;
    if (!cardsEl) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                // Stagger animate only the 4 cards
                const allCards = cardsEl.querySelectorAll('.mis-vis-card'); 
                allCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-card');
                    }, index * 200); // 200ms stagger between cards
                });
                
                observer.unobserve(cardsEl); // Animate once
            }
        },
        { threshold: 0.3 }
    );

    observer.observe(cardsEl);
    return () => observer.disconnect();
}, []);


    useEffect(() => {
        const el = platformRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.classList.add("animate"); // triggers CSS animation
                observer.unobserve(el); // animate once
            }
        }, { threshold: 0.3 });

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="aboutbody">
                <Header />

                <section className='abt-hero'>
                    <video src="/images/aboutUs/About-us.mp4" autoPlay loop muted className='about-hero-vid'></video>

                    <div className="container">
                        <div className="abt-hero-head all-banner-head">
                            {/* <h1>Redefining Compliance for a Smarter Future</h1> */}
                            <h1 className="compliance-anim compliance-delay-1">{aboutHeroTitle}</h1>

                            <p className='text-rg text-20 abt-hero-para compliance-anim compliance-delay-2'>{aboutHeroSubtitle}</p>
                        </div>
                    </div>
                </section>

                <section className='section abt-mis --bg-white'>
                    <div className="container">
                        <div className="mis-vis-section">
                            <div className="mis-vis-heading only-mis" ref={missionRef} >
                                <h2 className='h3'>Our Mission</h2>

                                <p className='text-20 text-rg'>{missionSubtitle}</p>

                                <Image src='/images/aboutUs/mission-heading.webp' alt='mission-heading' width={692} height={295} priority={false} className='our-mis-img'></Image>
                            </div>

                            <div className="mis-vis-card-lists card-list-mision" ref={missionCardsRef}>
                                <div className="mis-vis-cards">
                                    <div className="mis-vis-card primary-box-shadow mis-anim-1">
                                        <Image src='/images/aboutUs/rebase-icon.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{missionPoints.point1Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg'>{missionPoints.point1Subtitle}</p>
                                    </div>

                                    <div className="mis-vis-card primary-box-shadow mis-anim-2">
                                        <Image src='/images/aboutUs/process-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{missionPoints.point2Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg'>{missionPoints.point2Subtitle}</p>
                                    </div>
                                </div>

                                <div className="mis-vis-cards">
                                    <div className="mis-vis-card primary-box-shadow removed-margin-btm mis-anim-1">
                                        <Image src='/images/aboutUs/approval-delegation.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{missionPoints.point3Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg'>{missionPoints.point3Subtitle}</p>
                                    </div>

                                    <div className="mis-vis-card primary-box-shadow removed-margin-btm mis-anim-2">
                                        <Image src='/images/aboutUs/clock-arrow-down.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{missionPoints.point4Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg'>{missionPoints.point4Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='abt-vis --bg-white'>
                    <div className="container">
                        <div className="mis-vis-section vis-section">
                            <div className="mis-vis-heading vis-heading only-vis" ref={visionRef}>
                                <h2 className='h3'>Our Vision</h2>

                                <p className='text-20 text-rg'>{visionSubtitle}</p>

                                <Image src='/images/aboutUs/vision-heading.webp' alt='mission-heading' width={692} height={295} priority={false} className='our-vis-img'></Image>
                            </div>

                            <div className="mis-vis-card-lists" ref={visionCardsRef}>
                                <div className="mis-vis-cards vis-cards">
                                    <div className="mis-vis-card greenish-box-shadow vis-card vis-anim-2">
                                        <Image src='/images/aboutUs/work-history.svg' alt='rebase-icon' width={33} height={37} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{visionPoints.point1Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg'>{visionPoints.point1Subtitle}</p>
                                    </div>

                                    <div className="mis-vis-card greenish-box-shadow vis-card vis-anim-1">
                                        <Image src='/images/aboutUs/proactive-readiness-icon.svg' alt='rebase-icon' width={33} height={30} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{visionPoints.point2Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg'>{visionPoints.point2Subtitle}</p>
                                    </div>
                                </div>

                                <div className="mis-vis-cards vis-cards">
                                    <div className="mis-vis-card greenish-box-shadow vis-card removed-margin-btm vis-anim-2">
                                        <Image src='/images/aboutUs/arming-countdown.svg' alt='rebase-icon' width={35} height={33} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{visionPoints.point3Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg'>{visionPoints.point3Subtitle}</p>
                                    </div>

                                    <div className="mis-vis-card greenish-box-shadow vis-card removed-margin-btm vis-anim-1">
                                        <Image src='/images/aboutUs/emoji-objects.svg' alt='rebase-icon' width={36} height={26} priority={false}></Image>

                                        <p className='mis-vis-para text-md text-20'>{visionPoints.point4Title}</p>

                                        <p className='mis-vis-detail-para text-grey test-18 text-rg '>{visionPoints.point4Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="abt-platforms section --bg-white">
                    <div className="container">
                        <div className="platform-wrapper site-radius-10" >
                            <div className="left-gif-platform">
                                {/* <Image src='/images/aboutUs/platform-side-img.webp' alt='platform-side-img' width={452} height={440} priority={false} className='platform-side-image site-radius-10'></Image> */}

                                <Image src='/images/aboutUs/platform-support.webp' alt='our-platform' width={770} height={549} priority={false} className='platform-showcase-img site-radius-10'></Image>
                            </div>

                            <div className="platform-info" ref={platformRef}>
                                <h2 className='h4'>{platformSupportTitle}</h2>

                                <p className='text-20 text-grey'>{platformSupportSubtitle}</p>

                                <div className="platform-lists text-20">
                                    <ul>
                                        <li><span className='icon-check_circle'></span> HIPAA</li>
                                        <li><span className='icon-check_circle'></span> GDPR</li>
                                        <li><span className='icon-check_circle'></span> 21 CFR Part 11</li>
                                    </ul>

                                    <ul>
                                        <li><span className='icon-check_circle'></span>CDSCO</li>
                                        <li><span className='icon-check_circle'></span>WHO-GMP</li>
                                        <li><span className='icon-check_circle'></span>EMA</li>
                                    </ul>
                                </div>

                                <Link href='/Compliance' title='Learn More' className='btn-padding site-radius-10 btn-primary platform-btn'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <AboutUsSwiperComponents />
            </div>

            {/* <AboutAnimations /> */}
        </>
    );
}