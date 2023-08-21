import Item from '@/components/EmlakHaberleri/Item'
import Head from 'next/head'
import React from 'react'
import { fetchBlogData } from '@/data/Api/Blogs/Blogs'
import NoContentFound from '@/components/Others/NoContentFound'

function index({ blogsData }) {
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
                        <span className='text-gray-500'>{blogsData.data.length} Emlak Haberi Bulundu</span>
                    </div>

                    {blogsData.data.length > 0 ? (
                        <ul className="flex flex-wrap">
                            {
                                blogsData.data.map((blog, index) => (
                                    <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} blog={blog} key={index} />
                                ))
                            }
                        </ul>
                    ) : (
                        <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                            <NoContentFound />
                        </div>
                    )}

                </div>
            </section>

        </>
    )
}

export async function getServerSideProps() {
    let blogsData = [];

    try {
        blogsData = await fetchBlogData();
    } catch (error) {
        console.error('Veri Çekme Hatası:', error);
    }

    return {
        props: { blogsData },
    };
}

export default index