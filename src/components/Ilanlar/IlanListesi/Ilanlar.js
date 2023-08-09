import React from 'react'
import Item from '@/components/Ilanlar/Item/Item'

function Ilanlar() {
    const itemWidth = 'xl:w-1/3 lg:w-1/2 md:w-1/2 w-full'
    return (
        <section id='Ilanlar' className='mt-2 mb-8'>
            <h1 className='lg:text-2xl text-xl tracking-wide mb-2'><strong className='text-site'>Samsun Satılık Daire</strong> İlanları</h1>
            <ul className="flex flex-wrap">
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
                <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-2'} />
            </ul>
        </section>
    )
}

export default Ilanlar