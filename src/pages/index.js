import React from "react"
import Head from "next/head"
import Banner from "@/components/Banner/Banner"
import OneCikanIlanlar from "@/components/OneCikanIlanlar/OneCikanIlanlar"
import Ilceler from "@/components/Ilceler/Ilceler"
import Partnership from "@/components/Partnership"
import EmlakHaberleri from "@/components/EmlakHaberleri/EmlakHaberleri"

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Samsun Satılık Daire - Samsun Kiralık Daire | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <Banner />
      <div className="container mx-auto lg:px-0 px-4 py-8">
        <Ilceler />
        <OneCikanIlanlar />
        <Partnership />
        <EmlakHaberleri />
      </div>
    </>
  )
}
