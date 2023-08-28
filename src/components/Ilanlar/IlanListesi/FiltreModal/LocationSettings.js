import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'

function LocationSettings(props) {
    const {
        handleLocationSettingsClose,
        selectedLocation
    } = props;
    
    return (
        <div className='fixed flex left-0 top-0 w-full h-full justify-center items-center backdrop-blur-sm bg-site/10 z-30 px-4'>
            <div className="filterModalContain flex flex-col max-w-full shadow-xl shadow-site/10 justify-center items-center rounded-lg bg-white lg:animate-loginComing animate-loginComingMobile">
                <div className="flex justify-between w-full items-center p-4">
                    <span className='text-lg'>Konum</span>
                    <button
                        onClick={handleLocationSettingsClose}
                        className='hover:text-site hover:scale-125 transition-all'
                    >
                        <TfiClose size={22} />
                    </button>

                </div>
                <hr className='w-full' />
                <div className="flex flex-col p-6 gap-6 w-full">
                    <div className="flex gap-x-6">
                        <ul className='flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[300px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto'>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>19 Mayıs</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Alaçam</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Asarcık</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Atakum</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Ayvacık</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Bafra</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Canik</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Çarşamba</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Havza</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>İlkadım</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Kavak</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Ladik</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Salıpazarı</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Tekkeköy</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Terme</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Vezirköprü</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Yakakent</li>
                        </ul>
                        <ul className='flex flex-col ring-1 ring-gray-200 rounded-md w-fit min-w-[300px] overflow-hidden lg:max-h-[500px] max-h-[calc(100vh-300px)] overflow-y-auto'>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Rasathane Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Reşadiye Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Hürriyet Mah</li>
                            <li className='hover:bg-site/10 hover:text-site hover:pl-5 px-4 py-2 transition-all cursor-pointer'>Selahiye Mah</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-y-1'>
                            <span className='text-gray-500 text-sm'>Geçerli Konum</span>
                            <ul className='flex flex-wrap items-center justify-start gap-1 max-w-full lg:max-w-[300px]'>
                                <li className='text-site flex items-center gap-x-1'>
                                    Atakum
                                </li>
                                <li className='text-site flex items-center gap-x-1'>
                                    <BsChevronRight size={13} />
                                    Denizevleri Mah
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={handleLocationSettingsClose}
                            className='min-w-fit lg:w-fit w-full ml-auto text-site transition-all rounded-md py-3 px-4 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30 text-base'
                        >
                            Konumu Seç
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSettings