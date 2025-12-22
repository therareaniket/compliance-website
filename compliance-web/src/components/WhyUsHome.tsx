"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

type Card = {
    id: "why-c1" | "why-c2" | "why-c3" | "why-c4" | "why-c5";
    title: string;
    content?: string;
    background_color: string;
    text_color: string;
};

type WhyUSProps = {
    whyus_title: string;
    whyus_subTitle: string;
};

const whyusCards: Card[] = [
    { id: "why-c5", title: "Scalable & Secure", background_color: "#4B0081", text_color: "#FFF", content: "Built on AWS with a cloud-first architecture, our solution scales effortlessly as your organization grows. Security is embedded at every layer, ensuring both data integrity and regulatory compliance." },
    { id: "why-c4", title: "Trusted by Leaders", background_color: "#6F339A", text_color: "#FFF", content: "Our platform is adopted by startups, enterprises, and regulated industries worldwide. Organizations choose us for our proven reliability, scalability, and ease of use in meeting strict compliance needs." },
    { id: "why-c3", title: "Automation-Driven", background_color: "#AC8AC5", text_color: "#FFF", content: "Eliminate repetitive manual tasks with automated workflows. From policy checks to audit readiness, automation reduces human error, saves time, and ensures consistency across all compliance processes." },
    { id: "why-c2", title: "Real-Time Monitoring", background_color: "#C7B0D8", text_color: "#000", content: "Stay ahead of risks with live dashboards and automated alerts. Our system constantly tracks violations and anomalies, giving you immediate visibility so issues are resolved before they turn into breaches." },
    { id: "why-c1", title: "Comprehensive Coverage", background_color: "#EDE6F2", text_color: "#000", content: "We support a wide range of compliance frameworks including ISO 27001, SOC 2, HIPAA, GDPR, CDSCO, and more. This ensures your organization stays compliant across industries and regions without juggling multiple." },
];

const images = [
    { src: "/images/homepage/scalable-secure.gif", alt: "scalable-secure", w: 454, h: 428 },
    { src: "/images/homepage/trusted-by-leaders.gif", alt: "trusted-by-leaders", w: 472, h: 354 },
    { src: "/images/homepage/automation-driven.gif", alt: "automation-driven", w: 482, h: 289 },
    { src: "/images/homepage/realtime-monitoring.gif", alt: "realtime-monitoring", w: 526, h: 358 },
    { src: "/images/homepage/comprehensive-coverage.gif", alt: "comprehensive-coverage", w: 449, h: 345 },
];

export default function WhyUs({ whyus_title, whyus_subTitle }: WhyUSProps) {

    const cardIdToImageIndex: Record<Card["id"], number> = {
        "why-c5": 0,
        "why-c4": 1,
        "why-c3": 2,
        "why-c2": 3,
        "why-c1": 4,
    };

    const [cards, setCards] = useState<Card[]>(whyusCards);
    const [movingId, setMovingId] = useState<string | null>(null);
    const [activeImage, setActiveImage] = useState(0);
    const whyUsHeadRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);


    // Update this function to move the clicked card to the last position
    const moveCardToLast = (idx: number) => {
        setCards((prev) => {
            if (prev.length < 2) return prev;
            // Pull out the clicked card
            const selected = prev[idx];
            // Remove the clicked card from its spot, and push to end
            const filtered = prev.filter((_, i) => i !== idx);
            setMovingId(selected.id);
            return [...filtered, selected];
        });

        // Image will update in useEffect based on the last card

        // Clear the visual moving flag after the CSS animation
        setTimeout(() => setMovingId(null), 600);
    };

    useEffect(() => {
        const lastCard = cards[cards.length - 1];
        if (lastCard && cardIdToImageIndex[lastCard.id] !== undefined) {
            setActiveImage(cardIdToImageIndex[lastCard.id]);
        }
    }, [cards]);

    // Add IntersectionObserver for slide-in animation
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

        const timeoutId = setTimeout(() => {
            if (whyUsHeadRef.current) {
                observer.observe(whyUsHeadRef.current);
            }
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            if (observer) observer.disconnect();
        };
    }, []);


    return (
        <>
            <section className="section hm-why-us --bg-white relative z-[2]">
                <div className="container">
                    <div className="why-us-content-wrapper">
                        <div className="why-us-content">
                            <div className="why-us-head" ref={whyUsHeadRef}>
                                <h2 className="h3 slide-why-right" ref={titleRef}>{whyus_title}</h2>

                                <p className="text-20 text-grey slide-why-right" ref={subtitleRef}>{whyus_subTitle}</p>
                            </div>

                            <div className="images-group single">
                                <div className="image-viewport">
                                    {images.map((img, idx) => (
                                        <div key={img.src + idx} className={`image-slide ${idx === activeImage ? "is-active" : "is-inactive"}`} aria-hidden={idx !== activeImage}>
                                            <Image src={img.src} alt={img.alt} width={img.w} height={img.h} priority={false} className="why-us-slider-images" unoptimized />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="why-us-cards">
                            <div className="why-us-stack">
                                {cards.map((card, idx) => (
                                    <button
                                        key={card.id}
                                        className={`card-btn site-radius-20 card-${card.id} ${movingId === card.id && idx === cards.length - 1 ? "moving-to-last" : ""}`}
                                        onClick={() => [moveCardToLast(idx)]}
                                        type="button"
                                        style={{ backgroundColor: card.background_color, color: card.text_color }}
                                    >
                                        <p className="h5 why-card-title">
                                            <span className="icon-check_circle"></span>
                                            {card.title}
                                        </p>
                                        {/* Show content for the last card */}
                                        {idx === cards.length - 1 && <p className="why-card-content text-18">{card.content}</p>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}