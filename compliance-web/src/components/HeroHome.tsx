"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type HeroProps = {
  heroTitle: string;
  heroSubtitle: string;
  heroCta?: { url: string; title: string } | null;
  heroCta2?: { url: string; title: string } | null;
};

export default function HeroSection({
  heroTitle,
  heroSubtitle,
  heroCta,
  heroCta2,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Split last word of title
  const plainText = heroTitle.replace(/<[^>]+>/g, "");
  const words = plainText.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class once and stop observing
            sectionEl.classList.add("hero-animate-active");
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3, // adjust when animation should start
      }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hm-hero" ref={sectionRef}>
      <div className="hm-hero-bg-setup">
        <video
          src="/images/homepage/hero-home-video.mp4"
          loop
          autoPlay
          muted
          className="hero-video"
        ></video>

        <Image
          src="/images/homepage/left-image-hero-home.webp"
          alt="left-image-hero"
          width={863}
          height={314}
          priority
          className="left-hero-home hero-anim hero-anim-4"
        />

        <Image
          src="/images/homepage/right-image-hero-home.webp"
          alt="right-image-hero"
          width={704}
          height={350}
          priority
          className="right-hero-home hero-anim hero-anim-5"
        />
      </div>

      <div className="container">
        <div className="hm-hero-content">
          <h1
            className="text-center hero-anim hero-anim-1"
          >
            {firstPart + " "}
            <span className="h1-animation text-green-500">
              {lastWord}
              <Image
                src="/images/homepage/scanning-line-upgrad.svg"
                alt="scanning-line"
                width={26}
                height={60}
                priority
                className="hero-scanning-line"
              />
            </span>
          </h1>

          <p
            className="text-center text-20 hero-anim hero-anim-2"
          >
            {heroSubtitle}
          </p>

          <div
            className="hm-hero-btns hero-anim hero-anim-3"
          >
            {heroCta?.url && (
              <Link
                href={heroCta.url}
                title={heroCta.title}
                className="btn-primary btn-padding text-md text-18 site-radius-10"
              >
                {heroCta.title}
              </Link>
            )}
            {heroCta2?.url && (
              <Link
                href={heroCta2.url}
                title={heroCta2.title}
                className="btn-white btn-padding text-md text-18 site-radius-10"
              >
                {heroCta2.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
