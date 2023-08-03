import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';

function NavItem(props) {
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

    if (!props.isDropdown) {
        return (
            <Link
                href={props.url}
                title={props.name}
                onClick={props.navActive}
                className='flex items-center gap-x-2 hover:text-site transition-all lg:w-fit w-full py-2 lg:py-6 h-fit lg:h-full justify-between px-4 border-b border-gray-100 lg:border-none text-base min-w-max tracking-wide'
            >
                {props.name}
            </Link>
        );
    } else {
        return (
            <div
                className='w-full h-fit lg:h-full group'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <button
                    type='button'
                    className='flex items-center gap-x-1 hover:text-site transition-all lg:w-fit w-full py-2 lg:py-6 h-fit lg:h-full justify-between px-4 border-b border-gray-100 lg:border-none text-base min-w-max tracking-wide'
                >
                    {props.name}
                    <BsChevronDown size={14} />
                </button>

                <div className={`lg:absolute h-fit lg:gap-y-0 gap-y-8 shadow-lg shadow-gray-200 rounded-b-lg overflow-hidden bg-white gap-x-24 ${(isHover && !isMobile) || (isActive && isMobile) ? 'flex lg:flex-row flex-col' : 'hidden'}`}>
                    {props.name === 'Satılık' && (
                        <ul className='flex flex-col text-gray-600 text-sm min-w-fit'>
                            {/* {servicesData.map((serviceItem, key) => ( */}
                            <li /* key={key} */>
                                <Link
                                    onClick={props.navActive}
                                    href={`/`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                            </li>
                            <li /* key={key} */>
                                <Link
                                    onClick={props.navActive}
                                    href={`/`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                            </li>
                            <li /* key={key} */>
                                <Link
                                    onClick={props.navActive}
                                    href={`/`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                            </li>
                            <li /* key={key} */>
                                <Link
                                    onClick={props.navActive}
                                    href={`/`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                            </li>
                            {/* ))} */}
                        </ul>
                    )}

                    {props.name === 'Kiralık' && (
                        <ul className='flex flex-col text-gray-600 text-sm min-w-fit'>
                            {/* {servicesData.map((serviceItem, key) => ( */}
                            <li /* key={key} */>
                                <Link
                                    onClick={props.navActive}
                                    href={`/`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Kiralık Daire
                                    <BsChevronRight />
                                </Link>
                            </li>
                            <li /* key={key} */>
                                <Link
                                    onClick={props.navActive}
                                    href={`/`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Kiralık Daire
                                    <BsChevronRight />
                                </Link>
                            </li>
                            <li /* key={key} */>
                                <Link
                                    onClick={props.navActive}
                                    href={`/`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Kiralık Daire
                                    <BsChevronRight />
                                </Link>
                            </li>
                            {/* ))} */}
                        </ul>
                    )}
                </div>
                
            </div>
        );
    }
}

export default NavItem;
