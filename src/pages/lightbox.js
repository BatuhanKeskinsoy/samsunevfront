import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

function LightboxComponent() {
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

    return (
        <div>
            {images.map((image, index) => (
                <Image
                    key={index}
                    width={200}
                    height={200}
                    src={image.url}
                    alt={image.title}
                    title={image.title}
                    onClick={() => openLightbox(index)}
                />
            ))}

            {lightboxIndex !== null && (
                <Lightbox
                    images={images.map(img => ({ url: img.url, title: img.title }))}
                    startIndex={lightboxIndex}
                    onClose={closeLightbox}
                />
            )}
        </div>
    );
}

export default LightboxComponent;
