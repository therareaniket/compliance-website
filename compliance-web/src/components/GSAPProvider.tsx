"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function GSAPProvider() {
useEffect(() => {
        gsap.registerPlugin(ScrollTrigger,SplitText);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Hero HOMEPAGE
        // gsap.from (titleRef.current,{ opacity: 0, x: -300, delay: 1, duration: 1, });
        // gsap.from (subtitleRef.current,{ opacity: 0, x: -300, delay: 2, duration: 1, });
        // gsap.from (buttonsRef.current,{ opacity: 0, scale: 0, delay: 2.5, duration: 1, });
        // gsap.from (".left-hero-home", {opacity: 0, x: -100, delay: 3.2, duration: 1,});
        // gsap.from (".right-hero-home", {opacity: 0, x: 100, delay: 3.7, duration: 1,});
        // gsap.from ("", {})

        // Steps HOMEPAGE
        gsap.from(".steps-head .h3", { opacity: 0, y: -100, delay: 0.5, duration: 1,
            scrollTrigger: {
                trigger: ".hm-compli-steps",
                start: "top 60%",
            },
        });
        gsap.from(".steps-head p", { opacity: 0, y: -100, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".hm-compli-steps",
                start: "top 60%",
            },
        });

        // Why-Us HOMEPAGE
        gsap.from(".why-us-head .h3", { opacity: 0, y: -100, delay: 0.5, duration: 1,
            scrollTrigger: {
                trigger: ".why-us-content-wrapper",
                start: "top 60%",
            },
        });

        gsap.from(".why-us-head p", { opacity: 0, y: -50, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".why-us-content-wrapper",
                start: "top 60%",
            },
        });

        // Proven-Results HOMEPAGE
        gsap.from(".result-head .h3", { opacity: 0, y: -100, delay: 0.5, duration: 0.6,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });

        gsap.from(".supported-compli-lists", { opacity: 0, x: -100, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });

        gsap.from(".result-head p", { opacity: 0, y: -100, delay: 1.5, duration: 0.6,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });

        gsap.from(".floating-stats .stats-nums", { opacity: 0, scale: 0, delay: 2, duration: 0.5, stagger: 1,
            scrollTrigger: {
                trigger: ".hm-proven-result",
                start: "top 70%",
            },
        });

        gsap.from(".plans-left-heading", { opacity: 0, y:-50, duration: 1,
            scrollTrigger: {
                trigger: ".hm-plans",
                start: "top 70%",
            },
        });

        gsap.from(".plan-sub-title", { opacity: 0, y:-50, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".hm-plans",
                start: "top 70%",
            },
        });

        gsap.from(".plan-btns-group", { opacity: 0, x:-200, delay: 2, duration: 1,
            scrollTrigger: {
                trigger: ".hm-plans",
                start: "top 70%",
            },
        });

        gsap.from(".plan-details", { opacity: 0, x:-150, delay: 3, duration: 1,
            scrollTrigger: {
                trigger: ".hm-plans",
                start: "top 70%",
            },
        });
        
        gsap.from(".trst-lead-content .h3", { opacity: 0, y:50, delay:0.5, duration: 1,
            scrollTrigger: {
                trigger: ".hm-clientale",
                start: "top 70%",
            },
        });

        gsap.from(".trst-lead-content p", { opacity: 0, y:50, delay:1.5, duration: 1,
            scrollTrigger: {
                trigger: ".hm-clientale",
                start: "top 70%",
            },
        });

        gsap.from(".clientale-main", { opacity: 0, x:100, delay: 2, duration: 1,
            scrollTrigger: {
                trigger: ".hm-clientale",
                start: "top 70%",
            },
        });

        gsap.from(".faq-head .h3", { opacity: 0, y:-50, delay: 0.5, duration: 1,
            scrollTrigger: {
                trigger: ".FAQs",
                start: "top 70%",
            },
        });

        gsap.from(".faq-head p", { opacity: 0, y:-50, delay: 1, duration: 1,
            scrollTrigger: {
                trigger: ".FAQs",
                start: "top 70%",
            },
        });

        gsap.from(".category-btns", { opacity: 0, x:-50, delay: 2, duration: 1,
            scrollTrigger: {
                trigger: ".FAQs",
                start: "top 70%",
            },
        });

        gsap.from(".category-faqs", { opacity: 0, x:-50, delay: 3, duration: 1,
            scrollTrigger: {
                trigger: ".FAQs",
                start: "top 70%",
            },
        });
        
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear();
          };
    }, []);

  return null; // no UI, just setup
}
