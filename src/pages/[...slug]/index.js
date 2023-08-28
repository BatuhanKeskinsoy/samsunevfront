import React, { useEffect, useState } from 'react';
import Filtre from '@/components/Ilanlar/IlanListesi/Filtre';
import Ilanlar from '@/components/Ilanlar/IlanListesi/Ilanlar';
import Topdiv from '@/components/Ilanlar/IlanListesi/Topdiv';
import Head from 'next/head';
import { fetchRealEstateData } from '@/data/Api/RealEstates/RealEstates';
import { fetchCategoryData } from '@/data/Api/Categories/Categories';

function IlanlarPage({ city, county, category, categoriesData, realestatesData }) {

  const [categoryType, setCategoryType] = useState('')
  const [categoryPrimary, setCategoryPrimary] = useState('')
  const [categorySecondary, setCategorySecondary] = useState('')

  useEffect(() => {
    const queryCategory = category;
    if (queryCategory && categoriesData) {
      const queryCategoryData = categoriesData.find(categoryData => categoryData.slug === queryCategory);

      if (queryCategoryData) {
        if (queryCategoryData.children && queryCategoryData.children.length > 0) {
          const childCategory = queryCategoryData.children.find(child => child.slug === queryCategory);
          if (childCategory) {
            setCategoryType(childCategory.category_type);
            setCategoryPrimary(queryCategoryData.name); // Ana kategorinin adını al
            setCategorySecondary(childCategory.name);
          } else {
            setCategoryType(queryCategoryData.category_type);
            setCategoryPrimary(queryCategoryData.name);
            setCategorySecondary('');
          }
        } else {
          setCategoryType(queryCategoryData.category_type);
          setCategoryPrimary(queryCategoryData.name);
          setCategorySecondary('');
        }
      } else {
        const queryChildCategory = categoriesData
          .filter(categoryData => categoryData.children && categoryData.children.length > 0)
          .flatMap(categoryData => categoryData.children)
          .find(childCategory => childCategory.slug === queryCategory);

        if (queryChildCategory) {
          setCategoryType(queryChildCategory.category_type);
          setCategoryPrimary(queryChildCategory.category.name); // Çocuk kategorinin parent_name'ini al
          setCategorySecondary(queryChildCategory.name);
        } else {
          setCategoryType('');
          setCategoryPrimary('');
          setCategorySecondary('');
        }
      }
    } else {
      setCategoryType('');
      setCategoryPrimary('');
      setCategorySecondary('');
    }
  }, [category]);

  /* console.log(realestatesData); */
  return (
    <>
      <Head>
        <title>{`İlanlar | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <div className='flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4 container mx-auto lg:px-0 px-4 w-full'>
        <Filtre
          categoriesData={categoriesData}
          categorySecondary={categorySecondary}
          setCategorySecondary={setCategorySecondary}
          categoryPrimary={categoryPrimary}
          setCategoryPrimary={setCategoryPrimary}
          categoryType={categoryType}
          setCategoryType={setCategoryType}
        />
        <div className="flex flex-col gap-y-4 w-full">
          <Topdiv categoryPrimary={categoryPrimary} categorySecondary={categorySecondary} categoryType={categoryType} />
          <Ilanlar />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  let realestatesData = [];
  let categoriesData = [];

  let city, county, category;
  if (slug.length === 2) {
    [city, category] = slug;
  } else if (slug.length === 3) {
    [city, county, category] = slug;
  }

  /* console.log('City:', city);
  console.log('County:', county);
  console.log('Category:', category);
  console.log('Array slug:', slug); */


  try {
    categoriesData = await fetchCategoryData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }

  try {
    realestatesData = await fetchRealEstateData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }



  return {
    props: {
      city: city || null,
      county: county || null, // If county is undefined, set it to null
      category: category || null,
      realestatesData,
      categoriesData: categoriesData.data,
    },
  };
}

export default IlanlarPage;