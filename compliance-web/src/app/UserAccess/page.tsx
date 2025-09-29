"use client"
import Image from 'next/image'
import React from 'react'

export default function UserAccess() {
    return (
        <>
            <section className='user-access-hero'>
                <div className="container">
                    <div className="user-access-hero-wrapper">
                        <div className="user-access-hero-head">
                            <h1>User Roles and Access Management</h1>

                            <p className='hero-section-para text-rg text-20'>Driving compliance and transparency by defining clear permissions responsibilities and secure access for every role across the system</p>
                        </div>

                        <div>
                            <Image src='/images/userAccess/heroImg.webp' alt='hero-card' width={809} height={634} priority={false}></Image>
                        </div>
                    </div>
                </div>
            </section>

            <section className='roles-card-section'>
                <div className="container">
                    <div className="roles-wrapper">
                        <h2 className='h3 text-md'>Defining Roles for Secure and Compliant Operations</h2>

                        <div className="role-card-wrapper">
                            <div className="role-account-admin bg-blue">
                                <div className="account-admin-main-text">
                                    <div className="account-admin-text ">
                                        <h3 className='h4 text-md'>Account Admin</h3>

                                        <p className='text-grey'>Full access to manage account settings, users, and security</p>
                                    </div>
                                    <div className='account-admin-pointers'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li className='text-20 text-grey text-rg'><p>Manage and oversee all users, roles, and permissions to ensure appropriate access levels throughout the account.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Monitor billing, subscriptions, and financial transactions to ensure accurate account management.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Enforce security protocols and policies to protect account data and prevent unauthorized access.</p></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className='roles-images'>
                                    <Image src='/images/userAccess/accountAdminImg.webp' alt='account-admin' width={513} height={510} priority={false}></Image>
                                </div>
                            </div>

                            <div className="role-account-admin card-row-reverse bg-yellow">
                                <div className="account-admin-main-text">
                                    <div className="account-admin-text ">
                                        <h3 className='h4 text-md'>Compliance Officer</h3>

                                        <p className='text-grey'>Oversees organizational compliance and regulatory adherence</p>
                                    </div>
                                    <div className='account-admin-pointers'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li className='text-20 text-grey text-rg'><p>Develop, implement, and enforce compliance policies and procedures across the organization.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Continuously monitor adherence to external regulations and internal standards to mitigate risk.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Conduct detailed risk assessments and recommend actionable measures for improvement.</p></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="roles-images">
                                    <Image src='/images/userAccess/offerCardImg.webp' alt='account-admin' width={510} height={510} priority={false}></Image>
                                </div> 
                            </div>

                            <div className="role-account-admin bg-purplish">
                                <div className="account-admin-main-text">
                                    <div className="account-admin-text ">
                                        <h3 className='h4 text-md'>Compliance Contributor</h3>

                                        <p className='text-grey'>Supports compliance operations by creating and maintaining documentation</p>
                                    </div>
                                    <div className='account-admin-pointers'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li className='text-20 text-grey text-rg'><p>Create, update, and maintain compliance records and documentation to ensure accuracy.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Prepare and submit reports or data for review by compliance officers in a timely manner.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Assist in organizing and maintaining regulatory documents and reference materials.</p></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="roles-images">
                                    <Image src='/images/userAccess/contributionCardImg.webp' alt='account-admin' width={506} height={510} priority={false}></Image>
                                </div>
                            </div>

                            <div className="role-account-admin card-row-reverse orange-tint">
                                <div className="account-admin-main-text">
                                    <div className="account-admin-text ">
                                        <h3 className='h4 text-md'>Compliance Auditor</h3>

                                        <p className='text-grey'>Reviews compliance activities to ensure accuracy and accountability</p>
                                    </div>
                                    <div className='account-admin-pointers'>
                                        <h4 className='h6'>Responsibilities</h4>

                                        <ul>
                                            <li className='text-20 text-grey text-rg'><p>Examine compliance records and operational activities to verify accuracy and adherence to policies.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Identify gaps, inconsistencies, or non-compliance issues and propose corrective actions.</p></li>
                                            <li className='text-20 text-grey text-rg'><p>Ensure accountability, traceability of compliance processes through thorough review and documentation.</p></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='roles-images'>
                                    <Image src='/images/userAccess/auditorCardImg.webp' alt='account-admin' width={441} height={510} priority={false}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='secure-portal-wrapper'>
                <div className="container">
                    <div className='secure-portal-section'>
                        <div className='secure-portal-text'>
                            <h2 className='h3 text-rg'>Complete Onboarding Process for Secure Portal Access</h2>

                            <p className='text-20 text-rg text-grey'>A structured step by step onboarding guide designed to provide secure compliant and role based access to the portal covering registration verification role assignment and final access</p>
                        </div>

                        <div className='access-portal-path'>
                            <div className='path-line' >
                                <Image className='path-line' src='/images/userAccess/access-portal-path-line.webp' alt='path-line' width={1238} height={425} priority={false}></Image>
                            </div>

                            <div className='path-images'>
                                <Image className='path-1' src='/images/userAccess/access-portal-path-1.webp' alt='path-line' width={450} height={160} priority={false}></Image>

                                <Image className='path-2' src='/images/userAccess/access-portal-path-2.webp' alt='path-line' width={450} height={160} priority={false}></Image>

                                <Image className='path-3' src='/images/userAccess/access-portal-path-3.webp' alt='path-line' width={450} height={160} priority={false}></Image>

                                <Image className='path-4' src='/images/userAccess/access-portal-path-4.webp' alt='path-line' width={450} height={160} priority={false}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}