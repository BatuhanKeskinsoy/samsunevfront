import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'

function Custom404() {

    const router = useRouter()
    return (
        <section id='Custom404'>
            <div className="container mx-auto lg:px-0 px-4 h-[calc(100vh-100px)]">
                <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center -mt-12">
                    <h1 className='lg:text-[200px] text-[100px] text-site lg:leading-[200px] leading-[100px] font-bold'>404</h1>
                    <span className='lg:text-6xl text-3xl lg:text-left text-center text-gray-700'>Sayfa Bulunamadı</span>
                    <p className='lg:text-xl text-base lg:text-left text-center text-gray-500'>Aradığınız sayfa bulunamadı. Bu sayfa, kaldırılmış veya değiştirilmiş olabilir.</p>
                    <button
                        onClick={() => router.push('/')}
                        className='text-xl min-w-fit lg:ml-3 lg:w-fit w-full text-site transition-all justify-center lg:rounded-md py-3 px-4 flex items-center gap-x-4 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30'
                    >
                        <AiOutlineHome size={26} />
                        Anasayfaya Dön
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Custom404