import React, { useState, useEffect } from 'react';
import { ItemGrid, ItemList } from '@/components/Ilanlar/Item/Item';
import NoContentFound from '@/components/Others/NoContentFound';

function Ilanlar(props) {
    const {
        filteredRealEstateData,
        realestatesData,
        layoutType,
        searchEstate,

        sortingOption,
    } = props;

    const [isMobile, setIsMobile] = useState(false);
    const itemsPerPage = 30;
    const [currentPage, setCurrentPage] = useState(1);
    const itemWidth = 'xl:w-1/3 lg:w-1/2 md:w-1/2 w-full';

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

    useEffect(() => {
        setCurrentPage(1);
    }, [realestatesData]);


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const itemsToShow = filteredRealEstateData.filter((realestate) =>
        realestate.name.toLowerCase().includes(searchEstate.toLowerCase())
    );

    const getPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return itemsToShow.slice(startIndex, endIndex);
    };

    const getSortedItems = () => {
        let sortedItems = [...itemsToShow]; // Create a copy of the original array
        switch (sortingOption) {
            case 'fg_ey':
                sortedItems.sort((a, b) => b.price - a.price); // Sort by price (high to low)
                break;
            case 'fg_ed':
                sortedItems.sort((a, b) => a.price - b.price); // Sort by price (low to high)
                break;
            case 'tg_es':
                sortedItems.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)); // Sort by date (oldest first)
                break;
            default:
                sortedItems.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort by date (newest first)
                break;
        }
        return sortedItems;
    };

    const sortedItemsToShow = getSortedItems()

    const renderItems = () => {
        if (isMobile) {
            return sortedItemsToShow.map((realestate, key) => (
                <ItemGrid
                    realestate={realestate}
                    itemWidth={itemWidth}
                    titleLineClamp={'line-clamp-2'}
                    key={key}
                />
            ));
        } else {
            return sortedItemsToShow.map((realestate, key) => (
                layoutType === 'grid' ? (
                    <ItemGrid
                        realestate={realestate}
                        itemWidth={itemWidth}
                        titleLineClamp={'line-clamp-2'}
                        key={key}
                    />
                ) : (
                    layoutType === 'list' && (
                        <ItemList
                            realestate={realestate}
                            itemWidth={itemWidth}
                            titleLineClamp={'line-clamp-2'}
                            key={key}
                        />
                    )
                )
            ));
        }
    };

    const renderPaginationButtons = () => {
        if (itemsToShow.length <= itemsPerPage) {
            return null; // Sayfa sayısı 1 veya daha azsa pagination düğmelerini gösterme
        }

        const totalPages = Math.ceil(itemsToShow.length / itemsPerPage);

        return (
            <div className="pagination flex lg:flex-wrap flex-nowrap items-center gap-3 justify-start overflow-x-auto lg:overflow-x-hidden pb-3">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`min-w-[2.5rem] w-10 h-10 hover:bg-site hover:text-white text-xl rounded-full transition-all ${currentPage === index + 1
                            ? 'bg-site text-white'
                            : 'bg-white text-site'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        );
    };



    return (
        <section id="Ilanlar" className="mb-8">
            {itemsToShow.length === 0 ? (
                <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                    <NoContentFound />
                </div>
            ) : (
                <>
                    <ul className="flex flex-wrap lg:-m-3">
                        {renderItems()}
                    </ul>

                    <div className="flex justify-center mt-8 max-w-full">
                        {renderPaginationButtons()}
                    </div>
                </>
            )}
        </section>
    );
}

export default Ilanlar;
