import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'
import { BsEyeSlash, BsTelephone, BsWhatsapp } from 'react-icons/bs';


function Item(props) {
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
    const wpText = `Merhaba, size bu siteden ulaştım : ${path}`

    return (
        <div className={`p-3 hover:scale-105 transition-all ${props.itemWidth}`}>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="relative flex items-center justify-center py-2">
                    <Link
                        href={'/emlak-danismanlari/danisman-detay'}
                        title='Mustafa Yıldız'
                        className='relative lg:min-w-[10rem] w-40 lg:h-40 h-32 max-w-full rounded-xl'
                    >
                        <Image
                            src={'/danismanlar/mustafa-yildiz.jpg'}
                            title='Mustafa Yıldız'
                            alt='Mustafa Yıldız'
                            fill
                            className='object-cover object-top rounded-xl'
                        />
                    </Link>
                </div>
                <hr className='my-3' />
                <div className="flex flex-col gap-y-2">
                    <Link
                        href={'/emlak-danismanlari/danisman-detay'}
                        className='font-bold text-site/90 hover:text-site transition-all tracking-wider text-center text-xl'
                        title='Mustafa Yıldız'
                    >
                        Mustafa Yıldız
                    </Link>
                    <Link
                        href={'/emlak-ofisleri/emlak-detay'}
                        className='flex justify-center w-full text-gray-500 hover:text-site transition-all -mt-2'
                    >
                        Yaprak Emlak
                    </Link>
                    <small className='text-sm text-center text-gray-500'>Mimar Sinan Mah. / Atakum</small>
                    <hr className='my-1' />
                    <div className="flex gap-x-4">
                        <div className="flex-[1_1_50%] flex flex-col items-center gap-y-1">
                            <span className='text-sm text-gray-500'>Satılık İlan</span>
                            <strong className='text-site tracking-widest'>100</strong>
                        </div>
                        <div className="flex-[1_1_50%] flex flex-col items-center gap-y-1">
                            <span className='text-sm text-gray-500'>Kiralık İlan</span>
                            <strong className='text-site tracking-widest'>10</strong>
                        </div>
                    </div>
                    <hr className='my-1' />
                    <div className="flex gap-x-2">
                        <div className='relative w-full'>
                            {showPhoneNumber ? (
                                <Link
                                    href={'tel:05055050505'}
                                    className='flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white transition-all'>
                                    <BsTelephone size={16} />
                                    <span className='lg:text-sm text-xs'>0505 505 05 05</span>
                                </Link>
                            ) : (
                                <button
                                    onClick={togglePhoneNumber}
                                    className='w-full flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site/20 transition-all'>
                                    <BsEyeSlash size={16} />
                                    <span className='lg:text-sm text-xs'>Numara</span>
                                </button>
                            )}
                        </div>

                        <div className='relative w-full'>
                            {showWpNumber ? (
                                <Link
                                    href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${wpText}`}
                                    target='_blank'
                                    className='flex bg-green-400/20 text-green-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-green-400 hover:text-white transition-all'>
                                    <BsWhatsapp size={16} />
                                    <span className='lg:text-sm text-xs'>Mesaj Gönder</span>
                                </Link>
                            ) : (
                                <button
                                    onClick={toggleWpNumber}
                                    className='w-full flex bg-green-400/20 text-green-600 py-3 px-4 items-center justify-between rounded-lg hover:bg-green-400/30 transition-all'>
                                    <BsEyeSlash size={16} />
                                    <span className='lg:text-sm text-xs'>WhatsApp</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Item