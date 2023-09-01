import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import Item from '@/components/EmlakDanismanlari/DanismanListesi/Item';
import NoContentFound from '@/components/Others/NoContentFound';

function Danismanlar(props) {
    const itemsPerPage = 12;
    const itemWidth = 'xl:w-1/4 lg:w-1/3 md:w-1/2 w-full';

    const consultantData = props.consultantData;
    const countiesData = props.countiesData;

    const [currentPage, setCurrentPage] = useState(1);
    const [filteredConsultants, setFilteredConsultants] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedCounty, setSelectedCounty] = useState('');
    const [neighbourhoodsData, setNeighbourhoodData] = useState([]);
    const [selectedCountyText, setSelectedCountyText] = useState('');

    const [selectedNeighbourhoodText, setSelectedNeighbourhoodText] = useState('');

    const [searchText, setSearchText] = useState('');

    const handleCountyChange = async (e) => {
        const selectedCountyId = e.target.value;
        const selectedCountyName = e.target.options[e.target.selectedIndex].text;
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
            setSelectedNeighbourhoodText('');
        } else {
            setNeighbourhoodData([]);
            setSelectedCountyText('');
            setSelectedNeighbourhoodText('');
        }
    };

    const handleNeighbourhoodChange = (e) => {
        const selectedNeighbourhoodId = e.target.value;
        const selectedNeighbourhoodName = e.target.options[e.target.selectedIndex].text;
        setSelectedNeighbourhoodText(selectedNeighbourhoodName);

        if (!selectedNeighbourhoodId) {
            setSelectedNeighbourhoodText(''); // Mahalle seçimini temizle
        }
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const itemsRef = useRef(null);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        if (itemsRef.current) {
            itemsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const filtered = consultantData.filter(consultant =>
            (!selectedCountyText || consultant.company.district === selectedCountyText) &&
            (!selectedNeighbourhoodText || consultant.company.neighbourhood === selectedNeighbourhoodText) &&
            (!searchText || consultant.name.toLowerCase().includes(searchText.toLowerCase()))
        );
        setFilteredConsultants(filtered);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        setCurrentPage(1); // Sayfa değiştiğinde ilk sayfaya dön
    }, [selectedCountyText, selectedNeighbourhoodText, searchText, consultantData]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredConsultants.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-3 p-2 lg:justify-between justify-center" ref={itemsRef}>
                <div className="danismanlarDiv flex flex-row shadow-lg rounded-lg overflow-hidden text-center justify-start items-center overflow-x-auto">
                    <div className='bg-white py-2 px-4 opacity-50 cursor-not-allowed lg:w-fit w-full min-w-max'>Emlak Danışmanları</div>
                    <Link href={'/emlak-ofisleri'} className='bg-site/90 hover:bg-site text-white transition-all py-2 px-4 lg:w-fit w-full min-w-max'>Emlak Ofisleri</Link>
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
            {filteredConsultants.length > 0 ? (
                <div className="flex flex-wrap">
                    {currentItems.map((consultant, index) => (
                        <Item itemWidth={itemWidth} key={index} consultant={consultant} isPriority={index < 4} />
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
    )
}

export default Danismanlar