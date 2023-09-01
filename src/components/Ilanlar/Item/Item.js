import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsHouseDoor, BsDoorClosed, BsLayers, BsArrowsMove } from 'react-icons/bs'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function ItemGrid(props) {

    const {
        realestate,
        itemWidth,
        titleLineClamp,
    } = props

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleUnhover = () => {
        setIsHovered(false);
    };

    const imageSrc = isHovered ? 'ilanlar/ilan2.jpg' : 'ilanlar/ilan1.jpg';

    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
        return formattedDate;
    }

    return (
        <li className={`${itemWidth} md:p-4 p-0 py-4`}>
            <Link
                href={'/ilan-detay'}
                title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                className='flex flex-col bg-white rounded-lg overflow-hidden group'
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            >
                <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                        src={`/${imageSrc}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        alt='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        priority
                        className='object-cover object-center transition-all'
                    />
                    <div className='absolute bottom-2 left-2 bg-white py-2 px-4 rounded-md text-base group-hover:bg-site group-hover:text-white tracking-wide transition-all'>{realestate.price} ₺</div>
                    <div className='absolute top-2 right-2 bg-white text-sm p-2 flex flex-col items-center rounded-md font-bold'>
                        <span className='text-3xl -my-1'>
                            {String(new Date(realestate.created_at).getDate()).padStart(2, '0')}
                        </span>
                        <span className='text-xs mt-0.5'>
                            {months[new Date(realestate.created_at).getMonth()]}
                        </span>
                        <span className='text-sm mt-0.5 -mb-0.5'>
                            {new Date(realestate.created_at).getFullYear()}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="p-4 flex flex-col gap-y-2">
                        <h4 className={`${titleLineClamp} font-bold tracking-wide text-base group-hover:text-site transition-all`}>
                            {realestate.name}
                        </h4>
                        <span className='line-clamp-1 text-gray-600 text-sm'>{realestate.neighbourhood} - {realestate.city} / {realestate.district}</span>
                        {realestate.detail && (
                            <div className="flex flex-wrap gap-3">
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsHouseDoor />
                                    {realestate.detail.property_type}
                                </span>
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsDoorClosed />
                                    {realestate.detail.room_count}
                                </span>
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsLayers />
                                    {realestate.detail.floor_location}
                                </span>
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsArrowsMove />
                                    {realestate.detail.net_square_meters}m² {/* alt + 0178 */}
                                </span>
                            </div>
                        )}
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

function ItemList(props) {

    const {
        realestate,
        itemWidth,
        titleLineClamp,
    } = props

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleUnhover = () => {
        setIsHovered(false);
    };

    const imageSrc = isHovered ? 'ilanlar/ilan2.jpg' : 'ilanlar/ilan1.jpg';

    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
        return formattedDate;
    }

    return (
        <li className={`w-1/2 md:p-4 p-0 py-4`}>
            <Link
                href={'/ilan-detay'}
                title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                className='flex bg-white hover:bg-site/10 rounded-lg overflow-hidden group w-full h-full transition-all'
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            >
                <div className="relative min-h-[150px] lg:min-w-[200px] lg:w-[200px] w-full overflow-hidden">
                    <Image
                        src={`/${imageSrc}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        alt='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        priority
                        className='object-cover object-center transition-all'
                    />
                </div>
                <div className="px-4 py-2 flex flex-col h-full w-full">
                    <div className="flex flex-col h-full gap-y-2 mt-2">
                        <h4 className={`${titleLineClamp} font-bold tracking-wide text-xl group-hover:text-site transition-all`}>
                            {realestate.name}
                        </h4>
                        <span className='line-clamp-1 text-gray-600 text-sm'>{realestate.neighbourhood} - {realestate.city} / {realestate.district}</span>
                        {realestate.detail && (
                            <div className="flex flex-wrap gap-3">
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsHouseDoor />
                                    {realestate.detail.property_type}
                                </span>
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsDoorClosed />
                                    {realestate.detail.room_count}
                                </span>
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsLayers />
                                    {realestate.detail.floor_location}
                                </span>
                                <span className='flex text-sm items-center gap-x-1 text-gray-600'>
                                    <BsArrowsMove />
                                    {realestate.detail.net_square_meters}m² {/* alt + 0178 */}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between items-end">
                        <div className='text-gray-400 flex items-center rounded-md gap-1'>
                            <span>
                                {String(new Date(realestate.created_at).getDate()).padStart(2, '0')}
                            </span>
                            <span>
                                {months[new Date(realestate.created_at).getMonth()]}
                            </span>
                            <span>
                                {new Date(realestate.created_at).getFullYear()}
                            </span>
                        </div>

                        <div className='text-site/90 group-hover:text-site tracking-wide transition-all font-bold text-lg'>{realestate.price} ₺</div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export { ItemGrid, ItemList }