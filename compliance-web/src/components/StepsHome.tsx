"use client"

import { motion } from 'framer-motion'

type stepsProps = {
    steps_title: string;
    steps_subTitle: string;
}

export default function StepsHome({ steps_title, steps_subTitle }: stepsProps) {

    const stepsAnimations = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
        initialHeader: { opacity: 0, x: -100},
        animateHeader: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 }},

        initialPara: { opacity: 0, x: 100},
        animatePara: { opacity: 1, x: 0, transition: { duration: 1, delay: 2 }},
    } : {
        initialHeader: { opacity: 1, x: 0},
        animateHeader: { opacity: 1, x: 0,},

        initialPara: { opacity: 1, x: 0},
        animatePara: { opacity: 1, x: 0, },
    }

    return(
        <>
            <section className="hm-compli-steps">
                <div className="container">
                    <div className="steps-head">
                        <motion.h2 className="h3" variants={stepsAnimations} initial='initialHeader' whileInView='animateHeader' viewport={{ once: true, amount: 0.6 }}>{steps_title}</motion.h2>

                        <motion.p className="text-20 text-grey" variants={stepsAnimations} initial='initialPara' whileInView='animatePara' viewport={{ once: true, amount: 0.5 }}>{steps_subTitle}</motion.p>
                    </div>

                    <div className="steps-video-wrapper site-radius-20 ">
                        <video src="/images/homepage/final-steps-video.mp4" autoPlay muted loop controls controlsList="nodownload noplaybackrate" disablePictureInPicture contextMenu="return false" width='3840' height='2160' className="steps-vid site-radius-20"></video>
                    </div>
                </div>
                <span className="white-box"></span>
            </section>
        </>
    );
}