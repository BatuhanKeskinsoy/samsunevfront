import React from 'react'
import NavLinksData from '@/data/Json/navLinks'
import NavItem from '@/components/inc/Header/Items/NavItem'
import { AiOutlineLogin } from 'react-icons/ai'

function NavLinks(props) {

    const setIsAuthActive = props.setIsAuthActive

    const handleLoginClick = () => {
        setIsAuthActive(true)
    }

    return (
        <nav className='flex lg:h-full h-[calc(100vh-80px)] items-center lg:flex-row flex-col lg:w-fit w-full lg:relative fixed top-20 lg:top-0 left-0 bg-white lg:shadow-none shadow-lg shadow-gray-100 transition-all lg:pt-0 pt-4 lg:px-0 px-4'>
            <div className='w-full flex lg:flex-row flex-col'>
                {
                    NavLinksData.map((links, key) => (
                        <NavItem
                            key={key}
                            name={links.name}
                            url={links.url}
                            id={links.id}
                            isDropdown={links.isDropdown}
                            navActive={props.navActive}
                        />
                    ))
                }</div>

            <button
                onClick={handleLoginClick}
                title='Giriş Yap'
                className='min-w-fit lg:ml-3 lg:w-fit w-full text-site transition-all lg:rounded-md py-3 px-4 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30'
            >
                <AiOutlineLogin size={20} />
                Giriş  Yap
            </button>
        </nav>
    )
}

export default NavLinks