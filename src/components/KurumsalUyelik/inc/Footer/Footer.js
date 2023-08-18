import React from 'react'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='bg-gradient-to-l from-blue-950 to-site text-white lg:mb-0'>
            <div className="container mx-auto lg:px-0 px-4">
                <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 justify-between items-center h-full text-4xl py-6">
                    <Link href={'/'} className='flex items-center text-3xl lg:w-fit justify-center w-full gap-x-2 uppercase tracking-wider transition-all lg:order-1 order-2'>
                        SİTEYE GİT
                        <BsChevronRight size={36} />
                    </Link>
                    <Link href={''} className='block lg:order-2 order-1'>
                        <Image
                            src={'/logo/logo-white.svg'}
                            width={355}
                            height={66}
                            className='h-12 w-auto'
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer