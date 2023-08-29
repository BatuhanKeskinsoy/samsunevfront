import React, { useEffect, useState } from 'react';
import Filtre from '@/components/Ilanlar/IlanListesi/Filtre';
import Ilanlar from '@/components/Ilanlar/IlanListesi/Ilanlar';
import Topdiv from '@/components/Ilanlar/IlanListesi/Topdiv';
import Head from 'next/head';
import { fetchRealEstateData } from '@/data/Api/RealEstates/RealEstates';
import { fetchCategoryData } from '@/data/Api/Categories/Categories';
import { fetchCountyData } from '@/data/Api/Counties/Counties';
import { fetchNeighbourhoodData } from '@/data/Api/Neighbourhoods/Neighbourhoods';

function IlanlarPage(props) {
  const {
    city,
    county,
    neighbourhood,
    category,
    categoriesData,
    countiesData,
    neighbourhoodsData,
    realestatesData,
  } = props

  const [categoryType, setCategoryType] = useState('')
  const [categoryPrimary, setCategoryPrimary] = useState('')
  const [categorySecondary, setCategorySecondary] = useState('')

  const [locationPrimary, setLocationPrimary] = useState('')
  const [locationSecondary, setLocationSecondary] = useState('')

  const queryCategory = category;
  const queryCounty = county;
  const queryNeighbourhood = neighbourhood;

  useEffect(() => {

    if (queryCategory && categoriesData) {
      const queryCategoryData = categoriesData.find(categoryData => categoryData.slug === queryCategory);

      if (queryCategoryData) {
        if (queryCategoryData.children && queryCategoryData.children.length > 0) {
          const childCategory = queryCategoryData.children.find(child => child.slug === queryCategory);
          if (childCategory) {
            setCategoryType(childCategory.category_type);
            setCategoryPrimary(queryCategoryData.name);
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
          setCategoryPrimary(queryChildCategory.category.name);
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
  }, [queryCategory]);


  useEffect(() => {

    if (queryCounty && countiesData) {
      const queryCountyData = countiesData.find(countyData => countyData.county_slug === queryCounty);
      if (queryCountyData) {
        setLocationPrimary({
          name: queryCountyData.county,
          id: queryCountyData.county_id,
        });
        setLocationSecondary('');
      } else {
        setLocationPrimary('');
        setLocationSecondary('');
      }
    } else {
      setLocationPrimary('');
      setLocationSecondary('');
    }

    if (queryNeighbourhood && neighbourhoodsData) {
      const queryNeighbourhoodData = neighbourhoodsData.find(neighbourhoodData => neighbourhoodData.neighbourhood_slug === queryNeighbourhood);
      if (queryNeighbourhoodData) {
        setLocationSecondary(queryNeighbourhoodData.neighbourhood);
      } else {
        setLocationSecondary('');
      }
    } else {
      setLocationSecondary('');
    }

  }, [queryCounty, queryNeighbourhood])

  return (
    <>
      <Head>
        <title>{`İlanlar | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <div className='flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4 container mx-auto lg:px-0 px-4 w-full'>
        <Filtre
          categoriesData={categoriesData}
          countiesData={countiesData}
          neighbourhoodsData={neighbourhoodsData}

          categoryType={categoryType}
          setCategoryType={setCategoryType}
          categoryPrimary={categoryPrimary}
          setCategoryPrimary={setCategoryPrimary}
          categorySecondary={categorySecondary}
          setCategorySecondary={setCategorySecondary}

          locationPrimary={locationPrimary}
          setLocationPrimary={setLocationPrimary}
          locationSecondary={locationSecondary}
          setLocationSecondary={setLocationSecondary}
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
  let countiesData = [];
  let neighbourhoodsData = [];

  let city, county, neighbourhood, category;
  if (slug.length === 2) {
    [city, category] = slug;
  } else if (slug.length === 3) {
    [city, county, category] = slug;
  } else if (slug.length === 4) {
    [city, county, neighbourhood, category] = slug;
  }

  try {
    categoriesData = await fetchCategoryData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }

  try {
    countiesData = await fetchCountyData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }

  try {
    neighbourhoodsData = await fetchNeighbourhoodData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }

  try {
    realestatesData = await fetchRealEstateData();
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }


  // Metadata için
  /* const queryCategoryData = categoriesData.data.find(categoryData => categoryData.slug === category);
  const categoryTitle = queryCategoryData ? queryCategoryData.name : ''; */

  return {
    props: {
      city: city || null,
      county: county || null,
      category: category || null,
      neighbourhood: neighbourhood || null,

      realestatesData,
      categoriesData: categoriesData.data,
      countiesData,
      neighbourhoodsData,
    },
  };
}

export default IlanlarPage;