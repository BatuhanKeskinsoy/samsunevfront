import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import { CiLineHeight, CiLocationOn, CiSearch, CiSliderHorizontal } from 'react-icons/ci';
import CategorySettings from '@/components/Ilanlar/IlanListesi/FiltreModal/CategorySettings';
import LocationSettings from '@/components/Ilanlar/IlanListesi/FiltreModal/LocationSettings';

function Filtre(props) {
    const {
        city,
        county,
        neighbourhood,
        category,
        categoriesData,
        countiesData,
        neighbourhoodsData,
        categoryType,
        setCategoryType,
        categoryPrimary,
        setCategoryPrimary,
        categorySecondary,
        setCategorySecondary,
        locationPrimary,
        setLocationPrimary,
        locationSecondary,
        setLocationSecondary,
        searchEstate,
        setSearchEstate,
        sortingOption,
        setSortingOption,
    } = props;

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isCategorySettingsActive, setIsCategorySettingsActive] = useState(false);
    const [isLocationSettingsActive, setIsLocationSettingsActive] = useState(false);

    const [searchNeighbourhood, setSearchNeighbourhood] = useState('');

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


    const filteredCategories = categoriesData.filter(
        category => category.category_type === categoryType
    );


    const filteredNeighbourhoods = neighbourhoodsData.filter(
        neighbourhood =>
            neighbourhood.county_id === locationPrimary.id &&
            neighbourhood.neighbourhood.toLowerCase().includes(searchNeighbourhood.toLowerCase())
    );

    return (
        <>
            {isMobile && (
                <button
                    className={`bg-white py-3 shadow-sm lg:hidden w-full flex justify-between items-center px-4 tracking-wide text-sm ${isFilterOpen ? 'rounded-t-lg' : 'rounded-lg'
                        }`}
                    onClick={toggleFilter}
                >
                    Filtrele
                    <BsChevronDown />
                </button>
            )}
            {(isMobile && isFilterOpen) || !isMobile ? (
                <aside
                    id="IlanlarFiltre"
                    className={`w-full lg:w-[300px] lg:max-w-[300px] max-w-full h-full sticky top-4 lg:mb-12 flex-col gap-y-4 ${isMobile ? (isFilterOpen ? 'flex' : 'hidden') : 'flex'
                        } lg:flex`}
                >
                    <div className="flex flex-col gap-y-4">
                        <button
                            onClick={handleCategorySettingsOpen}
                            className="relative group w-full px-4 py-3 text-sm rounded-lg flex flex-col gap-y-2 transition-all bg-white shadow-md shadow-gray-200 hover:shadow-gray-300"
                        >
                            <div className="flex justify-between w-full text-gray-500">
                                <span className="flex">Kategori</span>
                                <div className="flex items-center justify-between gap-x-4">
                                    <CiSliderHorizontal className="text-xl group-hover:scale-125 transition-all" />
                                </div>
                            </div>
                            <ul className="flex flex-wrap items-center justify-start gap-1 max-w-full lg:max-w-[300px]">
                                {categoryType || categoryPrimary || categorySecondary ? (
                                    <>
                                        {categoryType && (
                                            <li className="text-site flex items-center gap-x-1">{categoryType}</li>
                                        )}
                                        {categoryPrimary && (
                                            <li className="text-site flex items-center gap-x-1">
                                                <BsChevronRight size={13} />
                                                {categoryPrimary.name}
                                            </li>
                                        )}
                                        {categorySecondary && (
                                            <li className="text-site flex items-center gap-x-1">
                                                <BsChevronRight size={13} />
                                                {categorySecondary.name}
                                            </li>
                                        )}
                                    </>
                                ) : (
                                    <li className="text-gray-500 opacity-50">Kategori Seçiniz</li>
                                )}
                            </ul>
                        </button>
                        <button
                            onClick={handleLocationSettingsOpen}
                            className="relative group w-full px-4 py-3 text-sm rounded-lg flex flex-col gap-y-2 transition-all bg-white shadow-md shadow-gray-200 hover:shadow-gray-300"
                        >
                            <div className="flex justify-between w-full text-gray-500">
                                <span className="flex">Konum</span>
                                <div className="flex items-center justify-between gap-x-4">
                                    <CiLocationOn className="text-xl group-hover:scale-125 transition-all" />
                                </div>
                            </div>
                            <ul className="flex flex-wrap items-center justify-start gap-1 max-w-full lg:max-w-[300px]">
                                {locationPrimary || locationSecondary ? (
                                    <>
                                        {locationPrimary && (
                                            <li className="text-site flex items-center gap-x-1">{locationPrimary.name}</li>
                                        )}
                                        {locationSecondary && (
                                            <li className="text-site flex items-center gap-x-1">
                                                <BsChevronRight size={13} />
                                                {locationSecondary.name}
                                            </li>
                                        )}
                                    </>
                                ) : (
                                    <li className="text-gray-500 opacity-50">İlçe Seçiniz</li>
                                )}
                            </ul>
                        </button>
                    </div>

                    <div className={`relative group w-full bg-white px-4 py-3 text-sm flex flex-col gap-y-3 ${isFilterOpen ? 'rounded-b-lg' : 'rounded-lg shadow-md shadow-gray-200'
                        }`}>
                        <div className="flex justify-between w-full text-gray-500">
                            <span className="flex">İlan Ara</span>
                            <div className="flex items-center justify-between gap-x-4">
                                <CiSearch className="text-xl group-hover:scale-125 transition-all" />
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="İlan adı giriniz"
                            className="tracking-wider rounded-md border-0 py-2 shadow-sm ring-1 text-site placeholder:text-gray-600 ring-gray-600/30 focus:ring-site outline-none text-sm transition-all px-4 w-[400px] max-w-full"
                            value={searchEstate}
                            onChange={(e) => setSearchEstate(e.target.value)}
                        />
                    </div>

                    <div className={`relative group w-full bg-white px-4 py-3 text-sm flex flex-col gap-y-3 ${isFilterOpen ? 'rounded-b-lg' : 'rounded-lg shadow-md shadow-gray-200'
                        }`}>
                        <div className="flex justify-between w-full text-gray-500">
                            <span className="flex">İlan Sırala</span>
                            <div className="flex items-center justify-between gap-x-4">
                                <CiLineHeight className="text-xl group-hover:scale-125 transition-all" />
                            </div>
                        </div>
                        <div className="relative">
                            <select
                                className="block w-full px-4 py-2 pr-8 leading-tight bg-white text-gray-600 border rounded-md appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-gray-600/30"
                                placeholder="Sıralama Türü Seçiniz"
                                value={sortingOption}
                                onChange={(e) => setSortingOption(e.target.value)}
                            >
                                <option value="tg_ey">Tarihe Göre (Önce en yeni)</option>
                                <option value="tg_es">Tarihe Göre (Önce en eski)</option>
                                <option value="fg_ey">Fiyata Göre (Önce en yüksek)</option>
                                <option value="fg_ed">Fiyata Göre (Önce en düşük)</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <BsChevronDown />
                            </div>
                        </div>
                    </div>
                </aside>
            ) : null}

            {isCategorySettingsActive && (
                <CategorySettings
                    city={city}
                    county={county}
                    neighbourhood={neighbourhood}
                    categoryType={categoryType}
                    setCategoryType={setCategoryType}
                    categoryPrimary={categoryPrimary}
                    setCategoryPrimary={setCategoryPrimary}
                    categorySecondary={categorySecondary}
                    setCategorySecondary={setCategorySecondary}
                    handleCategorySettingsClose={handleCategorySettingsClose}
                    filteredCategories={filteredCategories}
                />
            )}

            {isLocationSettingsActive && (
                <LocationSettings
                    city={city}
                    category={category}
                    countiesData={countiesData}
                    neighbourhoodsData={neighbourhoodsData}
                    locationPrimary={locationPrimary}
                    setLocationPrimary={setLocationPrimary}
                    locationSecondary={locationSecondary}
                    setLocationSecondary={setLocationSecondary}
                    handleLocationSettingsClose={handleLocationSettingsClose}
                    searchNeighbourhood={searchNeighbourhood}
                    setSearchNeighbourhood={setSearchNeighbourhood}
                    filteredNeighbourhoods={filteredNeighbourhoods}
                />
            )}
        </>
    );
}

export default Filtre;
