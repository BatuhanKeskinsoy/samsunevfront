import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Item({ county }) {
    return (
        <li className='lg:w-60 w-full min-w-[150px]'>
            <Link
                href={`ilanlar/samsun/${county.countie_slug}/satilik-daireler`}
                title={`Samsun ${county.countie} Satılık Daireler`}
                className='flex flex-col bg-white rounded-lg overflow-hidden group hover:scale-105 shadow-xl transition-all'
            >
                <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                        src={'/ilceler/atakum.jpg'}
                        fill
                        sizes="(max-width: 768px) 100vw, 15vw"
                        title={`Samsun ${county.countie} Satılık Daireler`}
                        alt={`Samsun ${county.countie} Satılık Daireler`}
                        className='object-cover object-center transition-all'
                    />
                    <div className='absolute w-full h-full px-4 rounded-b-md transition-all bg-gradient-to-t from-black/50 group-hover:from-site'></div>
                    <div className="absolute w-full h-full justify-end items-center flex text-white text-3xl py-2 flex-col text-center">
                        <span className='tracking-wide drop-shadow-md'>{county.countie}</span>
                        <small className='text-lg tracking-wide'>Satılık Daireler</small>
                    </div>

                </div>
            </Link>
        </li>
    )
}

export default Item 