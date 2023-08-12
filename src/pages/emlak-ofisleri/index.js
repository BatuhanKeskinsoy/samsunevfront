import Emlaklar from '@/components/EmlakOfisleri/EmlakListesi/Emlaklar'
import React from 'react'

function EmlakOfisleri() {
    return (
        <section id='EmlakOfisleri'>
            <div className="container mx-auto lg:px-0 px-4 pb-8">
                <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center mb-2">
                    <h1 className='lg:text-3xl text-2xl tracking-wide'>Emlak Ofisleri</h1>
                    <span className='text-gray-500'>100 Emlak Ofisi Bulundu</span>
                </div>
                <Emlaklar />
            </div>
        </section>
    )
}

export default EmlakOfisleri