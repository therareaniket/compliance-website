"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Header() {
    return (
        <header style={{ position:'sticky', top:'0', backgroundColor:'white', zIndex:'9999' }}>
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <Link href='/' title=''>
                            <Image src='/images/header/logo-header.svg' alt='logo' width={239} height={34} priority={true}></Image>
                        </Link>
                    </div>

                    <div className="navbar-links">
                        <ul className='text-18'>
                            <li>
                                <Link href='/About' title='About'>About</Link>
                            </li>
                            <li>
                                <Link href='#' title='User & Access'>User & Access</Link>
                            </li>
                            <li>
                                <Link href='/Compliance' title='Compliance'>Compliance</Link>
                            </li>
                            <li>
                                <Link href='#' title='Contact'>Contact</Link>
                            </li>
                        </ul>
                        
                        <button className='nav-signup text-18 text-md site-radius-10 cursor-pointer' type='button' onClick={() => alert("Later redirected to the Registration Form")}>Sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}