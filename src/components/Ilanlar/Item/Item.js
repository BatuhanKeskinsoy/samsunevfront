import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsHouseDoor, BsDoorClosed, BsLayers, BsArrowsMove, BsCalendarPlus } from 'react-icons/bs'
import { AiOutlineDoubleRight } from 'react-icons/ai'



function Item(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleUnhover = () => {
        setIsHovered(false);
    };

    const imageSrc = isHovered ? '/ilanlar/ilan2.jpg' : '/ilanlar/ilan1.jpg';

    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    return (
        <li className={`${props.itemWidth} md:p-4 p-0 py-4`}>
            <Link
                href={'/ilan-detay'}
                title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                className='flex flex-col bg-white rounded-lg overflow-hidden group'
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
                    <div className='absolute bottom-2 left-2 bg-white py-2 px-4 rounded-md text-base group-hover:bg-site group-hover:text-white tracking-wide transition-all'>7.750.000 ₺</div>
                    <div className='absolute top-2 right-2 bg-white text-sm p-2 flex flex-col items-center rounded-md font-bold'>
                        <span className='text-3xl -my-1'>
                            {String(new Date().getDate()).padStart(2, '0')}
                        </span>
                        <span className='text-xs mt-0.5'>
                            {months[new Date().getMonth()]}
                        </span>
                        <span className='text-sm mt-0.5 -mb-0.5'>
                            {new Date().getFullYear()}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="p-4 flex flex-col gap-y-2">
                        <h4 className='font-bold tracking-wide text-base group-hover:text-site transition-all'>
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
                        <span className='tracking-wide w-fit'>Samsun Satılık Daire</span>
                        <div className="flex justify-between">
                            <AiOutlineDoubleRight size={20} className='w-0 group-hover:w-fit opacity-0 invisible group-hover:opacity-100 text-white group-hover:visible transition-all -translate-x-2 group-hover:translate-x-0' />
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Item