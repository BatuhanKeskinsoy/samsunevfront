import Link from 'next/link';
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'

function CategorySettings(props) {
    const {
        county,
        neighbourhood,

        categoryType,
        setCategoryType,
        categoryPrimary,
        setCategoryPrimary,
        categorySecondary,
        setCategorySecondary,

        handleCategorySettingsClose,
        filteredCategories,
    } = props;

    const cityPath = `/samsun`
    const CountyPath = county ? `/${county}` : ''
    const NeighbourhoodPath = neighbourhood ? `/${neighbourhood}` : ''
    const categoryPath = categorySecondary.name ? `/${categorySecondary.slug}` : `/${categoryPrimary.slug}`


    const handleCategoryType = (type) => {
        setCategoryType(type);
        setCategoryPrimary('');
        setCategorySecondary('');
    };

    const handleCategoryPrimary = (name, slug) => {
        setCategoryPrimary(name, slug);
        setCategorySecondary('');
    };

    const handleCategorySecondary = (name, slug) => {
        setCategorySecondary(name, slug);
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

                            {categoryType ? (
                                <>
                                    {filteredCategories.map((category, key) => (
                                        <li
                                            key={key}
                                            className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                                ${categoryPrimary.name === category.name ? 'bg-site/10 text-site pl-5' : ''}`}
                                            onClick={() => handleCategoryPrimary({
                                                name: category.name,
                                                slug: category.slug
                                            })}
                                        >
                                            {category.name}
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <div className='w-full h-full flex flex-col gap-y-2 justify-center items-center text-gray-500 text-xl'>
                                    <span>Satılık mı?</span>
                                    <span>Kiralık mı?</span>
                                </div>
                            )}
                        </ul>

                        {categoryPrimary && (
                            <ul className='flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[200px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto'>

                                {filteredCategories.map((category) => (
                                    category.name === categoryPrimary.name && category.children && category.children.length > 0 && (
                                        category.children.map((childCategory, childKey) => (
                                            <li
                                                key={childKey}
                                                className={`hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer 
                                                        ${categorySecondary.name === childCategory.name ? 'bg-site/10 text-site pl-5' : ''}`}
                                                onClick={() => handleCategorySecondary({
                                                    name: childCategory.name,
                                                    slug: childCategory.slug
                                                })}
                                            >
                                                {childCategory.name}
                                            </li>
                                        ))
                                    )
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-y-1'>
                            <span className='text-gray-500 text-sm'>Geçerli Kategori</span>
                            <ul className='flex flex-wrap items-center justify-start gap-1 max-w-full lg:max-w-[300px]'>
                                {categoryType || categoryPrimary || categorySecondary ? (
                                    <>
                                        {categoryType && (
                                            <li className='text-site flex items-center gap-x-1'>
                                                {categoryType}
                                            </li>
                                        )}
                                        {categoryPrimary && (
                                            <li className='text-site flex items-center gap-x-1'>
                                                <BsChevronRight size={13} />
                                                {categoryPrimary.name}
                                            </li>
                                        )}
                                        {categorySecondary && (
                                            <li className='text-site flex items-center gap-x-1'>
                                                <BsChevronRight size={13} />
                                                {categorySecondary.name}
                                            </li>
                                        )}
                                    </>
                                ) : (
                                    <li className='text-gray-500 opacity-50'>Kategori Seçiniz</li>
                                )}
                            </ul>
                        </div>
                        <Link
                            href={`${cityPath}${CountyPath}${NeighbourhoodPath}${categoryPath}`}
                            onClick={handleCategorySettingsClose}
                            className='min-w-fit lg:w-fit w-full ml-auto text-site transition-all rounded-md py-3 px-4 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-base'
                        >
                            Kategoriyi Seç
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CategorySettings