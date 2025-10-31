"use client"

import Link from "next/link";
import { Header } from "./Header";
import EnquiryForm from "./EnquiryForm";
import { motion } from "framer-motion"

type ContactProps = {
    contactHeroTitle: string;
    contactHeroSubtitle: string;
    
    formTitle: string;
    formSubtitle: string;

    phoneNumber: string;
    email: string;
    location: string;
}

export default function ContactComponent({contactHeroTitle, contactHeroSubtitle, formTitle, formSubtitle, phoneNumber, email, location} : ContactProps) {

    const ContactAnimations = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
        initialBox1: { opacity: 0, y: -100 },
        animateBox1: { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } },

        initialBox2: { opacity: 0, y: -100 },
        animateBox2: { opacity: 1, y: 0, transition: { delay: 2, duration: 1 } },

        initialBox3: { opacity: 0, y: -100 },
        animateBox3: { opacity: 1, y: 0, transition: { delay: 3, duration: 1 } },
    } : {
        initialBox1: { opacity: 1, y: 0 },
        animateBox1: { opacity: 1, y: 0, },

        initialBox2: { opacity: 1, y: 0 },
        animateBox2: { opacity: 1, y: 0, },

        initialBox3: { opacity: 1, y: 0 },
        animateBox3: { opacity: 1, y: 0, },
    }

    return (
        <>
            <div className="contactbody">
            <Header />

            <section className='contact-hero'>
                <video src="/images/contactus/Contact-us.mp4" autoPlay loop muted className='contact-vid'></video>
                <div className="container">
                        <div className="banner-head contact-banner-head">
                            <h1>{contactHeroTitle}</h1>

                            <p className='text-20 text-grey'>{contactHeroSubtitle}</p>
                        </div>
                </div>
            </section>

            <section className="section contct-form --bg-white">
                <div className="container">
                    <div className="contct-head">
                        <div className="head-text">
                            <h2 className='h3'>{formTitle}</h2>

                            <p className='text-20 text-grey'>{formSubtitle}</p>
                        </div>
                    </div>

                    <div className="form-container flex justify-between">
                        <div className="form-selection">
                            <div className="form-fields">
                                <EnquiryForm />
                            </div>
                        </div>

                        <div className="contct-info text-center">
                            <motion.div className="info-block phone-info site-radius-10" variants={ContactAnimations} initial='initialBox1' whileInView='animateBox1' viewport={{ once: true, amount: 0.9 }}>
                                <div className="info-txt">
                                    <span className='icon-add_call h5'></span>

                                    <p className='text-md text-20'><span className='text-grey text-18'>Phone Number</span>{phoneNumber}</p>
                                </div>
                            </motion.div>

                            <motion.div className="info-block mail-info site-radius-10" variants={ContactAnimations} initial='initialBox2' whileInView='animateBox2' viewport={{ once: true, amount: 0.9 }}>
                                <div className="info-txt">
                                    <span className='icon-email h4'></span>

                                    <p className='text-md text-20'><span className='text-grey text-18'>Email Address</span>{email}</p>
                                </div>
                            </motion.div>

                            <motion.div className="info-block location-info site-radius-10" variants={ContactAnimations} initial='initialBox3' whileInView='animateBox3' viewport={{ once: true, amount: 0.9 }}>
                                <div className="info-txt">
                                    <span className='icon-location h4'></span>

                                    <p className='text-md text-20'><span className='text-grey text-18'>Location</span>{location}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>                    
                </div>
            </section>

            <section className="section hm-cta">
                <div className="container">
                    <h2 className="h3 text-center">Stay Ahead of Regulations with Effortless Compliance</h2>

                    <div className="cta-links text-center">
                        <Link href="#" title="Get Started" className="btn-padding btn-primary text-md text-18 site-radius-10">Get Started</Link>

                        <Link href="#" title="Schedual a Demo" className="btn-padding btn-white text-md text-18 site-radius-10">Schedual a Demo</Link>

                        <Link href="#" title="Contact Us" className="btn-padding btn-white text-md text-18 site-radius-10">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}