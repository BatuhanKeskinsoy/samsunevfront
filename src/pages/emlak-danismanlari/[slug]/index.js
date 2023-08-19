import DanismanDetayComponent from '@/components/EmlakDanismanlari/DanismanDetay/DanismanDetay'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'

function index() {
    const router = useRouter()
    console.log(router.query.slug)
    
    return (
        <>
            <Head>
                <title>{`${router.query.slug} | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section id='DanismanDetay'>
                <div className="container mx-auto lg:px-0 px-4 pb-8">
                    <DanismanDetayComponent />
                </div>
            </section>
        </>
    )
}

export default index