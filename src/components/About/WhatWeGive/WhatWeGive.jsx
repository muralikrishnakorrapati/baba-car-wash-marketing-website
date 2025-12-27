'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './WhatWeGive.module.css';

/**
 * ============================================================================
 * WhatWeGive Component - About Page
 * ============================================================================
 * Displays the eco-friendly system features
 * ============================================================================
 */

const features = [
  '1. Unique all-weather cleaning system',
  '2. Utilizing the latest exclusive to use waterless technology',
  '3. Complete bio-degradable and non-toxic product lines',
  '4. No mess, no fuss, no noise operation',
  '5. Fully trained and environmentally aware cleaning technicians',
  '6. Fast and efficient service',
  '7. Cost-effective pricing',
  '8. Professionalism',
  '9. Time-saving',
  '10. Best service',
];

const WhatWeGive = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>What We Give</span>
        </motion.div>

        {/* Content Grid */}
        <div className={styles.content}>
          {/* Features Box */}
          <motion.div
            className={styles.featuresBox}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.title}>
              100% Environmentally Friendly{' '}
              <span className={styles.highlight}>'ECO'</span> System
            </h2>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/image3.avif"
              alt="Professional car wash technician"
              width={600}
              height={800}
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeGive;
