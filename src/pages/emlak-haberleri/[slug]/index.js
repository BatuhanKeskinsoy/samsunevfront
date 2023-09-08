import HaberDetay from '@/components/EmlakHaberleri/HaberDetay/HaberDetay';
import Head from 'next/head';
import React from 'react';
import { fetchBlogDetailData } from '@/data/Api/Blogs/BlogDetail';
import { useRouter } from 'next/router';

function Index({ blogDetailData }) {

  const router = useRouter();
  if (!blogDetailData.name) {
    if (typeof window !== 'undefined') {
      router.push('/404');
    }
    return null;
  }

  const title = blogDetailData.title || '';

  return (
    <>
      <Head>
        <title>{`${title} | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <section>
        <div className="container mx-auto lg:px-0 px-4">
          <HaberDetay blogDetailData={blogDetailData} />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { slug } = query;
  let blogDetailData = {};

  try {
    blogDetailData = await fetchBlogDetailData(slug);

  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }

  return {
    props: { blogDetailData },
  };
}

export default Index;
