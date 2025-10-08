"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


export default function ClientaleSlider() {
    return (
        <div className="clientale-main">
            <div className="container">
                <div className="clientale-slider-wrapper">
                    <Swiper className="main-slider-wrapper"
                        loop
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        slidesPerView={1}
                        // slidesPerGroup={1}
                        centeredSlides={false} 
                        speed={800} >

                        <SwiperSlide className="clientale-slide">
                            <div className="slide-content">
                                <p className="client-review text-center text-grey">Managing HIPAA compliance used to be a nightmare with scattered policies and manual checks. Since adopting this platform, our team has complete visibility and automated reporting that saves weeks of effort. It has truly transformed the way we handle compliance.</p>

                                <hr className="slider-seprator" />

                                <p className="client-name text-center">Compliance Manager <span className="block text-18 text-grey">Healthcare Firm</span></p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="clientale-slide">
                            <div className="slide-content">
                                <p className="client-review text-center text-grey">With complex frameworks like GDPR and ISO 27001, staying audit-ready was a constant struggle. The real-time monitoring, smart alerts, and centralized dashboards have not only reduced risks but also helped us respond to violations quickly and confidently.</p>

                                <hr className="slider-seprator" />

                                <p className="client-name text-center">IT Security Lead <span className="block text-18 text-grey">Global Pharma</span></p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="clientale-slide">
                            <div className="slide-content">
                                <p className="client-review text-center text-grey">Scaling compliance as our business grew was one of our biggest challenges. This solution gave us the flexibility, detailed coverage, and automation we needed to keep up with evolving regulations while focusing on innovation and growth.</p>

                                <hr className="slider-seprator" />

                                <p className="client-name text-center">Operations Director <span className="block text-18 text-grey">SaaS Company</span></p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
}



