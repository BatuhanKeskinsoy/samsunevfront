import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { CiFacebook, CiInstagram, CiMail, CiPhone, CiTwitter, CiYoutube } from 'react-icons/ci'

function Footer() {
    return (
        <footer className="bg-gray-200 z-10">
            <div className="container mx-auto lg:px-0 px-4 py-6">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col w-full">
                        <ul id='footerNav' className="flex items-center gap-x-2 text-sm mb-4 overflow-x-auto">
                            <li>
                                <button
                                    className='bg-site text-white shadow-site/30 shadow-lg py-3 px-4 hover:bg-site hover:text-white transition-all rounded-md min-w-max'
                                >
                                    Samsun Satılık
                                </button>
                            </li>
                            <li>
                                <button
                                    className='shadow-lg bg-white py-3 px-4 hover:bg-site hover:text-white transition-all rounded-md min-w-max'
                                >
                                    Samsun Kiralık
                                </button>
                            </li>
                            <li>
                                <button
                                    className='shadow-lg bg-white py-3 px-4 hover:bg-site hover:text-white transition-all rounded-md min-w-max'
                                >
                                    İlçeye Göre Satılık
                                </button>
                            </li>
                            <li>
                                <button
                                    className='shadow-lg bg-white py-3 px-4 hover:bg-site hover:text-white transition-all rounded-md min-w-max'
                                >
                                    İlçeye Göre Kiralık
                                </button>
                            </li>
                        </ul>
                        <div className="flex lg:flex-row flex-col text-gray-600 text-sm lg:gap-1 gap-4">
                            <ul className="flex flex-col py-2 bg-white w-full">
                                <li className='py-2 px-4'>
                                    <span className='text-black tracking-wide font-bold pb-2 block'>Konut</span>
                                    <hr className='mt-2 border-gray-300' />
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Daire
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Rezidans
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Müstakil Ev
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Villa
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Yazlık
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col py-2 bg-white w-full">
                                <li className='py-2 px-4'>
                                    <span className='text-black tracking-wide font-bold pb-2 block'>Arsa</span>
                                    <hr className='mt-2 border-gray-300' />
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Arazi
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Tarla
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Konut İmarlı Arsa
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Ticari İmarlı Arsa
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Sanayi İmarlı Arsa
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col py-2 bg-white w-full">
                                <li className='py-2 px-4'>
                                    <span className='text-black tracking-wide font-bold pb-2 block'>İşyeri</span>
                                    <hr className='mt-2 border-gray-300' />
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Dükkan & Mağaza
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Müstakil İşyeri
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Fabrika
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Ofis
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Depo
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col py-2 bg-white w-full">
                                <li className='py-2 px-4'>
                                    <span className='text-black tracking-wide font-bold pb-2 block'>Turistik Tesis</span>
                                    <hr className='mt-2 border-gray-300' />
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Otel
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Apart
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Pansiyon
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Motel
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Samsun Satılık Butik Otel
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className='border-gray-300' />
                    <div className="flex lg:flex-row flex-col gap-8">
                        <div className="flex flex-col lg:items-start items-center">
                            <Link href={'/'} className='mb-4'>
                                <Image
                                    src={'/logo/logo.svg'}
                                    alt='logo'
                                    title='logo'
                                    width={355}
                                    height={66}
                                    className='h-16 w-auto'
                                />
                            </Link>
                            <Link href='mailto:info@samsunev.com' className='py-2 flex gap-x-2 items-center hover:text-site transition-all text-lg'>
                                <CiMail size={26} />
                                info@samsunev.com
                            </Link>
                            <Link href='tel:05555555555' className='py-2 flex gap-x-2 items-center hover:text-site transition-all text-lg'>
                                <CiPhone size={26} />
                                0555 555 55 55
                            </Link>
                            <span className='text-2xl tracking-wide my-4'>Bizi Takipte Kalın!</span>
                            <ul className="flex flex-wrap gap-4">
                                <li>
                                    <Link href={'https://www.facebook.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                                        <CiFacebook size={36} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'https://www.twitter.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                                        <CiTwitter size={36} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'https://www.instagram.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                                        <CiInstagram size={36} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'https://www.youtube.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                                        <CiYoutube size={36} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full flex lg:flex-row flex-col gap-4">
                            <ul className='flex flex-col'>
                                <li className='py-2 px-4'>
                                    <span className='text-black tracking-wider font-bold pb-2 block text-xl'>SAMSUNEV.COM</span>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Kurumsal Üyelik
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Emlak Ofisleri
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Emlak Haberleri
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Hakkımızda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        İletişim
                                    </Link>
                                </li>
                            </ul>
                            <ul className='flex flex-col'>
                                <li className='py-2 px-4'>
                                    <span className='text-black tracking-wider font-bold pb-2 block text-xl'>HİZMETLERİMİZ</span>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Ücretsiz İlan Ver
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Satılık İlanlar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/ilanlar'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Kiralık İlanlar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className='py-2 px-4 flex gap-x-1 items-center hover:text-site transition-all line-clamp-1'
                                    >
                                        <BsChevronRight />
                                        Site Haritası
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100  text-sm">
                <div className="container mx-auto py-3 px-4 lg:px-0">
                    <div className="w-full flex justify-between ttext-md lg:flex-row flex-col text-center font-gemunu tracking-wide">
                        <div className='md:my-0 my-1'>
                            Copyright <span className='font-system'>©</span>
                            <span className='text-site ml-1 transition-all'>
                                {new Date().getFullYear() === 2023 ? new Date().getFullYear() : '2023 - ' + new Date().getFullYear()}
                            </span>
                        </div>
                        <div className='md:my-0 my-1'>
                            Kodlama ve Tasarım
                            <Link
                                href={'https://www.avaken.com'}
                                title='Avaken'
                                className='text-site ml-1 hover:text-site/80 transition-all'
                                target='_blank'
                                rel='nofollow'
                            >Avaken</Link>
                            &#39;e aittir.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer