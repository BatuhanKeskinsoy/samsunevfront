import EmlakDetayComponent from '@/components/EmlakOfisleri/EmlakDetay/EmlakDetay'
import Head from 'next/head'
import React from 'react'

function EmlakDetay() {
    return (
        <>
            <Head>
                <title>{`Emlak Detay | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section id='EmlakDetay'>
                <div className="container mx-auto lg:px-0 px-4 pb-8">
                    <EmlakDetayComponent />
                </div>
            </section>
        </>
    )
}

export default EmlakDetay