"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GCP() {
    return (
        <main className="GCPmain">
            <section className='GCPhero'>
                <div className="container-sm">
                    <h1 className='h2'>Good Clinical Practice (GCP)</h1>
                </div>
            </section>

            <section className='GCP-1 section'>
                <div className="container container-sm ">
                    <p className='text-20 text-rg'><strong>GCP (Good Clinical Practice):</strong></p>

                    <p className='text-20 text-rg'>  Good Clinical Practice (GCP) is an internationally recognized ethical and scientific standard for designing, conducting, recording, and reporting clinical trials involving human participants. Its central tenet is that clinical trials should be conducted in a way that ensures the rights, safety, and well-being of the subjects are protected, and that trial data are credible and accurate. The GCP principles are rooted in the Declaration of Helsinki and are adopted (and adapted) by regulatory agencies around the world. </p>

                    <p className='text-20 text-rg'>In practice, GCP requires that every trial be governed by a detailed protocol, that investigators and staff are qualified and trained, that informed consent is obtained from participants, and that monitoring, auditing, and quality assurance processes are in place. The documentation of every step is critical, and all data must be handled in a controlled, traceable, and verifiable manner. </p>

                    <p className='text-20 text-rg'>Over time, GCP has been updated (for instance, under ICH E6 revisions) to respond to evolving trial designs, technologies, and expectations. Modern GCP emphasizes risk-based monitoring, greater flexibility in trial design, and integrating electronic systems (while still preserving data integrity).</p>
                    <ul>
                        <p className='text-20 text-rg'><strong>Key points:</strong> </p>
                        <li className='text-20 text-rg text-grey'>Protects participants’ rights, safety, and confidentiality</li>
                        <li className='text-20 text-rg text-grey'>Requires adherence to the approved protocol and ethical oversight </li>
                        <li className='text-20 text-rg text-grey'>Ensures properly trained personnel, monitoring, auditing, and oversight</li>
                        <li className='text-20 text-rg text-grey'>Mandates complete, accurate, and traceable documentation</li>
                        <li className='text-20 text-rg text-grey'>Incorporates risk-based strategies and use of electronic systems (while maintaining integrity) </li>
                    </ul>

                </div>
            </section>

        </main>
    )
}