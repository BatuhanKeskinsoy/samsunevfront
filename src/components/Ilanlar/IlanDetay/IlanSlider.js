import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from 'react-slick';

function IlanSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  let slider1, slider2;

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="custom-arrow next-arrow absolute right-0 h-full top-0 flex justify-center items-center bg-site/10 hover:bg-site/50 transition-all px-3 z-10 text-site hover:text-white"
      onClick={onClick}>
      <BsChevronRight size={32} />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="custom-arrow prev-arrow absolute left-0 h-full top-0 flex justify-center items-center bg-site/10 hover:bg-site/50 transition-all px-3 z-10 text-site hover:text-white"
      onClick={onClick}>
      <BsChevronLeft size={32} />
    </button>
  );

  const settingsSlider1 = {
    arrows: true,
    dots: false,
    infinite: true,
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: 'slick-dots custom-dots',
  };

  const settingsSlider2 = {

    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    focusOnSelect: true,
    lazyLoad: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ],
  };

  return (
    <section id='IlanDetaySlider' className='bg-white rounded-lg overflow-hidden shadow-sm'>
      <Slider asNavFor={nav2} ref={slider => (slider1 = slider)} {...settingsSlider1} className='relative'>
        <div className='bg-gray-200 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          1
        </div>
        <div className='bg-gray-300 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          2
        </div>
        <div className='bg-gray-400 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          3
        </div>
        <div className='bg-gray-500 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          4
        </div>
        <div className='bg-gray-600 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          5
        </div>
        <div className='bg-gray-700 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          6
        </div>
        <div className='bg-gray-800 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          7
        </div>
        <div className='bg-gray-900 h-[250px] lg:h-[550px] !flex items-center justify-center text-site text-6xl'>
          8
        </div>
      </Slider>
      <Slider asNavFor={nav1} ref={slider => (slider2 = slider)} {...settingsSlider2} className='relative p-2'>
        <div className='bg-gray-200 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          1
        </div>
        <div className='bg-gray-300 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          2
        </div>
        <div className='bg-gray-400 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          3
        </div>
        <div className='bg-gray-500 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          4
        </div>
        <div className='bg-gray-600 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          5
        </div>
        <div className='bg-gray-700 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          6
        </div>
        <div className='bg-gray-800 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          7
        </div>
        <div className='bg-gray-900 h-28 !flex items-center justify-center text-site text-6xl scale-90 hover:scale-95 transition-all cursor-pointer'>
          8
        </div>
      </Slider>
    </section>
  );
}

export default IlanSlider;
