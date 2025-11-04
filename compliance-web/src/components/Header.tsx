"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const hamburgerRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     const onScroll = () => setScrolled(window.scrollY > 800 )
    //     onScroll()
    //     window.addEventListener('scroll', onScroll, { passive: true })
    //     return () => window.removeEventListener('scroll', onScroll)
    //   }, []);

    useEffect(() => {
        const getScrollLimit = () => {
        //   const width = window.innerWidth;

        //     if (width <= 575) return 300;
        //     if (width <= 1023) return 500;
        //     if (width <= 1200) return 400;
        //     if (width <= 1450) return 500;
        //     if (width <= 1600) return 610;
        //     if (width <= 1800) return 650;
        //   return 720;
        
            return 150;
        };
      
        const onScroll = () => {
          const scrollLimit = getScrollLimit();
          setScrolled(window.scrollY > scrollLimit);
        };
      
        onScroll(); // run once initially
        window.addEventListener("scroll", onScroll, { passive: true });
      
        return () => window.removeEventListener("scroll", onScroll);
      }, []);


useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            if ( menuRef.current && !menuRef.current.contains(target) && hamburgerRef.current && !hamburgerRef.current.contains(target) ) {
                setMenuOpen(false)
            }
        }

        if (menuOpen) { document.addEventListener('mousedown', handleClickOutside) }
        return () => { document.removeEventListener('mousedown', handleClickOutside) }

    }, [menuOpen])

      
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    
   const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <header className={`header-main ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <Link href='/' title=''>
                            {/* <Image src='/images/header/logo-header.svg' alt='logo' width={239} height={34} priority={true}></Image> */}
                            <Image src='https://rarepixelsdesign.com/wp-content/uploads/2025/10/main-logo.svg' alt='logo' width={239} height={34} priority={true}></Image>
                        </Link>
                    </div>

                    <div ref={menuRef} className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                        <ul className='text-18'>
                            <li>
                                <Link onClick={handleLinkClick} href='/About' title='About' >About</Link>
                            </li>
                            <li>
                                <Link onClick={handleLinkClick} href='/UserAccess' title='User & Access'>User & Access</Link>
                            </li>
                            <li>
                                <Link onClick={handleLinkClick} href='/Compliance' title='Compliance'>Compliance</Link>
                            </li>
                        </ul>
                        
                        <Link onClick={handleLinkClick} href='/Contact' className='nav-signup text-18 text-md site-radius-10'>Contact</Link>
                    </div>

                    <div ref={hamburgerRef} className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} id='hamburger'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>
        </header>
    )
}