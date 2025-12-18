"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";


export default function UserAccessAnimation() {

    const pathname = usePathname();

    // === Animate of Whole using GSAP ===
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger,SplitText);
        // gsap.from (".user-access-hero-head h1, .user-access-hero-head p", {opacity: 0, x: -100, delay: 0.7, duration: 1, stagger:1});
    }, []);
    

    return (
        <></>
    );
}