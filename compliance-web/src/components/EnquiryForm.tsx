// import React from 'react'

// export default function EnquiryForm() {
//     return (
//         <>
//             <form action="" method="post" aria-label="Enquiry form">
//                 <div className="form-row">
//                     <div className="form-col">
//                         <label htmlFor="enq-name" className="text-18">Name<sup className="text-18">*</sup></label>
//                         <input id="enq-name" name="name" placeholder="Enter your name" className="site-radius-10 text-20" type="text" required />
//                     </div>

//                     <div className="form-col">
//                         <label htmlFor="enq-email" className="text-18">Email<sup className="text-18">*</sup></label>
//                         <input id="enq-email" name="email" placeholder="Enter your mail" className="site-radius-10 text-20" type="email" required />
//                     </div>

//                     <div className="form-col">
//                         <label htmlFor="enq-org" className="text-18">Organization<sup className="text-18">*</sup></label>
//                         <input id="enq-org" name="organization" placeholder="Enter your organization" className="site-radius-10 text-20" type="text" required />
//                     </div>

//                     <div className="form-col">
//                         <label htmlFor="enq-message" className="text-18">Message</label>
//                         <textarea rows={6} id="enq-message" name="message" placeholder="Enter your message" className="site-radius-10 text-20" />
//                     </div>
//                 </div>

//                 <button type="submit" className="text-md btn-padding btn-primary site-radius-10">Let’s Connect</button>
//             </form>
//         </>
//     );
// }



// APP ROUTER CODE

'use client';

import { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! We\'ll get back to you soon.',
        });
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.message && (
        <div className={`p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {status.message}
        </div>
      )}
      
      <div className="form-col">
        <label htmlFor="name" className="block mb-2">Name <sup className="text-18">*</sup></label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border site-radius-10" />
      </div>

      <div className="form-col">
        <label htmlFor="email" className="block mb-2">Email <sup className="text-18">*</sup></label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border site-radius-10" />
      </div>

      <div className="form-col">
        <label htmlFor="phone" className="block mb-2">Phone <sup className="text-18">*</sup></label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border site-radius-10" />
      </div>

      <div className="form-col">
        <label htmlFor="message" className="block mb-2">Message <sup className="text-18">*</sup></label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full p-2 border site-radius-10" />
      </div>

      <button type="submit" disabled={isSubmitting} className="text-md btn-padding btn-primary site-radius-10" >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
