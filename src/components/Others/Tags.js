import Link from 'next/link'
import React from 'react'

function Tags({ blogDetail }) {
    
    const blogTags = blogDetail.tags.split(',').map(tag => tag.trim());
    return (
        <ul className="tags flex flex-wrap gap-3">
            {
                blogTags.map((blogTag, index) => (
                    <li className="flex gap-x-1 items-center" key={index}>
                        <span className="text-site">#</span>
                        <Link
                            href={''}
                            title='Etiket 1'
                            className='text-base text-gray-600 hover:text-site transition-all'
                        >
                            {blogTag}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Tags