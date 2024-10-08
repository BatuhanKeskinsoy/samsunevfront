import React, { useState } from 'react';
import Image from "next/image"
import { BsSearch } from 'react-icons/bs'
import { CiShoppingTag, CiTimer, CiShop, CiUser } from 'react-icons/ci'
import { useRouter } from 'next/router';

function Banner() {
    const [activeButton, setActiveButton] = useState('satilik');
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    const router = useRouter()


    return (
        <section id="banner" className="relative lg:h-[670px] lg:py-16 py-8 flex items-center justify-center lg:px-0 px-4">
            <Image
                src={'/banner/bannerSVG.svg'}
                title="Samsun"
                alt="Samsun"
                sizes="(max-width: 768px) 100vw, 100vw"
                fill
                priority
                className="object-cover object-left lg:object-center w-full -z-10"
            />
            <div className='absolute w-full h-full transition-all bg-gradient-to-b from-black/70 to-black/10 -z-10'></div>
            <div className="container mx-auto flex flex-col lg:gap-y-2 gap-y-4 w-full lg:-mt-32">
                <div className="flex flex-col gap-y-4 pb-10">
                    <h1 className='lg:text-5xl text-3xl text-center text-white leading-relaxed'>Samsun <strong className='bg-site text-white px-4 rounded-2xl'>Satılık Daire</strong> Samsun <strong className='bg-site text-white px-4 rounded-2xl'>Kiralık Daire</strong></h1>
                    <p className='text-center text-white drop-shadow-md text-2xl mt-2'>ve daha fazlası...</p>
                </div>
                <div id='bannerNav' className="flex w-fit lg:gap-x-4 gap-x-2 max-w-full overflow-x-auto rounded-md lg:py-2 lg:text-xl text-base">
                    <button
                        className={`lg:py-4 py-3 lg:px-6 px-4 flex items-center gap-x-2 ${activeButton === 'satilik' ?
                            'bg-site text-white' :
                            'bg-white hover:text-white hover:bg-site/90'} rounded-md transition-all min-w-max shadow-md tracking-wide`}
                        onClick={() => handleButtonClick('satilik')}
                    >
                        <CiShoppingTag size={24} />
                        Satılık
                    </button>
                    <button
                        className={`lg:py-4 py-3 lg:px-6 px-4 flex items-center gap-x-2 ${activeButton === 'kiralik' ?
                            'bg-site text-white' :
                            'bg-white hover:text-white hover:bg-site/90'} rounded-md transition-all min-w-max shadow-md tracking-wide`}
                        onClick={() => handleButtonClick('kiralik')}
                    >
                        <CiTimer size={24} />
                        Kiralık
                    </button>
                    <button
                        className={`lg:py-4 py-3 lg:px-6 px-4 flex items-center gap-x-2 ${activeButton === 'emlakOfisleri' ?
                            'bg-site text-white' :
                            'bg-white hover:text-white hover:bg-site/90'} rounded-md transition-all min-w-max shadow-md tracking-wide`}
                        onClick={() => handleButtonClick('emlakOfisleri')}
                    >
                        <CiShop size={24} />
                        Emlak Ofisleri
                    </button>
                    <button
                        className={`lg:py-4 py-3 lg:px-6 px-4 flex items-center gap-x-2 ${activeButton === 'emlakDanismanlari' ?
                            'bg-site text-white' :
                            'bg-white hover:text-white hover:bg-site/90'} rounded-md transition-all min-w-max shadow-md tracking-wide`}
                        onClick={() => handleButtonClick('emlakDanismanlari')}
                    >
                        <CiUser size={24} />
                        Emlak Danışmanları
                    </button>
                </div>
                <div className='w-full flex flex-col lg:flex-row rounded-md'>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        /* value={email} */
                        tabIndex={1}
                        /* onChange={e => setEmail(e.target.value)} */
                        autoComplete="false"
                        placeholder='İlan Ara'
                        required
                        className="lg:px-8 px-4 lg:py-5 py-4 bg-white block font-gemunu tracking-wider lg:shadow-md w-full border-0 text-gray-900 ring-1 ring-transparent focus:ring-site outline-none transition-all text-lg lg:rounded-l-md rounded-md lg:rounded-none"
                    />
                    <button
                        onClick={() => router.push('/samsun')}
                        className='min-w-fit ml-auto lg:w-fit w-full text-center justify-center lg:shadow-md transition-all py-3 px-8 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/90 hover:bg-site text-white lg:rounded-r-md rounded-md lg:rounded-none text-xl'
                    >
                        <BsSearch size={22} />
                        <span>Ara</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner