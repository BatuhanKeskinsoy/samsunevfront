import React, { useState, useEffect } from 'react'
import Item from '@/components/EmlakDanismanlari/DanismanListesi/Item'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'

import { fetchConsultantData } from '@/data/Api/Consultants' // veya dosyanın yoluna göre düzenleyin
import NoContentFound from '@/components/Others/NoContentFound'

function Danismanlar() {
    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full'

    const [consultantData, setConsultantData] = useState([]);
    useEffect(() => {
        fetchConsultantData()
            .then(data => {
                setConsultantData(data);
            })
            .catch(error => {
                console.error('Veri Çekme Hatası:', error);
            });
    }, []);

    return (
        <>
            <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-3 p-2 lg:justify-between justify-center">
                <div className="danismanlarDiv flex flex-row shadow-lg rounded-lg overflow-hidden text-center justify-start items-center overflow-x-auto">
                    <div className='bg-white py-2 px-4 opacity-50 cursor-not-allowed lg:w-fit w-full min-w-max'>Emlak Danışmanları</div>
                    <Link href={'/emlak-ofisleri'} className='bg-site/90 hover:bg-site text-white transition-all py-2 px-4 lg:w-fit w-full min-w-max'>Emlak Ofisleri</Link>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-2">
                    <div id='Ilce' className="relative min-w-max">
                        <select
                            className="block w-full px-4 py-2 pr-8 leading-normal text-sm bg-white border h-10 rounded-lg appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                            placeholder='İlçe Seçiniz'
                        >
                            <option value="">İlçe Seçiniz</option>
                            <option value={'İlkadım'}>İlkadım</option>
                            <option value={'Atakum'}>Atakum</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <BsChevronDown />
                        </div>
                    </div>

                    <div id='Mahalle' className="relative min-w-max">
                        <select
                            className="block w-full px-4 py-2 pr-8 leading-normal text-sm bg-white border h-10 rounded-lg appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                        >
                            <option value="">Mahalle Seçiniz</option>
                            <option value={'Rasathane'}>Rasathane mah.</option>
                            <option value={'Selahiye'}>Selahiye mah.</option>
                            <option value={'Reşadiye'}>Reşadiye mah.</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <BsChevronDown />
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder='Emlak Danışmanı Arayın'
                        className='tracking-wider rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm transition-all px-4 w-[400px] max-w-full'
                    />
                </div>
            </div>
            <hr className='my-3' />
            {consultantData.length > 0 ? (
                <div className="flex flex-wrap">
                    {
                        consultantData.map((consultant, index) => (
                            <Item itemWidth={itemWidth} key={index} consultant={consultant} />
                        ))
                    }
                </div>
            ) : (
            <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                <NoContentFound />
            </div>
            )}
        </>
    )
}

export default Danismanlar