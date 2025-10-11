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

                    <section className="hm-compli-steps">
                        <div className="container">
                            <div className="steps-head">
                                <h2 className="h3">{home.complianceTitle}</h2>

                                <p className="text-20 text-grey">{home.complianceSubtitle}</p>
                            </div>

                            <div className="steps-video-wrapper site-radius-20 ">
                                <video src="/images/homepage/final-steps-video.mp4" autoPlay muted loop width='3840' height='2160' className="steps-vid site-radius-20"></video>
                            </div>

                            {/* <div className="steps-path-view">
                                <Image src='images/homepage/steps-dotted-path.svg' alt="steps-path" width={1293} height={425} priority={false} className="steps-path-img"></Image>

                                <Image src='/images/homepage/stp-1-connect.webp' alt="step-1-connect" width={528} height={226} priority={false} className="step-1-img"></Image>
                                <Image src='/images/homepage/stp-2-monitor.webp' alt="step-2-monitor" width={424} height={344} priority={false} className="step-2-img"></Image>
                                <Image src='/images/homepage/stp-3-act.webp' alt="step-3-act" width={454} height={228} priority={false} className="step-3-img"></Image>
                                <Image src='/images/homepage/stp-4-report.webp' alt="step-4-report" width={497} height={276} priority={false} className="step-4-img"></Image>
                            </div>

                            <div className="steps-path-responsive">
                                <Image src='/images/homepage/step-1-connect.webp' alt="step-1-connect" width={495} height={196} priority={false} className="step-1-connect"></Image>
                                <Image src='/images/homepage/step-2-connect.webp' alt="step-2-connect" width={495} height={387} priority={false} className="step-2-connect"></Image>
                                <Image src='/images/homepage/step-3-connect.webp' alt="step-3-connect" width={495} height={317} priority={false} className="step-2-connect"></Image>
                                <Image src='/images/homepage/step-4-connect.webp' alt="step-4-connect" width={495} height={378} priority={false} className="step-2-connect"></Image>
                            </div> */}
                        </div>
                            <span className="white-box"></span>
                    </section>

                    <WhyUs whyus_title={home.whyUsTitle} whyus_subTitle={home.whyUsSubtitle} />

                    {/* OLD LAYOUT */}

                {/* <section className="hm-proven-result">
                <div className="container">
                    <div className="result-head">
                        <h2 className="h3">{home.provenResultsTitle}</h2>
                            
                        <p className="text-20 text-grey">{home.provenResultsSubtitle}</p>
                    </div>

                    <div className="compliance-lists">
                        <div className="compliance-card site-radius-10">
                            <h3 className="text-md text-18">FDA 21 CFR Part 11</h3>

                            <p className="text-14 text-grey">Reliable records & e-signatures compliance.</p>
                        </div>

                        <div className="compliance-card site-radius-10">
                            <h3 className="text-md text-18">HIPAA</h3>

                            <p className="text-14 text-grey">Secure patient data & privacy.</p>
                        </div>

                        <div className="compliance-card site-radius-10">
                            <h3 className="text-md text-18">GDPR</h3>

                            <p className="text-14 text-grey">Safeguards EU data privacy.</p>
                        </div>

                        <div className="compliance-card site-radius-10">
                            <h3 className="text-md text-18">GCP</h3>

                            <p className="text-14 text-grey">Defines quality standards for trials.</p>
                        </div>

                        <div className="compliance-card site-radius-10">
                            <h3 className="text-md text-18">CDSCO</h3>

                            <p className="text-14 text-grey">Regulates drug and device approvals.</p>
                        </div>

                        <div className="compliance-card site-radius-10">
                            <h3 className="text-md text-18">EU Annex 11</h3>

                            <p className="text-14 text-grey">Sets rules for system data integrity.</p>
                        </div>

                        <div className="showcase-result text-center">
                            <div className="global-org site-radius-10 bg-purple">
                                <p className="h4">500+<span className="text-20 text-rg">Global organizations</span></p>
                            </div>

                            <div className="framwrk-coverd site-radius-10 bg-green">
                                <p className="h2">50+<span className="text-20 text-rg">Frameworks covered</span></p>
                            </div>

                            <div className="secure-docs site-radius-10 bg-yellow">
                                <p className="h1">1M+<span className="text-20 text-rg">Secure documents</span></p>
                            </div>

                            <div className="audit-suc site-radius-10 bg-blue">
                                <p className="h3">99%<span className="text-20 text-rg">Audit success</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                    </section> */}

                    <section className="section hm-proven-result">
                        <div className="container">
                            <div className="result-head">
                                <h2 className="h3">{home.provenResultsTitle}</h2>

                                <p className="text-20">{home.provenResultsSubtitle}</p>
                            </div>

                            <div className="compli-list-stats">
                                <div className="supported-compli-lists">
                                    <div className="supp-compli-list site-radius-10">
                                        <h3 className="h5">FDA 21 CFR Part 11</h3>

                                        <p>Reliable records & eSignatures compliance.</p>
                                    </div>

                                    <div className="supp-compli-list site-radius-10">
                                        <h3 className="h5">GDPR</h3>

                                        <p>Safeguards EU data privacy.</p>
                                    </div>

                                    <div className="supp-compli-list site-radius-10">
                                        <h3 className="h5">HIPAA</h3>

                                        <p>Secure patient data & privacy.</p>
                                    </div>

                                    <div className="supp-compli-list site-radius-10">
                                        <h3 className="h5">GCP</h3>

                                        <p>Defines quality standards for trials.</p>
                                    </div>

                                    <div className="supp-compli-list site-radius-10">
                                        <h3 className="h5">CDSCO</h3>

                                        <p>Regulates drug and device approvals.</p>
                                    </div>

                                    <div className="supp-compli-list site-radius-10">
                                        <h3 className="h5">EU Annex 11</h3>

                                        <p>Sets rules for system data integrity.</p>
                                    </div>
                                </div>

                                <div className="compli-stats">
                                    <div className="rotate-eclipse">
                                        <div className="eclipse-wrapper">
                                            <Image src='/images/homepage/stat-eclipse-1.svg' alt='eclipse-1' width={432} height={506} className="rotating-eclipse-1"></Image>

                                            <Image src='/images/homepage/stat-eclipse-2.svg' alt='eclipse-2' width={378} height={574} className="rotating-eclipse-2"></Image>

                                            <Image src='/images/homepage/stat-eclipse-3.svg' alt='eclipse-3' width={344} height={522} className="rotating-eclipse-3"></Image>
                                        </div>
                                    </div>

                                    <div className="floating-stats">
                                        <div className="stats-nums site-radius-10 text-20 glob-org">
                                            <span className="h1">500+</span>Global organizations
                                        </div>

                                        <div className="stats-nums site-radius-10 text-20 sec-doc">
                                            <span className="h1">1M+</span>Secure documents
                                        </div>

                                        <div className="stats-nums site-radius-10 text-20 fram-covd">
                                            <span className="h1">50+</span>Frameworks covered
                                        </div>

                                        <div className="stats-nums site-radius-10 text-20 aud-suc">
                                            <span className="h1">99%</span>Audit success
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <PlansSection plansTitle={home.plansTitle} plansSubtitle={home.plansSubtitle} freePlan={freePlan} standardPlan={standardPlan} enterprisePlan={enterprisePlan} />

                    <section className="hm-clientale --bg-white overflow-hidden">
                        <div className="container">
                            <div className="clientale-wrapper">
                                <div className="trusted-leaders site-radius-10">
                                    <div className="trst-lead-content">
                                        <h2 className="h3">{home.testimonialTitle}</h2>

                                        <p className="text-20 text-grey">{home.testimonialSubtitle}</p>
                                    </div>

                                    <Image src='/images/homepage/clientale-quotes.webp' alt="quotes" width={588} height={410} priority={false} style={{ opacity: '0.2' }} draggable={false} className="testi-quotes"></Image>
                                </div>

                                <ClientaleSlider />
                            </div>
                        </div>
                    </section>

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