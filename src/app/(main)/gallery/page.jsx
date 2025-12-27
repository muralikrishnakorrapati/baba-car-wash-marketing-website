'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate array of image numbers (1-14)
  const images = Array.from({ length: 14 }, (_, i) => i + 1);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Our Gallery</h1>
        <p>
          Explore our work through these images. See the quality and care we
          bring to every service.
        </p>
      </div>

      <div className={styles.gallery}>
        {images.map((imageNum, index) => (
          <div
            key={imageNum}
            className={styles.imageCard}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={`/${imageNum}.png`}
              alt={`Gallery image ${imageNum}`}
              width={400}
              height={300}
              loading="lazy"
              quality={85}
            />
            <div className={styles.overlay}>
              <h3>Gallery Image {imageNum}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={`/${selectedImage}.png`}
              alt={`Gallery image ${selectedImage}`}
              width={1200}
              height={900}
              quality={95}
            />
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
            <div className={styles.counter}>
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
