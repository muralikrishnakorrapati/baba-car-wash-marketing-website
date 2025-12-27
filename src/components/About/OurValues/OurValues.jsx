'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  ThumbsUp,
  Award,
  Repeat,
  HandCoins,
  Star,
} from 'lucide-react';
import styles from './OurValues.module.css';

/**
 * ============================================================================
 * OurValues Component - About Page
 * ============================================================================
 * Displays company core values with icons
 * ============================================================================
 */

const values = [
  {
    id: 1,
    title: 'Convenience',
    description: 'Our services make keeping your home clean an easy task.',
    icon: HandCoins,
  },
  {
    id: 2,
    title: 'Quality',
    description:
      "We wash by hand to ensure that every last spot gets throughly cleaned. Anything less isn't good enough.",
    icon: ThumbsUp,
  },
  {
    id: 3,
    title: 'Experience',
    description:
      'All our employees are fully trained and come with all aspects in cleaning and years of experience.',
    icon: Award,
  },
  {
    id: 4,
    title: 'Flexibility',
    description:
      'Our scheduling is flexibe we come to you and work around your personal and corporate schedules.',
    icon: Repeat,
  },
];

const OurValues = () => {
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
          <span className={styles.subtitle}>Our Values</span>
          <h2 className={styles.title}>
            Our Cleaning Staff Is Always Available At Short Notice
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className={styles.grid}>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={48} strokeWidth={2} />
                  {value.id === 3 && (
                    <div className={styles.stars}>
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                  )}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
