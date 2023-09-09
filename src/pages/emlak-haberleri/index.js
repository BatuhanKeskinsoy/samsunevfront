import Item from '@/components/EmlakHaberleri/Item'
import Head from 'next/head'
import React, { useState } from 'react'
import { fetchBlogData } from '@/data/Api/Blogs/Blogs'
import NoContentFound from '@/components/Others/NoContentFound'

function index({ blogsData }) {
    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full'
    const itemsPerPage = 12;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogsData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = blogsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Head>
                <title>{`Emlak Haberleri | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section>
                <div className="container mx-auto lg:px-0 px-4">
                    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center mb-2">
                        <h1 className='lg:text-3xl text-2xl tracking-wide'>Emlak Haberleri</h1>
                        <span className='text-gray-500'>{blogsData.length} Emlak Haberi Bulundu</span>
                    </div>

                    {blogsData.length > 0 ? (
                        <ul className="flex flex-wrap">
                            {currentBlogs.map((blog, index) => (
                                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-3'} blog={blog} key={index} />
                            ))}
                        </ul>
                    ) : (
                        <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                            <NoContentFound />
                        </div>
                    )}
                    <div className="flex justify-center mt-8 max-w-full">
                        <div className="pagination flex lg:flex-wrap flex-nowrap items-center gap-3 justify-start overflow-x-auto lg:overflow-x-hidden pb-3">
                            {totalPages > 0 && Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`min-w-[2.5rem] w-10 h-10 hover:bg-site hover:text-white text-xl rounded-full transition-all ${currentPage === index + 1 ?
                                        'bg-site text-white' :
                                        'bg-white text-site'}`
                                    }
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
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