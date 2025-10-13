"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function CookieNoticePage() {
    return (
        <main className='cookienoticemain'>
            <section className='cookie-hero'>
                <div className="container">
                    <h1 className='h2'>DhatuComply — Cookie Notice</h1>
                </div>
            </section>

            <section className='cookienoticesection-2 container-sm section-sm '>
                <div className="container">
                    <h2 className='h3 text-rg'>1. Types of Cookies We Use</h2>

                    <ul>
                        <li className='text-20 text-rg'><strong>Strictly Necessary —</strong> required for core functionality (authentication, session management, load balancing, fraud prevention, remembering your cookie choices).
                            These cannot be switched off.</li>

                        <li className='text-20 text-rg'><strong>Functionality/Preferences —</strong> remember choices (language, UI layout, tooltips, seen tours).</li>

                        <li className='text-20 text-rg'><strong>Performance/Analytics —</strong> help us understand feature usage and improve reliability (aggregated metrics; IP truncation/anonymization where feasible).</li>

                        <li className='text-20 text-rg'><strong>Advertising/Targeting —</strong> <strong>Not used</strong> for cross‑site behavioral advertising; 
                        we do <strong>not</strong> sell or share Personal Data for such purposes.</li>
                    </ul>
                </div>
            </section>

            <section className='cookienoticesection-3 container-sm'>
                <div className="container">
                    <h2 className='h3 text-rg'>2. How to Control Cookies</h2>

                    <ul>
                        <li className='text-20 text-rg'><strong>Consent Manager —</strong> Use the Manage Cookies link in the site footer (website) or <strong>Settings → Privacy</strong> (in‑product) to set preferences at any time.</li>

                        <li className='text-20 text-rg'><strong>Browser Controls —</strong> You can block/delete cookies via your browser; blocking necessary cookies may impact core functionality.</li>

                        <li className='text-20 text-rg'><strong>Signals —</strong> We honor legally required signals such as <strong>Global Privacy Control (GPC)</strong> where applicable.</li>
                    </ul>
                </div>
            </section>

            <section className='cookienoticesection-4 container-sm section-sm'>
                <div className="container">
                    <h2 className='h3 text-rg'>3. Regions & Legal Bases</h2>

                    <ul>
                        <li className='text-20 text-rg'><strong>EEA/UK/Switzerland/India (DPDP) —</strong> We seek <strong>consent</strong> for non‑essential cookies.</li>

                        <li className='text-20 text-rg'><strong>US State Laws (e.g., CA/CPRA, CO, CT, VA, UT) —</strong> We provide <strong>opt‑out</strong> where applicable; we do not use cross‑context behavioral advertising cookies.</li>
                    </ul>
                </div>
            </section>

            <section className='cookienoticesection-5 container-sm'>
                <div className="container">
                    <h2 className='h3 text-rg'>4. Retention </h2>

                    <ul>
                        <li className='text-20 text-rg'><strong>Session cookies</strong> expire when you close your browser or sign out.</li>

                        <li className='text-20 text-rg'><strong>Persistent cookies</strong> last from <strong>1 day to 13 months</strong> depending on purpose (detailed in the Consent Manager).</li>
                    </ul>
                </div>
            </section>

            <section className='cookienoticesection-6 container-sm section-sm'>
                <div className="container">
                    <h2 className='h3 text-rg'>5. Types of Cookies We Use</h2>

                    <p className='text-20 text-rg'>We may use privacy‑respecting analytics and operational providers. Their cookies (if any) are controlled via the Consent Manager and are subject to DPAs. We do not allow third parties to use our sites for independent advertising tracking.</p>
                </div>
            </section>

            <section className='cookienoticesection-7 container-sm'>
                <div className="container">
                    <h2 className='h3 text-rg'>6. Updates</h2>

                    <p className='text-20 text-rg'>We may update this Notice; the date above reflects the latest version. Material changes will be sign‑posted in the banner or product.</p>
                </div>
            </section>

            <section className='cookienoticesection-8 container-sm section-sm'>
                <div className="container">
                    <h2 className='h3 text-rg'>7. Types of Cookies We Use</h2>

                    <ul>
                        <li className='text-20 text-rg'><strong>Cookie/Privacy questions & data rights: </strong><Link href="mailto:contactus@dfolds.com"  title='' className='text-20 text-rg'>contactus@dfolds.com</Link></li>

                        <li className='text-20 text-rg'><strong>General inquiries: </strong><Link href="mailto:enquiry@dfolds.com"  title='' className='text-20 text-rg'>enquiry@dfolds.com</Link> </li>
                    </ul>
                </div>
            </section>
        </ main>
    )
}