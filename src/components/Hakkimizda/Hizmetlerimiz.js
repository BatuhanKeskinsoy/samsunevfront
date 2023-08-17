import React from 'react'
import { LiaCrosshairsSolid, LiaHomeSolid, LiaLeafSolid } from 'react-icons/lia'

function Hizmetlerimiz() {
    return (
        <div className="flex lg:flex-row flex-col gap-x-8 lg:gap-y-0 gap-y-8 text-center text-base text-gray-600 leading-loose">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-6 tracking-wider flex flex-col justify-center items-center gap-y-4 w-full">
                <LiaLeafSolid className='text-site absolute -left-20 -top-20 opacity-10 text-[300px]' />
                <span className='text-site text-3xl font-bold'>Sade ve Kolay</span>
                <p>Sadeliği ve kullanıcı deneyimini göz önünde bulundurarak oluşturduğumuz platformumuz sayesinde hem hayalinizdeki evi kolayca bulabilir, hem de ilanlarınızı rahatça oluşturabilirsiniz.</p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-6 tracking-wider flex flex-col justify-center items-center gap-y-4 w-full">
                <div className="flex lg:flex-row flex-col gap-y-6 gap-x-2 items-center">
                    <LiaCrosshairsSolid className='text-site absolute -left-20 -top-20 opacity-10 text-[300px]' />
                    <span className='text-site text-3xl font-bold'>Hedef Kitle</span>
                </div>
                <p>Gayrimenkul araştırması yapan müşterilerin, Samsun içerisinde ilan aramak istediklerinde düşük rekabet nedeniyle ilanınızda yer alma şansı yükselecektir.</p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-6 tracking-wider flex flex-col justify-center items-center gap-y-4 w-full">
                <div className="flex lg:flex-row flex-col gap-y-6 gap-x-2 items-center">
                    <LiaHomeSolid className='text-site absolute -left-20 -top-20 opacity-10 text-[300px]' />
                    <span className='text-site text-3xl font-bold'>Yerel Emlakçılık</span>
                </div>
                <p>Özel olarak Samsun için oluşturduğumuz platformumuz sayesinde müşterileriniz, farklı bölgelerdeki ilanlarda gezinmek yerine ilanınıza odaklanabilecekler.</p>
            </div>
        </div>
    )
}

export default Hizmetlerimiz