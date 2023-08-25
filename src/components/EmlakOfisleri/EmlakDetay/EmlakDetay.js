import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsEyeSlash, BsQuestionOctagonFill, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import Image from 'next/image'
import EmlakSidebar from '@/components/EmlakOfisleri/EmlakDetay/EmlakSidebar'
import EmlakIlanlar from '../../Ilanlar/EmlakIlanlar/EmlakIlanlar'
import EmlakDanismanlariComponent from '@/components/EmlakOfisleri/EmlakDetay/EmlakDanismanlari/EmlakDanismanlari'
import NoContentFound from '@/components/Others/NoContentFound'

function EmlakDetayComponent(props) {
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

    const companyProfileData = props.companyProfileData

    console.log(companyProfileData);

    const phoneSlug = companyProfileData.phone ? companyProfileData.phone.replace(/\s/g, '') : '';
    const wpNumberSlug = companyProfileData.wp_number ? companyProfileData.wp_number.replace(/\s/g, '') : '';
    const wpText = `Merhaba, size bu siteden ulaştım : ${path}`

    return (
        <>
            <div className="flex lg:flex-row flex-col lg:gap-x-8 gap-y-4 lg:gap-y-0 items-start">
                <div className="flex flex-col w-full gap-y-4">
                    <div className="bg-white shadow-sm rounded-xl flex xl:flex-row flex-col lg:gap-x-8 gap-y-4 xl:gap-y-0 p-6 justify-between w-full">
                        <div className="flex lg:flex-row flex-col lg:gap-x-6 gap-y-6 lg:gap-y-0">
                            <div className="relative flex items-center justify-center py-2 lg:min-w-[15rem] lg:w-60 lg:h-40 h-32 max-w-full rounded-xl shadow-xl">
                                <Image
                                    src={`/${companyProfileData.image}`}
                                    title={companyProfileData.name}
                                    alt={companyProfileData.name}
                                    sizes="(max-width: 768px) 100vw, 10vw"
                                    fill
                                    className='object-cover object-center rounded-xl'
                                />
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <div className="flex flex-col gap-y-4">
                                    <span className='font-bold text-site tracking-wider lg:text-3xl text-2xl -mb-2 text-center lg:text-left'>
                                        {companyProfileData.name}
                                    </span>
                                    <span className='text-sm text-gray-500 text-center lg:text-left'>{companyProfileData.full_address}</span>
                                </div>
                                <div className='relative flex w-full items-center gap-x-2 text-gray-600 text-sm group py-1 lg:justify-start justify-center'>
                                    <span className='tracking-wide'>TTYB NO : {companyProfileData.ttyb_no}</span>
                                    <BsQuestionOctagonFill size={16} />
                                    <div
                                        className="absolute p-3 bg-gray-200 rounded-md w-full top-full invisible opacity-0 transition-all group-hover:opacity-100 group-hover:visible text-xs before:content-[''] before:left-1/2 before:-translate-x-1/2 before:rotate-[225deg] before:absolute before:-top-1 before:w-2 before:h-2 before:bg-gray-200 z-10"
                                    >
                                        <span className='leading-5 tracking-wider'>
                                            <strong>Taşınmaz Ticaret Yetki Belgesi:</strong> 5 Haziran 2018 tarihinde Resmi Gazete’de yayımlanan yürürlüğe göre taşınmazın alım, satım ve kiralama işlemine aracılık eden firmaların Taşınmaz Ticaret Yetki Belgesine sahip olması ve yine aracılık eden kişilerin Mesleki Yeterlilik Belgesi sahibi olması zorunluluğu getirildi.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {(companyProfileData.phone || companyProfileData.wp_number) && (
                            <div className="flex xl:flex-row flex-col gap-y-2 xl:gap-y-0 gap-x-2 min-w-max items-end">

                                {companyProfileData.phone && (
                                    <div className='relative w-full min-w-max'>
                                        {showPhoneNumber ? (
                                            <Link
                                                href={`tel:${phoneSlug}`}
                                                className='flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white transition-all gap-x-4'>
                                                <BsTelephone size={18} />
                                                <span className='lg:text-sm'>{companyProfileData.phone}</span>
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

                                {companyProfileData.wp_number && (
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
                            onClick={() => handleTabClick('danismanlar')}
                            className={`py-2 px-6 shadow-sm rounded-lg min-w-max transition-all ${activeTab === 'danismanlar'
                                ? 'bg-site text-white'
                                : 'bg-white hover:bg-site hover:text-white'
                                }`}
                        >
                            Danışmanlar
                        </button>
                        <button
                            onClick={() => handleTabClick('hakkimizda')}
                            className={`py-2 px-6 shadow-sm rounded-lg min-w-max transition-all ${activeTab === 'hakkimizda'
                                ? 'bg-site text-white'
                                : 'bg-white hover:bg-site hover:text-white'
                                }`}
                        >
                            Hakkımızda
                        </button>
                    </div>

                    <div id="emlakTabDiv">
                        {activeTab === 'ilanlar' && (
                            <EmlakIlanlar />
                        )}
                        {activeTab === 'danismanlar' && (
                            <>
                                {
                                    companyProfileData.users.length > 0 ? (
                                        <EmlakDanismanlariComponent companyProfileData={companyProfileData} />
                                    ) : (
                                        <div className="lg:text-4xl text-2xl lg:h-96 h-20">
                                            <NoContentFound />
                                        </div>
                                    )
                                }
                            </>
                        )}
                        {activeTab === 'hakkimizda' && (
                            <>
                                {
                                    companyProfileData.content.length > 0 ? (
                                        <div className='bg-white p-4 rounded-lg shadow-sm'>

                                            {companyProfileData.content}

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
                <EmlakSidebar handleTabClick={handleTabClick} companyProfileData={companyProfileData} />
            </div>
        </>
    )
}

export default EmlakDetayComponent