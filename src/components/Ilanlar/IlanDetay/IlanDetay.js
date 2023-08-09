import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import IlanSlider from '@/components/Ilanlar/IlanDetay/IlanSlider'

function IlanDetay() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dynamicClass = isMobile
    ? '[&>*:nth-child(odd)]:bg-site/10'
    : '[&>*:nth-child(4n+1)]:bg-site/10 [&>*:nth-child(4n+2)]:bg-site/10 [&>*:nth-child(4n+1)]:ring-2 [&>*:nth-child(4n+2)]:ring-2 [&>*:nth-child(4n+1)]:ring-white [&>*:nth-child(4n+2)]:ring-white';
  return (
    <div className="flex lg:flex-row flex-col gap-y-4 gap-x-4 w-full justify-between">
      <div className='grid flex-1 w-full'>
        <h1 className='text-2xl tracking-wide lg:my-6 mb-6 block'>Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa</h1>
        <div className="max-w-full w-full min-w-full">
          <IlanSlider />
          <div className="bg-white rounded-lg p-4 my-8">
            <h1 className='text-2xl mb-4'>İlan Detayları</h1>
            <div className={`flex flex-wrap flex-col sm:flex-row ${dynamicClass}`}>

              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>
              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>
              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>
              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>
              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>
              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>
              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>
              <div className='w-full flex justify-between flex-[0_0_50%] py-3 px-4 min-w-max'><span className='text-gray-500'>İlan Numarası</span><span className='tracking-wider'>13716229</span></div>

            </div>
          </div>
        </div>
      </div >
      <Sidebar />
    </div >
  )
}

export default IlanDetay