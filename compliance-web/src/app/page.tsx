"use client"

import ClientaleSlider from "@/components/ClientaleSlider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

type Card = { id: string; title: string; content?: string, background_color: string; text_color: string  };
type PlanId = 'free' | 'standard' | 'enterprise';
type FaqCategoryId = 'general' | 'support' | 'other';
type FAQData = { question: string; answer: string };

const whyusCards: Card[] = [
    { id: 'why-c5', title: 'Scalable & Secure',      background_color: '#4B0081', text_color: '#FFF', content:'abc' },
    { id: 'why-c4', title: 'Trusted by Leaders',     background_color: '#6F339A', text_color: '#FFF', content:'abc' },
    { id: 'why-c3', title: 'Automation-Driven',      background_color: '#AC8AC5', text_color: '#FFF', content:'abc' },
    { id: 'why-c2', title: 'Real-Time Monitoring',   background_color: '#C7B0D8', text_color: '#000', content:'abc' },
    { id: 'why-c1', title: 'Comprehensive Coverage', background_color: '#EDE6F2', text_color: '#000', content:'abc' },
  ];

const planDetails: Record<PlanId, { title: string; bullets: string[]; }> = {
    free: {
      title: 'Free Compliance Starter Plan',
      bullets: [
        'Document uploads & basic storage',
        'Framework selection (1-2 regulations)',
        'Audit trail (Limited)',
        'Email support',
        'Monthly compliance summary'
      ],
    },
    standard: {
      title: 'Standard Plan',
      bullets: [
        'Advanced automated checks and workflows',
        'Custom report builder and exports',
        'Integrations (Slack, Jira, GitHub)',
        'Role-based access control',
      ],
    },
    enterprise: {
      title: 'Enterprise Plan',
      bullets: [
        'Custom frameworks and mappings',
        'SSO/SAML, SCIM user provisioning',
        'Private cloud/VPC deployment options',
        'Dedicated CSM and priority SLA',
      ],
    },
  };

const faqsByCategory: Record<FaqCategoryId, { heading: string; items: FAQData[] }> = {
    general: {
      heading: 'General Questions',
      items: [
        { question: 'What is a compliance portal scan?', answer: 'A compliance portal scan is an automated process that checks portals for gaps, violations, or missing metadata against frameworks like HIPAA, GDPR, 21 CFR Part 11, and more.' },
        { question: 'How does the scanning process work?', answer: 'The system integrates securely, runs predefined checks, and generates logs, reports, and dashboards to track violations and coverage.' },
        { question: 'Which frameworks and regulations are supported?', answer: 'HIPAA, GDPR, 21 CFR Part 11, EU Annex 11, CDSCO, CGP, and more as relevant to clinical research and data management.' },
        { question: 'Can the platform integrate with existing systems?', answer: 'Yes—integrations with CTMS, IWRS, Medidata, Veeva Vault, PVedge, and cloud platforms like AWS.' },
        { question: 'How often are scans performed?', answer: 'Scheduled (daily/weekly/monthly) or manual triggers depending on needs and timelines.' },
      ],
    },
    support: {
      heading: 'Support Questions',
      items: [
        { question: 'How to contact support?', answer: 'Use the in‑app help widget or email support@example.com for assistance and ticket tracking.' },
        { question: 'What are support hours?', answer: 'Standard support is 9am–6pm local time, with 24×7 for enterprise SLAs.' },
        { question: 'Do you offer onboarding?', answer: 'Yes—guided onboarding and best‑practice templates for faster setup.' },
        { question: 'Where to report bugs?', answer: 'Open a ticket with steps, screenshots, and logs to help triage quickly.' },
        { question: 'Is there a status page?', answer: 'Yes—subscribe to uptime and incident notifications from the status page.' },
      ],
    },
    other: {
      heading: 'Other Questions',
      items: [
        { question: 'Do you support custom frameworks?', answer: 'Yes—map custom controls to internal checks and evidence with our framework builder.' },
        { question: 'Can we export evidence?', answer: 'Export evidence and reports to PDF/CSV and push to external systems.' },
        { question: 'Is on‑prem or VPC supported?', answer: 'Enterprise deployments support private cloud/VPC options.' },
        { question: 'What about SSO/SAML?', answer: 'SSO/SAML and SCIM user provisioning are available on enterprise plans.' },
        { question: 'Data residency?', answer: 'Choose regional data hosting as required by policy or regulation.' },
      ],
    },
  };

