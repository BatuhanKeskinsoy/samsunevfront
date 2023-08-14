import Item from '@/components/EmlakHaberleri/Item'
import Head from 'next/head'
import React from 'react'

function index() {
    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full'
    return (
        <>
            <Head>
                <title>{`Emlak Haberleri | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section>
                <div className="container mx-auto lg:px-0 px-4">
                    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center mb-2">
                        <h1 className='lg:text-3xl text-2xl tracking-wide'>Emlak Haberleri</h1>
                        <span className='text-gray-500'>100 Emlak Haberi Bulundu</span>
                    </div>
                    <ul className="flex flex-wrap">
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                        <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} />
                    </ul>
                </div>
            </section>

        </>
    )
}

export default index