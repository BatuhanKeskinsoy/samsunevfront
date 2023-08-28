import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import { CiBoxList, CiLocationOn, CiSearch, CiSliderHorizontal } from 'react-icons/ci';
import CategorySettings from '@/components/Ilanlar/IlanListesi/FiltreModal/CategorySettings';
import LocationSettings from '@/components/Ilanlar/IlanListesi/FiltreModal/LocationSettings';
import Link from 'next/link';

function Filtre(props) {

    const {
        categoriesData,
        categoryType,
        setCategoryType,
        categoryPrimary,
        setCategoryPrimary,
        categorySecondary,
        setCategorySecondary,
    } = props

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isCategorySettingsActive, setIsCategorySettingsActive] = useState(false)
    const [isLocationSettingsActive, setIsLocationSettingsActive] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    const handleCategorySettingsOpen = () => {
        setIsCategorySettingsActive(true);
    };
    const handleCategorySettingsClose = () => {
        setIsCategorySettingsActive(false);
    };
    const handleLocationSettingsOpen = () => {
        setIsLocationSettingsActive(true);
    };
    const handleLocationSettingsClose = () => {
        setIsLocationSettingsActive(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.filterModalContain')) {
                setIsCategorySettingsActive(false);
                setIsLocationSettingsActive(false);
            }
        };

        if (isCategorySettingsActive || isLocationSettingsActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCategorySettingsActive, isLocationSettingsActive]);

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

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    useEffect(() => {
        setIsFilterOpen(false);
    }, []);

    return (
        <>
            {isMobile && (
                <button
                    className={`bg-white py-3 shadow-sm lg:hidden w-full flex justify-between items-center px-4 tracking-wide text-sm ${(isFilterOpen ? ' rounded-t-lg' : ' rounded-lg')}`}
                    onClick={toggleFilter}
                >
                    Filtrele
                    <BsChevronDown />
                </button>
            )}
            {(isMobile && isFilterOpen) || !isMobile ? (
                <aside
                    id='IlanlarFiltre'
                    className={`w-full lg:w-[300px] lg:max-w-[300px] max-w-full h-full sticky top-4 lg:mb-12 flex-col gap-y-4 ${isMobile ? (isFilterOpen ? 'flex' : 'hidden') : 'flex'} lg:flex`}
                >
                    <div className={`flex flex-col overflow-hidden bg-white ${(isFilterOpen ? 'rounded-b-lg' : ' rounded-lg shadow-md shadow-gray-200')}`}>
                        <button
                            onClick={handleCategorySettingsOpen}
                            className="relative group w-full px-4 py-3 text-sm flex flex-col gap-y-2 hover:bg-site/10 transition-all">
                            <div className="flex justify-between w-full text-gray-500">
                                <span className='flex'>Kategori</span>
                                <div className="flex items-center justify-between gap-x-4">
                                    <CiSliderHorizontal className='text-xl group-hover:scale-125 transition-all' />
                                </div>
                            </div>
                            <ul className='flex flex-wrap items-center justify-start gap-1 max-w-full lg:max-w-[300px]'>
                                {categoryType && (
                                    <li className='text-site flex items-center gap-x-1'>
                                        {categoryType}
                                    </li>
                                )}
                                {categoryPrimary && (
                                    <li className='text-site flex items-center gap-x-1'>
                                        <BsChevronRight size={13} />
                                        {categoryPrimary}
                                    </li>
                                )}
                                {categorySecondary && (
                                    <li className='text-site flex items-center gap-x-1'>
                                        <BsChevronRight size={13} />
                                        {categorySecondary}
                                    </li>
                                )}
                            </ul>
                        </button>
                        <hr />
                        <button
                            onClick={handleLocationSettingsOpen}
                            className="relative group w-full px-4 py-3 text-sm flex flex-col gap-y-2 hover:bg-site/10 transition-all">
                            <div className="flex justify-between w-full text-gray-500">
                                <span className='flex'>Konum</span>
                                <div className="flex items-center justify-between gap-x-4">
                                    <CiLocationOn className='text-xl group-hover:scale-125 transition-all' />
                                </div>
                            </div>
                            <ul className='flex flex-wrap items-center justify-start gap-1 max-w-full lg:max-w-[300px]'>
                                <li className='text-site flex items-center gap-x-1'>
                                    Atakum
                                </li>
                                <li className='text-site flex items-center gap-x-1'>
                                    <BsChevronRight size={13} />
                                    Denizevleri Mah
                                </li>
                            </ul>
                        </button>
                        <hr />
                        <div className="overflow-hidden w-full">
                            <Link
                                href={``}
                                className='flex justify-between items-center text-sm rounded-b-lg text-center w-full px-4 py-3 bg-site/90 text-white hover:bg-site transition-all'
                            >
                                Filtreyi Uygula
                                <BsChevronRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className={`relative group w-full bg-white px-4 py-3 text-sm flex flex-col gap-y-3 ${(isFilterOpen ? 'rounded-b-lg' : ' rounded-lg shadow-md shadow-gray-200')}`}>
                        <div className="flex justify-between w-full text-gray-500">
                            <span className='flex'>İlan Ara</span>
                            <div className="flex items-center justify-between gap-x-4">
                                <CiSearch className='text-xl group-hover:scale-125 transition-all' />
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder='İlan adı/numarası giriniz'
                            className='tracking-wider rounded-md border-0 py-2 shadow-sm ring-1 text-site placeholder:text-gray-600 ring-gray-600/30 focus:ring-site outline-none text-sm transition-all px-4 w-[400px] max-w-full'
                        />
                    </div>

                    <div className={`relative group w-full bg-white px-4 py-3 text-sm flex flex-col gap-y-3 ${(isFilterOpen ? 'rounded-b-lg' : ' rounded-lg shadow-md shadow-gray-200')}`}>
                        <div className="flex justify-between w-full text-gray-500">
                            <span className='flex'>İlan Sırala</span>
                            <div className="flex items-center justify-between gap-x-4">
                                <CiBoxList className='text-xl group-hover:scale-125 transition-all' />
                            </div>
                        </div>
                        <div className="relative">
                            <select
                                className="block w-full px-4 py-2 pr-8 leading-tight bg-white text-gray-600 border rounded-md appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-gray-600/30"
                                placeholder='Sıralama Türü Seçiniz'
                            >
                                <option>Sıralama Türü Seçiniz</option>
                                <option value={'fg_ey'}>Fiyata Göre (Önce en yüksek)</option>
                                <option value={'fg_ed'}>Fiyata Göre (Önce en düşük)</option>
                                <option value={'tg_ey'}>Tarihe Göre (Önce en yeni)</option>
                                <option value={'tg_es'}>Tarihe Göre (Önce en eski)</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <BsChevronDown />
                            </div>
                        </div>
                    </div>

                </aside >
            ) : null
            }


            {isCategorySettingsActive && (
                <CategorySettings
                    categorySecondary={categorySecondary}
                    setCategorySecondary={setCategorySecondary}
                    categoryPrimary={categoryPrimary}
                    setCategoryPrimary={setCategoryPrimary}
                    categoryType={categoryType}
                    setCategoryType={setCategoryType}
                    categoriesData={categoriesData}
                    selectedCategory={selectedCategory}
                    handleCategorySettingsClose={handleCategorySettingsClose}
                />
            )}

            {isLocationSettingsActive && (
                <LocationSettings
                    selectedLocation={selectedLocation}
                    handleLocationSettingsClose={handleLocationSettingsClose}
                />
            )}

        </>
    );
}

export default Filtre;
