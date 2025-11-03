"use client"
import { Header } from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function NotFound() {
    return (
        <main className="NotFoundmain inner-page">

            <Header />

            <section>
                <div className="">
                    <div className="not-found-content relative">
                        <Image src="/images/404-bg.webp" alt='404-background' width={1920} height={1080} className="image-bg-404"></Image>

                        <Image src="/images/svg-not-found.svg" alt="Not Found" width={730} height={543} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] image-svg-404' />
                    </div>
                </div>
            </section>

        </main>
    )
}