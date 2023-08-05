import React from 'react'
import Image from "next/image"
import { BsSearch } from 'react-icons/bs'

function Banner() {
    return (
        <section id="banner" className="relative lg:h-[650px] py-16 flex items-center justify-center lg:px-0 px-4">
            <Image
                src={'/banner/samsun2.png'}
                title="Samsun"
                alt="Samsun"
                fill
                className="object-cover w-full -z-10"
            />
            <div className="max-w-3xl flex flex-col gap-y-4 w-full">
                <h1 className='text-4xl pb-6 text-center leading-snug font-bold'>Samsun Satılık Daire, Samsun Kiralık Daire</h1>
                <div id='bannerNav' className="flex w-fit gap-x-2 max-w-full overflow-x-auto rounded-md py-2">
                    <button className='py-3 lg:px-6 px-4 bg-site text-white rounded-md transition-all min-w-max shadow-md'>Satılık Daire</button>
                    <button className='py-3 lg:px-6 px-4 bg-white hover:bg-site/90 hover:text-white rounded-md transition-all min-w-max shadow-md'>Satılık Arsa</button>
                    <button className='py-3 lg:px-6 px-4 bg-white hover:bg-site/90 hover:text-white rounded-md transition-all min-w-max shadow-md'>Kiralık Daire</button>
                    <button className='py-3 lg:px-6 px-4 bg-white hover:bg-site/90 hover:text-white rounded-md transition-all min-w-max shadow-md'>Kiralık Arsa</button>
                </div>
                <div className='w-full flex flex-col lg:flex-row rounded-md'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        /* value={email} */
                        tabIndex={1}
                        /* onChange={e => setEmail(e.target.value)} */
                        autoComplete="email"
                        placeholder='İlan Ara'
                        required
                        className="px-4 py-4 bg-white block font-gemunu tracking-wider lg:shadow-md w-full border-0 text-gray-900 ring-1 ring-gray-200 focus:ring-site outline-none transition-all text-base lg:rounded-l-md rounded-md lg:rounded-none"
                    />
                    <button
                        className='min-w-fit ml-auto lg:w-fit w-full text-center justify-center lg:shadow-md text-site transition-all py-3 px-6 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/90 hover:bg-site text-white lg:rounded-r-md rounded-md lg:rounded-none'
                    >
                        <BsSearch size={18} />
                        <span>Ara</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner