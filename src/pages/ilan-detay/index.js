import React from 'react'
import Head from 'next/head'
import IlanDetay from '@/components/Ilanlar/IlanDetay/IlanDetay'

function index() {
    return (
        <>
            <Head>
                <title>{`İlan Detay | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <div className='container mx-auto flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4 lg:px-0 px-4 w-full'>
                <IlanDetay />
            </div>

        </>
    )
}

export default index