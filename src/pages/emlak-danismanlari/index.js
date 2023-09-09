import Danismanlar from '@/components/EmlakDanismanlari/DanismanListesi/Danismanlar'
import Head from 'next/head'
import React from 'react'
import { fetchConsultantData } from '@/data/Api/Consultants/Consultants'
import { fetchDistrictData } from '@/data/Api/Counties/Counties'

function Index({ consultantData, countiesData }) {
    return (
        <>
            <Head>
                <title>{`Emlak Danışmanları | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section id='EmlakDanismanlari'>
                <div className="container mx-auto lg:px-0 px-4 pb-8">
                    <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center mb-2">
                        <h1 className='lg:text-3xl text-2xl tracking-wide'>Emlak Danışmanları</h1>
                        <span className='text-gray-500'>{`${consultantData.length} Emlak Danışmanı Bulundu`}</span>
                    </div>
                    <Danismanlar consultantData={consultantData} countiesData={countiesData} />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    let consultantData = [];
    let countiesData = [];

    try {
        [consultantData, countiesData] = await Promise.all([
            fetchConsultantData(),
            fetchDistrictData(),
        ]);
    } catch (error) {
        console.error('Veri Çekme Hatası:', error);
    }

    return {
        props: { consultantData, countiesData },
    };
}

export default Index;