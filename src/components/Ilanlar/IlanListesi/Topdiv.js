import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

function Topdiv() {
    return (
        <div className='w-full'>
            <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 justify-between items-center bg-white shadow-md shadow-gray-200 rounded-lg p-4">
                <div className='text-sm'>
                    Satılık Daire için <strong className='text-site'>100 ilan</strong> bulundu
                </div>
                <div id='Order' className="relative text-sm lg:w-fit w-full">
                    <select
                        className="block w-full px-4 py-2 pr-8 leading-tight bg-white border rounded appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                    >
                        <option value="">Sıralama Türü Seçiniz</option>
                        <option value={'fg_ey'}>Fiyata Göre (Önce en yüksek)</option>
                        <option value={'fg_ed'}>Fiyata Göre (Önce en düşük)</option>
                        <option value={'tg_ey'}>Tarihe Göre (Önce en yeni)</option>
                        <option value={'tg_es'}>Tarihe Göre (Önce en eski)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <BsChevronDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topdiv