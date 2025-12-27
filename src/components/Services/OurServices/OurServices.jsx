'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OurServices.module.css';

/**
 * ============================================================================
 * OurServices Component - Services Page
 * ============================================================================
 * Displays the main service offerings
 * ============================================================================
 */

const services = [
  {
    id: 1,
    title: 'Car Washing & Cleaning',
    image: '/image1.avif',
    link: '/services/car-washing',
  },
  {
    id: 2,
    title: 'House Cleaning Services',
    image: '/houseCleaningServicesImage.png',
    link: '/services/house-cleaning',
  },
];

const OurServices = () => {
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
          <span className={styles.subtitle}>We Offer</span>
          <h2 className={styles.title}>Our Services</h2>
        </motion.div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={service.link} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={588}
                    height={434}
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardFooter}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
