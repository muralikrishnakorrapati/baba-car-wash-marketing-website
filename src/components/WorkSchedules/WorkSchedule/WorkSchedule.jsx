'use client';

import { motion } from 'framer-motion';
import styles from './WorkSchedule.module.css';

/**
 * ============================================================================
 * WorkSchedule Component
 * ============================================================================
 * Displays work schedule and cleaning plan information
 * ============================================================================
 */

const WorkSchedule = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>About Our Company</span>
          <h2 className={styles.title}>Work Schedule/Cleaning Plan</h2>
        </motion.div>

        {/* Content Box */}
        <motion.div
          className={styles.contentBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            Baba Car wash will operate 24/7 for the convenience and comfort of
            its clients. Our operating hours will be 24 hours from Saturday to
            Friday depending on the number of cars contracted. However, Baba Car
            wash may revise the work timings depending on the demand and number
            of cards contracted.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSchedule;
