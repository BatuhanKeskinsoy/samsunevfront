import React from 'react'
import Head from 'next/head'
import IlanDetay from '@/components/Ilanlar/IlanDetay/IlanDetay'
import EmlakDigerIlanlar from '@/components/Ilanlar/EmlakDigerIlanlar/EmlakDigerIlanlar'

function index() {
    return (
        <>
            <Head>
                <title>{`İlan Detay | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section className='container mx-auto lg:px-0 px-4'>
                <IlanDetay />
                <EmlakDigerIlanlar />
            </section>

        </>
    )
}

export default index