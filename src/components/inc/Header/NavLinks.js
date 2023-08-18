import React, { useState, useEffect } from 'react';
import NavLinksData from '@/data/Json/navLinks';
import NavItem from '@/components/inc/Header/Items/NavItem';
import { AiOutlineLogin } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CiLogout } from 'react-icons/ci';

function NavLinks(props) {
    const [fullname, setFullname] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const router = useRouter()

    const setIsAuthActive = props.setIsAuthActive;
    const isAuthActive = props.isAuthActive;

    const handleLoginClick = () => {
        setIsAuthActive(true);
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedFullname = window.localStorage.getItem('fullname');
            if (storedFullname && !fullname) {
                setFullname(storedFullname);
            }
        }
    }, [fullname, isAuthActive]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize, { passive: true }); // Listen for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener
        };
    }, []);

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsHover(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHover(false);
        }
    };

    const handleClick = () => {
        if (isMobile) {
            setIsActive(!isActive);
        }
    };

    const handleLogout = () => {
        window.localStorage.clear()
        setIsAuthActive(false)
    };



    return (
        <nav className='flex lg:h-full h-[calc(100vh-80px)] items-center lg:flex-row flex-col lg:w-fit w-full lg:relative fixed top-20 lg:top-0 left-0 bg-white lg:shadow-none shadow-lg shadow-gray-100 transition-all lg:pt-0 pt-4 lg:px-0 px-4 cursor-pointer'>
            <div className='w-full flex lg:flex-row flex-col'>
                {NavLinksData.map((links, key) => (
                    <NavItem
                        key={key}
                        name={links.name}
                        url={links.url}
                        id={links.id}
                        isDropdown={links.isDropdown}
                        navActive={props.navActive}
                    />
                ))}
            </div>

            {fullname ? (
                <div
                    className='relative w-full h-fit lg:h-full'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                >
                    <button
                        type='button'
                        className='flex items-center gap-x-1 bg-site/10 text-site transition-all lg:w-fit w-full py-2 lg:py-7 h-fit lg:h-full justify-between px-4 xl:px-6 border-b border-gray-100 lg:border-none text-base lg:text-sm xl:text-base min-w-max tracking-wide'
                    >
                        {fullname}
                        <BsChevronDown size={14} />
                    </button>
                    <div className={`lg:absolute w-full h-fit lg:gap-y-0 gap-y-8 shadow-lg rounded-b-lg overflow-hidden bg-white gap-x-24 lg:text-sm ${(isHover && !isMobile) || (isActive && isMobile) ? 'flex lg:flex-row flex-col' : 'hidden'}`}>
                        <ul className='flex flex-col text-gray-600 min-w-fit w-full relative'>
                            <li className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`https://panel.samsunev.com`}
                                    title='Panele Git'
                                    className='py-3 flex hover:bg-site/10 hover:text-site border-l-2 border-transparent hover:border-site transition-all text-base lg:text-sm xl:text-base justify-between items-center px-4 gap-x-2 w-full'
                                >
                                    Panele Git
                                </Link>
                            </li>
                            <li className='group relative flex lg:flex-row flex-col'>
                                <button
                                    onClick={handleLogout}
                                    className='py-3 flex hover:bg-site/10 hover:text-site border-l-2 border-transparent hover:border-site transition-all text-base lg:text-sm xl:text-base justify-between items-center px-4 gap-x-2 w-full'
                                >
                                    Çıkış Yap
                                    <CiLogout size={20} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <button
                    onClick={handleLoginClick}
                    title='Giriş Yap'
                    className={`min-w-fit lg:ml-3 lg:w-fit w-full text-site transition-all lg:rounded-md py-3 px-4 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/10 hover:bg-site hover:text-white hover:shadow-lg lg:hover:scale-105 hover:shadow-site/30`}
                >
                    <AiOutlineLogin size={20} />
                    Giriş Yap
                </button>
            )}
        </nav>
    );
}

export default NavLinks;
