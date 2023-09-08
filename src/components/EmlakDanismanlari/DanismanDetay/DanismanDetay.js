import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsEyeSlash, BsQuestionOctagonFill, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import Image from 'next/image'
import DanismanSidebar from '@/components/EmlakDanismanlari/DanismanDetay/DanismanSidebar'
import EmlakIlanlar from '@/components/Ilanlar/EmlakIlanlar/EmlakIlanlar'
import NoContentFound from '@/components/Others/NoContentFound'


function DanismanDetayComponent(props) {
    const {
        consultantProfileData,
        realestatesData,
    } = props

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showWpNumber, setShowWpNumber] = useState(false);
    const [activeTab, setActiveTab] = useState('ilanlar');

    const togglePhoneNumber = () => {
        setShowPhoneNumber(!showPhoneNumber);
    };
    const toggleWpNumber = () => {
        setShowWpNumber(!showWpNumber);
    };

    const router = useRouter();
    const path = `${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const phoneSlug = consultantProfileData.phone ? consultantProfileData.phone.replace(/\s/g, '') : '';
    const wpNumberSlug = consultantProfileData.wp_number ? consultantProfileData.wp_number.replace(/\s/g, '') : '';
    const wpText = `Merhaba, size bu siteden ulaştım : ${path}`

    return (
        <>
            <div className="flex lg:flex-row flex-col lg:gap-x-8 gap-y-4 lg:gap-y-0 items-start">
                <div className="flex flex-col w-full gap-y-4">
                    <div className="bg-white shadow-sm rounded-xl flex xl:flex-row flex-col lg:gap-x-8 gap-y-4 xl:gap-y-0 p-6 justify-between w-full">
                        <div className="flex lg:flex-row flex-col lg:gap-x-6 gap-y-6 lg:gap-y-0">
                            <div className="relative flex items-center justify-center py-2 lg:min-w-[10rem] lg:w-40 lg:h-40 h-32 max-w-full rounded-xl shadow-xl">
                                <Image
                                    src={`/${consultantProfileData.image}`}
                                    title={consultantProfileData.name}
                                    alt={consultantProfileData.name}
                                    sizes="(max-width: 768px) 100vw, 10vw"
                                    fill
                                    className='object-cover object-top rounded-xl'
                                />
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <div className="flex flex-col gap-y-4">
                                    <span className='font-bold text-site tracking-wider lg:text-3xl text-2xl -mb-2 text-center lg:text-left'>
                                        {consultantProfileData.name}
                                    </span>
                                    <Link
                                        href={`/emlak-ofisleri/${consultantProfileData.company.slug}`}
                                        className='text-gray-500 hover:text-site transition-all -mt-1 w-fit'
                                    >
                                        {consultantProfileData.company.name}

                                    </Link>
                                    <span className='text-sm text-gray-500 text-center lg:text-left'>{consultantProfileData.company.full_address}</span>
                                </div>
                                <div className='relative flex w-full items-center gap-x-2 text-gray-600 text-sm group py-1 lg:justify-start justify-center'>
                                    <span className='tracking-wide'>MYB NO : {consultantProfileData.myb_no || 'Henüz Girilmemiş'}</span>
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

                        {(consultantProfileData.phone || consultantProfileData.wp_number) && (
                            <div className="flex xl:flex-row flex-col gap-y-2 xl:gap-y-0 gap-x-2 min-w-max items-end">

                                {consultantProfileData.phone && (
                                    <div className='relative w-full min-w-max'>
                                        {showPhoneNumber ? (
                                            <Link
                                                href={`tel:${phoneSlug}`}
                                                className='flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white transition-all gap-x-4'>
                                                <BsTelephone size={18} />
                                                <span className='lg:text-sm'>{consultantProfileData.phone}</span>
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={togglePhoneNumber}
                                                className='w-full flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site/20 transition-all gap-x-4'>
                                                <BsEyeSlash size={18} />
                                                <span className='lg:text-sm'>Numarayı Göster</span>
                                            </button>
                                        )}
                                    </div>
                                )}

                                {consultantProfileData.wp_number && (
                                    <div className='relative w-full min-w-max'>
                                        {showWpNumber ? (
                                            <Link
                                                href={`https://api.whatsapp.com/send?phone=+9${wpNumberSlug}&text=${wpText}`}
                                                target='_blank'
                                                className='flex bg-green-400/20 text-green-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-green-400 hover:text-white transition-all gap-x-4'>
                                                <BsWhatsapp size={18} />
                                                <span className='lg:text-sm'>Mesaj Gönder</span>
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={toggleWpNumber}
                                                className='w-full flex bg-green-400/20 text-green-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-green-400/30 transition-all gap-x-4'>
                                                <BsEyeSlash size={18} />
                                                <span className='lg:text-sm'>WhatsApp'ı Göster</span>
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                    <div id="emlakDetayTab" className="flex gap-x-2 overflow-x-auto max-w-full">
                        <button
                            onClick={() => handleTabClick('ilanlar')}
                            className={`py-2 px-6 shadow-sm rounded-lg min-w-max transition-all ${activeTab === 'ilanlar'
                                ? 'bg-site text-white'
                                : 'bg-white hover:bg-site hover:text-white'
                                }`}
                        >
                            Tüm İlanlar
                        </button>
                        <button
                            onClick={() => handleTabClick('hakkimda')}
                            className={`py-2 px-6 shadow-sm rounded-lg min-w-max transition-all ${activeTab === 'hakkimda'
                                ? 'bg-site text-white'
                                : 'bg-white hover:bg-site hover:text-white'
                                }`}
                        >
                            Hakkımda
                        </button>
                    </div>

                    <div id="danismanTabDiv">

                        {activeTab === 'ilanlar' && (
                            <EmlakIlanlar userId={consultantProfileData.id} realestatesData={realestatesData} />
                        )}

                        {activeTab === 'hakkimda' && (
                            <>
                                {
                                    consultantProfileData.content.length > 0 ? (
                                        <div className='bg-white p-4 rounded-lg shadow-sm'>
                                            {consultantProfileData.content}
                                        </div>
                                    ) : (
                                        <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                                            <NoContentFound />
                                        </div>
                                    )
                                }
                            </>
                        )}

                    </div>

                </div>
                <DanismanSidebar consultantProfileData={consultantProfileData} handleTabClick={handleTabClick} />
            </div>
        </>
    )
}

export default DanismanDetayComponent