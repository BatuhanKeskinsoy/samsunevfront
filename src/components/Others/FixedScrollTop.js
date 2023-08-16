import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const FixedScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = window.scrollY / 20;
    const scrollAnimation = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(scrollAnimation);
      } else {
        window.scrollTo(0, 0);
      }
    };

    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      scrollAnimation();
    }
  };

  return (
    <button
      className={`fixed lg:bottom-6 bottom-20 right-6 p-3 lg:text-3xl text-2xl bg-site text-white rounded-full shadow-md z-30 hover:scale-125 transition-all ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default FixedScrollTop;
