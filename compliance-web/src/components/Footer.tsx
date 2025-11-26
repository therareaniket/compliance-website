// "use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchGraphQL } from '@/lib/graphql';

type HomeData = {
    page: {
        homepage: {
            ctaTitle: string;
            ctaLink1?: { url: string; title: string } | null;
            ctaLink2?: { url: string; title: string } | null;
            ctaLink3?: { url: string; title: string } | null;
        };
    };
};

type ContactData = {
    page: {
        contactpage: {
            phoneNumber: string;
            email: string;
        }
    }
}


export async function Footer() {

    const ctadata = await fetchGraphQL<HomeData>(`
        query {
            page(id: "/", idType: URI) {
                homepage {
                    ctaTitle
                    ctaLink1 { url  title }
                    ctaLink2 { url  title }
                    ctaLink3 { url  title }
                }
            }
        }
    `);

    const data = await fetchGraphQL<ContactData>(`
        query {
            page(id: "/contactpage", idType: URI) {
                contactpage {
                   phoneNumber
                   email
                }
            }
        }
    `);

    const contact = data.page.contactpage

    const ctahome = ctadata.page.homepage;

    return (

        <>
            <section className="section hm-cta relative z-[2]">
                        <div className="container">
                            <h2 className="h3 text-center">{ctahome.ctaTitle}</h2>

                            <div className="cta-links text-center">
                                <Link href={ctahome.ctaLink1?.url as string} title={ctahome.ctaLink1?.title} className="btn-padding btn-primary text-md text-18 site-radius-10">{ctahome.ctaLink1?.title}</Link>

                                <Link href={ctahome.ctaLink2?.url as string} title={ctahome.ctaLink2?.title} className="btn-padding btn-white text-md text-18 site-radius-10">{ctahome.ctaLink2?.title}</Link>

                                <Link href={ctahome.ctaLink3?.url as string} title={ctahome.ctaLink3?.title} className="btn-padding btn-white text-md text-18 site-radius-10">{ctahome.ctaLink3?.title}</Link>
                            </div>
                        </div>
            </section>
        
            <footer className='footer'>
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="comp-intro">
                            <Link href="/" title='Home'>
                                <Image src='/images/footer/DhatuComply-footer-logo.svg' alt='logo' width={217} height={31} priority={true} draggable={false} style={{ marginBottom: '20px' }}></Image>
                            </Link>

                            <p>Smarter Monitoring & Reporting for Simplified Compliance</p>
                        </div>
                        <div className="footer-links">
                            <div className='quick-links text-md'>
                                <p className='text-16 text-md'>Quick Links</p>
                                <ul>
                                    <li><Link href="/About" title='' className='text-16 text-rg'>About</Link></li>
                                    <li><Link href="/UserAccess" title='' className='text-16 text-rg'>User & Access</Link></li>
                                    <li><Link href="/Compliance" title='' className='text-16 text-rg'>Compliance</Link></li>
                                    <li><Link href="/Contact" title='' className='text-16 text-rg'>Contact</Link></li>
                                </ul>
                            </div>

                            <div className='quick-links legal-info text-md'>
                                <p className='text-16 text-md'>Legal Informations</p>
                                <ul>
                                    <li><Link href="/PrivacyPolicy" title='' className='text-16 text-rg'>Privacy & Policy</Link></li>
                                    <li><Link href="/TermsandCondition" title='' className='text-16 text-rg'>Terms & Conditions</Link></li>
                                </ul>
                            </div>

                            <div className='quick-links contact-info  text-md'>
                                <p className='text-16 text-md'>Contact Info</p>
                                <ul>
                                    <li className='email-info'>
                                        <Image src='/images/footer/foot-email.svg' alt='email-svg' width={16} height={16} priority={true}></Image>
                                        <Link href="mailto:enquiry@dhatucomply.com" title='' className='text-16 text-rg'>{contact.email}</Link>
                                    </li>

                                    <li className='email-info mobile-info'>
                                        <Image src='/images/footer/foot-call.svg' alt='call-svg' width={16} height={16} priority={true}></Image>
                                        <Link href="#" title='' className='text-16 text-rg'>{contact.phoneNumber}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        <div className="copyright-box">
                            <p className='text-14 text-rg text-grey'>Powered by DFOLDS</p>
                            <p className='text-14 text-rg text-grey'>DhatuComply 2025.1.1</p>
                            <p className='text-14 text-rg text-grey'>Copyright ©{new Date().getFullYear()}, all rights reserved. </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}