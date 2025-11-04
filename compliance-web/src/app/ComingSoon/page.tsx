"use client"

import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ComingsoonBanner () {
    return (
        <>
            <section className="comingsoon">
                <div className="coming-content">
                    <Image src='/images/coming-soon-vector.svg' alt="coming-soon-vector" width={400} height={260} className="coming-vector"></Image>

                    <h3 className="text-[#3A3A3A]">Compliance Made Simple.</h3>

                    <Image src='/images/coming-soon-dhatu-comply.svg' alt="dhatucomply-logo" width={377} height={54} className="coming-logo"></Image>

                    <h5 className="text-[#3A3A3A] comingsoon-text">Coming Soon</h5>

                    <Link href='/Contact' title="Get Early Access" className="btn-padding btn-primary site-radius-10"> Get Early Access</Link>
                </div>
            </section> 
        </>
    );
} 