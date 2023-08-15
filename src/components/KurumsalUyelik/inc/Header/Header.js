import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

function Header() {
    return (
        <header className='bg-blue-950 text-white'>
            <div className="lg:h-[104px] h-[136px] flex lg:justify-start justify-center">
                <div className="flex lg:flex-row flex-col items-center lg:justify-between bg-blue-950 fixed top-0 w-full">
                    <Link href={''} className='block lg:p-6 p-4'>
                        <Image
                            src={'/logo/logo-white.svg'}
                            width={355}
                            height={66}
                            className='h-14 w-auto'
                        />
                    </Link>
                    <div className="flex items-center gap-x-8">
                        <button className='lg:p-6 p-4 bg-site'>
                            Section 1
                        </button>
                        <button>
                            Section 2
                        </button>
                        <button>
                            Section 3
                        </button>
                    </div>
                    <div className="lg:relative fixed bottom-0 bg-blue-950 lg:w-fit w-full lg:py-0 py-4 flex px-4">
                        <Link href={'/'} className='flex items-center justify-between w-full text-2xl gap-x-2 uppercase tracking-wider lg:hover:scale-110 transition-all'>
                            SİTEYE GİT
                            <BsChevronRight size={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header