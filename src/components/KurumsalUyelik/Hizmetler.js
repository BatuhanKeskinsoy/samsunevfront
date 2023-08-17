import React from 'react'
import Hizmetlerimiz from '../Hakkimizda/Hizmetlerimiz'

function Hizmetler() {
    return (
        <section id='KurumsalHizmetler'>
            <div className="container mx-auto lg:px-0 px-4 lg:py-8 py-4 my-8">
                <div className="flex flex-col w-full gap-y-8">
                    <h2 className='lg:text-5xl text-4xl tracking-wide lg:mb-6'>Hizmetlerimiz</h2>
                    <Hizmetlerimiz />
                </div>
            </div>
        </section>
    )
}

export default Hizmetler