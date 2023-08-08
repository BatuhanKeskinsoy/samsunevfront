import React from 'react'
import Filtre from '@/components/Ilanlar/IlanDetay/Filtre'
import Ilanlar from '@/components/Ilanlar/IlanDetay/Ilanlar'
import Topdiv from '@/components/Ilanlar/IlanDetay/Topdiv'
import Head from 'next/head'

function index() {
  return (
    <>
      <Head>
        <title>{`İlanlar | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <div className='flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4 container mx-auto px-4 w-full'>
        <Filtre />
        <div className="flex flex-col gap-y-4 w-full">
          <Topdiv />
          <Ilanlar />
        </div>
      </div>
    </>
  )
}

export default index