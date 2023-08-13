import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronRight, BsEyeSlash, BsQuestionOctagonFill, BsTelephone, BsWhatsapp } from 'react-icons/bs'

function Sidebar() {

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showWpNumber, setShowWpNumber] = useState(false);

    const togglePhoneNumber = () => {
        setShowPhoneNumber(!showPhoneNumber);
    };
    const toggleWpNumber = () => {
        setShowWpNumber(!showWpNumber);
    };

    const router = useRouter();
    const path = `${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`;

    const phoneSlug = '0555 505 05 05'.replace(/\s/g, '');
    const wpText = `Merhaba, size bu ilandan ulaşıyorum : ${path}`

    return (
        <aside id='IlanDetaySidebar' className='w-full lg:w-[350px] lg:min-w-[350px] max-w-full h-full flex flex-col gap-y-4 sticky top-4'>
            <div className="bg-site text-white py-3 px-4 lg:text-3xl text-xl rounded-md font-bold tracking-wide text-center shadow-sm">1.530.500 TL</div>
            <div className="bg-white py-2 px-4 rounded-md lg:flex lg:justify-between shadow-sm">
                <div className='flex justify-between items-center text-xs gap-x-1 text-gray-600 my-2'>
                    <span>İlan No :</span>
                    <span className='tracking-wider'>1357913579</span>
                </div>
                <div className='flex justify-between items-center text-xs lg:gap-x-1 text-gray-600 my-2'>
                    <span>İlan Tarihi :</span>
                    <span className='tracking-wider'>{String(new Date().getDate()).padStart(2, '0')}.{String(new Date().getMonth()).padStart(2, '0')}.{new Date().getFullYear()}</span>
                </div>
            </div>


            <div className="bg-white py-4 px-4 rounded-md flex flex-col gap-y-1 shadow-sm">

                <div className="flex flex-col py-2 gap-x-4 items-center">
                    <div className="flex w-full justify-center gap-x-4">
                        <div className="relative lg:min-w-[12rem] w-48 h-32 max-w-full rounded-xl shadow-lg">
                            <Image
                                src={'/ilanlar/ilan1.jpg'}
                                alt='Emlak'
                                title='Emlak'
                                sizes="(max-width: 768px) 25vw, 25vw"
                                priority
                                fill
                                className='object-cover object-center rounded-xl'
                            />
                            <div className="absolute scale-[.40] lg:translate-x-24 lg:-translate-y-14 lg:right-0 -right-20 hover:-right-0 -translate-y-12 shadow-lg group transition-all rounded-xl hover:translate-x-0 hover:translate-y-0 hover:scale-100">
                                <div className="relative lg:min-w-[12rem] w-48 h-32 max-w-full rounded-xl flex transition-all">
                                    <Image
                                        src={'/ilanlar/ilan2.jpg'}
                                        alt='Emlak'
                                        title='Emlak'
                                        sizes="(max-width: 768px) 25vw, 25vw"
                                        fill
                                        className='object-cover object-center rounded-xl transition-all'
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-col justify-center items-center w-full mt-4">
                        <div className='flex flex-col justify-center items-center mb-3'>
                            <Link href={'/emlakci-detay'} className='font-bold tracking-wider hover:text-site transition-all'>
                                <span>Batuhan Keskinsoy</span>
                            </Link>
                            <Link href={'/emlak-detay'} className='text-gray-600 text-sm hover:text-site transition-all'>
                                <span>Keskinsoy Emlak</span>
                            </Link>
                        </div>
                        <div className='relative flex justify-center w-full items-center gap-x-2 text-gray-600 text-xs group py-1'>
                            <span className='tracking-wide'>TTYB NO : 123456789</span>
                            <BsQuestionOctagonFill size={16} />
                            <div
                                className="absolute p-3 bg-gray-200 rounded-md w-full top-full invisible opacity-0 transition-all group-hover:opacity-100 group-hover:visible text-xs before:content-[''] before:left-1/2 before:-translate-x-1/2 before:rotate-[225deg] before:absolute before:-top-1 before:w-2 before:h-2 before:bg-gray-200 z-10"
                            >
                                <span className='leading-5 tracking-wider'>
                                    <strong>Taşınmaz Ticaret Yetki Belgesi:</strong> 5 Haziran 2018 tarihinde Resmi Gazete’de yayımlanan yürürlüğe göre taşınmazın alım, satım ve kiralama işlemine aracılık eden firmaların Taşınmaz Ticaret Yetki Belgesine sahip olması ve yine aracılık eden kişilerin Mesleki Yeterlilik Belgesi sahibi olması zorunluluğu getirildi.
                                </span>
                            </div>
                        </div>
                        <div className='relative flex justify-center w-full items-center gap-x-2 text-gray-600 text-xs group py-1'>
                            <span className='tracking-wide'>MYB NO : YB0088/17UY0333-5/00/2256</span>
                            <BsQuestionOctagonFill size={16} />
                            <div
                                className="absolute p-3 bg-gray-200 rounded-md w-full top-full invisible opacity-0 transition-all group-hover:opacity-100 group-hover:visible text-xs before:content-[''] before:left-1/2 before:-translate-x-1/2 before:rotate-[225deg] before:absolute before:-top-1 before:w-2 before:h-2 before:bg-gray-200 z-10"
                            >
                                <span className='leading-5 tracking-wider'>
                                    <strong>Mesleki Yeterlilik Belgesi:</strong> 5 Haziran 2018 tarihinde Resmi Gazete’de yayımlanan yürürlüğe göre taşınmazın alım, satım ve kiralama işlemine aracılık eden firmaların Taşınmaz Ticaret Yetki Belgesine sahip olması ve yine aracılık eden kişilerin Mesleki Yeterlilik Belgesi sahibi olması zorunluluğu getirildi.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mb-2' />

                <div className="flex flex-col gap-y-2">
                    <div className='relative'>
                        {showPhoneNumber ? (
                            <Link
                                href={'tel:05055050505'}
                                className='flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white transition-all'>
                                <BsTelephone size={24} />
                                <span>0505 505 05 05</span>
                            </Link>
                        ) : (
                            <button
                                onClick={togglePhoneNumber}
                                className='w-full flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site/20 transition-all'>
                                <BsEyeSlash size={24} />
                                <span>Numarayı Göster</span>
                            </button>
                        )}
                    </div>

                    <div className='relative'>
                        {showWpNumber ? (
                            <Link
                                href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${wpText}`}
                                target='_blank'
                                className='flex bg-green-400/20 text-green-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-green-400 hover:text-white transition-all'>
                                <BsWhatsapp size={24} />
                                <span>Mesaj Gönder</span>
                            </Link>
                        ) : (
                            <button
                                onClick={toggleWpNumber}
                                className='w-full flex bg-green-400/20 text-green-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-green-400/30 transition-all'>
                                <BsEyeSlash size={24} />
                                <span>WhatsApp'ı Göster</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 text-sm">
                <Link
                    href={'/danisman-detay'}
                    className='flex bg-white text-gray-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white shadow-sm transition-all'>
                    <span>Danışmanın Diğer İlanları</span>
                    <BsChevronRight size={16} />
                </Link>
                <Link
                    href={'/emlak-detay'}
                    className='flex bg-white text-gray-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white shadow-sm transition-all'>
                    <span>Emlak Ofisinin Diğer İlanları</span>
                    <BsChevronRight size={16} />
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar