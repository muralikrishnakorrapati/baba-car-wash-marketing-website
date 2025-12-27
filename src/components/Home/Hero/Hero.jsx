'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/UI';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: '/image1.avif',
    title: 'Premium Car Care',
    subtitle: 'Experience the best car wash service in Dubai',
  },
  {
    id: 2,
    image: '/image2.avif',
    title: 'Professional Detailing',
    subtitle: "Restore your car's showroom shine",
  },
  {
    id: 3,
    image: '/image3.avif',
    title: 'Eco-Friendly Wash',
    subtitle: 'Sustainable cleaning solutions for your vehicle',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1, // Keep opacity 1 to avoid fade flicker
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1, // Keep opacity 1
    }),
  };

  return (
    <section className={styles.hero}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={styles.slideContainer}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className={styles.image}
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay} />
        </motion.div>
      </AnimatePresence>

      <div className={styles.contentContainer}>
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className={styles.content}
        >
          <motion.h1
            className={styles.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            className={styles.ctaGroup}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/appointment">
              <Button variant="primary" size="medium">
                Book Now
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="medium"
                className={styles.secondaryBtn}
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ''
            }`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
