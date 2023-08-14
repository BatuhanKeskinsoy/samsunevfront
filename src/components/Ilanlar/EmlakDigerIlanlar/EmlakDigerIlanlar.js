import React from 'react'
import Item from '@/components/Ilanlar/Item/Item'
import Link from 'next/link'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function EmlakDigerIlanlar() {
    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full'
    return (
        <section className='lg:my-12 my-6'>
            <h2 className='lg:text-3xl text-2xl lg:mb-8 mb-6 tracking-wide'>Yaprak Emlak <strong className='text-site'>Samsun İlanları</strong></h2>
            <ul className="flex flex-wrap">
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />

                <div className='w-full lg:mt-8'>
                    <Link
                        href={'/ilanlar'}
                        className='mx-auto justify-center min-w-fit lg:w-fit w-full text-site transition-all rounded-md py-3 px-6 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/90 hover:bg-site text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-xl'
                    >
                        Tüm İlanlar
                        <AiOutlineDoubleRight size={24} />
                    </Link>
                </div>
            </ul>
        </section>
    )
}

export default EmlakDigerIlanlar