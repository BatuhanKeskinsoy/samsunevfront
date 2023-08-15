import React from 'react'
import HaberSidebar from '@/components/EmlakHaberleri/HaberDetay/HaberSidebar'
import Image from 'next/image'

function HaberDetay() {
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
                src={'/haberler/haber1.png'}
                sizes='(max-width: 768px) 100vw, 50vw'
                fill
                priority
                alt={'Emlak Haberleri için bir adet blog yazısı blog yazısı blog yazısı'}
                title={'Emlak Haberleri için bir adet blog yazısı blog yazısı blog yazısı'}
                className='object-cover object-center rounded-t-lg shadow-2xl shadow-black/10' />
              <div className='absolute top-3 right-3 bg-white text-sm p-2 flex flex-col items-center rounded-md font-bold'>
                <span className='lg:text-5xl text-3xl -my-1'>
                  {String(new Date().getDate()).padStart(2, '0')}
                </span>
                <span className='lg:text-sm text-xs mt-0.5'>
                  {months[new Date().getMonth()]}
                </span>
                <span className='lg:text-lg text-sm mt-0.5 -mb-0.5'>
                  {new Date().getFullYear()}
                </span>
              </div>
            </div>

            <h1 className='lg:text-2xl text-xl font-semibold tracking-wide mt-8 mb-4 block px-4'>Emlak Haberleri için bir adet blog yazısı blog yazısı blog yazısı</h1>
            <div className='DetailContent px-4 pb-4'>
              {/* <div className='DetailContent px-4' dangerouslySetInnerHTML={{ __html: props.contentText }}></div> */}
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem, quia voluptas eius officia magni eum labore sint quibusdam molestias nihil deserunt ducimus voluptate quis aperiam eligendi magnam minima dignissimos.</p>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem, quia voluptas eius officia magni eum labore sint quibusdam molestias nihil deserunt ducimus voluptate quis aperiam eligendi magnam minima dignissimos.</p>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem, quia voluptas eius officia magni eum labore sint quibusdam molestias nihil deserunt ducimus voluptate quis aperiam eligendi magnam minima dignissimos.</p>
              <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem, quia voluptas eius officia magni eum labore sint quibusdam molestias nihil deserunt ducimus voluptate quis aperiam eligendi magnam minima dignissimos.</p>
              <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem, quia voluptas eius officia magni eum labore sint quibusdam molestias nihil deserunt ducimus voluptate quis aperiam eligendi magnam minima dignissimos.</p>
              <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem, quia voluptas eius officia magni eum labore sint quibusdam molestias nihil deserunt ducimus voluptate quis aperiam eligendi magnam minima dignissimos.</p>
              <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem, quia voluptas eius officia magni eum labore sint quibusdam molestias nihil deserunt ducimus voluptate quis aperiam eligendi magnam minima dignissimos.</p>
            </div>
          </div>
          <HaberSidebar />
        </div>
      </section>

    </>

  )
}

export default HaberDetay