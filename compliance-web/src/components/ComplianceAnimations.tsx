"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";


export default function ComplianceAnimations() {

    const pathname = usePathname();

    // === Animate of Whole using GSAP ===
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const ctx = gsap.context(() => {
            gsap.from(".com-hero .banner-head h1, .com-hero .banner-head p", {
                opacity: 0,
                x: -100,
                delay: 0.7,
                duration: 1,
                stagger: 1,
            });

            gsap.from(".compliance-matters-section .h3", {
                opacity: 0,
                y: -100,
                duration: 1,
                scrollTrigger: {
                    trigger: ".compliance-matters-main",
                    start: "top 60%",
                    invalidateOnRefresh: true,
                },
            });

            gsap.from(".compli-para-anim", {
                opacity: 0,
                y: -100,
                duration: 1,
                delay: 1,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".compliance-matters-main",
                    start: "top 60%",
                    invalidateOnRefresh: true,
                },
            });

            gsap.from(".surety-count-cards .card-1", {
                opacity: 0,
                x: 100,
                duration: 1,
                delay: 3,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".compliance-matters-main",
                    start: "top 60%",
                    invalidateOnRefresh: true,
                },
            });
        });

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        });

        return () => {
            ctx.revert();
            ScrollTrigger.killAll();
            gsap.globalTimeline.clear();
        };
    }, [pathname]);
    

    return (
        <></>
    );
}