import Image from 'next/image'
import React from 'react'

function NedenUcretsiz() {
    return (
        <section id='NedenUcretsiz'>
            <div className="container mx-auto lg:px-0 px-4 lg:py-8 py-4 my-8">
                <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-8">
                    <div className='flex-[1_1_50%] flex flex-col gap-y-4 lg:order-1 order-2 text-gray-600 2xl:text-2xl xl:text-xl text-lg tracking-wider !leading-relaxed'>
                        <h2 className='lg:text-5xl text-4xl tracking-wide text-black lg:mb-6'>Neden Ücretsiz?</h2>

                        <p>SamsunEv.com olarak sunduğumuz platformumuz, gayrimenkul sektöründeki değerli emlakçılar için artık ücretsiz!</p>

                        <p>Bu kararı, emlakçılarımızın ilanlarını paylaşarak platformumuza katkı sağlamasını ve bizim platformumuzdan daha fazla müşteri kazanmasını desteklemek amacıyla aldık.</p>

                        <p>Amacımız, Samsun'da gayrimenkul araştırması yapan müşterilerin doğru ilanlara ve güvenilir emlakçılara en kolay şekilde ulaşmasını sağlamak.</p>

                        <p>Siz de SamsunEv.com ailesine katılın, gayrimenkul sektöründe öne çıkmanın keyfini ÜCRETSİZ yaşayın!</p>

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