import React from 'react'
import { FacebookShareButton, FacebookIcon } from 'next-share'
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { LinkedinShareButton, LinkedinIcon } from 'next-share'
import { TelegramShareButton, TelegramIcon } from 'next-share'
import { RedditShareButton, RedditIcon } from 'next-share'
import { EmailShareButton, EmailIcon } from 'next-share'
import { useRouter } from 'next/router'

function Shares(props) {

    const router = useRouter()
    const pathname = router.pathname
    const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`

    return (
        <div className='flex gap-3 flex-wrap'>
            <FacebookShareButton
                url={fullUrl}
                quote={props.title}
                hashtag={props.tags}
                windowWidth={800}
                windowHeight={800}
            >
                <FacebookIcon size={38} round className='hover:scale-125 transition-all' />
            </FacebookShareButton>

            <TwitterShareButton
                url={fullUrl}
                title={props.title}
                windowWidth={800}
                windowHeight={800}
            >
                <TwitterIcon size={38} round className='hover:scale-125 transition-all' />
            </TwitterShareButton>

            <WhatsappShareButton
                url={fullUrl}
                title={props.title}
                windowWidth={800}
                windowHeight={800}
            >
                <WhatsappIcon size={38} round className='hover:scale-125 transition-all' />
            </WhatsappShareButton>

            <LinkedinShareButton
                url={fullUrl}
                windowWidth={800}
                windowHeight={800}
            >
                <LinkedinIcon size={38} round className='hover:scale-125 transition-all' />
            </LinkedinShareButton>

            <TelegramShareButton
                url={fullUrl}
                title={props.title}
                windowWidth={800}
                windowHeight={800}
            >
                <TelegramIcon size={38} round className='hover:scale-125 transition-all' />
            </TelegramShareButton>

            <RedditShareButton
                url={fullUrl}
                title={props.title}
                windowWidth={800}
                windowHeight={800}
            >
                <RedditIcon size={38} round className='hover:scale-125 transition-all' />
            </RedditShareButton>

            <EmailShareButton
                url={fullUrl}
                subject={props.title}
                body={props.description}
            >
                <EmailIcon size={38} round className='hover:scale-125 transition-all' />
            </EmailShareButton>
        </div>
    )
}

export default Shares