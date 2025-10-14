"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";


export default function AboutAnimations() {

    const pathname = usePathname();

    useEffect(() => {
        gsap.registerPlugin(useGSAP, ScrollTrigger,SplitText);
        // ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        gsap.from (".abt-hero-head h1", {opacity: 0, x: -100, delay: 0.7, duration: 1,});
        gsap.from (".abt-hero-head p", {opacity: 0, x: -100, delay: 1.7, duration: 1,});

        // Our Mission
        gsap.from(".only-mis .h3, .only-mis p", {
            opacity: 0,
            x: -100,
            delay: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-mis",
                start: "top 60%",
            }
        })

        gsap.from(".our-mis-img", {
            opacity: 0,
            y: 100,
            delay: 2,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-mis",
                start: "top 60%",
            }
        })

        gsap.from(".mis-anim-1", {
            opacity: 0,
            x: 100,
            delay: 3,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-mis",
                start: "top 60%",
            }
        })

        gsap.from(".mis-anim-2", {
            opacity: 0,
            x: 100,
            delay: 4,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-mis",
                start: "top 60%",
            }
        })

        gsap.from(".only-vis .h3, .only-vis p", {
            opacity: 0,
            x: 100,
            delay: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-vis",
                start: "top 60%",
            }
        })

        gsap.from(".our-vis-img", {
            opacity: 0,
            y: 100,
            delay: 2,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-vis",
                start: "top 60%",
            }
        })

        gsap.from(".vis-anim-2", {
            opacity: 0,
            x: 100,
            delay: 3,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-vis",
                start: "top 60%",
            }
        })

        gsap.from(".vis-anim-1", {
            opacity: 0,
            x: 100,
            delay: 4,
            duration: 1,
            scrollTrigger: {
                trigger: ".abt-vis",
                start: "top 60%",
            }
        })
        // platform-info

        gsap.from(".platform-info .h4, .platform-info p", {
            opacity: 0,
            x: 100,
            duration: 1,
            scrollTrigger: {
                trigger: ".platform-info",
                start: "top 60%",
            }
        })

        gsap.from(".platform-lists", {
            opacity: 0,
            x: 100,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: ".platform-info",
                start: "top 60%",
            }
        })

        gsap.from(".platform-btn", {
            opacity: 0,
            scale: 0,
            duration: 1,
            delay: 2,
            scrollTrigger: {
                trigger: ".platform-info",
                start: "top 60%",
            }
        })

        gsap.from(".core-feature-heading .h4, .core-feature-para", {
            opacity: 0,
            y: -100,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: ".core-feature-section",
                start: "top 60%",
            }
        })
    }, []);


    return (
        <></>
    );

}










