import React from 'react'
import { LiaCrosshairsSolid, LiaHomeSolid, LiaLeafSolid } from 'react-icons/lia'

function Hizmetlerimiz() {
    return (
        <div className="flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-8 text-center text-base text-gray-600 leading-loose">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-6 tracking-wider flex flex-col justify-center items-center gap-y-4 w-full">
                <LiaLeafSolid className='text-site absolute -left-20 -top-20 opacity-10 text-[250px]' />
                <span className='text-site text-3xl font-bold'>Sade ve Kolay</span>
                <p>Aradığınız özelliklere ve bütçeye uygun emlak ilanlarını incelemek, detaylı fotoğraflara ve açıklamalara göz atmak artık çok daha kolay.</p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-6 tracking-wider flex flex-col justify-center items-center gap-y-4 w-full">
                <div className="flex lg:flex-row flex-col gap-y-6 gap-x-2 items-center">
                    <LiaCrosshairsSolid className='text-site absolute -left-20 -top-20 opacity-10 text-[250px]' />
                    <span className='text-site text-3xl font-bold'>Hedef Kitle</span>
                </div>
                <p>Profesyonel emlak danışmanlarımızın da desteğiyle, satış veya kiralama işlemlerinizde en iyi sonuçları elde etmeniz için yanınızdayız.</p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-6 tracking-wider flex flex-col justify-center items-center gap-y-4 w-full">
                <div className="flex lg:flex-row flex-col gap-y-6 gap-x-2 items-center">
                    <LiaHomeSolid className='text-site absolute -left-20 -top-20 opacity-10 text-[250px]' />
                    <span className='text-site text-3xl font-bold'>Yerel Emlakçılık</span>
                </div>
                <p>Biz Samsunev.com ekibi olarak, Samsun'un emlak sektöründe yeni bir dönemi başlatmanın heyecanını taşıyoruz.</p>
            </div>
        </div>
    )
}

export default Hizmetlerimiz