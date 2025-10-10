"use client"
import EnquiryForm from '@/components/EnquiryForm';
import RegistrationForm from '@/components/RegistrationForm';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type FormType = 'enquiry' | 'registration';


export default function ContactUs() {

    const [formType, setFormType] = useState<FormType>('registration');

    return (
        <>
            <section className='contact-hero'>
                <video src="/images/contactus/Contact-us.mp4" autoPlay loop muted></video>
                <div className="container">
                        <div className="banner-head contact-banner-head">
                            <h1>Let’s Simplify <span>Compliance</span> Together</h1>

                            <p className='text-20 text-grey'>Connect with our team for inquiries, support, or tailored solutions. We’re here to guide you at every step.</p>
                        </div>
                </div>
            </section>

            <section className="section contct-form">
                <div className="container">
                    <div className="contct-head">
                        <div className="head-text">
                            <h2 className='h3'>Get In Touch</h2>

                            <p className='text-20 text-grey'>Have questions, need support, or want a demo? Our team is here to help and respond quickly.</p>
                        </div>
                    </div>

                    <div className="form-container flex justify-between">
                        <div className="form-selection">
                            {/* <div className="form-selection">
                                    <div className="form-type-btn" role="tablist" aria-label="Form Type">
                                        <button role="tab" aria-selected={formType === 'registration'}
                                        tabIndex={formType === 'registration' ? 0 : -1}
                                        className={`text-md btn-padding site-radius-10 ${formType === 'registration' ? 'btn-primary' : 'btn-white'}`}
                                        onClick={() => setFormType('registration')} type="button" >
                                            Registration
                                        </button>

                                        <button role="tab" aria-selected={formType === 'enquiry'}
                                        tabIndex={formType === 'enquiry' ? 0 : -1}
                                        className={`text-md btn-padding site-radius-10 enquiry-btn ${formType === 'enquiry' ? 'btn-primary' : 'btn-white'}`}
                                        onClick={() => setFormType('enquiry')} type="button">
                                            Enquiry
                                        </button>
                                    </div>

                                    <div className="form-fields">
                                        {formType === 'enquiry' ? <EnquiryForm /> : <RegistrationForm />}
                                    </div>
                            </div> */}

                            <div className="form-fields">
                                <EnquiryForm />
                            </div>
                        </div>

                        <div className="contct-info text-center">
                            <div className="info-block phone-info site-radius-10 ">
                                <div className="info-txt">
                                    <span className='icon-add_call h5'></span>

                                    <p className='text-md text-20'><span className='text-grey text-18'>Phone Number</span>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="info-block mail-info site-radius-10 ">
                                <div className="info-txt">
                                    <span className='icon-email h4'></span>

                                    <p className='text-md text-20'><span className='text-grey text-18'>Email Address</span>info@dhatucomply.com</p>
                                </div>
                            </div>

                            <div className="info-block location-info site-radius-10">
                                <div className="info-txt">
                                    <span className='icon-location h4'></span>

                                    <p className='text-md text-20'><span className='text-grey text-18'>Location</span>2445 Oak Ridge Omaha, QA 45065</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>
        </>
    )
}