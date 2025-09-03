// "use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <Link href='/'>
                            <Image src='/images/Header/logo-header.svg' alt='logo' width={239} height={34} priority={true}></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}