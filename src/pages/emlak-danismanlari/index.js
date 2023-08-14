import Danismanlar from '@/components/EmlakDanismanlari/DanismanListesi/Danismanlar'
import Head from 'next/head'
import React from 'react'

function index() {
    return (
        <>
            <Head>
                <title>{`Emlak Danışmanları | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section id='EmlakDanismanlari'>
                <div className="container mx-auto lg:px-0 px-4 pb-8">
                    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center mb-2">
                        <h1 className='lg:text-3xl text-2xl tracking-wide'>Emlak Danışmanları</h1>
                        <span className='text-gray-500'>100 Emlak Danışmanı Bulundu</span>
                    </div>
                    <Danismanlar />
                </div>
            </section>
        </>
    )
}

export default index