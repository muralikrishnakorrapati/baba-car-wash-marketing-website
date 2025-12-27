'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './StaffTraining.module.css';

/**
 * ============================================================================
 * StaffTraining Component
 * ============================================================================
 * Displays staff training hierarchy and information
 * ============================================================================
 */

const StaffTraining = () => {
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
          <span className={styles.subtitle}>About Training</span>
          <h2 className={styles.title}>Staff Training</h2>
        </motion.div>

        {/* Training Content */}
        <motion.div
          className={styles.trainingBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Hierarchy Diagram */}
          <div className={styles.hierarchy}>
            {/* Manager */}
            <div className={styles.hierarchyLevel}>
              <div className={`${styles.hierarchyItem} ${styles.manager}`}>
                Manager
              </div>
              <ArrowDown size={24} className={styles.arrow} strokeWidth={3} />
            </div>

            {/* Office Staffs */}
            <div className={styles.hierarchyLevel}>
              <div className={`${styles.hierarchyItem} ${styles.officeStaff}`}>
                Office Staffs
              </div>
              <div className={styles.staffSplit}>
                <div className={styles.splitItem}>
                  <span>Drivers</span>
                </div>
                <div className={styles.splitItem}>
                  <span>Supervisors</span>
                </div>
              </div>
              <ArrowDown size={24} className={styles.arrow} strokeWidth={3} />
            </div>

            {/* Cleaning Staffs */}
            <div className={styles.hierarchyLevel}>
              <div
                className={`${styles.hierarchyItem} ${styles.cleaningStaff}`}
              >
                Cleaning Staffs
              </div>
            </div>
          </div>

          {/* Training Description */}
          <div className={styles.description}>
            <p>
              We give train to the cleaner based upon climate. For new
              employees, we are giving 1-month training under senior employees.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffTraining;
