"use client"

import { useMemo, useState } from "react";
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";

type PlanId = 'free' | 'standard' | 'enterprise';
    
type PlanPoints = {
    inclusion1: string;
    inclusion2: string;
    inclusion3: string;
    inclusion4: string;
    inclusion5: string;
    inclusion6: string;
};

type PlanProps = {
    plansTitle : string;
    plansSubtitle: string;
    freePlan: PlanPoints;
    standardPlan: PlanPoints;
    enterprisePlan: PlanPoints;
}

const planAnimate = (typeof window !== "undefined" && window.innerWidth >= 1100) ? {
    initialHead: { opacity: 0, x: -100, },
    animateHead: { opacity: 1, x:0, transition: { duration: 1 } },

    initialPara: { opacity: 0, x: -100, },
    animatePara: { opacity: 1, x:0, transition: { duration: 1, delay: 1 } },

    initialBtn: { opacity: 0, x: 100 },
    animateBtn: { opacity: 1, x: 0, transition: { delay: 2, duration: 1 } },

    initialDetails: { opacity: 0, x: -100 },
    animateDetails: { opacity: 1, x: 0, transition: { delay: 3, duration: 1 } },
} : {
    initialHead: { opacity: 1, x: 0, },
    animateHead: { opacity: 1, x:0, },

    initialPara: { opacity: 1, x: 0, },
    animatePara: { opacity: 1, x:0, },

    initialBtn: { opacity: 1, x: 0 },
    animateBtn: { opacity: 1, x: 0, },

    initialDetails: { opacity: 1, x: 0 },
    animateDetails: { opacity: 1, x: 0, },
}

