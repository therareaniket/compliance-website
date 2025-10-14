"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";


export default function UserAccessAnimation() {

    const pathname = usePathname();

    // === Animate of Whole using GSAP ===
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger,SplitText);
        // ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        gsap.from (".user-access-hero-head h1, .user-access-hero-head p", {opacity: 0, x: -100, delay: 0.7, duration: 1, stagger:1});


        // gsap.from(".roles-wrapper .h3", { opacity: 0, y: -100, duration: 1,
        //     scrollTrigger: {
        //         trigger: ".roles-wrapper",
        //         start: "top 60%",
        //     }
        // })
        
        // gsap.from(".admin-anim .account-admin-text .h4, .admin-anim .account-admin-text p", { opacity: 0, x: -100, duration: 1, delay: 1,
        //     scrollTrigger: {
        //         trigger: ".admin-anim",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".admin-anim-points", { opacity: 0, x: -100, duration: 1, delay: 2, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".admin-anim",
        //         start: "top 60%",
        //     }
        // })
        
        // gsap.from(".admin-anim-img", { opacity: 0, y: 100, duration: 1, delay: 3, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".admin-anim",
        //         start: "top 60%",
        //     }
        // })
        
        // gsap.from(".compli-officr-anim .account-admin-text .h4, .compli-officr-anim .account-admin-text p", { opacity: 0, x: 100, duration: 1, delay: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-officr-anim",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".comp-ofcr-points", { opacity: 0, x: 100, duration: 1, delay: 2, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-officr-anim",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".comp-ofcr-imgs", { opacity: 0, y: 100, duration: 1, delay: 3, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-officr-anim",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".compli-contri .account-admin-text .h4, .compli-contri .account-admin-text p", { opacity: 0, x: -100, duration: 1, delay: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-contri",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".compli-contri-points", { opacity: 0, x: -100, duration: 1, delay: 2, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-contri",
        //         start: "top 60%",
        //     }
        // })
        
        // gsap.from(".compli-contri-imgs", { opacity: 0, y: 100, duration: 1, delay: 3, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-contri",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".compli-auditor .account-admin-text .h4, .compli-auditor .account-admin-text p", { opacity: 0, x: 100, duration: 1, delay: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-auditor",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".compli-auditor-points", { opacity: 0, x: 100, duration: 1, delay: 2, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-auditor",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".compli-auditor-imgs", { opacity: 0, y: 100, duration: 1, delay: 3, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-auditor",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".secure-portal-text .h3, .secure-portal-text p", { opacity: 0, y: -100, duration: 1, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-auditor",
        //         start: "top 60%",
        //     }
        // })

        // gsap.from(".path-1, .path-2, .path-3, .path-4", { opacity: 0, scale: 0, delay:1.5, duration: 2, stagger: 1,
        //     scrollTrigger: {
        //         trigger: ".compli-auditor",
        //         start: "top 60%",
        //     }
        // })
        
        // ScrollTrigger.refresh();

        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        //     gsap.globalTimeline.clear();
        //   };
    }, []);
    

    return (
        <></>
    );
}