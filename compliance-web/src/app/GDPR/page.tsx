"use client"
import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GDPR() {
    return (
        <main className="GDPRmain inner-page">

            <Header />

            <section className='GDPRhero'>
                <div className="container-sm">
                    <h1 className='h2'>GDPR (General Data Protection Regulation) </h1>
                </div>
            </section>

            <section className='--bg-white GDPR-1 section'>
                <div className="container container-sm ">
                    <p className='text-20 text-rg'>The GDPR (Regulation (EU) 2016/679) is an EU regulation for the protection of personal data and privacy of individuals (data subjects) in the EU/EEA. It became enforceable on 25 May 2018 and applies to any organization processing personal data of EU residents, even if the organization is outside the EU.</p>

                    <p className='text-20 text-rg'>GDPR is built around a set of principles: lawfulness, fairness and transparency; purpose limitation; data minimization; accuracy; storage limitation; integrity and confidentiality; and accountability. It also grants a set of rights to data subjects (such as access, rectification, erasure, portability, objection, and rights concerning automated decision-making). Organizations must implement appropriate technical and organizational measures (encryption, pseudonymization, security, privacy by design) and may need to conduct Data Protection Impact Assessments (DPIAs) for high-risk processing.</p>

                    <p className='text-20 text-rg'>Non-compliance can lead to significant penalties—up to 4% of global annual turnover or €20 million, whichever is greater—plus reputational damage. The regulation also regulates transfers of personal data outside the EU, requiring adequate safeguards (e.g. adequacy decisions, standard contractual clauses).</p>

                    <ul>
                        <p className='text-20 text-rg'><strong>Key points:</strong> </p>
                        <li className='text-20 text-rg text-grey'>Applies to processing of personal data of EU/EEA residents </li>
                        <li className='text-20 text-rg text-grey'>Based on core principles: lawfulness, purpose limitation, minimization, etc. </li>
                        <li className='text-20 text-rg text-grey'>Data subject rights: access, correction, erasure, portability, objection  </li>
                        <li className='text-20 text-rg text-grey'>Requires technical & organizational security measures, DPIAs as needed  </li>
                        <li className='text-20 text-rg text-grey'>Controllers/processors must document compliance, possibly appoint DPO </li>
                        <li className='text-20 text-rg text-grey'>Strict rules on cross-border data transfer and heavy penaltiesm Shape </li>
                    </ul>

                </div>
            </section>

        </main>
    )
}