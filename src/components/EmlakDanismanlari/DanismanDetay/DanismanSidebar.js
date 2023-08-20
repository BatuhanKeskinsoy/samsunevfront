import React from 'react'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'

function DanismanSidebar(props) {

    const consultantProfileData = props.consultantProfileData

    // Yeni genişlik değeri
    const newHeight = 350;

    // iframe içeriğindeki width değerini değiştirme
    const modifiedIframe = consultantProfileData.company.map_iframe.replace(/width="[\d]+"/, `width="100%" height="${newHeight}"`)

    return (
        <aside id='EmlakDetaySidebar' className='w-full lg:w-[350px] lg:min-w-[350px] max-w-full h-full flex flex-col gap-y-4 sticky top-4'>

            <div className="flex flex-col gap-y-2 text-sm">

                {consultantProfileData.company.map_url && (
                    <Link
                        href={consultantProfileData.company.map_url}
                        target='_blank'
                        title={`${consultantProfileData.name} Adresi`}
                        className='flex bg-white text-gray-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white shadow-sm transition-all'>
                        <span>Adresi Gör</span>
                        <BsChevronRight size={16} />
                    </Link>
                )}

                {modifiedIframe && (
                    <div className='w-full rounded-lg overflow-hidden'
                        dangerouslySetInnerHTML={{ __html: modifiedIframe }}
                    />
                )}

            </div>

        </aside>
    )
}

export default DanismanSidebar