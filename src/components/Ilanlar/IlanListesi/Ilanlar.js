import React, { useState, useEffect } from 'react';
import { ItemGrid, ItemList } from '@/components/Ilanlar/Item/Item';

function Ilanlar(props) {
    const { realestatesData } = props;
    const itemsPerPage = 30; // Number of items to display per page

    // State to keep track of the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages based on the data length and items per page
    const totalPages = Math.ceil(realestatesData.length / itemsPerPage);

    // Calculate the index range of items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filter the realestatesData to get the items for the current page
    const itemsToShow = realestatesData.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        // When realestatesData changes, reset the current page to 1
        setCurrentPage(1);
    }, [realestatesData]);

    const itemWidth = 'xl:w-1/3 lg:w-1/2 md:w-1/2 w-full';

    return (
        <section id='Ilanlar' className='mb-8'>
            <ul className="flex flex-wrap -m-3">
                {itemsToShow.map((realestate, key) => (
                    <ItemList
                        realestate={realestate}
                        itemWidth={itemWidth}
                        titleLineClamp={'line-clamp-2'}
                        key={key}
                    />
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


        </section>
    );
}

export default Ilanlar;
