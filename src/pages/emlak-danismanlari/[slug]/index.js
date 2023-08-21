import DanismanDetayComponent from '@/components/EmlakDanismanlari/DanismanDetay/DanismanDetay'
import Head from 'next/head'
import React from 'react'
import { fetchConsultantProfileData } from '@/data/Api/Consultants/ConsultantProfile'
import { useRouter } from 'next/router';

function Index({ consultantProfileData }) {
    const title = consultantProfileData.name || '';

    const router = useRouter();
    if (!consultantProfileData.name) {
        if (typeof window !== 'undefined') {
            router.push('/404');
        }
        return null;
    }

    return (
        <>
            <Head>
                <title>{`${title} | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
            </Head>
            <section id='DanismanDetay'>
                <div className="container mx-auto lg:px-0 px-4 pb-8">
                    <DanismanDetayComponent consultantProfileData={consultantProfileData} />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    let consultantProfileData = {};

    try {
        consultantProfileData = await fetchConsultantProfileData(slug);
    } catch (error) {
        console.error('Veri Çekme Hatası:', error);
    }

    return {
        props: { consultantProfileData },
    };
}

export default Index;
