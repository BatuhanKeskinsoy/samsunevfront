import React from 'react'
import { FacebookShareButton, FacebookIcon } from 'next-share'
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { LinkedinShareButton, LinkedinIcon } from 'next-share'
import { TelegramShareButton, TelegramIcon } from 'next-share'
import { RedditShareButton, RedditIcon } from 'next-share'
import { EmailShareButton, EmailIcon } from 'next-share'
import { usePathname } from 'next/navigation'

function Shares(props) {
    const pathname = usePathname()
    const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`
    console.log(fullUrl);
    return (
        <div className='flex flex-col gap-y-5 items-start'>
            <span className='text-gray-600 font-gemunu tracking-wide text-lg'>Bu içeriği aşağıdaki bağlantılar ile paylaşabilirsiniz..</span>
            <div className='flex gap-3 flex-wrap'>
                <FacebookShareButton
                    url={fullUrl}
                    quote={props.title}
                    hashtag={props.tags}
                    windowWidth={800}
                    windowHeight={800}
                >
                    <FacebookIcon size={40} round className='hover:scale-125 transition-all' />
                </FacebookShareButton>

                <TwitterShareButton
                    url={fullUrl}
                    title={props.title}
                    windowWidth={800}
                    windowHeight={800}
                >
                    <TwitterIcon size={40} round className='hover:scale-125 transition-all' />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={fullUrl}
                    title={props.title}
                    windowWidth={800}
                    windowHeight={800}
                >
                    <WhatsappIcon size={40} round className='hover:scale-125 transition-all' />
                </WhatsappShareButton>

                <LinkedinShareButton
                    url={fullUrl}
                    windowWidth={800}
                    windowHeight={800}
                >
                    <LinkedinIcon size={40} round className='hover:scale-125 transition-all' />
                </LinkedinShareButton>

                <TelegramShareButton
                    url={fullUrl}
                    title={props.title}
                    windowWidth={800}
                    windowHeight={800}
                >
                    <TelegramIcon size={40} round className='hover:scale-125 transition-all' />
                </TelegramShareButton>

                <RedditShareButton
                    url={fullUrl}
                    title={props.title}
                    windowWidth={800}
                    windowHeight={800}
                >
                    <RedditIcon size={40} round className='hover:scale-125 transition-all' />
                </RedditShareButton>

                <EmailShareButton
                    url={fullUrl}
                    subject={props.title}
                    body={props.description}
                >
                    <EmailIcon size={32} round className='hover:scale-125 transition-all' />
                </EmailShareButton>
            </div>
        </div>
    )
}

export default Shares