import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import NoContentFound from '@/components/Others/NoContentFound';
import Item from '@/components/EmlakOfisleri/EmlakListesi/Item';
import Link from 'next/link';

function Emlaklar(props) {
    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full';

    const companiesData = props.companiesData;
    const countiesData = props.countiesData;

    const [selectedCounty, setSelectedCounty] = useState('');
    const [neighbourhoodsData, setNeighbourhoodData] = useState([]);

    const handleCountyChange = async (e) => {
        const selectedCountyId = e.target.value;
        setSelectedCounty(selectedCountyId);

        if (selectedCountyId) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/neighbourhood/lists?county_id=${selectedCountyId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'HTTP_VERIFY': process.env.NEXT_PUBLIC_SITE_HTTP_VERIFY
                    }
                });
                const data = await response.json();
                setNeighbourhoodData(data);
            } catch (error) {
                console.error('Veri Çekme Hatası:', error);
            }
        } else {
            setNeighbourhoodData([]); // İlçe seçili değilse, mahalle verilerini temizle
        }
    };

    return (
        <>
            <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-3 p-2 lg:justify-between justify-center">
                <div className="danismanlarDiv flex flex-row shadow-lg rounded-lg overflow-hidden text-center justify-start items-center overflow-x-auto">
                    <div className='bg-white py-2 px-4 opacity-50 cursor-not-allowed lg:w-fit w-full min-w-max'>Emlak Ofisleri</div>
                    <Link href={'/emlak-danismanlari'} className='bg-site/90 hover:bg-site text-white transition-all py-2 px-4 lg:w-fit w-full min-w-max'>Emlak Danışmanları</Link>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-2">

                    {countiesData.length > 0 && (
                        <div id='Ilce' className="relative min-w-max">
                            <select
                                className="block w-full px-4 py-2 pr-8 leading-normal text-sm bg-white border h-10 rounded-lg appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                                placeholder='İlçe Seçiniz'
                                onChange={handleCountyChange}
                            >
                                <option value="">İlçe Seçiniz</option>
                                {countiesData.map((county, index) => (
                                    <option value={county.county_id} key={index}>{county.county}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <BsChevronDown />
                            </div>
                        </div>
                    )}

                    {neighbourhoodsData && selectedCounty && (
                        <div id='Mahalle' className="relative min-w-max">
                            <select
                                className="block w-full px-4 py-2 pr-8 leading-normal text-sm bg-white border h-10 rounded-lg appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                            >
                                <option value="">Mahalle Seçiniz</option>
                                {neighbourhoodsData
                                    .filter(neighbourhood => neighbourhood.county_id === parseInt(selectedCounty))
                                    .map((neighbourhood, index) => (
                                        <option value={neighbourhood.neighbourhood_id} key={index}>{neighbourhood.neighbourhood}</option>
                                    ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <BsChevronDown />
                            </div>
                        </div>
                    )}

                    <input
                        type="text"
                        placeholder='Emlak Ofisi Arayın'
                        className='tracking-wider rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm transition-all px-4 w-[400px] max-w-full'
                    />
                </div>
            </div>
            <hr className='my-3' />
            {companiesData.length > 0 ? (
                <div className="flex flex-wrap">
                    {companiesData.map((company, index) => (
                        <Item itemWidth={itemWidth} key={index} company={company} />
                    ))}
                </div>
            ) : (
                <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                    <NoContentFound />
                </div>
            )}
        </>
    );
}

export default Emlaklar;
