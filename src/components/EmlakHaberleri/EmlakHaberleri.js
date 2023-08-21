import React from 'react'
import Item from '@/components/EmlakHaberleri/Item'
import Link from 'next/link'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function EmlakHaberleri({ blogsData }) {

    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full'
    return (
        <>
            {blogsData.data.length > 0 && (
                <section id='OneCikanIlanlar' className='lg:my-12 my-6'>
                    <h2 className='lg:text-3xl text-2xl lg:mb-8 mb-6 tracking-wide'>Emlak Haberleri</h2>
                    <ul className="flex flex-wrap">
                        {blogsData.data.slice(0, 4).map((blog, index) => (
                            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} blog={blog} key={index} />
                        ))}
                        <div className='w-full lg:mt-8'>
                            <Link
                                href={'/emlak-haberleri'}
                                className='mx-auto justify-center min-w-fit lg:w-fit w-full text-site transition-all rounded-md py-3 px-6 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/90 hover:bg-site text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-xl'
                            >
                                Tüm Haberler
                                <AiOutlineDoubleRight size={24} />
                            </Link>
                        </div>

                    </ul>
                </section>
            )}
        </>
    )
}

export default EmlakHaberleri