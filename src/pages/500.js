import React from 'react'

function Custom500() {

    return (
        <section id='Custom500'>
            <div className="container mx-auto lg:px-0 px-4 h-[calc(100vh-100px)]">
                <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center -mt-12">
                    <h1 className='lg:text-[200px] text-[100px] text-site lg:leading-[200px] leading-[100px] font-bold'>500</h1>
                    <span className='lg:text-6xl text-3xl lg:text-left text-center text-gray-700'>Sunucumuz Şu Anda Bakımda</span>
                    <p className='lg:text-xl text-base lg:text-left text-center text-gray-500'>Sunucu bakımı yapılıyor. Bundan dolayı çok üzgünüz.</p>
                </div>
            </div>
        </section>
    )
}

export default Custom500