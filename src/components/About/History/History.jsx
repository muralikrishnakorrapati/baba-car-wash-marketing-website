'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './History.module.css';

/**
 * ============================================================================
 * History Component - About Page
 * ============================================================================
 * Displays company history and background information
 * ============================================================================
 */

const History = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>About Our Company</span>
          <h2 className={styles.title}>Our History</h2>
        </motion.div>

        {/* Who We Are Section */}
        <div className={styles.content}>
          {/* Left Image */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/image1.avif"
              alt="Car washing service"
              width={710}
              height={400}
              className={styles.image}
            />
          </motion.div>

          {/* Who We Are Text */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.heading}>Who We Are</h3>
            <p className={styles.description}>
              Baba Car Washing & Cleaning L.L.C is a professional car cleaning
              company established in Dubai, U.A.E registered in Dubai since
              2008. We are having one of the largest car cleaning services
              networks in Dubai with professionally managed staff. Our goal is
              to provide affordable and quality car cleaning services as per
              customer's convenience and satisfaction. Our cleaning staff is
              always available at short notice for giving up-to-date on-time
              service right at the customer's offices, residential premises, and
              parking lots.
            </p>
          </motion.div>
        </div>

        {/* Business History Section */}
        <div className={styles.content}>
          {/* Business History Text */}
          <motion.div
            className={styles.historyBox}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.historyTitle}>Business History</h3>
            <div className={styles.historyList}>
              <p className={styles.historyItem}>
                <span className={styles.number}>1.</span> Our company started
                with 2 employees at the initial stage in the year 2011. Since
                its inception, we developed a strategy in order to satisfy our
                customers by delivering up-to-date and prompt services.
              </p>
              <p className={styles.historyItem}>
                <span className={styles.number}>2.</span> Our dedication and
                consistent efforts have given us an opportunity to grow at
                today's stage. We are proud to announce that, we hold 60
                well-trained staff of employees.
              </p>
              <p className={styles.historyItem}>
                <span className={styles.number}>3.</span> We are proud to say
                that we have developed to a stage of monthly turnover of over
                AED 200,000/- and above. Our existing satisfied customers are
                the crown in our glory of success.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              src="/image2.avif"
              alt="Car detailing service"
              width={890}
              height={597}
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;
