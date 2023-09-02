// Topdiv.js
import React, { useEffect } from 'react';
import { CiBoxList, CiGrid41 } from 'react-icons/ci';

function Topdiv(props) {
    const {
        categoryPrimary,
        categorySecondary,
        categoryType,
        layoutType,
        setLayoutType,
    } = props;

    // Sayfa yüklendiğinde sessionStorage'dan layoutType'ı alın
    useEffect(() => {
        const savedLayoutType = sessionStorage.getItem('layoutType');
        if (savedLayoutType) {
            setLayoutType(savedLayoutType);
        }
    }, [setLayoutType]);

    // Layout tipi değiştikçe sessionStorage'a kaydedin
    useEffect(() => {
        sessionStorage.setItem('layoutType', layoutType);
    }, [layoutType]);

    return (
        <div className='w-full'>
            <div className="flex lg:flex-row flex-col lg:gap-y-0 justify-between items-center bg-white shadow-md shadow-gray-200 rounded-lg px-4 py-5">
                <h1 className='capitalize text-xl tracking-wide py-0.5'>
                    <strong className='text-site'>
                        {categoryType}{' '}
                        {categorySecondary ? categorySecondary : categoryPrimary}
                    </strong> İlanları
                </h1>
                <div className="flex gap-x-4 items-center">
                    <div className='text-sm text-gray-500'>
                        100 ilan bulundu
                    </div>
                    <div className="lg:flex hidden gap-x-2">
                        <button
                            className={`hover:text-site transition-all ${layoutType === "list" ? 'text-site' : ''}`}
                            onClick={() => setLayoutType('list')}
                        >
                            <CiBoxList className='text-2xl' />
                        </button>
                        <button
                            className={`hover:text-site transition-all ${layoutType === "grid" ? 'text-site' : ''}`}
                            onClick={() => setLayoutType('grid')}
                        >
                            <CiGrid41 className='text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topdiv;