export default function Home() {

    const [active, setActive] = useState<'smrt' | 'features'>('smrt');
    const [cards, setCards] = useState<Card[]>(whyusCards);
    const [movingId, setMovingId] = useState<string | null>(null);
    const [activePlanButton, setActivePlanButton] = useState<PlanId>('free');
    const [activeFaqCategoryButton, setActiveFaqCategoryButton] = useState<FaqCategoryId>('general');
    const activePlanDetails = planDetails[activePlanButton];
    const activeFAQDetails = faqsByCategory[activeFaqCategoryButton];

    const rotateLastToFront = () => {
        setCards((prev) => {
          if (!prev.length) return prev;
          const last = prev[prev.length - 1];
          setMovingId(last.id);
          return [last, ...prev.slice(0, -1)];
        });
        setTimeout(() => setMovingId(null), 600);
      };
      

  return (
    <div>
        <>
            <section className="hm-hero">
                <div className="container">
                    <div className="hm-hero-content">
                        <h1 className="text-center">Stay Ahead with<br />Smarter Clinical Trial Compliance</h1>

                        <p className="text-center text-20 text-grey">Monitor, manage, and maintain regulatory compliance with precision. Our intelligent portal empowers Sponsors, CROs, and Sites to stay audit-ready and ensure ethical, transparent trial conduct.</p>

                        <div className="hm-hero-btns">
                            <Link href='#' title="Get Started" className="btn-primary btn-padding text-md text-18 site-radius-10">Get Started</Link>

                            <Link href='#' title="Get a Quick Demo" className="btn-white btn-padding text-md text-18 site-radius-10">Get a Quick Demo</Link>  
                        </div>
                    </div>
                </div>
            </section>

            <section className="section hm-click-expand">
                <div className="container">
                    <div className="expnd-contnt-wrapper">
                        <div className={`click-box click-smrt-compliance site-radius-20 ${active === 'smrt' ? 'active' : 'smrt-not-active'}`}
                            onClick={() => setActive('smrt')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('smrt')}
                            aria-pressed={active === 'smrt'}>
                                
                                <div className="box-content">
                                    <div className="cont-head">
                                        <h2 className="h3">Smarter Compliance for Clinical Trials</h2>

                                        <p className="text-20">We simplify how Sponsors, CROs, and Sites manage complex regulations—reducing risk, improving efficiency, and ensuring audit readiness throughout the clinical trial lifecycle.</p>
                                    </div>

                                    <ul className="text-20 smart-usp-lists">
                                        <li><span className="icon-check_circle"></span> Trusted by businesses across industries</li>
                                        <li><span className="icon-check_circle"></span> Simplifies regulatory complexities</li>
                                        <li><span className="icon-check_circle"></span> Ensures audit readiness with confidence</li>
                                        <li><span className="icon-check_circle"></span> Focused on security and accuracy</li>
                                    </ul>
                                </div>

                                <Image src='/images/homepage/smarter-compliance.webp' alt="smarter-compliance" width={613} height={688} priority={false} className="smrt-img"></Image>

                        </div>

                        <div className={`click-box click-key-features site-radius-20 ${active === 'features' ? 'active' : 'key-not-active'}`}
                            onClick={() => setActive('features')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive('features')}
                            aria-pressed={active === 'features'}>

                                <div className="box-content">
                                    <div className="cont-head">
                                        <h2 className="h3">Key Features That Drive Clinical Trial Compliance Success</h2>

                                        <p className="text-20">Our platform simplifies regulatory compliance for Sponsors, CROs, and Sites with automated checks and real-time dashboards—making audits and inspections faster, easier, and more efficient.</p>
                                    </div>

                                    <ul className="text-20 key-usp-lists">
                                        <li><span className="icon-check_circle"></span> Automated multi-framework scans</li>
                                        <li><span className="icon-check_circle"></span> Real-time dashboards & analytics</li>
                                        <li><span className="icon-check_circle"></span> Audit-ready reports in clicks</li>
                                        <li><span className="icon-check_circle"></span> Continuous standard updates</li>
                                    </ul>
                                </div>

                                <Image src='/images/homepage/key-features.webp' alt="key-features" width={613} height={688} priority={false} className="key-img"></Image>

                        </div>
                      </div>
                  </div>
            </section>

            <section className="hm-compli-steps">
                <div className="container">
                    <div className="steps-head">
                        <h2 className="h3">Seamless Compliance in Four Simple Steps</h2>

                        <p className="text-20 text-grey">Our platform integrates with your systems, monitors compliance in real-time, flags potential risks, and generates audit-ready reports—making clinical trial compliance effortless and transparent. </p>
                    </div>

                    <div className="steps-path-view">
                        <Image src='images/homepage/steps-dotted-path.svg' alt="steps-path" width={1293} height={425} priority={false} className="steps-path-img"></Image>

                        <Image src='/images/homepage/stp-1-connect.webp' alt="step-1-connect" width={528} height={226} priority={false} className="step-1-img"></Image>
                        <Image src='/images/homepage/stp-2-monitor.webp' alt="step-2-monitor" width={424} height={344} priority={false} className="step-2-img"></Image>
                        <Image src='/images/homepage/stp-3-act.webp' alt="step-3-act" width={454} height={228} priority={false} className="step-3-img"></Image>
                        <Image src='/images/homepage/stp-4-report.webp' alt="step-4-report" width={497} height={276} priority={false} className="step-4-img"></Image>
                        
                    </div>
                </div>
            </section>

            <section className="section hm-why-us">
                <div className="container">
                    <div className="why-us-content-wrapper">
                        <div className="why-us-content">
                            <div className="why-us-head">
                                <h2 className="h3">Why Leading Clinical Trial Teams Trust Our Compliance Platform</h2>

                                <p className="text-20 text-grey">We offer broad regulatory coverage, real-time monitoring, and smart automation—making compliance simple, secure, and audit-ready for Sponsors, CROs, and Sites.</p>
                            </div>

                            <Image src='/images/homepage/comprehensive-coverage.webp' alt="comprehensive-coverage" width={449} height={345} priority={false}></Image>
                        </div>

                        <div className="why-us-cards">
                            <div className="why-us-stack">
                                {cards.map((card, idx) => (
                                    <button key={card.id} className={`card-btn site-radius-20 ${movingId === card.id && idx === 0 ? 'moving-to-top' : ''}`} onClick={rotateLastToFront} type="button" style={{ backgroundColor: card.background_color, color: card.text_color }}>
                                        <p><span className="icon-check_circle"></span>{card.title}</p>
                                        <p>{card.content}</p>
                                    </button>
                                ))}
                              </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="hm-proven-result">
                <div className="container">
                    <div className="result-head">
                        <h2 className="h3">Driving Global Trust with Proven Compliance Results</h2>
                            
                        <p className="text-20 text-grey">Backed by global organizations, secure handling, and audit success, our platform ensures compliance at every step.</p>
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
            </section>

            <section className="section hm-plans">
                <div className="container">
                    <div className="plan-content-wrapper">
                        <div className="plans-left">
                            <h2 className="h3">Flexible Compliance Plans for Every Business</h2>

                            <div className="plan-details bg-blue site-radius-20" aria-live="polite">
                                <h3 key={activePlanButton} className="h4 fade-in">{activePlanDetails.title}</h3>
                                
                                {activePlanDetails.bullets.map((b, i) => (
                                    <div key={i} className="plan-poin">
                                        <p key={activePlanButton} className="text-grey text-20 fade-in"><span className="icon-check_circle"></span>{b}</p> 
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                                    

                        <div className="plans-right">
                            <p className="text-20 text-grey">From startups to enterprises, choose the plan that simplifies your compliance journey and scales with your needs.</p>

                            <div className="plan-btns-group">
                                <button type="button" className={`plans-btn text-left site-radius-10 ${activePlanButton === 'free' ? 'plan-btn-active' : ''}`} onClick={() => setActivePlanButton('free')}>
                                    <div className="plan-btn-cont">
                                        <h3 className="h5">Free Compliance Starter Plan</h3>
                                        <p className="text-20 text-grey">Start free with core compliance tools — run scans, view reports, and track essentials.</p>
                                    </div>
                                </button>

                                <button type="button" className={`plans-btn text-left site-radius-10 ${activePlanButton === 'standard' ? 'plan-btn-active' : ''}`} onClick={() => setActivePlanButton('standard')}>
                                    <div className="plan-btn-cont">
                                        <h3 className="h5">Standard Plan</h3>
                                        <p className="text-20 text-grey">For growing teams needing advanced compliance tools and reporting.</p>
                                    </div>

                                    <p className="h4">$199<span className="text-18 text-grey">/month</span></p>
                                </button>

                                <button type="button" className={`plans-btn text-left site-radius-10 ${activePlanButton === 'enterprise' ? 'plan-btn-active' : ''}`} onClick={() => setActivePlanButton('enterprise')} >
                                    <div className="plan-btn-cont">
                                        <h3 className="h5">Enterprise Plan</h3>
                                        <p className="text-20 text-grey">For large organizations with custom compliance, integrations, and dedicated support.</p>
                                    </div>

                                    <p className="h4">$499<span className="text-18 text-grey">/month</span></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hm-clientale">
                <div className="container">
                    <div className="clientale-wrapper">
                        <div className="trusted-leaders site-radius-10">
                            <div className="quotes-img">
                                <Image src='/images/homepage/clientale-quotes.webp' alt="quotes" width={588} height={410} priority={false} style={{opacity:'0.2'}} draggable={false}></Image>
                            </div>

                            <div className="trst-lead-content">
                                <h2 className="h3">Trusted by Industry Leaders</h2>

                                <p className="text-20 text-grey">Trusted by leading pharma companies, innovative biotech firms, global CROs, and renowned academic institutions, our compliance platform empowers clinical research teams to achieve accuracy, transparency, and regulatory success.</p>
                            </div>
                        </div>

                        <ClientaleSlider />
                    </div>
                </div>
            </section>

            <section className="section FAQs">
                <div className="container">
                    <div className="faq-head text-center">
                        <h2 className="h3">Frequently Asked Questions</h2>

                        <p className="text-20 text-grey">Clear answers to the most common queries about our compliance scanning platform, so you can focus on what matters most.</p>
                    </div>

                    <div className="faq-list-category">
                        <div className="category-btns">
                            <button className={`category-btn general-btn text-left site-radius-10 ${activeFaqCategoryButton === 'general' ? 'faq-active' : ''}`} onClick={() => setActiveFaqCategoryButton('general')}>
                                <p className="h6">General<span className="text-14 text-rg text-grey">Welcome to the General section, where you’ll find essential information and guidance about our services. This is the best place to start if you’re looking for quick answers.</span></p>
                            </button>

                            <button className={`category-btn general-btn text-left site-radius-10 ${activeFaqCategoryButton === 'support' ? 'faq-active' : ''}`} onClick={() => setActiveFaqCategoryButton('support')}>
                                <p className="h6">Support<span className="text-14 text-rg text-grey">Our support team is here to help you with any issues or questions. Whether technical or general, we’re committed to making your experience smooth and hassle-free.</span></p>
                            </button>

                            <button className={`category-btn general-btn text-left site-radius-10 ${activeFaqCategoryButton === 'other' ? 'faq-active' : ''}`} onClick={() => setActiveFaqCategoryButton('other')}>
                                <p className="h6">Other<span className="text-14 text-rg text-grey">This section covers topics that don’t fit into our standard categories. If you have unique questions or special requests, you’ll find helpful resources here.</span></p>
                            </button>
                        </div>

                        <div className="category-faqs" key={activeFaqCategoryButton}>
                            <h3 className="h4">{activeFAQDetails.heading}</h3>
                                
                            <Accordion type="single" collapsible>
                            {activeFAQDetails.items.map((item, i) => (
                                <AccordionItem key={i} value={`item-${i + 1}`} className="faq-accordian site-radius-10">
                                    <AccordionTrigger className="faq-trigger text-18">{item.question}</AccordionTrigger>

                                    <AccordionContent className="text-18 text-grey">
                                        <hr className="faq-seprator" />
                                        <p>{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section hm-cta">
                <div className="container">
                    <h2 className="h3 text-center">Stay Ahead of Regulations and Make Compliance Effortless</h2>

                    <div className="cta-links text-center">
                        <Link href='#' title="Get Started" className="btn-padding btn-primary text-md text-18 site-radius-10">Get Started</Link>

                        <Link href='#' title="Schedule a Demo" className="btn-padding btn-white text-md text-18 site-radius-10">Schedule a Demo</Link>
                        
                        <Link href='#' title="Contact Us" className="btn-padding btn-white text-md text-18 site-radius-10">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    </div>
  );
}