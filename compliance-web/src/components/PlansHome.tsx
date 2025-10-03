"use client"

import { useMemo, useState } from "react";

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

export default function PlansSection({plansTitle, plansSubtitle, freePlan, standardPlan, enterprisePlan} : PlanProps) {

    const [activePlanButton, setActivePlanButton] = useState<PlanId>('free');

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

      const activePlanDetails = planDetails[activePlanButton];

    return (
        <>
            <section className="section hm-plans">
                <div className="container">
                    <div className="plan-content-wrapper">
                        <div className="plans-left">
                            <h2 className="h3 plans-left-heading">{plansTitle}</h2>

                            <p className="text-20 text-grey plan-sub-title">{plansSubtitle}</p>

                            {/* <div className="plan-details bg-blue site-radius-20" aria-live="polite">
                                <h3 key={activePlanButton} className="h4 fade-in">{activePlanDetails.title}</h3>

                                {activePlanDetails.bullets.map((b, i) => (
                                    <div key={i} className="plan-poin">
                                        <p key={activePlanButton} className="text-grey text-20 fade-in"><span className="icon-check_circle"></span>{b}</p>
                                    </div>
                                ))}

                            </div> */}
                        </div>


                        <div className="plans-right">
                            {/* <p className="text-20 text-grey plan-title">{plansSubtitle}</p> */}

                            <div className="plan-details bg-blue site-radius-20" aria-live="polite">
                                <h3 key={activePlanButton} className="h4 fade-in">{activePlanDetails.title}</h3>

                                {activePlanDetails.bullets.map((b, i) => (
                                    <div key={i} className="plan-poin">
                                        <p key={activePlanButton} className="text-grey text-20 fade-in"><span className="icon-check_circle"></span>{b}</p>
                                    </div>
                                ))}

                            </div>

                            <div className="plan-btns-group">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};