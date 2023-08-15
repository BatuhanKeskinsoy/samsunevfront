import React from 'react'
import Head from 'next/head';
import Banner from '@/components/KurumsalUyelik/Banner';
import Hizmetler from '@/components/KurumsalUyelik/Hizmetler';

function index() {
  return (
    <>
      <Head>
        <title>{`Kurumsal Üyelik | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <Banner />
      <Hizmetler />
    </>
  )
}

export default index