export default function PlansSection({plansTitle, plansSubtitle, freePlan, standardPlan, enterprisePlan} : PlanProps) {

    const [activePlanButton, setActivePlanButton] = useState<PlanId>('free');
    const [accordionValue, setAccordionValue] = useState<string>('item-1');

    const planDetails = useMemo(
        () => ({
          free: {
            title: "Starter Plan",
            bullets: [ freePlan.inclusion1, freePlan.inclusion2, freePlan.inclusion3, freePlan.inclusion4, freePlan.inclusion5, freePlan.inclusion6,].filter(Boolean),
          },
          standard: {
            title: "Standard Plan",
            bullets: [ standardPlan.inclusion1, standardPlan.inclusion2, standardPlan.inclusion3, standardPlan.inclusion4, standardPlan.inclusion5, standardPlan.inclusion6,].filter(Boolean),
          },
          enterprise: {
            title: "Enterprise Plan",
            bullets: [ enterprisePlan.inclusion1, enterprisePlan.inclusion2, enterprisePlan.inclusion3, enterprisePlan.inclusion4, enterprisePlan.inclusion5, enterprisePlan.inclusion6,].filter(Boolean),
          },
        }),
        [freePlan, standardPlan, enterprisePlan]
      );

      const handleAccordionChange = (value: string) => {
        setAccordionValue(value);
        
        // Update the active plan based on which accordion item is opened
        if (value === 'item-1') {
            setActivePlanButton('free');
        } else if (value === 'item-2') {
            setActivePlanButton('standard');
        } else if (value === 'item-3') {
            setActivePlanButton('enterprise');
        }
    };

      const activePlanDetails = planDetails[activePlanButton];

    return (
        <>
            <section className="section hm-plans --bg-white relative z-[2]">
                <div className="container">
                    <div className="plan-content-wrapper">
                        <motion.div className="plans-left">
                            <motion.h2 className="h3 plans-left-heading" variants={planAnimate} initial='initialHead' whileInView='animateHead' viewport={{ once: true, amount: 0.6 }}>{plansTitle}</motion.h2>

                            <motion.p className="text-20 text-grey plan-sub-title" variants={planAnimate} initial='initialPara' whileInView='animatePara' viewport={{ once: true, amount: 0.6 }}>{plansSubtitle}</motion.p>
                        </motion.div>
 
                        <div className="plans-right">
                            {/* <p className="text-20 text-grey plan-title">{plansSubtitle}</p> */}

                            <motion.div className="plan-details bg-blue site-radius-20" aria-live="polite" variants={planAnimate} initial="initialDetails" whileInView='animateDetails' viewport={{ once: true, amount: 0.6 }}>
                                <h3 key={activePlanButton} className="h4 fade-in">{activePlanDetails.title}</h3>

                                {activePlanDetails.bullets.map((b, i) => (
                                    <div key={i} className="plan-poin">
                                        <p key={activePlanButton} className="text-grey text-20 fade-in"><span className="icon-check_circle"></span>{b}</p>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div className="plan-btns-group" variants={planAnimate} initial="initialBtn" whileInView='animateBtn' viewport={{ once: true, amount: 0.6 }}>
                                <button type="button" className={`plans-btn text-left site-radius-10 ${activePlanButton === 'free' ? 'plan-btn-active' : ''}`} onClick={() => setActivePlanButton('free')}>
                                    <div className="plan-btn-cont">
                                        <h3 className="h5">Free Compliance Starter Plan</h3>
                                        <p className="text-20 text-grey">Ideal for small trial teams starting their compliance journey.</p>
                                    </div>
                                </button>

                                <button type="button" className={`plans-btn text-left site-radius-10 ${activePlanButton === 'standard' ? 'plan-btn-active' : ''}`} onClick={() => setActivePlanButton('standard')}>
                                    <div className="plan-btn-cont">
                                        <h3 className="h5">Standard Plan</h3>
                                        <p className="text-20 text-grey">Designed for growing teams needing advanced tools and reporting.</p>
                                    </div>

                                    <p className="h4">$199<span className="text-18 text-grey">/month</span></p>
                                </button>

                                <button type="button" className={`plans-btn text-left site-radius-10 ${activePlanButton === 'enterprise' ? 'plan-btn-active' : ''}`} onClick={() => setActivePlanButton('enterprise')} >
                                    <div className="plan-btn-cont">
                                        <h3 className="h5">Enterprise Plan</h3>
                                        <p className="text-20 text-grey">Ideal for enterprises needing scalable compliance and expert support.</p>
                                    </div>

                                    <p className="h4">$499<span className="text-18 text-grey">/month</span></p>
                                </button>
                            </motion.div>
                        </div>

                        {/* <div className="plans-mobile-accordion">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="plan-trigger">
                                        <p className="h5 text-rg">Free Compliance Starter Plan</p>
                                    </AccordionTrigger>

                                    <AccordionContent className="plan-content">
                                        <h3 key={activePlanButton} className="h4 fade-in">{activePlanDetails.title}</h3>

                                        {activePlanDetails.bullets.map((b, i) => (
                                            <div key={i} className="plan-poin">
                                                <p key={activePlanButton} className="text-grey text-20 fade-in"><span className="icon-check_circle"></span>{b}</p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="plan-trigger">
                                        <p className="h5 text-rg">Standard Plan</p>
                                    </AccordionTrigger>

                                    <AccordionContent className="plan-content">
                                        <h3 key={activePlanButton} className="h4 fade-in">{activePlanDetails.title}</h3>

                                        {activePlanDetails.bullets.map((b, i) => (
                                            <div key={i} className="plan-poin">
                                                <p key={activePlanButton} className="text-grey text-20 fade-in"><span className="icon-check_circle"></span>{b}</p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="plan-trigger">
                                        <p className="h5 text-rg">Enterprise Plan</p>
                                    </AccordionTrigger>

                                    <AccordionContent className="plan-content">
                                        <h3 key={activePlanButton} className="h4 fade-in">{activePlanDetails.title}</h3>

                                        {activePlanDetails.bullets.map((b, i) => (
                                            <div key={i} className="plan-poin">
                                                <p key={activePlanButton} className="text-grey text-20 fade-in"><span className="icon-check_circle"></span>{b}</p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div> */}

                        <div className="plans-mobile-accordion">
                            <Accordion type="single" collapsible value={accordionValue} onValueChange={handleAccordionChange} className="plan-accordion-wrapper">
                                <AccordionItem value="item-1" className="accordion-item site-radius-10">
                                    <AccordionTrigger className="plan-trigger">
                                        <p className="h5 text-rg">Free Compliance Starter Plan</p>
                                    </AccordionTrigger>

                                    <AccordionContent className="plan-content site-radius-10 bg-blue">
                                        {/* <h3 className="h4 fade-in">{planDetails.free.title}</h3> */}

                                        {planDetails.free.bullets.map((b, i) => (
                                            <div key={i} className="plan-poin">
                                                <p className="text-grey text-20 fade-in ">
                                                    <span className="icon-check_circle"></span>{b}
                                                </p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="accordion-item site-radius-10">
                                    <AccordionTrigger className="plan-trigger">
                                        <p className="h5 text-rg">Standard Plan</p>

                                        <span className="h4">$199<span className="text-18">/month</span></span>
                                    </AccordionTrigger>

                                    <AccordionContent className="plan-content site-radius-10 bg-blue">
                                        {/* <h3 className="h4 fade-in">{planDetails.standard.title}</h3> */}

                                        {planDetails.standard.bullets.map((b, i) => (
                                            <div key={i} className="plan-poin">
                                                <p className="text-grey text-20 fade-in">
                                                    <span className="icon-check_circle"></span>{b}
                                                </p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="accordion-item site-radius-10">
                                    <AccordionTrigger className="plan-trigger">
                                        <p className="h5 text-rg">Enterprise Plan</p>

                                        <span className="h4">$499<span className="text-18">/month</span></span>
                                    </AccordionTrigger>

                                    <AccordionContent className="plan-content site-radius-10 bg-blue">
                                        {/* <h3 className="h4 fade-in">{planDetails.enterprise.title}</h3> */}

                                        {planDetails.enterprise.bullets.map((b, i) => (
                                            <div key={i} className="plan-poin">
                                                <p className="text-grey text-20 fade-in">
                                                    <span className="icon-check_circle"></span>{b}
                                                </p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};