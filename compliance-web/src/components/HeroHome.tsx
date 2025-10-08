"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

type HeroProps = {
    heroTitle: string;
    heroSubtitle: string;
    heroCta?: { url: string; title: string } | null;
    heroCta2?: { url: string; title: string } | null;
};

export default function HeroSection({ heroTitle, heroSubtitle, heroCta, heroCta2, }: HeroProps) {
    // === Refs for animation ===
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);
    const buttonsRef = useRef<HTMLDivElement | null>(null);

    // === Split last word of title ===
    const plainText = heroTitle.replace(/<[^>]+>/g, "");
    const words = plainText.trim().split(" ");
    const lastWord = words.pop();
    const firstPart = words.join(" ");

    // === Animate of Whole using GSAP ===
    useEffect(() => {
        // Hero HOMEPAGE
        gsap.from (titleRef.current,{ opacity: 0, x: -300, delay: 1, duration: 1, });
        gsap.from (subtitleRef.current,{ opacity: 0, x: -300, delay: 2, duration: 1, });
        gsap.from (buttonsRef.current,{ opacity: 0, scale: 0, delay: 2.5, duration: 1, });
        gsap.from (".left-hero-home", {opacity: 0, x: -100, delay: 3.2, duration: 1,});
        gsap.from (".right-hero-home", {opacity: 0, x: 100, delay: 3.7, duration: 1,});
        // gsap.from ("", {})

        // Steps HOMEPAGE
        gsap.from(".steps-head .h3", { opacity: 0, y: -100, delay: 0.5, duration: 1,
            scrollTrigger: {
                trigger: ".hm-compli-steps",
                start: "top 60%",
            },
        });
        gsap.from(".steps-head p", { opacity: 0, y: -100, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".hm-compli-steps",
                start: "top 60%",
            },
        });

        // Why-Us HOMEPAGE
        gsap.from(".why-us-head .h3", { opacity: 0, y: -100, delay: 0.5, duration: 1,
            scrollTrigger: {
                trigger: ".why-us-content-wrapper",
                start: "top 60%",
            },
        });

        gsap.from(".why-us-head p", { opacity: 0, y: -50, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".why-us-content-wrapper",
                start: "top 60%",
            },
        });

        // Proven-Results HOMEPAGE
        gsap.from(".result-head .h3", { opacity: 0, y: -100, delay: 0.5, duration: 0.6,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });

        gsap.from(".supported-compli-lists", { opacity: 0, x: -100, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });

        gsap.from(".result-head p", { opacity: 0, y: -100, delay: 1.5, duration: 0.6,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });

        gsap.from(".floating-stats .stats-nums", { opacity: 0, scale: 0, delay: 2, duration: 0.5, stagger: 1,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });



    }, []);
    
    return (
        <section className="hm-hero">
            <div className="hm-hero-bg-setup">
                <video src="/images/homepage/hero-home-video.mp4" loop autoPlay muted className="hero-video"></video>

                <Image src="/images/homepage/left-image-hero-home.webp" alt="left-image-hero" width={863} height={314} priority className="left-hero-home" />

                <Image src="/images/homepage/right-image-hero-home.webp" alt="right-image-hero" width={704} height={350} priority className="right-hero-home" />
            </div>

            <div className="container">
                <div className="hm-hero-content">
                    <h1 className="text-center" ref={titleRef}>
                        {firstPart + " "}  
                        <span className="h1-animation text-green-500">{lastWord}
                            <Image src="/images/homepage/scanning-line-upgrad.svg" alt="scanning-line" width={26} height={60} priority={true} className="hero-scanning-line"></Image>
                        </span>
                    </h1>

                    <p className="text-center text-20" ref={subtitleRef}> {heroSubtitle} </p>

                    <div className="hm-hero-btns" ref={buttonsRef}>
                        {heroCta?.url && (
                            <Link href={heroCta.url} title={heroCta.title} className="btn-primary btn-padding text-md text-18 site-radius-10" >
                                {heroCta.title}
                            </Link>
                        )}
                        {heroCta2?.url && (
                            <Link href={heroCta2.url} title={heroCta2.title} className="btn-white btn-padding text-md text-18 site-radius-10" >
                                {heroCta2.title}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}









// OLD CODE BACKUP
// <section className="hm-hero">
//     {/* <Image src='/images/homepage/hero-background.webp' alt="home-hero" width={1920} height={870} priority={true} draggable={false}></Image> */}
// 
//     <div className="hm-hero-bg-setup">
//         <video src="/images/homepage/hero-home-video.mp4" loop autoPlay muted className="hero-video"></video>
// 
//         <Image src='/images/homepage/left-image-hero-home.webp' alt="left-image-hero" width={863} height={314} priority={true} className="left-hero-home"></Image>
// 
//         <Image src='/images/homepage/right-image-hero-home.webp' alt="right-image-hero" width={704} height={350} priority={true} className="right-hero-home"></Image>
//     </div>
// 
//     <div className="container">
//         <div className="hm-hero-content">
//             {/* <h1 className="text-center" dangerouslySetInnerHTML={{ __html: home.heroTitle }}></h1> */}
//             <h1 className="text-center">
//                 {firstPart}{" "} <span className="h1-animation">{lastWord}</span>
//             </h1>
// 
//             <p className="text-center text-20">{home.heroSubtitle}</p>
// 
//             <div className="hm-hero-btns">
//                 {home.heroCta?.url ? (
//                     <Link href={home.heroCta.url as string} title={home.heroCta.title} className="btn-primary btn-padding text-md text-18 site-radius-10">
//                         {home.heroCta.title}
//                     </Link>
//                 ) : null}
// 
//                 {home.heroCta2?.url ? (
//                     <Link href={home.heroCta2.url as string} title={home.heroCta2.title} className="btn-white btn-padding text-md text-18 site-radius-10">
//                         {home.heroCta2.title}
//                     </Link>
//                 ) : null}
//             </div>
//         </div>
//     </div>
// 
// </section>