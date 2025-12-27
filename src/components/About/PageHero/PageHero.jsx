'use client';

import { motion } from 'framer-motion';
import styles from './PageHero.module.css';

/**
 * ============================================================================
 * PageHero Component
 * ============================================================================
 * A reusable hero section component for internal pages like About, Services, etc.
 * Features:
 * - Background image with overlay
 * - Animated title
 * - Responsive design
 * ============================================================================
 */

const PageHero = ({ title, backgroundImage = '/image4.avif' }) => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageHero;
