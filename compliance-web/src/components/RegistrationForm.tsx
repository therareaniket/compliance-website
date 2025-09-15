import React from 'react'
import { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"

function validateWorkEmail(email:string) {
    const freeProviders = [
      'gmail.com', 'yahoo.com', 'yahoo.co.uk', 'hotmail.com', 
      'outlook.com', 'aol.com', 'icloud.com', 'me.com', 
      'live.com', 'msn.com', 'ymail.com', 'rediffmail.com'
    ];
    
    // Fix: get domain part after '@'
    const domain = email.split('@')[1]?.toLowerCase();
    return !!domain && !freeProviders.includes(domain);
  }

export default function RegistrationForm() {
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = String(formData.get('workMail') || '');
        
        if (!validateWorkEmail(email)) {
          setError('Please use your work email address.');
          return;
        }
        
        setError('');
        console.log('Form submitted successfully');
      };
    return (
        <>
            <form action="" method="post" aria-label="Registration form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="reg-fullname" className="text-18">Name<sup className="text-18">*</sup></label>

                        <input id="reg-fullname" name="reg-Name" placeholder="Enter your name" className="site-radius-10 text-20" type="text" required />
                    </div>

                    <div className="form-col">
                        <label htmlFor="reg-org" className="text-18">Organization<sup className="text-18">*</sup></label>

                        <input id="reg-org" name="reg-organization" placeholder="Enter your organization" className="site-radius-10 text-20" type="text" required />
                    </div>

                    <div className="form-col institute-selection">
                        <label htmlFor="reg-institution" className="text-18">Institution Type<sup className="text-18">*</sup></label>

                        <Select>
                            <SelectTrigger className="selections text-18">
                                <SelectValue placeholder="Select institution type" />
                            </SelectTrigger>

                            <SelectContent className='text-18'>
                                <SelectItem value="Institution 1" className='selection-content text-16'>Institution 1</SelectItem>
                                <SelectItem value="Institution 2" className='selection-content text-16'>Institution 2</SelectItem>
                                <SelectItem value="Institution 3" className='selection-content text-16'>Institution 3</SelectItem>
                                <SelectItem value="Institution 4" className='selection-content text-16'>Institution 4</SelectItem>
                                <SelectItem value="Institution 5" className='selection-content text-16'>Institution 5</SelectItem>
                                <SelectItem value="Institution 6" className='selection-content text-16'>Institution 6</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="form-col region-country">
                        <label htmlFor="reg-country" className="text-18">Region/Country<sup className="text-18">*</sup></label>

                        <Select>
                            <SelectTrigger className="selections text-18">
                                <SelectValue placeholder="Select country" />
                            </SelectTrigger>

                            <SelectContent className='text-18'>
                                <SelectItem value="Country 1" className='selection-content text-16'>Country 1</SelectItem>
                                <SelectItem value="Country 2" className='selection-content text-16'>Country 2</SelectItem>
                                <SelectItem value="Country 3" className='selection-content text-16'>Country 3</SelectItem>
                                <SelectItem value="Country 4" className='selection-content text-16'>Country 4</SelectItem>
                                <SelectItem value="Country 5" className='selection-content text-16'>Country 5</SelectItem>
                                <SelectItem value="Country 6" className='selection-content text-16'>Country 6</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="form-col">
                        <label htmlFor="reg-work-mail" className="text-18">Work Email<sup className="text-18">*</sup></label>
                        <input id="reg-work-mail" name="workMail" placeholder="Enter your mail" className="site-radius-10 text-20" type="email" required />
                        {error && <p style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>{error}</p>}
                    </div>

                    <div className="form-col">
                        <label htmlFor="reg-job-title" className="text-18">Job Title/Role<sup className="text-18">*</sup></label>
                        <input id="reg-job-title" name="jobTitle" placeholder="Enter your role" className="site-radius-10 text-20" type="text" required />
                    </div>

                    <div className="form-col">
                        <label htmlFor="reg-use-case" className="text-18">Intended Use Case</label>
                        <textarea rows={6} id="reg-use-case" name="use-case" placeholder="Describe how you’ll use DhatuComply for managing compliance" className="site-radius-10 text-20" />
                    </div>
                </div>

                <button type="submit" className="text-md btn-padding btn-primary site-radius-10">Let’s Connect</button>
            </form>
        </>
    );
}