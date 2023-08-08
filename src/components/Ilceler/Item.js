import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Item() {
    return (
        <li className='lg:w-60 w-full min-w-[150px]'>
            <Link
                href={'/ilanlar'}
                title='Atakum Satılık Daireler'
                className='flex flex-col bg-white rounded-lg overflow-hidden group hover:scale-105 shadow-xl transition-all'
            >
                <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                        src={'/ilceler/atakum.jpg'}
                        fill
                        sizes="(max-width: 768px) 100vw, 15vw"
                        title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        alt='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        className='object-cover object-center transition-all'
                    />
                    <div className='absolute w-full h-full px-4 rounded-b-md transition-all bg-gradient-to-t from-black/50 group-hover:from-site'></div>
                    <div className="absolute w-full h-full justify-end items-center flex text-white text-3xl py-2 flex-col text-center">
                        <span className='tracking-wide drop-shadow-md'>Atakum</span>
                        <small className='text-lg tracking-wide'>Satılık Daireler</small>
                    </div>

                </div>
            </Link>
        </li>
    )
}

function Item2() {
    return (
        <li className='lg:w-60 w-full min-w-[150px]'>
            <Link
                href={'/ilanlar'}
                title='Atakum Satılık Daireler'
                className='flex flex-col bg-white rounded-lg overflow-hidden group hover:scale-105 shadow-xl transition-all'
            >
                <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                        src={'/ilceler/ilkadim.png'}
                        fill
                        sizes="(max-width: 768px) 100vw, 15vw"
                        title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        alt='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        className='object-cover object-center transition-all'
                    />
                    <div className='absolute w-full h-full px-4 rounded-b-md transition-all bg-gradient-to-t from-black/50 group-hover:from-site'></div>
                    <div className="absolute w-full h-full justify-end items-center flex text-white text-3xl py-2 flex-col text-center">
                        <span className='tracking-wide drop-shadow-md'>İlkadım</span>
                        <small className='text-lg tracking-wide'>Satılık Daireler</small>
                    </div>

                </div>
            </Link>
        </li>
    )
}

export { Item, Item2 }