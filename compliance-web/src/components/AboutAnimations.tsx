"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


export default function AboutAnimations() {


useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger,SplitText);
        // gsap.from (".abt-hero-head h1", {opacity: 0, x: -100, delay: 0.7, duration: 1,});
        // gsap.from (".abt-hero-head p", {opacity: 0, x: -100, delay: 1.7, duration: 1,});
    }, []);


    return (
        <></>
    );

}