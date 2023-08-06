import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsHouseDoor, BsDoorClosed, BsLayers, BsArrowsMove, BsCalendarPlus } from 'react-icons/bs'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function Item() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleUnhover = () => {
        setIsHovered(false);
    };

    const imageSrc = isHovered ? '/ilanlar/ilan2.jpg' : '/ilanlar/ilan1.jpg';

    return (
        <li className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-full lg:px-4 py-4'>
            <Link
                href={'/'}
                title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden group'
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            >
                <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        alt='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        className='object-cover object-center transition-all'
                    />
                    <div className='absolute bottom-2 left-2 bg-white py-2 px-4 rounded-md group-hover:bg-site group-hover:text-white transition-all'>7.750.000 ₺</div>
                </div>
                <div className="flex flex-col">
                    <div className="p-4 flex flex-col gap-y-2">
                        <h4 className='line-clamp-1 font-bold tracking-wide text-md group-hover:text-site transition-all'>
                            Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa
                        </h4>
                        <span className='line-clamp-1 text-gray-600 text-sm'>Denizevleri Mahallesi - Atakum / Samsun</span>
                        <div className="flex flex-wrap gap-3">
                            <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                <BsHouseDoor />
                                Daire
                            </span>
                            <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                <BsDoorClosed />
                                3+1
                            </span>
                            <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                <BsLayers />
                                Zemin Kat
                            </span>
                            <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                <BsArrowsMove />
                                135m² {/* alt + 0178 */}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="bg-white group-hover:bg-site group-hover:text-white  py-3 px-4 text-sm flex justify-between items-center transition-all text-gray-600">
                        <div className="flex items-center gap-x-2">
                            <BsCalendarPlus />
                            <span>5 Ağustos 2023</span>
                        </div>
                        <div className="flex justify-between hover:w-full">
                            <span className='tracking-wide group-hover:hidden w-fit'>Satılık</span>
                            <AiOutlineDoubleRight size={20} className='w-0 group-hover:w-fit opacity-0 invisible group-hover:opacity-100 text-white group-hover:visible transition-all -translate-x-2 group-hover:translate-x-0' />
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Item