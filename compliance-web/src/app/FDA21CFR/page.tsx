"use client"
import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FDA21CFRPart11 () {
    return (
        <main className="FDA21CFRPart11main inner-page">

            <Header />

            <section className='FDA21CFRPart11hero'>
                <div className="container-sm">
                    <h1 className='h2'>FDA 21 CFR Part 11 (Electronic Records / Electronic Signatures) </h1>
                </div>
            </section>

            <section className='--bg-white FDA21CFRPart11-1 section'>
                <div className="container container-sm ">
                    <p className='text-20 text-rg'>21 CFR Part 11 is a U.S. FDA regulation that defines the conditions under which electronic records and electronic signatures are considered reliable, trustworthy, and equivalent to paper records and handwritten signatures. It applies when records are created, modified, maintained, archived, retrieved, or transmitted electronically in systems subject to FDA regulations (predicate rules). The regulation also addresses when electronic records are submitted to the FDA as part of regulatory requirements. </p>

                    <p className='text-20 text-rg'> Part 11 is divided into three sub-parts: general provisions; electronic records; and electronic signatures. Key requirements include system validation, audit trails, time stamping, access controls, authority checks, and the binding of signatures to records. The aim is to ensure integrity, security, and traceability of data in regulated electronic systems.</p>

                    <p className='text-20 text-rg'>In practice, organizations must define and document standard operating procedures, ensure access controls and unique user IDs, maintain audit logs of changes, and validate the software and hardware systems. When changes are made, re-validation or impact assessment is required to maintain compliance.</p>
                    <ul>
                        <p className='text-20 text-rg'><strong>Key points:</strong> </p>
                        <li className='text-20 text-rg text-grey'>Scope covers FDA “predicate” recordkeeping systems when electronic </li>
                        <li className='text-20 text-rg text-grey'>Must validate systems, ensure accuracy, integrity, and security </li>
                        <li className='text-20 text-rg text-grey'>Maintain audit trails & time-stamps of modifications </li>
                        <li className='text-20 text-rg text-grey'>Use user controls (logins, roles) and link signatures to records </li>
                        <li className='text-20 text-rg text-grey'>Review & revalidate on changes, maintain documentation </li>
                        <li className='text-20 text-rg text-grey'>Electronic signatures must capture printed name, date/time, and meaning of signature </li>
                    </ul>

                </div>
            </section>

        </main>
    )
}