import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { BsChevronRight } from 'react-icons/bs';

function Header() {
    const [activeButton, setActiveButton] = useState('button-banner'); // Set initial state here

    const buttonContainerRef = useRef(null); // Ref for the button container

    const handleButtonClick = (buttonId) => {
        const section = document.getElementById(buttonId);
        if (section) {
            const yOffset = window.innerWidth >= 768 ? -104 : -144;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const bannerSection = document.getElementById('KurumsalUyelik');
            const hizmetlerSection = document.getElementById('KurumsalHizmetler');
            const nedenUcretsizSection = document.getElementById('NedenUcretsiz');

            if (bannerSection && isSectionInViewport(bannerSection)) {
                setActiveButton('button-banner');
            } else if (hizmetlerSection && isSectionInViewport(hizmetlerSection)) {
                setActiveButton('button-hizmetler');
            } else if (nedenUcretsizSection && isSectionInViewport(nedenUcretsizSection)) {
                setActiveButton('button-nedenUcretsiz');
            } else if (window.scrollY === 0) {
                setActiveButton('button-banner');
            }
        };

        const isSectionInViewport = (section) => {
            const rect = section.getBoundingClientRect();
            const offset = window.innerWidth >= 768 ? 104 : 144;
            return rect.top >= 0 && rect.top <= offset;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Scroll the button container to bring the active button into view
        if (buttonContainerRef.current) {
            const activeButtonElement = buttonContainerRef.current.querySelector(`#${activeButton}`);
            if (activeButtonElement) {
                buttonContainerRef.current.scrollLeft = activeButtonElement.offsetLeft;
            }
        }
    }, [activeButton]);

    return (
        <header className='bg-blue-950 text-white'>
            <div className="lg:h-[104px] h-[144px] flex justify-start">
                <div className="flex lg:flex-row flex-col items-center justify-between bg-blue-950 fixed top-0 w-full z-10">
                    <Link href={''} className='block lg:p-6 p-4'>
                        <Image
                            src={'/logo/logo-white.svg'}
                            width={355}
                            height={66}
                            className='h-14 w-auto'
                        />
                    </Link>
                    <div
                        ref={buttonContainerRef}
                        id='KurumsalHeaderButtons'
                        className="flex justify-start items-center w-full lg:w-fit overflow-x-auto scroll-smooth"
                    >
                        <button
                            id="button-banner"
                            className={`px-6 py-4 h-full lg:rounded-md min-w-max ${activeButton === 'button-banner' ? 'bg-site' : ''}`}
                            onClick={() => handleButtonClick('KurumsalUyelik')}
                        >
                            Kurumsal Üyelik
                        </button>
                        <button
                            id="button-hizmetler"
                            className={`px-6 py-4 h-full lg:rounded-md min-w-max ${activeButton === 'button-hizmetler' ? 'bg-site' : ''}`}
                            onClick={() => handleButtonClick('KurumsalHizmetler')}
                        >
                            Hizmetler
                        </button>
                        <button
                            id="button-nedenUcretsiz"
                            className={`px-6 py-4 h-full lg:rounded-md min-w-max ${activeButton === 'button-nedenUcretsiz' ? 'bg-site' : ''}`}
                            onClick={() => handleButtonClick('NedenUcretsiz')}
                        >
                            Neden Ücretsiz ?
                        </button>
                    </div>
                    <div className="lg:relative bg-blue-950 lg:flex hidden px-4">
                        <Link href={'/'} className='flex items-center justify-between w-full text-2xl gap-x-2 uppercase tracking-wider lg:hover:scale-110 transition-all'>
                            SİTEYE GİT
                            <BsChevronRight size={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
