"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GCP() {
    return (
        <main className="CDSCOmain">
            <section className='CDSCOhero'>
                <div className="container-sm">
                    <h1 className='h2'>CDSCO (Central Drugs Standard Control Organization, India)</h1>
                </div>
            </section>

            <section className='CDSCO-1 section'>
                <div className="container container-sm ">
                    <p className='text-20 text-rg'><strong>GCP (Good Clinical Practice):</strong></p>

                    <p className='text-20 text-rg'>  The CDSCO is India’s national regulatory authority for pharmaceuticals, medical devices, and clinical trials. 
                        It operates under the Ministry of Health & Family Welfare and is headed by the Drugs Controller General of India (DCGI). Its functions include 
                        approving new drugs, overseeing clinical trials, regulating imports, approving licenses for certain drug categories, setting standards, 
                        and coordinating with state-level drug control authorities. </p>

                    <p className='text-20 text-rg'>Under the legal framework of the Drugs & Cosmetics Act, 1940, and its associated rules (including the New Drugs 
                        and Clinical Trials Rules, 2019), CDSCO serves as the central authority for granting permissions for clinical trials, inspecting trial sites, 
                        and enforcing compliance. The 2019 CT Rules strengthened the regulatory environment, specifying formal processes (e.g. application in Form CT-04, 
                        reporting obligations, sponsor responsibilities) for conducting trials in India.</p>

                    <p className='text-20 text-rg'>CDSCO also develops guidance documents (for GCP, inspections, Good Manufacturing Practices, etc.), defines standard 
                        operating procedures, and provides inspection guidance to ensure trials are conducted ethically and with scientific rigor. On the clinical trials side, 
                        CDSCO maintains oversight through site inspections (both routine and cause-based), monitors adverse event reporting, and enforces corrective actions for
                         noncompliance.</p>
                    <ul>
                        <p className='text-20 text-rg'><strong>Key points:</strong> </p>
                        <li className='text-20 text-rg text-grey'>National regulatory authority in India for drugs, devices, and clinical trials</li>
                        <li className='text-20 text-rg text-grey'>Headed by DCGI; functions under Ministry of Health & Family Welfare</li>
                        <li className='text-20 text-rg text-grey'>Grants trial permissions, inspects sites, enforces compliance under Drugs & Cosmetics Act + CT Rules 2019</li>
                        <li className='text-20 text-rg text-grey'>Issues guidance documents, establishes standards, monitors safety reporting</li>
                        <li className='text-20 text-rg text-grey'>Coordinates with state drug control bodies and oversees uniform enforcement</li>
                    </ul>

                </div>
            </section>

        </main>
    )
}