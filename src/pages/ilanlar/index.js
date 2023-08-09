import React from 'react'
import Filtre from '@/components/Ilanlar/IlanListesi/Filtre'
import Ilanlar from '@/components/Ilanlar/IlanListesi/Ilanlar'
import Topdiv from '@/components/Ilanlar/IlanListesi/Topdiv'
import Head from 'next/head'

function index() {
  return (
    <>
      <Head>
        <title>{`İlanlar | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <div className='flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4 container mx-auto lg:px-0 px-4 w-full'>
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