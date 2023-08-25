import React from 'react'
import Item from '@/components/EmlakOfisleri/EmlakDetay/EmlakDanismanlari/Item'
import NoContentFound from '@/components/Others/NoContentFound'

function EmlakDanismanlariComponent({ companyProfileData }) {
    const itemWidth = 'xl:w-1/3 lg:w-1/2 w-full'
    return (
        <div className="flex flex-wrap">
            {
                companyProfileData.users.map((consultant, index) => (
                    <Item itemWidth={itemWidth} key={index} companyProfileData={companyProfileData} companyConsultant={consultant} />
                ))
            }
        </div>
    )
}

export default EmlakDanismanlariComponent