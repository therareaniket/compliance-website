"use client";

import { useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { motion } from 'framer-motion';

type FaqCategoryId = "general" | "support" | "other";
type FAQData = { question: string; answer: string };

type FAQProps = {
    faqTitle: string;
    faqSubtitle: string;

    // General
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

    // Support
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

    // Other
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
};

export default function FAQSection(props: FAQProps) {
    const {
        faqTitle,
        faqSubtitle,

        generalFaq1,
        generalFaq2,
        generalFaq3,
        generalFaq4,
        generalFaq5,
        generalAnswer1,
        generalAnswer2,
        generalAnswer3,
        generalAnswer4,
        generalAnswer5,

        supportQuestion1,
        supportQuestion2,
        supportQuestion3,
        supportQuestion4,
        supportQuestion5,
        supportAnswer1,
        supportAnswer2,
        supportAnswer3,
        supportAnswer4,
        supportAnswer5,

        otherQuestion1,
        otherQuestion2,
        otherQuestion3,
        otherQuestion4,
        otherQuestion5,
        otherAnswer1,
        otherAnswer2,
        otherAnswer3,
        otherAnswer4,
        otherAnswer5,
    } = props;

    const [activeFaqCategoryButton, setActiveFaqCategoryButton] =
        useState<FaqCategoryId>("general");

    // Normalize props to categories once, re-compute only when props change
    const faqsByCategory = useMemo<
        Record<FaqCategoryId, { heading: string; items: FAQData[] }>
    >(
        () => ({
            general: {
                heading: "General Questions",
                items: [
                    { question: generalFaq1, answer: generalAnswer1 },
                    { question: generalFaq2, answer: generalAnswer2 },
                    { question: generalFaq3, answer: generalAnswer3 },
                    { question: generalFaq4, answer: generalAnswer4 },
                    { question: generalFaq5, answer: generalAnswer5 },
                ].filter((qa) => qa.question && qa.answer),
            },
            support: {
                heading: "Support Questions",
                items: [
                    { question: supportQuestion1, answer: supportAnswer1 },
                    { question: supportQuestion2, answer: supportAnswer2 },
                    { question: supportQuestion3, answer: supportAnswer3 },
                    { question: supportQuestion4, answer: supportAnswer4 },
                    { question: supportQuestion5, answer: supportAnswer5 },
                ].filter((qa) => qa.question && qa.answer),
            },
            other: {
                heading: "Other Questions",
                items: [
                    { question: otherQuestion1, answer: otherAnswer1 },
                    { question: otherQuestion2, answer: otherAnswer2 },
                    { question: otherQuestion3, answer: otherAnswer3 },
                    { question: otherQuestion4, answer: otherAnswer4 },
                    { question: otherQuestion5, answer: otherAnswer5 },
                ].filter((qa) => qa.question && qa.answer),
            },
        }),
        [
            generalFaq1,
            generalFaq2,
            generalFaq3,
            generalFaq4,
            generalFaq5,
            generalAnswer1,
            generalAnswer2,
            generalAnswer3,
            generalAnswer4,
            generalAnswer5,
            supportQuestion1,
            supportQuestion2,
            supportQuestion3,
            supportQuestion4,
            supportQuestion5,
            supportAnswer1,
            supportAnswer2,
            supportAnswer3,
            supportAnswer4,
            supportAnswer5,
            otherQuestion1,
            otherQuestion2,
            otherQuestion3,
            otherQuestion4,
            otherQuestion5,
            otherAnswer1,
            otherAnswer2,
            otherAnswer3,
            otherAnswer4,
            otherAnswer5,
        ]
    );

    const activeFAQDetails = faqsByCategory[activeFaqCategoryButton];

    const FAQAnimate = {
        initialHead: { opacity: 0, y: -100, },
        animateHead: { opacity: 1, y:0, transition: { duration: 1 } },
    
        initialBtn: { opacity: 0, x: -100 },
        animateBtn: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
    }

    return (
        <>
            <section className="section FAQs --bg-white">
                <div className="container">
                    <motion.div className="faq-head text-center" >
                        <motion.h2 className="h3" variants={FAQAnimate} initial="initialHead" whileInView="animateHead" viewport={{ once: true, amount: 0.4 }}>{faqTitle}</motion.h2>
                        <motion.p className="text-20 text-grey" variants={FAQAnimate} initial="initialHead" whileInView="animateHead" viewport={{ once: true, amount: 0.7 }}>{faqSubtitle}</motion.p>
                    </motion.div>

                    <motion.div className="category-btns" variants={FAQAnimate} initial="initialBtn" whileInView="animateBtn" viewport={{ once: true, amount: 0.6 }}>
                            <button
                                className={`category-btn-new general-btn text-left site-radius-10 ${activeFaqCategoryButton === "general" ? "faq-active-new" : ""
                                    }`}
                                onClick={() => setActiveFaqCategoryButton("general")}
                                type="button"
                            >
                                <p className="h5">General</p>
                            </button>

                            <button
                                className={`category-btn-new support-btn text-left site-radius-10 ${activeFaqCategoryButton === "support" ? "faq-active-new" : ""
                                    }`}
                                onClick={() => setActiveFaqCategoryButton("support")}
                                type="button"
                            >
                                <p className="h5">Support</p>
                            </button>

                            <button
                                className={`category-btn-new others-btn text-left site-radius-10 ${activeFaqCategoryButton === "other" ? "faq-active-new" : ""
                                    }`}
                                onClick={() => setActiveFaqCategoryButton("other")}
                                type="button"
                            >
                                <p className="h5">Other</p>
                            </button>
                    </motion.div>

                    <div className="faq-list-category">
                        <div className="category-faqs" key={activeFaqCategoryButton}>
                            {/* <h3 className="h4">{activeFAQDetails.heading}</h3> */}

                            <Accordion type="single" collapsible>
                                {activeFAQDetails.items.map((item, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`item-${i + 1}`}
                                        className="faq-accordian site-radius-10"
                                    >
                                        <AccordionTrigger className="faq-trigger text-18">
                                            <p>{item.question}</p>
                                        </AccordionTrigger>

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
        </>
    );
}
