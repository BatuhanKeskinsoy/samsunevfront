import React from 'react'
import Item from '@/components/Ilanlar/Item/Item'

function EmlakIlanlar() {
    const itemWidth = 'xl:w-1/3 lg:w-1/2 w-full'
    return (
        <ul className="flex flex-wrap">
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
            <Item itemWidth={itemWidth} titleLineClamp={'line-clamp-1'} />
        </ul>
    )
}

export default EmlakIlanlar