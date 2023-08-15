import Link from 'next/link'
import React from 'react'

function Tags() {
    return (
        <ul className="tags flex flex-wrap gap-3">
            <li className="flex gap-x-1 items-center">
                <span className="text-site">#</span>
                <Link
                    href={''}
                    title='Etiket 1'
                    className='text-base text-gray-600 hover:text-site transition-all'
                >
                    Etiket 1
                </Link>
            </li>
            <li className="flex gap-x-1 items-center">
                <span className="text-site">#</span>
                <Link
                    href={''}
                    title='Etiket 2'
                    className='text-base text-gray-600 hover:text-site transition-all'
                >
                    Etiket 2
                </Link>
            </li>
            <li className="flex gap-x-1 items-center">
                <span className="text-site">#</span>
                <Link
                    href={''}
                    title='Etiket 3'
                    className='text-base text-gray-600 hover:text-site transition-all'
                >
                    Etiket 3
                </Link>
            </li>
            <li className="flex gap-x-1 items-center">
                <span className="text-site">#</span>
                <Link
                    href={''}
                    title='Etiket 4'
                    className='text-base text-gray-600 hover:text-site transition-all'
                >
                    Etiket 4
                </Link>
            </li>
            <li className="flex gap-x-1 items-center">
                <span className="text-site">#</span>
                <Link
                    href={''}
                    title='Etiket 5'
                    className='text-base text-gray-600 hover:text-site transition-all'
                >
                    Etiket 5
                </Link>
            </li>
        </ul>
    )
}

export default Tags