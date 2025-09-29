"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
      }, []);

      
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };


    return (
        <header style={{ position:'sticky', top:'0', backgroundColor:'white', zIndex:'9999' }} className={`header-main ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <Link href='/' title=''>
                            {/* <Image src='/images/header/logo-header.svg' alt='logo' width={239} height={34} priority={true}></Image> */}
                            <Image src='https://rarepixelsdesign.com/wp-content/uploads/2025/09/logo-header.svg' alt='logo' width={239} height={34} priority={true}></Image>
                        </Link>
                    </div>

                    <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                        <ul className='text-18'>
                            <li>
                                <Link href='/About' title='About'>About</Link>
                            </li>
                            <li>
                                <Link href='/UserAccess' title='User & Access'>User & Access</Link>
                            </li>
                            <li>
                                <Link href='/Compliance' title='Compliance'>Compliance</Link>
                            </li>
                        </ul>
                        
                        <Link href='/Contact' className='nav-signup text-18 text-md site-radius-10'>Contact</Link>
                    </div>

                    <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} id='hamburger'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>
        </header>
    )
}