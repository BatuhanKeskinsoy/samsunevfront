import Head from 'next/head';
import React from 'react'
import Hakkimizda from '@/components/Hakkimizda/Hakkimizda';

function hakkimizda() {
    return (
        <>
            <Head>
                <title>{`Hakkımızda | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <Hakkimizda />
        </>
    )
}

export default hakkimizda