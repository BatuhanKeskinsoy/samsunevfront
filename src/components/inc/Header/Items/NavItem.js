import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';

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
                className='flex items-center gap-x-2 hover:text-site transition-all lg:w-fit w-full py-2 lg:py-7 h-fit lg:h-full justify-between px-2 border-b border-gray-100 lg:border-none text-sm min-w-max tracking-wide'
            >
                {props.name}
            </Link>
        );
    } else {
        return (
            <div
                className='w-full h-fit lg:h-full'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <button
                    type='button'
                    className='flex items-center gap-x-1 hover:text-site transition-all lg:w-fit w-full py-2 lg:py-7 h-fit lg:h-full justify-between px-2 border-b border-gray-100 lg:border-none text-sm min-w-max tracking-wide'
                >
                    {props.name}
                    <BsChevronDown size={14} />
                </button>

                <div className={`lg:absolute h-fit lg:gap-y-0 gap-y-8 shadow-lg rounded-b-lg bg-white gap-x-24 text-sm ${(isHover && !isMobile) || (isActive && isMobile) ? 'flex lg:flex-row flex-col' : 'hidden'}`}>
                    {props.name === 'Satılık' && (
                        <ul className='flex flex-col text-gray-600 min-w-fit lg:w-fit w-full relative'>
                            {/* {servicesData.map((serviceItem, key) => ( */}
                            <li /* key={key} */ className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`/ilanlar`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                                <div className="hidden lg:group-hover:flex lg:absolute left-full top-0 bg-white min-w-max w-full shadow-lg rounded-br-lg">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li /* key={key} */ className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`/ilanlar`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                                <div className="hidden lg:group-hover:flex lg:absolute left-full top-0 bg-white min-w-max w-full shadow-lg rounded-br-lg">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li /* key={key} */ className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`/ilanlar`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                                <div className="hidden lg:group-hover:flex lg:absolute left-full top-0 bg-white min-w-max w-full shadow-lg rounded-br-lg">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li /* key={key} */ className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`/ilanlar`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Satılık Daire
                                    <BsChevronRight />
                                </Link>
                                <div className="hidden lg:group-hover:flex lg:absolute left-full top-0 bg-white min-w-max w-full shadow-lg rounded-br-lg">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Satılık Daire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* ))} */}
                        </ul>
                    )}

                    {props.name === 'Kiralık' && (
                        <ul className='flex flex-col text-gray-600 min-w-fit lg:w-fit w-full relative'>
                            {/* {servicesData.map((serviceItem, key) => ( */}
                            <li /* key={key} */ className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`/ilanlar`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Kiralık Daire
                                    <BsChevronRight />
                                </Link>
                                <div className="hidden lg:group-hover:flex lg:absolute left-full top-0 bg-white min-w-max w-full shadow-lg rounded-br-lg">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li /* key={key} */ className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`/ilanlar`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Kiralık Daire
                                    <BsChevronRight />
                                </Link>
                                <div className="hidden lg:group-hover:flex lg:absolute left-full top-0 bg-white min-w-max w-full shadow-lg rounded-br-lg">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li /* key={key} */ className='group relative flex lg:flex-row flex-col'>
                                <Link
                                    onClick={props.navActive}
                                    href={`/ilanlar`}
                                    title='title'
                                    className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                >
                                    Kiralık Daire
                                    <BsChevronRight />
                                </Link>
                                <div className="hidden lg:group-hover:flex lg:absolute left-full top-0 bg-white min-w-max w-full shadow-lg rounded-br-lg">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={props.navActive}
                                                href={`/ilanlar`}
                                                title='title'
                                                className='py-3 flex hover:text-site border-l-2 border-transparent hover:border-site transition-all items-center px-4 gap-x-2'
                                            >
                                                Kiralık Daire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
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
