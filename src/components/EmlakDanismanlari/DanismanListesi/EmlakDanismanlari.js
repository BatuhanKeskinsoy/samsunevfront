import React from 'react'
import Item from '@/components/EmlakDanismanlari/DanismanListesi/Item'

function EmlakDanismanlariComponent() {
    const itemWidth = 'xl:w-1/3 lg:w-1/2 w-full'
    return (
        <div className="flex flex-wrap">
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
            <Item itemWidth={itemWidth} />
        </div>
    )
}

export default EmlakDanismanlariComponent