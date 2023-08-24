import React from "react"
import Head from "next/head"
import Banner from "@/components/Banner/Banner"
import OneCikanIlanlar from "@/components/Ilanlar/OneCikanIlanlar/OneCikanIlanlar"
import Ilceler from "@/components/Ilceler/Ilceler"
import Partnership from "@/components/Partnership"
import EmlakHaberleri from "@/components/EmlakHaberleri/EmlakHaberleri"
import { fetchBlogData } from "@/data/Api/Blogs/Blogs"
import { fetchCountyData } from '@/data/Api/Counties/Counties';

export default function Home({ blogsData, countiesData }) {
  return (
    <>
      <Head>
        <title>{`Samsun Satılık Daire - Samsun Kiralık Daire | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <Banner />
      <div className="container mx-auto lg:px-0 px-4 py-8">
        <Ilceler countiesData={countiesData} />
        <OneCikanIlanlar />
        <Partnership />
        <EmlakHaberleri blogsData={blogsData} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  let blogsData = [];
  let countiesData = [];

  try {
    blogsData = await fetchBlogData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }

  try {
    countiesData = await fetchCountyData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }

  return {
    props: { blogsData, countiesData },
  };
}
