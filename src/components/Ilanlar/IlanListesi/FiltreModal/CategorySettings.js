import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'

function CategorySettings(props) {
    const {
        handleCategorySettingsClose,
        selectedCategory,
        categoriesData,
        categoryType,
        setCategoryType,
        categoryPrimary,
        setCategoryPrimary,
        categorySecondary,
        setCategorySecondary
    } = props;

    const filteredCategories = categoriesData.filter(
        category => category.category_type === categoryType
    );

    const handleCategoryType = (type) => {
        setCategoryType(type);
        setCategoryPrimary('');
        setCategorySecondary('');
    };

    const handleCategoryPrimary = (name) => {
        setCategoryPrimary(name);
        setCategorySecondary('');
    };

    const handleCategorySecondary = (name) => {
        setCategorySecondary(name);
    };

    const handleCategoryClick = () => {
        handleCategorySettingsClose();
    };
    return (
        <div className='fixed flex left-0 top-0 w-full h-full justify-center items-center backdrop-blur-sm bg-site/10 z-30 px-4'>
            <div className="filterModalContain flex flex-col max-w-full shadow-xl shadow-site/10 justify-center items-center rounded-lg bg-white lg:animate-loginComing animate-loginComingMobile">
                <div className="flex justify-between w-full items-center p-4">
                    <span className='text-lg'>Kategori</span>
                    <button
                        onClick={handleCategorySettingsClose}
                        className='hover:text-site hover:scale-125 transition-all'
                    >
                        <TfiClose size={22} />
                    </button>

                </div>
                <hr className='w-full' />
                <div className="flex flex-col p-6 gap-6 w-full">
                    <div className="flex gap-x-6 min-h-[350px]">
                        <ul className='flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[200px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto'>
                            <li
                                className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                ${categoryType == "Satılık" ?
                                        'bg-site/10 text-site pl-5' :
                                        ''}`
                                }
                                onClick={() => handleCategoryType('Satılık')}
                            >
                                Satılık
                            </li>
                            <li
                                className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                ${categoryType == "Kiralık" ?
                                        'bg-site/10 text-site pl-5' :
                                        ''}`
                                }
                                onClick={() => handleCategoryType('Kiralık')}
                            >
                                Kiralık
                            </li>
                        </ul>
                        <ul className='flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[200px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto'>
                            {filteredCategories.map((category, key) => (
                                <li
                                    key={key}
                                    className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                                ${categoryPrimary === category.name ? 'bg-site/10 text-site pl-5' : ''}`}
                                    onClick={() => handleCategoryPrimary(category.name)}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                        <ul className='flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[200px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto'>
                            {filteredCategories.map((category) => (
                                category.name === categoryPrimary && category.children && category.children.length > 0 && (
                                    category.children.map((childCategory, childKey) => (
                                        <li
                                            key={childKey}
                                            className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                                        ${categorySecondary === childCategory.name ? 'bg-site/10 text-site pl-5' : ''}`}
                                            onClick={() => handleCategorySecondary(childCategory.name)}
                                        >
                                            {childCategory.name}
                                        </li>
                                    ))
                                )
                            ))}
                        </ul>


                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-y-1'>
                            <span className='text-gray-500 text-sm'>Geçerli Kategori</span>
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
                        </div>
                        <button
                            onClick={handleCategoryClick}
                            className='min-w-fit lg:w-fit w-full ml-auto text-site transition-all rounded-md py-3 px-4 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-base'
                        >
                            Kategoriyi Seç
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CategorySettings