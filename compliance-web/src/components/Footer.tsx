// "use client"
import Image from 'next/image'
import React from 'react'

export function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="comp-intro">
                        <Image src='/images/footer/logo-footer.svg' alt='logo' width={217} height={31} priority={true} draggable={false} style={{ marginBottom: '20px' }}></Image>

                        <p>Simplifying compliance through smarter monitoring and reporting</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}