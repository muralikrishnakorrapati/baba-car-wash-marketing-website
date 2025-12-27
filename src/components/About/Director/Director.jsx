'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import styles from './Director.module.css';

/**
 * ============================================================================
 * Director Component - About Page
 * ============================================================================
 * Displays managing director information and marketing plan
 * ============================================================================
 */

const Director = () => {
  return (
    <section className={styles.section}>
      {/* Director Info */}
      <div className={styles.directorContainer}>
        <motion.div
          className={styles.directorInfo}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.directorName}>RAJESHWER RAO</h2>
          <div className={styles.divider} />
          <p className={styles.directorTitle}>Managing Director</p>
        </motion.div>
      </div>

      {/* Marketing Plan Section */}
      <div className={styles.marketingSection}>
        <div className={styles.overlay} />
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.marketingHeader}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.subtitle}>Marketing Plan</span>
          </motion.div>

          <motion.div
            className={styles.iconWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.icon}>
              <TrendingUp size={48} strokeWidth={2} />
            </div>
          </motion.div>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our staff is well trained to deal with customers with due respect
            for their car wash needs. During the course of services in various
            premises, they regularly meet new customers those who are interested
            in our services. Our services are well demonstrated and explained to
            the customers by our staff in order to meet their specific needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Director;
