// "use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="comp-intro">
                        <Image src='/images/footer/logo-footer.svg' alt='logo' width={217} height={31} priority={true} draggable={false} style={{ marginBottom: '20px' }}></Image>

                        <p>Simplifying compliance through smarter monitoring and reporting</p>
                    </div>
                    <div className="footer-links">
                        <div className='quick-links text-md'>
                            <p className='text-16 text-md'>Quick Links</p>
                            <ul>
                                <li><Link href="#" title='' className='text-16 text-rg'>About</Link></li>
                                <li><Link href="#" title='' className='text-16 text-rg'>User & Access</Link></li>
                                <li><Link href="#" title='' className='text-16 text-rg'>Compliance</Link></li>
                                <li><Link href="#" title='' className='text-16 text-rg'>Contact</Link></li>
                            </ul>
                        </div>

                        <div className='quick-links legal-info text-md'>
                            <p className='text-16 text-md'>Legal Informations</p>
                            <ul>
                                <li><Link href="#" title='' className='text-16 text-rg'>Privacy & Policy</Link></li>
                                <li><Link href="#" title='' className='text-16 text-rg'>Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        <div className='quick-links contact-info  text-md'>
                            <p className='text-16 text-md'>Contact Info</p>
                            <ul>
                                <div className='email-info'>
                                    <Image src='/images/footer/foot-email.svg' alt='email-svg' width={16} height={16} priority={true}></Image>
                                     <Link href="mailto:info@dhatucomply.com" title='' className='text-16 text-rg'>info@dhatucomply.com</Link>
                                </div>

                                <div className='email-info mobile-info'>
                                    <Image src='/images/footer/foot-call.svg' alt='call-svg' width={16} height={16} priority={true}></Image>
                                    <Link href="#" title='' className='text-16 text-rg'>+1 (555) 123-4567</Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="copyright-box">
                        <p className='text-14 text-rg'>Powered by DFOLDS</p>
                        <p className='text-14 text-rg'>DhatuComply 2025.1.1</p>
                        <p className='text-14 text-rg'>Copyright ©2025, all rights reserved. </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}