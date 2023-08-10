import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import IlanSlider from '@/components/Ilanlar/IlanDetay/IlanSlider'
import { BsCheck2Circle, BsFillCircleFill } from 'react-icons/bs';

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
    ? '[&>*:nth-child(odd)]:bg-gray-100'
    : '[&>*:nth-child(4n+1)]:bg-gray-100 [&>*:nth-child(4n+2)]:bg-gray-100 [&>*:nth-child(4n+1)]:ring-2 [&>*:nth-child(4n+2)]:ring-2 [&>*:nth-child(4n+1)]:ring-white [&>*:nth-child(4n+2)]:ring-white';
  return (
    <div className="flex lg:flex-row flex-col gap-y-4 gap-x-4 w-full justify-between">
      <div className='grid flex-1 w-full'>
        <h1 className='text-2xl tracking-wide lg:my-6 mb-6 block'>Havuzlu, Garajlı Akıllı Sistem Tam Müstakil Villa</h1>
        <div className="max-w-full w-full min-w-full">
          <IlanSlider />

          <div className="bg-white rounded-lg lg:p-8 p-4 my-8 shadow-sm">
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

          <div className="bg-white rounded-lg lg:p-8 p-4 my-8 shadow-sm">
            <h2 className='text-2xl mb-4'>İlan Açıklaması</h2>
            <div id='IlanDetayContent'>
              <p>Alanya Avsallar'da bulunan lüks dairemiz 1. katında yer almaktadır. Daire 1+1 planında olup, 60 metrekarelik geniş bir alana sahiptir. Özel tasarım ve lüks mobilyalarla döşenmiştir.</p>
              <p>Kompleks, bir otel konseptine sahip olup, zengin olanaklar sunmaktadır. İçerisinde 1 adet açık havuz ve 1 adet kapalı havuz bulunmaktadır. Dairenin bulunduğu konumdan havuzlara hoş bir manzara eşlik etmektedir.</p>
              <p>Carmel Park Residence, denize 1.800 metre mesafede yer almaktadır. Ayrıca, kompleksin sahip olduğu olanaklar arasında hamam, sauna, spor salonu ve jeneratör bulunmaktadır. Komplekste ayrıca denize servis aracı da mevcuttur.</p>
              <p>Daire, yeşillikler içinde muhteşem bir lokasyona sahiptir. Bahçesi ve kamelyasıyla birlikte dinlendirici bir ortam sunmaktadır. konforlu bir yaşam alanı sunan bu daire, Alanya Avsallar bölgesinde keyifli bir yaşam sürmek isteyenler için ideal bir seçenektir.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:p-8 p-4 shadow-sm">
            <h2 className='text-2xl mb-4'>Diğer Özellikler</h2>
            <div className="flex flex-col">

              <span className='text-xl mt-4 mb-2'>İç Özellikler</span>
              <div className="flex flex-wrap my-2 lg:justify-start justify-center">

                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Alaturka Tuvalet</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Alaturka Tuvalet</span>
                </div>

              </div>
              <span className='text-xl mt-4 mb-2'>Dış Özellikler</span>
              <div className="flex flex-wrap my-2 lg:justify-start justify-center">

                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsFillCircleFill size={18} className='text-gray-200' />
                  <span className='text-gray-300 min-w-max'>Isı Yalıtımı</span>
                </div>
                <div className="flex gap-x-2 items-center p-2 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 min-w-fit lg:justify-start justify-center">
                  <BsCheck2Circle size={20} className='text-site' />
                  <span className='text-site min-w-max'>Isı Yalıtımı</span>
                </div>

              </div>
            
            </div>

          </div>

        </div>
      </div >
      <Sidebar />
    </div >
  )
}

export default IlanDetay