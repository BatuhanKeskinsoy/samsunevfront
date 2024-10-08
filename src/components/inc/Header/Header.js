import React, { useState, useEffect } from 'react'
import { HiBars3BottomRight } from "react-icons/hi2"
import Image from "next/image"
import Link from 'next/link'
import NavLinks from '@/components/inc/Header/NavLinks'
import Loading from '@/components/Loading'
import Login from '@/components/auth/Login'
import { Toaster } from 'react-hot-toast';

function Header() {

    const [navStatus, setNavStatus] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    const [isAuthActive, setIsAuthActive] = useState(false)

    const navActive = () => {
        setNavStatus(current => !current)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize, { passive: true }); // Listen for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener
        };
    }, []);


    return (
        <>
            <Loading />
            <Toaster position='top-right' />
            <Login isAuthActive={isAuthActive} setIsAuthActive={setIsAuthActive} />
            <header className="shadow-md relative z-20 bg-white">
                <div className="container mx-auto h-20 lg:h-auto lg:px-0 px-4 flex items-center justify-between relative">
                    <div id="logo" className='h-20 lg:h-auto flex w-full lg:w-fit items-center justify-between lg:relative fixed lg:px-0 px-4 top-0 left-0 bg-white'>
                        <Link href={'/'} title={process.env.NEXT_PUBLIC_SITE_NAME} className='block py-5'>
                            <Image
                                src={'/logo/logo.svg'}
                                title={process.env.NEXT_PUBLIC_SITE_NAME}
                                alt={process.env.NEXT_PUBLIC_SITE_NAME}
                                width={355}
                                height={66}
                                priority
                                className='max-h-10 h-10 w-auto'
                            />
                        </Link>
                        {isMobile && (
                            <button onClick={navActive} id='navBars' aria-label="Menüyü aç/kapat">
                                <HiBars3BottomRight size={48} className="my-3" />
                            </button>
                        )}
                    </div>


                    {(navStatus || !isMobile) && (
                        <NavLinks isAuthActive={isAuthActive} setIsAuthActive={setIsAuthActive} />
                    )}


                </div>
            </header>
        </>
    )
}

export default Header