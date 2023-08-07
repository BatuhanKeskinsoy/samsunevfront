import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCalendarPlus } from 'react-icons/bs'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function Item() {
    return (
        <li className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-full md:p-4 p-0 py-4'>
            <Link
                href={'/'}
                title='Emlak Haberi'
                className='flex flex-col bg-white rounded-lg overflow-hidden group'
            >
                <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                        src={'/haberler/haber1.png'}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        title='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        alt='Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa'
                        className='object-cover object-center transition-all'
                    />
                </div>
                <div className="flex flex-col">
                    <div className="p-4 flex flex-col gap-y-2">
                        <h4 className='line-clamp-1 font-bold tracking-wide text-base group-hover:text-site transition-all'>
                            Emlak Haberleri için bir adet blog yazısı
                        </h4>
                        <span className='line-clamp-3 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quod quas molestias commodi repudiandae a, consequatur enim error repellat ab quidem itaque omnis qui explicabo eligendi. Unde, fugiat? Nesciunt, pariatur!</span>
                    </div>
                    <hr />
                    <div className="bg-white group-hover:bg-site group-hover:text-white  py-3 px-4 text-sm flex justify-between items-center transition-all text-gray-600">
                        <div className="flex items-center gap-x-2">
                            <BsCalendarPlus />
                            <span>5 Ağustos 2023</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='tracking-wide group-hover:hidden w-fit'>Haberi Oku</span>
                            <AiOutlineDoubleRight size={20} className='w-0 group-hover:w-fit opacity-0 invisible group-hover:opacity-100 text-white group-hover:visible transition-all -translate-x-2 group-hover:translate-x-0' />
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Item