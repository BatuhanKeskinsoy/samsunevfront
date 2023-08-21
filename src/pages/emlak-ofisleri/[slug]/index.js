import EmlakDetayComponent from '@/components/EmlakOfisleri/EmlakDetay/EmlakDetay'
import Head from 'next/head'
import React from 'react'
import { fetchCompanyProfileData } from '@/data/Api/Companies/CompanyProfile'
import { useRouter } from 'next/router';

function Index({ companyProfileData }) {
    const title = companyProfileData.name || '';

    const router = useRouter();
    if (!companyProfileData.name) {
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
            <section id='EmlakDetay'>
                <div className="container mx-auto lg:px-0 px-4 pb-8">
                    <EmlakDetayComponent companyProfileData={companyProfileData} />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    let companyProfileData = {};

    try {
        companyProfileData = await fetchCompanyProfileData(slug);
    } catch (error) {
        console.error('Veri Çekme Hatası:', error);
    }

    return {
        props: { companyProfileData },
    };
}

export default Index