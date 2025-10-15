import { fetchGraphQL } from "@/lib/graphql";
import ClientaleSlider from "@/components/ClientaleSlider";
import Image from "next/image";
import Link from "next/link";
import HeroHome from "@/components/HeroHome";
import ExtendButtons from "@/components/ExpandableButton";
import WhyUs from "@/components/WhyUsHome";
import PlansSection from "@/components/PlansHome";
import FAQSection from "@/components/FAQHome";
import { Header } from "@/components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import GSAPProvider from "@/components/GSAPProvider";
import { motion } from 'framer-motion'
import StepsHome from "@/components/StepsHome";
import ProvenHome from "@/components/ProvenTrust";
import TestimHome from "@/components/TestiHome";

gsap.registerPlugin(ScrollTrigger,SplitText);

type HomeData = {
    page: {
        homepage: {
            heroTitle: string;
            heroSubtitle: string;
            heroCta?: { url: string; title: string } | null;
            heroCta2?: { url: string; title: string } | null;

            purpleBox: { purpleTitle: string; purpleSubtitle: string; purpleListItem1: string; purpleListItem2: string; purpleListItem3: string; purpleListItem4: string; };
            greenBox: { greenTitle: string; greenSubtitle: string; greenListItem1: string; greenListItem2: string; greenListItem3: string; greenListItem4: string; };

            complianceTitle: string;
            complianceSubtitle: string;

            whyUsTitle: string;
            whyUsSubtitle: string;

            provenResultsTitle: string;
            provenResultsSubtitle: string;

            testimonialTitle: string;
            testimonialSubtitle: string;

            ctaTitle: string;
            ctaLink1?: { url: string; title: string } | null;
            ctaLink2?: { url: string; title: string } | null;
            ctaLink3?: { url: string; title: string } | null;

            plansTitle: string;
            plansSubtitle: string;
            freePlan: { inclusion1: string; inclusion2: string; inclusion3: string; inclusion4: string; inclusion5: string; inclusion6: string; }
            standardPlan: { inclusion1: string; inclusion2: string; inclusion3: string; inclusion4: string; inclusion5: string; inclusion6: string; }
            enterprisePlan: { inclusion1: string; inclusion2: string; inclusion3: string; inclusion4: string; inclusion5: string; inclusion6: string; }

            faqsList: {
                faqTitle: string;
                faqSubtitle: string;

                generalFaq1: string;
                generalFaq2: string;
                generalFaq3: string;
                generalFaq4: string;
                generalFaq5: string;
                generalAnswer1: string;
                generalAnswer2: string;
                generalAnswer3: string;
                generalAnswer4: string;
                generalAnswer5: string;

                supportQuestion1: string;
                supportQuestion2: string;
                supportQuestion3: string;
                supportQuestion4: string;
                supportQuestion5: string;
                supportAnswer1: string;
                supportAnswer2: string;
                supportAnswer3: string;
                supportAnswer4: string;
                supportAnswer5: string;

                otherQuestion1: string;
                otherQuestion2: string;
                otherQuestion3: string;
                otherQuestion4: string;
                otherQuestion5: string;
                otherAnswer1: string;
                otherAnswer2: string;
                otherAnswer3: string;
                otherAnswer4: string;
                otherAnswer5: string;
            }
        };
    };
};

export default async function Home() {

    const data = await fetchGraphQL<HomeData>(`
        query {
            page(id: "/", idType: URI) {
                homepage {
                    heroTitle
                    heroSubtitle
                    heroCta { url title }
                    heroCta2 { url  title }
                    purpleBox {
                        purpleTitle
                        purpleSubtitle
                        purpleListItem1
                        purpleListItem2
                        purpleListItem3
                        purpleListItem4
                    } 
                    greenBox {
                        greenTitle
                        greenSubtitle
                        greenListItem1
                        greenListItem2
                        greenListItem3
                        greenListItem4
                    }

                    complianceTitle
                    complianceSubtitle
                    whyUsTitle
                    whyUsSubtitle
                    provenResultsTitle
                    provenResultsSubtitle
                    testimonialTitle
                    testimonialSubtitle

                    ctaTitle
                    ctaLink1 { url  title }
                    ctaLink2 { url  title }
                    ctaLink3 { url  title }

                    plansTitle
                    plansSubtitle
                    freePlan {
                        inclusion1
                        inclusion2
                        inclusion3
                        inclusion4
                        inclusion5
                        inclusion6
                    }
                    standardPlan {
                        inclusion1
                        inclusion2
                        inclusion3
                        inclusion4
                        inclusion5
                        inclusion6
                    }
                    enterprisePlan {
                        inclusion1
                        inclusion2
                        inclusion3
                        inclusion4
                        inclusion5
                        inclusion6
                    }

                    faqsList{
                        faqTitle
                        faqSubtitle
                        
                        generalFaq1
                        generalFaq2
                        generalFaq3
                        generalFaq4
                        generalFaq5
                        generalAnswer1
                        generalAnswer2
                        generalAnswer3
                        generalAnswer4
                        generalAnswer5

                        supportQuestion1
                        supportQuestion2
                        supportQuestion3
                        supportQuestion4
                        supportQuestion5
                        supportAnswer1
                        supportAnswer2
                        supportAnswer3
                        supportAnswer4
                        supportAnswer5

                        otherQuestion1
                        otherQuestion2
                        otherQuestion3
                        otherQuestion4
                        otherQuestion5
                        otherAnswer1
                        otherAnswer2
                        otherAnswer3
                        otherAnswer4
                        otherAnswer5
                    }
                }
            }
        }
    `);

    const home = data.page.homepage;

    const freePlan = {
        inclusion1: home.freePlan.inclusion1,
        inclusion2: home.freePlan.inclusion2,
        inclusion3: home.freePlan.inclusion3,
        inclusion4: home.freePlan.inclusion4,
        inclusion5: home.freePlan.inclusion5,
        inclusion6: home.freePlan.inclusion6,
    }

    const standardPlan = {
        inclusion1: home.standardPlan.inclusion1,
        inclusion2: home.standardPlan.inclusion2,
        inclusion3: home.standardPlan.inclusion3,
        inclusion4: home.standardPlan.inclusion4,
        inclusion5: home.standardPlan.inclusion5,
        inclusion6: home.standardPlan.inclusion6,
    }

    const enterprisePlan = {
        inclusion1: home.enterprisePlan.inclusion1,
        inclusion2: home.enterprisePlan.inclusion2,
        inclusion3: home.enterprisePlan.inclusion3,
        inclusion4: home.enterprisePlan.inclusion4,
        inclusion5: home.enterprisePlan.inclusion5,
        inclusion6: home.enterprisePlan.inclusion6,
    }

    // const stepsHead = {
    //     initialHead: { opacity: 0, y: -100, },
    //     animatedHead: { opacity: 1, y: 0, transition: { duration: 1,  } },
    // }

    return (
            <>
                <div className="homebody">

                    <Header />

                    <HeroHome  heroTitle={home.heroTitle} heroSubtitle={home.heroSubtitle} heroCta={home.heroCta} heroCta2={home.heroCta2} />

                    <ExtendButtons
                        purpleTitle={home.purpleBox.purpleTitle}
                        purpleSubtitle={home.purpleBox.purpleSubtitle}
                        purpleListItem1={home.purpleBox.purpleListItem1}
                        purpleListItem2={home.purpleBox.purpleListItem2}
                        purpleListItem3={home.purpleBox.purpleListItem3}
                        purpleListItem4={home.purpleBox.purpleListItem4}
                        greenTitle={home.greenBox.greenTitle}
                        greenSubtitle={home.greenBox.greenSubtitle}
                        greenListItem1={home.greenBox.greenListItem1}
                        greenListItem2={home.greenBox.greenListItem2}
                        greenListItem3={home.greenBox.greenListItem3}
                        greenListItem4={home.greenBox.greenListItem4}
                    />

                    <StepsHome steps_title={home.complianceTitle} steps_subTitle={home.complianceSubtitle} />

                    <WhyUs whyus_title={home.whyUsTitle} whyus_subTitle={home.whyUsSubtitle} />

                    <ProvenHome proven_title={home.provenResultsTitle} proven_subTitle={home.provenResultsSubtitle} />

                    <PlansSection plansTitle={home.plansTitle} plansSubtitle={home.plansSubtitle} freePlan={freePlan} standardPlan={standardPlan} enterprisePlan={enterprisePlan} />

                    <TestimHome testim_title={home.testimonialTitle} testim_subTitle={home.testimonialSubtitle} />

                    <FAQSection
                        faqTitle={home.faqsList.faqTitle}
                        faqSubtitle={home.faqsList.faqSubtitle}
                        generalFaq1={home.faqsList.generalFaq1}
                        generalFaq2={home.faqsList.generalFaq2}
                        generalFaq3={home.faqsList.generalFaq3}
                        generalFaq4={home.faqsList.generalFaq4}
                        generalFaq5={home.faqsList.generalFaq5}
                        generalAnswer1={home.faqsList.generalAnswer1}
                        generalAnswer2={home.faqsList.generalAnswer2}
                        generalAnswer3={home.faqsList.generalAnswer3}
                        generalAnswer4={home.faqsList.generalAnswer4}
                        generalAnswer5={home.faqsList.generalAnswer5}
                        supportQuestion1={home.faqsList.supportQuestion1}
                        supportQuestion2={home.faqsList.supportQuestion2}
                        supportQuestion3={home.faqsList.supportQuestion3}
                        supportQuestion4={home.faqsList.supportQuestion4}
                        supportQuestion5={home.faqsList.supportQuestion5}
                        supportAnswer1={home.faqsList.supportAnswer1}
                        supportAnswer2={home.faqsList.supportAnswer2}
                        supportAnswer3={home.faqsList.supportAnswer3}
                        supportAnswer4={home.faqsList.supportAnswer4}
                        supportAnswer5={home.faqsList.supportAnswer5}
                        otherQuestion1={home.faqsList.otherQuestion1}
                        otherQuestion2={home.faqsList.otherQuestion2}
                        otherQuestion3={home.faqsList.otherQuestion3}
                        otherQuestion4={home.faqsList.otherQuestion4}
                        otherQuestion5={home.faqsList.otherQuestion5}
                        otherAnswer1={home.faqsList.otherAnswer1}
                        otherAnswer2={home.faqsList.otherAnswer2}
                        otherAnswer3={home.faqsList.otherAnswer3}
                        otherAnswer4={home.faqsList.otherAnswer4}
                        otherAnswer5={home.faqsList.otherAnswer5}
                    />

                    <section className="section hm-cta">
                        <div className="container">
                            <h2 className="h3 text-center">{home.ctaTitle}</h2>

                            <div className="cta-links text-center">
                                <Link href={home.ctaLink1?.url as string} title={home.ctaLink1?.title} className="btn-padding btn-primary text-md text-18 site-radius-10">{home.ctaLink1?.title}</Link>

                                <Link href={home.ctaLink2?.url as string} title={home.ctaLink2?.title} className="btn-padding btn-white text-md text-18 site-radius-10">{home.ctaLink2?.title}</Link>

                                <Link href={home.ctaLink3?.url as string} title={home.ctaLink3?.title} className="btn-padding btn-white text-md text-18 site-radius-10">{home.ctaLink3?.title}</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </>
    );
}