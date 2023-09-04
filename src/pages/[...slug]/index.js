import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Filtre from '@/components/Ilanlar/IlanListesi/Filtre';
import Ilanlar from '@/components/Ilanlar/IlanListesi/Ilanlar';
import Topdiv from '@/components/Ilanlar/IlanListesi/Topdiv';
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

    metaCategory,
    metaCounty,
    metaNeighbourhood,
    metaCategoryType
  } = props

  const [categoryType, setCategoryType] = useState('')
  const [categoryPrimary, setCategoryPrimary] = useState('')
  const [categorySecondary, setCategorySecondary] = useState('')

  const [locationPrimary, setLocationPrimary] = useState('')
  const [locationSecondary, setLocationSecondary] = useState('')

  const [layoutType, setLayoutType] = useState('grid')

  const queryCategory = category;
  const queryCounty = county;
  const queryNeighbourhood = neighbourhood;

  const categoryValues = () => {
    if (queryCategory && categoriesData) {
      // Optimized code for setting category type, primary, and secondary
      const categoryMatch = categoriesData.find((categoryData) => categoryData.slug === queryCategory);
      if (categoryMatch) {
        const { children, category_type: categoryType } = categoryMatch;
        const childCategory = children && children.find((child) => child.slug === queryCategory);
        setCategoryType(categoryType);
        setCategoryPrimary({ name: categoryMatch.name, slug: categoryMatch.slug });
        setCategorySecondary(childCategory ? { name: childCategory.name, slug: childCategory.slug } : '');
      } else {
        const queryChildCategory = categoriesData
          .filter((categoryData) => categoryData.children && categoryData.children.length > 0)
          .flatMap((categoryData) => categoryData.children)
          .find((childCategory) => childCategory.slug === queryCategory);
        setCategoryType(queryChildCategory ? queryChildCategory.category_type : '');
        setCategoryPrimary(queryChildCategory ? { name: queryChildCategory.category.name, slug: queryChildCategory.category.slug } : '');
        setCategorySecondary(queryChildCategory ? { name: queryChildCategory.name, slug: queryChildCategory.slug } : '');
      }
    } else {
      setCategoryType('');
      setCategoryPrimary('');
      setCategorySecondary('');
    }
  }

  useEffect(() => {
    categoryValues()
  }, [queryCategory]);

  const locationValues = () => {
    if (queryCounty && countiesData) {
      const queryCountyData = countiesData.find((countyData) => countyData.county_slug === queryCounty);
      if (queryCountyData) {
        setLocationPrimary({
          name: queryCountyData.county,
          id: queryCountyData.county_id,
          slug: queryCountyData.county_slug,
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
      const queryNeighbourhoodData = neighbourhoodsData.find(
        (neighbourhoodData) => neighbourhoodData.neighbourhood_slug === queryNeighbourhood
      );
      if (queryNeighbourhoodData) {
        setLocationSecondary({
          name: queryNeighbourhoodData.neighbourhood,
          slug: queryNeighbourhoodData.neighbourhood_slug,
        });
      } else {
        setLocationSecondary('');
      }
    } else {
      setLocationSecondary('');
    }
  }

  useEffect(() => {
    locationValues()
  }, [queryCounty, queryNeighbourhood]);


  const filteredRealEstateData = realestatesData.filter((realestate) => {
    const isCityMatch = !city || realestate.city_slug === city;
    const isCountyMatch = !county || realestate.district_slug === county;
    const isNeighbourhoodMatch = !neighbourhood || realestate.neighbourhood_slug === neighbourhood;
    const isCategoryMatch = !category || (realestate.category && realestate.category.slug === category);

    return isCityMatch && isCountyMatch && isNeighbourhoodMatch && isCategoryMatch;
  });

  const realEstateDataLength = filteredRealEstateData.length

  return (
    <>
      <Head>
        <title>{`${metaCategoryType} ${metaCategory} - Samsun ${metaCounty} ${metaNeighbourhood} | ${process.env.NEXT_PUBLIC_SITE_DOMAIN}`}</title>
      </Head>
      <div className='flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4 container mx-auto lg:px-0 px-4 w-full'>
        <Filtre
          city={city}
          county={county}
          neighbourhood={neighbourhood}
          category={category}

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
          <Topdiv
            categoryPrimary={categoryPrimary}
            categorySecondary={categorySecondary}
            categoryType={categoryType}

            realEstateDataLength={realEstateDataLength}
            layoutType={layoutType}
            setLayoutType={setLayoutType}
          />
          <Ilanlar
            city={city}
            county={county}
            neighbourhood={neighbourhood}
            category={category}

            filteredRealEstateData={filteredRealEstateData}
            realestatesData={realestatesData}
            layoutType={layoutType}
          />
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
    [categoriesData, countiesData, neighbourhoodsData, realestatesData] = await Promise.all([
      fetchCategoryData(),
      fetchCountyData(),
      fetchNeighbourhoodData(),
      fetchRealEstateData(),
    ]);
  } catch (error) {
    console.error('Veri Çekme Hatası:', error);
  }


  // Metadata için
  let metaCategoryType = '';
  let metaCategory = '';
  let metaCounty = '';
  let metaNeighbourhood = '';

  if (category && categoriesData) {
    const queryCategoryData = categoriesData.data.find(categoryData => categoryData.slug === category);

    if (queryCategoryData) {
      if (queryCategoryData.children && queryCategoryData.children.length > 0) {
        const childCategory = queryCategoryData.children.find(child => child.slug === category);
        if (childCategory) {
          metaCategory = childCategory.name;
          metaCategoryType = childCategory.category_type
        } else {
          metaCategory = queryCategoryData.name;
          metaCategoryType = queryCategoryData.category_type
        }
      } else {
        metaCategory = queryCategoryData.name;
        metaCategoryType = queryCategoryData.category_type
      }
    } else {
      const queryChildCategory = categoriesData.data
        .filter(categoryData => categoryData.children && categoryData.children.length > 0)
        .flatMap(categoryData => categoryData.children)
        .find(childCategory => childCategory.slug === category);

      if (queryChildCategory) {
        metaCategory = queryChildCategory.name;
        metaCategoryType = queryChildCategory.category_type
      } else {
        metaCategory = '';
        metaCategoryType = ''
      }
    }
  } else {
    metaCategory = '';
    metaCategoryType = ''
  }

  if (county && countiesData) {
    const queryCountyData = countiesData.find(countyData => countyData.county_slug === county);
    if (queryCountyData) {
      metaCounty = queryCountyData.county
    } else {
      metaCounty = ''
    }
  } else {
    metaCounty = ''
  }

  if (neighbourhood && neighbourhoodsData) {
    const queryNeighbourhoodData = neighbourhoodsData.find(neighbourhoodData => neighbourhoodData.neighbourhood_slug === neighbourhood);
    if (queryNeighbourhoodData) {
      metaNeighbourhood = queryNeighbourhoodData.neighbourhood
    } else {
      metaNeighbourhood = ''
    }
  } else {
    metaNeighbourhood = ''
  }

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

      metaCategory,
      metaCounty,
      metaNeighbourhood,
      metaCategoryType,
    },
  };
}

export default IlanlarPage;