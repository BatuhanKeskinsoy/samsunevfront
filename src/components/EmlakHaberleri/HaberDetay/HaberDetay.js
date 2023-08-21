import React from 'react'
import HaberSidebar from '@/components/EmlakHaberleri/HaberDetay/HaberSidebar'
import Image from 'next/image'

function HaberDetay({ blogDetailData }) {

  const blogDetail = blogDetailData

  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  return (
    <>
      <section id='haberDetay' className='relative pb-8'>
        <div className="flex lg:flex-row flex-col gap-x-8 lg:mt-6">
          <div className='flex-[1_1_75%] bg-white rounded-lg shadow-sm'>
            <div className='relative lg:h-[600px] h-48'>
              <Image
                src={`/${blogDetail.image}`}
                sizes='(max-width: 768px) 100vw, 50vw'
                fill
                priority
                alt={blogDetail.title}
                title={blogDetail.title}
                className='object-cover object-center rounded-t-lg shadow-2xl shadow-black/10' />
              <div className='absolute top-3 right-3 bg-white text-sm p-2 flex flex-col items-center rounded-md font-bold'>
                <span className='lg:text-5xl text-3xl -my-1'>
                  {String(new Date(blogDetail.created_at).getDate()).padStart(2, '0')}
                </span>
                <span className='lg:text-sm text-xs mt-0.5'>
                  {months[new Date(blogDetail.created_at).getMonth()]}
                </span>
                <span className='lg:text-lg text-sm mt-0.5 -mb-0.5'>
                  {new Date(blogDetail.created_at).getFullYear()}
                </span>
              </div>
            </div>

            <h1 className='lg:text-2xl text-xl font-semibold tracking-wide mt-8 mb-4 block px-4'>{blogDetail.name}</h1>

            <div className='DetailContent px-4 pb-4' dangerouslySetInnerHTML={{ __html: blogDetail.content }}></div>

          </div>
          <HaberSidebar blogDetail={blogDetail} />
        </div>
      </section>

    </>

  )
}

export default HaberDetay