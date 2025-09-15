import React from 'react'

export default function EnquiryForm() {
    return (
        <>
            <form action="" method="post" aria-label="Enquiry form">
                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="enq-name" className="text-18">Name<sup className="text-18">*</sup></label>
                        <input id="enq-name" name="name" placeholder="Enter your name" className="site-radius-10 text-20" type="text" required />
                    </div>

                    <div className="form-col">
                        <label htmlFor="enq-email" className="text-18">Email<sup className="text-18">*</sup></label>
                        <input id="enq-email" name="email" placeholder="Enter your mail" className="site-radius-10 text-20" type="email" required />
                    </div>

                    <div className="form-col">
                        <label htmlFor="enq-org" className="text-18">Organization<sup className="text-18">*</sup></label>
                        <input id="enq-org" name="organization" placeholder="Enter your organization" className="site-radius-10 text-20" type="text" required />
                    </div>

                    <div className="form-col">
                        <label htmlFor="enq-message" className="text-18">Message</label>
                        <textarea rows={6} id="enq-message" name="message" placeholder="Enter your message" className="site-radius-10 text-20" />
                    </div>
                </div>

                <button type="submit" className="text-md btn-padding btn-primary site-radius-10">Let’s Connect</button>
            </form>
        </>
    );
}