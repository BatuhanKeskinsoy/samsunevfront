import HaberDetay from '@/components/EmlakHaberleri/HaberDetay/HaberDetay'
import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
        <Head>
            <title>{`Haber Detay | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
        </Head>
        <section>
            <div className="container mx-auto lg:px-0 px-4">
                <HaberDetay />
            </div>
        </section>

    </>
  )
}

export default index