"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { delay, motion } from 'framer-motion'

const textTopAnimation = {
    initialTop: {
        opacity: 0,
        y: -100,
    },

    animateTop: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1,
        },
    },
}

export default function AboutUsSwiperComponents() {
    return (
        <section className="--bg-white">
            <div className="container">
                <div className="core-feature-section">
                    <motion.div className="core-feature-heading" variants={textTopAnimation} initial='initialTop' whileInView='animateTop' viewport={{ once: true, amount: 0.6 }}>
                        <motion.h2 className="h4">Core Features That Power Clinical Trial Compliance</motion.h2>

                        <motion.p className="core-feature-para text-20 text-rg">
                            Explore essential tools—from document control and training to real-time alerts and reporting—designed to keep your trial operations efficient, secure, and audit-ready.
                        </motion.p>
                    </motion.div>

                    {/* Swiper wrapper */}
                    <Swiper
                        className="feature-cards"
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        // loopAdditionalSlides={5} 
                        pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2 }}
                        autoplay={{ delay: 1000 }}
                        slidesPerView= "auto"
                        centeredSlides={true}
                        slidesPerGroup={1}
                        breakpoints={{
                            0    :  { slidesPerView: 1, centeredSlides: true, slidesPerGroup: 1,    },
                            359  :  { slidesPerView: 1.05, centeredSlides: true, slidesPerGroup: 1, },
                            375  :  { slidesPerView: 1.10, centeredSlides: true, slidesPerGroup: 1, },
                            480  :  { slidesPerView: 1.9, centeredSlides: false, slidesPerGroup: 1,   },
                            680  :  { slidesPerView: 1.9, centeredSlides: false, slidesPerGroup: 1, },
                            991  :  { slidesPerView: 2.4, centeredSlides: false, slidesPerGroup: 1, },
                            1023 :  { slidesPerView: 3.2, centeredSlides: false, slidesPerGroup: 1, },
                            1359 :  { slidesPerView: 3.5, centeredSlides: false, slidesPerGroup: 1, },
                            1440 :  { slidesPerView: 4, centeredSlides: false, slidesPerGroup: 1,   },
                        }}

                        speed={5000}>

                        <SwiperSlide>
                            <div className="featurecard bg-blue">
                                <div className="feature-frame">
                                    <Image src="/images/aboutUs/document-management-icon.svg" alt="document-management-icon" width={60} height={60} className="feat-frame-slider-img"/>
                                    <p className="feature-card-head text-20 text-md">  Document Management </p>
                                </div>
                                <div className="feature-lists">
                                    <ul>
                                        <li className="text-18 text-rg">Upload and store compliance documents securely.</li>

                                        <li className="text-18 text-rg">Supports version control for accuracy.</li>

                                        <li className="text-18 text-rg">Enables e-signatures for approvals.</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="featurecard bg-green">
                                <div className='feature-frame border-green'>
                                    <Image src='/images/aboutUs/audit-trails-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} className="feat-frame-slider-img"></Image>

                                    <p className='feature-card-head text-20 text-md'>Audit Trails</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Automatically logs all user actions.</li>

                                        <li className='text-18 text-rg'>Maintains transparency and accountability.</li>

                                        <li className='text-18 text-rg'>Essential for regulatory inspections.</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="featurecard bg-yellow">
                                <div className='feature-frame border-yellow'>
                                    <Image src='/images/aboutUs/training-sop-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} className="feat-frame-slider-img"></Image>

                                    <p className='feature-card-head text-20 text-md'>Training & SOPs</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Assign training modules and SOPs to users.</li>

                                        <li className='text-18 text-rg'>Track completion and progress in real time.</li>

                                        <li className='text-18 text-rg'>Certify compliance readiness of staff.</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="featurecard bg-purple">
                                <div className='feature-frame border-purple'>
                                    <Image src='/images/aboutUs/risk-management-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} className="feat-frame-slider-img"></Image>

                                    <p className='feature-card-head text-20 text-md'>CAPA & Risk Management</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Track deviations and incidents effectively.</li>

                                        <li className='text-18 text-rg'>Implement corrective and preventive actions.</li>

                                        <li className='text-18 text-rg'>Manage risks with structured workflows.</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="featurecard bg-red">
                                <div className='feature-frame border-red'>
                                    <Image src='/images/aboutUs/regulatory-alert-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} className="feat-frame-slider-img"></Image>

                                    <p className='feature-card-head text-20 text-md'>Regulatory Alerts</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Real-time updates on new changed regulations.</li>

                                        <li className='text-18 text-rg'>Automatic notifications for critical deadlines.</li>

                                        <li className='text-18 text-rg'>Helps stay proactive and compliant.</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="featurecard bg-purplish">
                                <div className='feature-frame border-purplish'>
                                    <Image src='/images/aboutUs/dashboard-report-icon.svg' alt='document-management-icon' width={60} height={60} priority={false} className="feat-frame-slider-img"></Image>

                                    <p className='feature-card-head text-20 text-md'>Dashboards & Reports</p>
                                </div>

                                <div className="feature-lists">
                                    <ul>
                                        <li className='text-18 text-rg'>Visualize compliance status with clear metrics.</li>

                                        <li className='text-18 text-rg'>Generate audit-ready reports instantly.</li>

                                        <li className='text-18 text-rg'>Provides management insights at a glance.</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}


// breakpoints={{
//     0    :  { slidesPerView: 1, centeredSlides: true, slidesPerGroup: 1,    },
//     359  :  { slidesPerView: 1, centeredSlides: true, slidesPerGroup: 1, },
//     375  :  { slidesPerView: 1, centeredSlides: true, slidesPerGroup: 1, },
//     480  :  { slidesPerView: 1, centeredSlides: false, slidesPerGroup: 1, },
//     680  :  { slidesPerView: 1, centeredSlides: false, slidesPerGroup: 1, },
//     991  :  { slidesPerView: 2, centeredSlides: false, slidesPerGroup: 1, },
//     1024 :  { slidesPerView: 3, centeredSlides: false, slidesPerGroup: 1, },
//     1359 :  { slidesPerView: 3, centeredSlides: false, slidesPerGroup: 1, },
//     1440 :  { slidesPerView: 4, centeredSlides: false, slidesPerGroup: 1,   },
// }}