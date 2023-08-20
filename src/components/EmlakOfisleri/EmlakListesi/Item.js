import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'
import { BsEyeSlash, BsTelephone, BsWhatsapp } from 'react-icons/bs';


function Item(props) {
    const company = props.company

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

    const phoneSlug = company.phone ? company.phone.replace(/\s/g, '') : '';
    const wpNumberSlug = company.wp_number ? company.wp_number.replace(/\s/g, '') : '';
    const wpText = `Merhaba, size bu siteden ulaştım : ${path}`

    return (
        <div className={`p-3 hover:scale-105 transition-all ${props.itemWidth}`}>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="relative flex items-center justify-center py-2">
                    <Link
                        href={`/emlak-ofisleri/${company.slug}`}
                        title={company.name}
                        className='relative lg:min-w-[15rem] w-60 lg:h-40 h-32 max-w-full rounded-xl shadow-xl'
                    >
                        <Image
                            src={`/${company.image}`}
                            title={company.name}
                            alt={company.name}
                            fill
                            className='object-cover object-center rounded-xl'
                        />
                    </Link>
                </div>
                <hr className='my-3' />
                <div className="flex flex-col gap-y-2">
                    <Link
                        href={`/emlak-ofisleri/${company.slug}`}
                        className='font-bold text-site/90 hover:text-site transition-all tracking-wider text-center text-xl'
                        title={company.name}
                    >
                        {company.name}
                    </Link>
                    <small className='text-sm text-center text-gray-500'>{company.neighborhood} / {company.district}</small>
                    <span className='text-gray-500 text-center text-sm'>{company.users.length} Danışman</span>
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

                    {(company.phone || company.wp_number) && (
                        <>
                            <hr className='my-1' />
                            <div className="flex gap-x-2">
                                {company.phone && (
                                    <div className='relative w-full'>
                                        {showPhoneNumber ? (
                                            <Link
                                                href={`tel:${phoneSlug}`}
                                                className='flex bg-site/10 text-site py-3 px-4 items-center justify-between rounded-lg hover:bg-site hover:text-white transition-all'>
                                                <BsTelephone size={16} />
                                                <span className='lg:text-sm text-xs'>{company.phone}</span>
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
                                )}

                                {company.wp_number && (
                                    <div className='relative w-full'>
                                        {showWpNumber ? (
                                            <Link
                                                href={`https://api.whatsapp.com/send?phone=+9${wpNumberSlug}&text=${wpText}`}
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
                                )}
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div >
    )
}

export default Item