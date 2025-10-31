import React from 'react'
import ContactComponent from '@/components/ContactPageComponent';
import { fetchGraphQL } from '@/lib/graphql';

type ContactData = {
    page: {
        contactpage: {
            contactHeroTitle: string;
            contactHeroSubtitle: string;
    
            formTitle: string;
            formSubtitle: string;

            phoneNumber: string;
            email: string;
            location: string;
        }
    }
}

export default async function ContactUs() {

    const data = await fetchGraphQL<ContactData>(`
        query {
            page(id: "/contactpage", idType: URI) {
                contactpage {
                   contactHeroTitle
                   contactHeroSubtitle
                   formTitle
                   formSubtitle
                   phoneNumber
                   email
                   location
                }
            }
        }
    `);

    const contact = data.page.contactpage


    return (
        <>
            <ContactComponent contactHeroTitle={contact.contactHeroTitle} contactHeroSubtitle={contact.contactHeroSubtitle} formTitle={contact.formTitle} formSubtitle={contact.formSubtitle} phoneNumber={contact.phoneNumber} email={contact.email} location={contact.location} />
        </>
    )
}