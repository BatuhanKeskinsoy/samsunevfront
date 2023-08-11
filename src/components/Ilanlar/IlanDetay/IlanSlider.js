import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from 'react-slick';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

function IlanSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    { url: '/ilanlar/ilan1.jpg', title: 'Resim 1' },
    { url: '/ilanlar/ilan2.jpg', title: 'Resim 2' },
    { url: '/ilanlar/ilan3.jpg', title: 'Resim 3' },
    { url: '/ilanlar/ilan4.jpg', title: 'Resim 4' },
    { url: '/ilanlar/ilan5.jpg', title: 'Resim 5' },
    { url: '/ilanlar/ilan6.jpg', title: 'Resim 6' },
    { url: '/ilanlar/ilan7.jpg', title: 'Resim 7' },
    { url: '/ilanlar/ilan8.jpg', title: 'Resim 8' }
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };


  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  let slider1, slider2;

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="custom-arrow next-arrow absolute right-0 h-full top-0 flex justify-center items-center bg-black/50 hover:bg-site/50 transition-all px-3 z-10 text-white"
      onClick={onClick}>
      <BsChevronRight size={32} />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="custom-arrow prev-arrow absolute left-0 h-full top-0 flex justify-center items-center bg-black/50 hover:bg-site/50 transition-all px-3 z-10 text-white"
      onClick={onClick}>
      <BsChevronLeft size={32} />
    </button>
  );

  const settingsSlider1 = {
    arrows: true,
    dots: false,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: 'slick-dots custom-dots',
  };

  const settingsSlider2 = {

    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: images.length < 6 ? images.length : images.length - 2,
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
    <section id='IlanDetaySlider' className='rounded-lg overflow-hidden shadow-sm'>

      {lightboxIndex !== null && (
        <Lightbox
          images={images.map(img => ({ url: img.url, title: img.title }))}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}

      <Slider asNavFor={nav2} ref={slider => (slider1 = slider)} {...settingsSlider1} className='relative h-[250px] lg:h-[550px] rounded-lg overflow-hidden'>

        {images.map((image, index) => (
          <div className='h-[250px] lg:h-[550px] relative cursor-zoom-in'>
            <Image
              key={index}
              fill
              src={image.url}
              alt={image.title}
              title={image.title}
              className='object-cover object-center'
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}


      </Slider>
      <Slider asNavFor={nav1} ref={slider => (slider2 = slider)} {...settingsSlider2} className='relative py-2'>
        {images.map((image, index) => (
          <div className='h-28 scale-90 hover:scale-95 transition-all cursor-pointer relative overflow-hidden rounded-lg'>
            <Image
              key={index}
              fill
              src={image.url}
              alt={image.title}
              title={image.title}
              className='object-cover object-center'
            /* onClick={() => openLightbox(index)} */ // Tıklanınca lighbox açılsın istiyosan aç
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default IlanSlider;
