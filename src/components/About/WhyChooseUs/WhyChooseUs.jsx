'use client';

import { motion } from 'framer-motion';
import {
  ShirtIcon,
  Handshake,
  Dumbbell,
  FileText,
  Heart,
  Star,
} from 'lucide-react';
import styles from './WhyChooseUs.module.css';

/**
 * ============================================================================
 * WhyChooseUs Component - About Page
 * ============================================================================
 * Displays reasons to choose the company with icons
 * ============================================================================
 */

const reasons = [
  {
    id: 1,
    icon: ShirtIcon,
    description:
      'Our workers are well trained to clean the cars properly wearing scratch-free uniforms.',
  },
  {
    id: 2,
    icon: Handshake,
    description:
      'Our workers are well trained, well mannered and good conduct in dealing with the clients and are tasked to discharge their duties up to full satisfaction of the clients.',
  },
  {
    id: 3,
    icon: Dumbbell,
    description:
      'Our equipment is properly handled to ensure that we will not cause any sort of inconvenience to the customers.',
  },
  {
    id: 4,
    icon: FileText,
    description:
      'We provide proper Identification Cards, Passport, and Labour Card copies of the baba car washers in serviceable areas.',
  },
  {
    id: 5,
    icon: Heart,
    description:
      'We take care of proper disposal of the waste in the nearest waste/garbage collection bins and take immense care so that no liquid wastes are left behind in the service area. Our staffs are responsible to clean the serviceable area.',
  },
];

const WhyChooseUs = () => {
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
          <span className={styles.subtitle}>Leading Washing Company</span>
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.description}>
            Our goal is to provide affordable and quality car cleaning services
            as per customer's convenience and satisfaction.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className={styles.grid}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                className={styles.reasonCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={50} strokeWidth={1.5} />
                  {/* {reason.id === 3 && (
                    <div className={styles.stars}>
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                  )} */}
                </div>
                <p className={styles.reasonText}>{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
