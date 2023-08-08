import React from 'react'
import { BsChevronRight, BsChevronDown } from 'react-icons/bs'

function Filtre() {

    return (
        <aside id='IlanlarFiltre' className='w-full lg:w-[400px] max-w-full h-full'>
            <div className="bg-white shadow-md shadow-gray-200 rounded-lg p-4 text-sm flex flex-col gap-y-4">
                <>
                    <span className='flex text-base'>Gayrimenkul</span>
                    <ul>
                        <li>
                            <span className='text-site'>
                                <BsChevronRight size={13} />
                                Satılık
                            </span>
                            <ul>
                                <li>
                                    <span className='text-site'>
                                        <BsChevronRight size={13} />
                                        Konut
                                    </span>
                                    <ul>
                                        <li>
                                            <span className='text-site'>
                                                <BsChevronRight size={13} />
                                                Daire
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <BsChevronRight size={13} />
                                                Rezidans
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <BsChevronRight size={13} />
                                                Müstakil Ev
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>
                                        <BsChevronRight size={13} />
                                        İşyeri
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <BsChevronRight size={13} />
                                        Arsa
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <BsChevronRight size={13} />
                                        Turizm
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>
                                <BsChevronRight size={13} />
                                Kiralık
                            </span>
                        </li>
                    </ul>
                </>
                <hr />
                <>
                    <span className='flex text-base'>İlan Ara</span>
                    <input type="text"
                        className='block tracking-wider w-full rounded-sm border-0 py-2 text-gray-900 shadow-sm ring-1 ring-site/30 focus:ring-site outline-none text-sm transition-all px-4'
                        placeholder='İlan no veya ilan adı yazınız'
                    />
                </>
                <hr />
                <>
                    <span className='flex text-base'>Adres</span>

                    <div id='Ilce' class="relative">
                        <select
                            class="block w-full px-4 py-2 pr-8 leading-tight bg-white border rounded appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                            placeholder='İlçe Seçiniz'
                        >
                            <option selected>İlçe Seçiniz</option>
                            <option value={'İlkadım'}>İlkadım</option>
                            <option value={'Atakum'}>Atakum</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <BsChevronDown />
                        </div>
                    </div>

                    <div id='Mahalle' class="relative">
                        <select
                            class="block w-full px-4 py-2 pr-8 leading-tight bg-white border rounded appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                        >
                            <option selected>Mahalle Seçiniz</option>
                            <option value={'Rasathane'}>Rasathane mah.</option>
                            <option value={'Selahiye'}>Selahiye mah.</option>
                            <option value={'Reşadiye'}>Reşadiye mah.</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <BsChevronDown />
                        </div>
                    </div>

                    <div id='Site' class="relative">
                        <select
                            class="block w-full px-4 py-2 pr-8 leading-tight bg-white border rounded appearance-none focus:outline-none focus:shadow-outline cursor-pointer border-site/30"
                        >
                            <option selected>Site Seçiniz</option>
                            <option value={'ABC Sitesi'}>ABC Sitesi</option>
                            <option value={'DEF Sitesi'}>DEF Sitesi</option>
                            <option value={'GHI Sitesi'}>GHI Sitesi</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <BsChevronDown />
                        </div>
                    </div>
                </>
            </div>
        </aside>
    )
}

export default Filtre