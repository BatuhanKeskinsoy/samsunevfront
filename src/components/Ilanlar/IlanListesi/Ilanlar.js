import React from 'react'
import Item from '@/components/Ilanlar/Item/Item'

function Ilanlar() {
    const itemWidth = 'xl:w-1/3 lg:w-1/2 md:w-1/2 w-full'
    return (
        <section id='Ilanlar' className='mb-8'>
            <ul className="flex flex-wrap -m-3">
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