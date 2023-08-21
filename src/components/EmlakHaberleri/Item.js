import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCalendarPlus } from 'react-icons/bs'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
    return formattedDate;
}

function Item(props) {

    const blog = props.blog

    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    return (
        <li className={`${props.itemWidth} md:p-4 p-0 py-4`}>
            <Link
                href={`/emlak-haberleri/${blog.slug}`}
                title={blog.name}
                className='flex flex-col bg-white rounded-lg overflow-hidden group'
            >
                <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                        src={`/${blog.image}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        title={blog.name}
                        alt={blog.name}
                        className='object-cover object-center transition-all'
                    />
                    <div className='absolute top-2 right-2 bg-white text-sm p-2 flex flex-col items-center rounded-md font-bold'>
                        <span className='text-3xl -my-1'>
                            {String(new Date(blog.created_at).getDate()).padStart(2, '0')}
                        </span>
                        <span className='text-xs mt-0.5'>
                            {months[new Date(blog.created_at).getMonth()]}
                        </span>
                        <span className='text-sm mt-0.5 -mb-0.5'>
                            {new Date(blog.created_at).getFullYear()}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="p-4 flex flex-col gap-y-2">
                        <h4 className={`${props.titleLineClamp} font-bold tracking-wide text-base group-hover:text-site transition-all`}>
                            {blog.name}
                        </h4>
                        <span className='line-clamp-3 text-gray-600 text-sm'>
                            {blog.short_content}
                        </span>
                    </div>
                    <hr />
                    <div className="bg-white group-hover:bg-site group-hover:text-white  py-3 px-4 text-sm flex justify-between items-center transition-all text-gray-600">
                        <div className="flex items-center gap-x-2">
                            <BsCalendarPlus />
                            <span>{formatDate(blog.created_at)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='tracking-wide group-hover:hidden w-fit'>Haberi Oku</span>
                            <AiOutlineDoubleRight size={20} className='w-0 group-hover:w-fit opacity-0 invisible group-hover:opacity-100 text-white group-hover:visible transition-all -translate-x-2 group-hover:translate-x-0' />
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Item