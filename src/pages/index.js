import React from "react"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Samsun Satılık Daire - Samsun Kiralık Daire | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <div className="container mx-auto lg:px-0 px-4 py-8">
        Main
      </div>
    </>
  )
}
