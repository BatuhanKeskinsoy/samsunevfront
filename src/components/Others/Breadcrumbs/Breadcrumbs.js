import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'

function Breadcrumbs() {

    const router = useRouter()
    const pathSegments = router.pathname.split('/').filter(segment => segment !== '');

    return (
        <div className="container mx-auto text-sm text-gray-600 lg:px-0 px-4 my-4">
            <ul className='flex items-center gap-x-2'>
                <li>
                    <Link href={'/'} >
                        <AiOutlineHome size={20} />
                    </Link>
                </li>
                {pathSegments.map((segment, index) => (
                    <li key={index} className='flex items-center gap-x-2'>
                        <span>/</span>
                        <Link
                            className='capitalize'
                            href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                        >
                            {segment}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrumbs