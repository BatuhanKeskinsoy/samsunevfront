import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import Item from '@/components/EmlakOfisleri/EmlakListesi/Item';
import NoContentFound from '@/components/Others/NoContentFound';

function Emlaklar(props) {
    const itemsPerPage = 12;
    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full';

    const companiesData = props.companiesData;
    const countiesData = props.countiesData;

    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedCounty, setSelectedCounty] = useState('');
    const [neighbourhoodsData, setNeighbourhoodData] = useState([]);
    const [selectedCountyText, setSelectedCountyText] = useState('');

    const [selectedNeighbourhoodText, setSelectedNeighbourhoodText] = useState('');

    const [searchText, setSearchText] = useState('');

    const handleCountyChange = async (e) => {
        const selectedCountyId = e.target.value;
        const selectedCountyName = e.target.options[e.target.selectedIndex].text; // Seçili ilçe adını alma
        setSelectedCounty(selectedCountyId);
        setSelectedCountyText(selectedCountyName);

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
            setSelectedNeighbourhoodText(''); // Mahalle seçimini temizle
        } else {
            setNeighbourhoodData([]); // İlçe seçili değilse, mahalle verilerini temizle
            setSelectedCountyText(''); // İlçe seçimini temizle
            setSelectedNeighbourhoodText(''); // Mahalle seçimini temizle
        }
    };

    const handleNeighbourhoodChange = (e) => {
        const selectedNeighbourhoodId = e.target.value;
        const selectedNeighbourhoodName = e.target.options[e.target.selectedIndex].text; // Seçili mahalle adını alma
        setSelectedNeighbourhoodText(selectedNeighbourhoodName);

        if (!selectedNeighbourhoodId) {
            setSelectedNeighbourhoodText(''); // Mahalle seçimini temizle
        }
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };


    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const filtered = companiesData.filter(company =>
            (!selectedCountyText || company.district === selectedCountyText) &&
            (!selectedNeighbourhoodText || company.neighbourhood === selectedNeighbourhoodText) &&
            (!searchText || company.name.toLowerCase().includes(searchText.toLowerCase()))
        );
        setFilteredCompanies(filtered);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        setCurrentPage(1); // Sayfa değiştiğinde ilk sayfaya dön
    }, [selectedCountyText, selectedNeighbourhoodText, searchText, companiesData]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);

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
                                placeholder='Tüm İlçeler'
                                onChange={handleCountyChange}
                            >
                                <option value="">Tüm İlçeler</option>
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
                                placeholder='Tüm Mahalleler'
                                onChange={handleNeighbourhoodChange}
                            >
                                <option value="">Tüm Mahalleler</option>
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
                        placeholder='Emlak Danışmanı Arayın'
                        className='tracking-wider rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm transition-all px-4 w-[400px] max-w-full'
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <hr className='my-3' />
            {filteredCompanies.length > 0 ? (
                <div className="flex flex-wrap">
                    {currentItems.map((company, index) => (
                        <Item itemWidth={itemWidth} key={index} company={company} isPriority={index < 4} />
                    ))}
                </div>
            ) : (
                <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                    <NoContentFound />
                </div>
            )}
            <div className="flex justify-center mt-8 max-w-full">
                <div className="pagination flex lg:flex-wrap flex-nowrap items-center gap-3 justify-start overflow-x-auto lg:overflow-x-hidden pb-3">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`min-w-[2.5rem] w-10 h-10 hover:bg-site hover:text-white text-xl rounded-full transition-all ${currentPage === index + 1 ?
                                'bg-site text-white' :
                                'bg-white text-site'}`
                            }
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Emlaklar;
