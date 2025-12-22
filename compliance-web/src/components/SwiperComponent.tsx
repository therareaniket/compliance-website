"use client";


import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";
// import { useMemo, useState, useRef } from "react";



export default function AboutUsSwiperComponents() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
        const resultHeadRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);


        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            if (titleRef.current) titleRef.current.classList.add('animate');
                            if (subtitleRef.current) subtitleRef.current.classList.add('animate');
                        }, 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
    
            // FIX: Add small delay to ensure DOM is ready
            const timeoutId = setTimeout(() => {
                if (resultHeadRef.current) {
                    observer.observe(resultHeadRef.current);
                }
            }, 0);
    
            return () => {
                clearTimeout(timeoutId);
                if (observer) observer.disconnect();
            };
        }, []);

    return (
        <section className="--bg-white">
            <div className="container">
                <div className="core-feature-section">
                    <div className="core-feature-heading" ref={resultHeadRef}>
                        <h2 className="h4 slide-left" ref={titleRef}>Core Features That Power Clinical Trials Compliance</h2>

                        <p className="core-feature-para text-20 text-rg slide-right" ref={subtitleRef}>
                            Explore essential tools—from document control and training to real-time alerts and reporting—designed to keep your trial operations efficient, secure, and audit-ready.
                        </p>
                    </div>

                    {/* Swiper wrapper */}
                    <Swiper
                        className="feature-cards"
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={20}
                        loop={true}
                        // loopAdditionalSlides={5} 
                        pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2 }}
                        autoplay={{ delay: 1000 }}
                        slidesPerView="auto"
                        centeredSlides={true}
                        slidesPerGroup={1}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        // onBeforeInit={(swiper) => {
                        //     if (swiper.params && swiper.params.navigation) {
                        //         swiper.params.navigation.prevEl = prevRef.current;
                        //         swiper.params.navigation.nextEl = nextRef.current;
                        //     }
                        // }}
                        onBeforeInit={(swiper) => {
                            if (
                                swiper.params &&
                                swiper.params.navigation &&
                                typeof swiper.params.navigation !== 'boolean'
                            ) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}

                        breakpoints={{
                            0: { slidesPerView: 1, centeredSlides: true, slidesPerGroup: 1, autoplay: false, speed: 2000, },
                            350: { slidesPerView: 1.01, centeredSlides: true, slidesPerGroup: 1, autoplay: false, speed: 1000, },
                            359: { slidesPerView: 1.02, centeredSlides: true, slidesPerGroup: 1, autoplay: false, speed: 1000, },
                            375: { slidesPerView: 1.10, centeredSlides: true, slidesPerGroup: 1, autoplay: false, speed: 1000, },
                            480: { slidesPerView: 1.9, centeredSlides: false, slidesPerGroup: 1, autoplay: false, speed: 1000, },
                            575: { slidesPerView: 1.9, centeredSlides: false, slidesPerGroup: 1, autoplay: false, speed: 1000, },
                            680: { slidesPerView: 1.9, centeredSlides: false, slidesPerGroup: 1, },
                            991: { slidesPerView: 2.4, centeredSlides: false, slidesPerGroup: 1, },
                            1023: { slidesPerView: 3.2, centeredSlides: false, slidesPerGroup: 1, },
                            1359: { slidesPerView: 3.5, centeredSlides: false, slidesPerGroup: 1, },
                            1440: { slidesPerView: 4, centeredSlides: false, slidesPerGroup: 1, },
                        }}

                        speed={5000}>

                        <SwiperSlide>
                            <div className="featurecard bg-blue">
                                <div className="feature-frame">
                                    <Image src="/images/aboutUs/document-management-icon.svg" alt="document-management-icon" width={60} height={60} className="feat-frame-slider-img" />
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

                        <div className="swiper-button-container">

                            <div ref={prevRef} className="swiper-button-prev-custom">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2537_2904)">
                                        <path d="M6.25 1.25L1.25 6.25L6.25 11.25" stroke="#6FB018" strokeWidth="1.5" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2537_2904">
                                            <rect width="12" height="7" fill="white" transform="matrix(0 1 -1 0 7 0)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div ref={nextRef} className="swiper-button-next-custom">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2539_2908)">
                                        <path d="M1 11L6.00204 6.00204L1.00407 1" stroke="#6FB018" strokeWidth="1.5" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2539_2908">
                                            <rect width="11.7755" height="7" fill="white" transform="translate(0 11.7754) rotate(-89.9767)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>

                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

