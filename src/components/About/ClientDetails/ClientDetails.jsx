'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ClientDetails.module.css';

/**
 * ============================================================================
 * ClientDetails Component - About Page
 * ============================================================================
 * Displays fair practice and business procedures
 * ============================================================================
 */

const ClientDetails = () => {
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
          <span className={styles.subtitle}>Client Details</span>
          <h2 className={styles.title}>
            Our Fair Practice & Procedure of Business
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className={styles.content}>
          {/* Left Box - Text */}
          <motion.div
            className={styles.textBox}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.paragraph}>
              <span className={styles.number}>1.</span> Every client's details
              are carefully noted in our records. We issue a proper service
              receipt to the client stating name, car no., parking lot number,
              cleaning options, contact details, etc. (A sample copy of which is
              attached herewith for reference).
            </p>
            <p className={styles.paragraph}>
              <span className={styles.number}>2.</span> After the car cleaning
              service is completed for a particular month, we issue a proper
              pre-printed cash receipt with a serial number, date, and complete
              details of the client as proof of service (A sample copy of which
              is attached herewith for reference).
            </p>
          </motion.div>

          {/* Right Box - Images */}
          <motion.div
            className={styles.imagesBox}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.imageGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/clientDetailsImage1.png"
                  alt="Client details form"
                  width={350}
                  height={280}
                  className={styles.image}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/clientDetailsImage2.png"
                  alt="Cash receipt sample"
                  width={350}
                  height={280}
                  className={styles.image}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientDetails;
