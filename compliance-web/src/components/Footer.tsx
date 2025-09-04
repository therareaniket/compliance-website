// "use client"
import Image from 'next/image'
import React from 'react'

export function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="comp-intro">
                        <Image src='/images/footer/logo-footer.svg' alt='logo' width={217} height={31} priority={true} draggable={false} style={{ marginBottom: '20px' }}></Image>

                        <p>Simplifying compliance through smarter monitoring and reporting [REMOVE ME]</p>
                    </div>
                    <div className="footer-links">
                        <div className='quick-links text-md'>
                            <p className='text-16 text-md'>Quick Links</p>
                            <ul>
                                <li><a href="" className='text-16 text-rg'>About</a></li>
                                <li><a href="" className='text-16 text-rg'>User & Access</a></li>
                                <li><a href="" className='text-16 text-rg'>Compliance</a></li>
                                <li><a href="" className='text-16 text-rg'>Contact</a></li>
                            </ul>
                        </div>

                        <div className='quick-links legal-info text-md'>
                            <p className='text-16 text-md'>Legal Informations</p>
                            <ul>
                                <li><a href="" className='text-16 text-rg'>Privacy & Policy</a></li>
                                <li><a href="" className='text-16 text-rg'>Terms & Conditions</a></li>
                            </ul>
                        </div>

                        <div className='quick-links contact-info  text-md'>
                            <p className='text-16 text-md'>Contact Info</p>
                            <ul>
                                <div className='email-info'>
                                    <Image src='/images/footer/email.svg' alt='email-svg' width={16} height={16} priority={true}></Image>
                                     <a href="mailto:info@dhatucomply.com" className='text-16 text-rg'>info@dhatucomply.com</a>
                                </div>

                                <div className='email-info mobile-info'>
                                    <Image src='/images/footer/call.svg' alt='call-svg' width={16} height={16} priority={true}></Image>
                                    <a href="" className='text-16 text-rg'>+1 (555) 123-4567</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="copyright-box">
                        <p className='text-14 text-rg'>Powered by DFolds</p>
                        <p className='text-14 text-rg'>DhatuComply 2025.1.1</p>
                        <p className='text-14 text-rg'>Copyright ©2025, all rights reserved. </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}