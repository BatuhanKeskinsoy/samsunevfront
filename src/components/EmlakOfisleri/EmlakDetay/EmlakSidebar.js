import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'

function EmlakSidebar(props) {

    const consultantUsers = props.companyProfileData.users
    const company = props.companyProfileData

    const handleTabClick = props.handleTabClick

    return (
        <aside id='EmlakDetaySidebar' className='w-full lg:w-[350px] lg:min-w-[350px] max-w-full h-full flex flex-col gap-y-4 sticky top-4'>

            <div className="flex flex-col gap-y-2 text-sm">
                <Link
                    href={company.map_url}
                    target='_blank'
                    className='flex bg-white text-gray-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white shadow-sm transition-all'>
                    <span>Konumu Gör</span>
                    <BsChevronRight size={16} />
                </Link>
            </div>

            <div className="bg-white py-4 px-4 rounded-md flex flex-col gap-y-1 shadow-sm">
                <span className='tracking-wide text-lg'>Emlak Danışmanları</span>
                <div className="grid gap-y-4 my-4">

                    {
                        consultantUsers.map((consultant, index) => {
                            const phoneSlug = consultant.phone ? consultant.phone.replace(/\s/g, '') : ''
                            return (
                                <div className="flex gap-x-4 items-center border-l-2 border-transparent pl-2 transition-all hover:border-site hover:pl-4" key={index}>
                                    <div className="relative w-16 h-16 rounded-full shadow-lg">
                                        <Link
                                            href={`/emlak-danismanlari/${consultant.slug}`}
                                            className='hover:text-site transition-all'
                                            title={consultant.name}
                                        >
                                            <Image
                                                src={`/${consultant.image}`}
                                                title={consultant.name}
                                                alt={consultant.name}
                                                sizes='(max-width: 768px) 100vw, 10vw'
                                                fill
                                                className='object-cover object-center rounded-full'
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                        <Link
                                            href={`/emlak-danismanlari/${consultant.slug}`}
                                            title={consultant.name}
                                            className='hover:text-site transition-all'
                                        >
                                            {consultant.name}
                                        </Link>
                                        <Link
                                            href={`tel:/${phoneSlug}`}
                                            title={consultant.name}
                                            className='text-sm text-gray-500 hover:text-site transition-all'
                                        >
                                            {consultant.phone}
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                        )}

                </div>
                <button
                    onClick={() => handleTabClick('danismanlar')}
                    className='w-full bg-site/10 text-site py-2 px-4 items-center justify-center rounded-lg hover:bg-site/20 transition-all'>
                    <span className='lg:text-sm'>Tüm Danışmanlar</span>
                </button>
            </div>

        </aside>
    )
}

export default EmlakSidebar