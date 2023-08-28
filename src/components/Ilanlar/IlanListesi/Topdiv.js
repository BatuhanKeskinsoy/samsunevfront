import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

function Topdiv({ categoryPrimary, categorySecondary, categoryType }) {

    return (
        <div className='w-full'>
            <div className="flex lg:flex-row flex-col lg:gap-y-0 justify-between items-center bg-white shadow-md shadow-gray-200 rounded-lg px-4 py-5">
                <h1 className='capitalize text-xl tracking-wide py-0.5'>
                    <strong className='text-site'>
                        {categoryType}{' '}
                        {categorySecondary ? categorySecondary : categoryPrimary}</strong> İlanları</h1>
                <div className='text-sm text-gray-500'>
                    100 ilan bulundu
                </div>
            </div>
        </div>
    )
}

export default Topdiv