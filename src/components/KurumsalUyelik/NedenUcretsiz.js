import Image from 'next/image'
import React from 'react'

function NedenUcretsiz() {
    return (
        <section id='NedenUcretsiz'>
            <div className="container mx-auto lg:px-0 px-4 lg:py-8 py-4 my-8">
                <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-8">
                    <div className='flex-[1_1_50%] flex flex-col gap-y-4 lg:order-1 order-2'>
                        <h2 className='text-4xl tracking-wide'>Neden Ücretsiz?</h2>
                        Çünkü Canımız Para İstemiyo
                    </div>
                    <div className="relative flex-[1_1_50%] flex justify-center items-center lg:order-2 order-1">
                        <Image
                            src={'/theme/free.svg'}
                            title='Ücretsiz Kurumsal Üyelik'
                            alt='Ücretsiz Kurumsal Üyelik'
                            width={750}
                            height={0}
                            className='h-auto mx-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NedenUcretsiz