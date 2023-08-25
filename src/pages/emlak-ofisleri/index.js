import Emlaklar from '@/components/EmlakOfisleri/EmlakListesi/Emlaklar'
import Head from 'next/head'
import React from 'react'
import { fetchCompanyData } from '@/data/Api/Companies/Companies'
import { fetchCountyData } from '@/data/Api/Counties/Counties'

function index({ companiesData, countiesData }) {
    return (
        <>
            <Head>
                <title>{`Emlak Ofisleri | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section id='EmlakOfisleri'>
                <div className="container mx-auto lg:px-0 px-4 pb-8">
                    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center mb-2">
                        <h1 className='lg:text-3xl text-2xl tracking-wide'>Emlak Ofisleri</h1>
                        <span className='text-gray-500'>{`${companiesData.length} Emlak Ofisi Bulundu`}</span>
                    </div>
                    <Emlaklar companiesData={companiesData} countiesData={countiesData} />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    let companiesData = [];
    let countiesData = [];

    try {
        companiesData = await fetchCompanyData();
    } catch (error) {
        console.error('Veri Çekme Hatası:', error);
    }

    try {
        countiesData = await fetchCountyData();
    } catch (error) {
        console.error('Veri Çekme Hatası:', error);
    }


    return {
        props: { companiesData, countiesData },
    };
}

export default index