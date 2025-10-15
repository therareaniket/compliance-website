"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function EUAnnex11() {
    return (
        <main className="EUAnnex11main">
            <section className='EUAnnex11hero'>
                <div className="container-sm">
                    <h1 className='h2'>EU Annex 11 (Computerised Systems under GMP) </h1>
                </div>
            </section>

            <section className='EUAnnex11-1 section'>
                <div className="container container-sm ">
                    <p className='text-20 text-rg'>EU Annex 11 is a guideline (part of EudraLex Volume 4) that describes how computerized systems used 
                        in GMP-regulated activities must be managed to maintain data integrity, reliability, and GMP compliance. While not legally binding in 
                        itself, compliance with Annex 11 is regarded as best practice in the EU and inspected by regulators. </p>

                    <p className='text-20 text-rg'>Annex 11 covers the full lifecycle of computerised systems: project planning, system specification, 
                        qualification/validation, commissioning, operation, maintenance, and eventual retirement. <Link href="https://simplerqms.com/eu-annex-11/?utm_source=chatgpt.comKey" title='' className='text-20 text-rg'>https://simplerqms.com/eu-annex-11/?utm_source=chatgpt.comKey</Link>  
                        topics include risk management, change control, supplier assessment, audit trails, electronic signatures, data backup and recovery, and security controls. 
                        The emphasis is on ensuring the computerized system handles processes in a way that remains consistent with GMP expectations for manual or paper systems.  </p>

                    <p className='text-20 text-rg'>One notable feature is the requirement for periodic review of systems to ensure the validated state is maintained,
                         especially after changes, upgrades, or anomalies. Additionally, Annex 11 requires that suppliers and service providers be qualified,
                          that data retention and archiving be robust, and that security (access control, encryption, segregation of duties) be in place.</p>

                    <ul>
                        <p className='text-20 text-rg'><strong>Key points:</strong> </p>
                        <li className='text-20 text-rg text-grey'>Applies to computerized systems in GMP-regulated operations </li>
                        <li className='text-20 text-rg text-grey'>Lifecycle approach: planning → validation → operation → retirement  </li>
                        <li className='text-20 text-rg text-grey'>Use risk management, change control, supplier qualification </li>
                        <li className='text-20 text-rg text-grey'>Audit trails, electronic signatures, data integrity measures essential  </li>
                        <li className='text-20 text-rg text-grey'>Periodic review to maintain validated state </li>
                        <li className='text-20 text-rg text-grey'>Security, backups, access control, data retention & archiving </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}