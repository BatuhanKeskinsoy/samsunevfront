import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'

function Breadcrumb() {

    const router = useRouter()
    const path = router.pathname

    return (
        <div className="container mx-auto text-sm text-gray-600 lg:px-0 px-4 my-4">
            <ul className='flex items-center gap-x-2'>
                <li>
                    <Link href={'/'} >
                        <AiOutlineHome size={22} />
                    </Link>
                </li>
                <li>
                    {path}
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumb