import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'

function DanismanSidebar(props) {

    const handleTabClick = props.handleTabClick

    return (
        <aside id='EmlakDetaySidebar' className='w-full lg:w-[350px] lg:min-w-[350px] max-w-full h-full flex flex-col gap-y-4 sticky top-4'>
            
            <div className="flex flex-col gap-y-2 text-sm">
                <Link
                    href={'https://goo.gl/maps/E229DoaaChBKNUKH8'}
                    target='_blank'
                    className='flex bg-white text-gray-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white shadow-sm transition-all'>
                    <span>Konumu Gör</span>
                    <BsChevronRight size={16} />
                </Link>
            </div>

        </aside>
    )
}

export default DanismanSidebar