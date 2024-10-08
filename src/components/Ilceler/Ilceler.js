import React from 'react'
import Item from '@/components/Ilceler/Item'

function Ilceler({ countiesData }) {
    return (
        <>
            {countiesData.length > 0 && (
                <section id='Ilceler' className='lg:mb-12 mb-12 lg:-mt-44'>
                    <h2 className='lg:text-3xl text-2xl lg:mb-8 mb-6 tracking-wide lg:hidden'>Samsun İlçelerindeki <strong className='text-site'>Satılık Daireler</strong></h2>
                    <ul className="flex lg:gap-x-8 gap-x-4 justify-start lg:justify-center w-full overflow-x-auto overflow-y-hidden lg:overflow-visible p-4 pl-0 pr-0">
                        {countiesData.map((county, index) => (
                            <Item county={county} key={index} />
                        ))}
                    </ul>
                </section>
            )}
        </>
    )
}


export default Ilceler