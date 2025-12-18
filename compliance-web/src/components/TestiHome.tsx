"use client"

import Image from "next/image";
import ClientaleSlider from "./ClientaleSlider";
import { motion } from 'framer-motion'

type TestimProps = {
    testim_title: string;
    testim_subTitle: string;
};

export default function TestimHome({ testim_title, testim_subTitle } : TestimProps) {

    // const TestiAnimation = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
    //     initialHead: { opacity: 0, x: -100},
    //     animateHead: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 }},
    // } : {
    //     initialHead: { opacity: 1, x: 0},
    //     animateHead: { opacity: 1, x: 0,},
    // }

    return(
        <>
            <section className="hm-clientale --bg-white overflow-hidden relative z-[2]">
                <div className="container">
                    <div className="clientale-wrapper">
                        <div className="trusted-leaders site-radius-10">
                            <div className="trst-lead-content">
                                <h2 className="h3">{testim_title}</h2>

                                <p className="text-20 text-grey">{testim_subTitle}</p>
                            </div>

                            <Image src='/images/homepage/clientale-quotes.webp' alt="quotes" width={588} height={410} priority={false} style={{ opacity: '0.2' }} draggable={false} className="testi-quotes"></Image>
                        </div>

                        <ClientaleSlider />
                    </div>
                </div>
            </section>
        </>
    );
}