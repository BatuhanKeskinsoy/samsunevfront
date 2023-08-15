import React from 'react'
import Link from 'next/link'
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci'

function Socials() {
    return (
        <ul className="flex flex-wrap gap-4">
            <li>
                <Link href={'https://www.facebook.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                    <CiFacebook size={36} />
                </Link>
            </li>
            <li>
                <Link href={'https://www.twitter.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                    <CiTwitter size={36} />
                </Link>
            </li>
            <li>
                <Link href={'https://www.instagram.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                    <CiInstagram size={36} />
                </Link>
            </li>
            <li>
                <Link href={'https://www.youtube.com'} target='_blank' className='text-gray-800 hover:text-site transition-all'>
                    <CiYoutube size={36} />
                </Link>
            </li>
        </ul>
    )
}

export default Socials