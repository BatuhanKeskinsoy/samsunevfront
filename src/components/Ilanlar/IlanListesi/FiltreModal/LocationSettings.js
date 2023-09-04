import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';

function LocationSettings(props) {
    const {
        city,
        category,
        countiesData,

        locationPrimary,
        setLocationPrimary,
        locationSecondary,
        setLocationSecondary,

        handleLocationSettingsClose,
        searchTerm,
        setSearchTerm,
        filteredNeighbourhoods,
    } = props;

    const cityPath = city ? `/${city}` : ''
    const CategoryPath = category ? `/${category}` : ''
    const locationPath = locationSecondary.name ? `/${locationPrimary.slug}/${locationSecondary.slug}` : `/${locationPrimary.slug}`



    const handleLocationPrimary = (name, id, slug) => {
        setLocationPrimary(name, id, slug);
        setLocationSecondary('');
    };
    const handleLocationSecondary = (name, slug) => {
        setLocationSecondary(name, slug);
    };

    return (
        <div className="fixed flex left-0 top-0 w-full h-full justify-center items-center backdrop-blur-sm bg-site/10 z-30 px-4">
            <div className="filterModalContain flex flex-col max-w-full shadow-xl shadow-site/10 justify-center items-center rounded-lg bg-white lg:animate-loginComing animate-loginComingMobile">
                <div className="flex justify-between w-full items-center p-4">
                    <span className="text-lg">Konum</span>
                    <button
                        onClick={handleLocationSettingsClose}
                        className="hover:text-site hover:scale-125 transition-all"
                    >
                        <TfiClose size={22} />
                    </button>
                </div>
                <hr className="w-full" />
                <div className="flex flex-col p-6 gap-6 w-full">
                    <div className="flex gap-x-6">
                        <ul className="flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[300px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto">
                            {countiesData.map(county => (
                                <li
                                    key={county.county_id}
                                    className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                    ${locationPrimary.name == county.county ?
                                            'bg-site/10 text-site pl-5' :
                                            ''}`
                                    }
                                    onClick={() => handleLocationPrimary({
                                        name: county.county,
                                        id: county.county_id,
                                        slug: county.county_slug
                                    })}
                                >
                                    {county.county}
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[300px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto">

                            {locationPrimary ? (
                                <>
                                    <li className='p-3'>
                                        <input
                                            type="text"
                                            placeholder='Mahalle Ara'
                                            className='py-2 px-4 ring-1 ring-gray-500/30 rounded-t-md w-full outline-none'
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </li>

                                    {filteredNeighbourhoods.length === 0 ? (
                                        <li className='p-3 text-gray-500 text-center flex flex-col gap-y-1 justify-center items-center w-full h-full py-4'>
                                            <span>Mahalle Bulunamadı.</span>
                                            <small>Doğru ilçeyi seçtiğinizden emin olun</small>
                                        </li>
                                    ) : (
                                        filteredNeighbourhoods
                                            .map(neighbourhood => (
                                                <li
                                                    key={neighbourhood.neighbourhood_id}
                                                    className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                                            ${locationSecondary.name == neighbourhood.neighbourhood ?
                                                            'bg-site/10 text-site pl-5' :
                                                            ''}`
                                                    }
                                                    onClick={() => handleLocationSecondary({
                                                        name: neighbourhood.neighbourhood,
                                                        slug: neighbourhood.neighbourhood_slug
                                                    })}
                                                >
                                                    {neighbourhood.neighbourhood}
                                                </li>
                                            ))
                                    )}
                                </>
                            ) : (

                                <div className='w-full h-full flex flex-col gap-y-2 justify-center items-center text-gray-500 text-xl'>
                                    <span>İlçe Seçiniz</span>
                                </div>
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-y-1">
                            <span className="text-gray-500 text-sm">Geçerli Konum</span>
                            <ul className="flex flex-wrap items-center justify-start gap-1 max-w-full lg:max-w-[300px]">
                                {locationPrimary || locationSecondary ? (
                                    <>
                                        {locationPrimary && (
                                            <li className="text-site flex items-center gap-x-1">
                                                {locationPrimary.name}
                                            </li>
                                        )}
                                        {locationSecondary && (
                                            <li className="text-site flex items-center gap-x-1">
                                                <BsChevronRight size={13} />
                                                {locationSecondary.name}
                                            </li>
                                        )}
                                    </>
                                ) : (
                                    <li className='text-gray-500 opacity-50'>İlçe Seçiniz</li>
                                )}
                            </ul>
                        </div>
                        <Link
                            href={`${cityPath}${locationPath}${CategoryPath}`}
                            onClick={handleLocationSettingsClose}
                            className="min-w-fit lg:w-fit w-full ml-auto text-site transition-all rounded-md py-3 px-4 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-base"
                        >
                            Konumu Seç
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationSettings;
