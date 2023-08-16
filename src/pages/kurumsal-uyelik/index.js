import React from 'react'
import Head from 'next/head';
import Banner from '@/components/KurumsalUyelik/Banner';
import Hizmetler from '@/components/KurumsalUyelik/Hizmetler';
import Iletisim from '@/components/Iletisim';
import NedenUcretsiz from '@/components/KurumsalUyelik/NedenUcretsiz';

function index() {
  return (
    <>
      <Head>
        <title>{`Kurumsal Üyelik | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <Banner />
      <Hizmetler />
      <NedenUcretsiz />
      <Iletisim />
    </>
  )
}

export default index