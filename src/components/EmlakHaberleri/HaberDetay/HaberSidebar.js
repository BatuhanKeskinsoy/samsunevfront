import Shares from '@/components/Others/Shares'
import Tags from '@/components/Others/Tags'
import React from 'react'
import { BsShare, BsTags } from 'react-icons/bs'

function HaberSidebar() {
    return (
        <aside id='HaberSidebar' className='flex-[1_1_25%] lg:mt-0 mt-6 max-w-full gap-y-4 h-full flex flex-col sticky top-4'>

            <div className="flex flex-col gap-y-4 bg-white p-4 rounded-lg shadow-sm">
                <span className='flex items-center justify-between w-full text-gray-600'>
                    Bu Haberi Paylaş
                    <BsShare size={20} />
                </span>
                <hr />
                <Shares />
            </div>

            <div className="flex flex-col gap-y-4 bg-white p-4 rounded-lg shadow-sm">
                <span className='flex items-center justify-between w-full text-gray-600'>
                    Etiketler
                    <BsTags size={20} />
                </span>
                <hr />
                <Tags />
            </div>
        </aside>
    )
}

export default HaberSidebar