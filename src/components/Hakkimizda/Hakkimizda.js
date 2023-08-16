import React from 'react'
import Hizmetlerimiz from './Hizmetlerimiz'
import Image from 'next/image'

function Hakkimizda() {
    return (
        <section id='Hakkimizda' className='lg:pb-16'>
            <div className="container mx-auto lg:px-0 px-4 flex flex-col gap-y-3">
                <div className="flex lg:flex-row flex-col bg-white lg:mb-8 lg:py-16 py-8 lg:px-8 px-4 shadow-sm rounded-lg lg:gap-x-12 items-center">
                    <div className="relative lg:flex-[1_1_45%]">
                        <Image
                            src={'/theme/about.svg'}
                            alt='Hakkımızda'
                            title='Hakkımızda'
                            width={750}
                            height={0}
                            className='object-contain w-full h-auto'
                        />
                    </div>
                    <div className="flex flex-col lg:flex-[1_1_55%] text-gray-600">
                        <h1 className='lg:text-3xl text-xl font-semibold tracking-wider my-8 block text-black'>Samsun'un Yeni Nesil Emlak Platformu</h1>
                        <div className="DetailContent flex flex-col gap-y-6">
                            <p>Hayal ettiğiniz evi bulmanın ve gayrimenkul yatırımlarınızı en verimli şekilde yönetmenin yeni adresi, Samsunev.com'a hoş geldiniz! Biz, Samsun'un önde gelen emlak ilanları platformlarına alternatif olarak, benzersiz ve yenilikçi bir yaklaşımla gayrimenkul dünyasını sizin için dönüştürüyoruz.</p>
                            <p>Samsunev.com olarak, amacımız size Samsun'un çeşitli bölgelerindeki emlak seçeneklerini kolayca ve hızlı bir şekilde keşfetme fırsatı sunmak. Sadece birkaç tıklama ile hayalinizdeki evi veya yatırım yapmak istediğiniz gayrimenkulu bulmanızı sağlamak için modern ve kullanıcı dostu bir platform geliştirdik.</p>
                        </div>
                    </div>
                </div>

                <Hizmetlerimiz />
                
            </div>
        </section>
    )
}

export default Hakkimizda