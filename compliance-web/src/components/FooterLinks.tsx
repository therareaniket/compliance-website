"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLinks() {
    const pathname = usePathname();
    
    return (
        <>
            <div className='quick-links text-md'>
                <p className='text-16 text-md'>Quick Links</p>
                <ul className='text-16 text-rg'>
                    <li><Link href="/About" className={pathname === "/About" ? "active-link" : "text-16 text-rg"} title=''>About</Link></li>
                    <li><Link href="/UserAccess" className={pathname === "/UserAccess" ? "active-link" : "text-16 text-rg"} title=''>User & Access</Link></li>
                    <li><Link href="/Compliance" className={pathname === "/Compliance" ? "active-link" : "text-16 text-rg"} title=''>Compliance</Link></li>
                    <li><Link href="/Contact" className={pathname === "/Contact" ? "active-link" : "text-16 text-rg"} title=''>Contact</Link></li>
                </ul>
            </div>

            <div className='quick-links legal-info text-md'>
                <p className='text-16 text-md'>Legal Informations</p>
                <ul className='text-16 text-rg'>
                    <li><Link href="/PrivacyPolicy" className={pathname === "/PrivacyPolicy" ? "active-link" : "text-16 text-rg"} title=''>Privacy & Policy</Link></li>
                    <li><Link href="/TermsandCondition" className={pathname === "/TermsandCondition" ? "active-link" : "text-16 text-rg"} title=''>Terms & Conditions</Link></li>
                </ul>
            </div>
        </>
    );
}
