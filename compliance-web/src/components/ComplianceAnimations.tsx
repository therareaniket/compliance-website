"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";

export default function ComplianceAnimations() {

    const pathname = usePathname();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger,SplitText);
        // gsap.from (".com-hero .banner-head h1, .com-hero .banner-head p", {opacity: 0, x: -100, delay: 0.7, duration: 1, stagger:1});
    }, []);

    return (
        <></>
    );
}