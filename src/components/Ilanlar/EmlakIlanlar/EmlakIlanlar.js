import React, { useState } from 'react';
import { ItemGrid } from '@/components/Ilanlar/Item/Item';

function EmlakIlanlar(props) {
    const { realestatesData, userId } = props;
    const itemWidth = 'xl:w-1/3 lg:w-1/2 w-full';
    const itemsPerPage = 12;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(realestatesData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRealEstates = realestatesData.slice(indexOfFirstItem, indexOfLastItem);

    
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <ul className="flex flex-wrap">
                {currentRealEstates.filter(realestatesData => realestatesData.user.id === userId).map((realestate, key) => (
                    <ItemGrid realestate={realestate} itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} key={key} />
                ))}
            </ul>
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

export default EmlakIlanlar;
