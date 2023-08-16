
import Iletisim from '@/components/Iletisim';
import Head from 'next/head';
import React from 'react'

function iletisim() {
    return (
        <>
            <Head>
                <title>{`İletişim | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <Iletisim />
        </>
    )
}

export default iletisim