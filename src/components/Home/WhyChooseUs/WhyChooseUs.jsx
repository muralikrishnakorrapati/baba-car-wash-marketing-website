'use client';

import { motion } from 'framer-motion';
import {
  Shirt,
  Handshake,
  Settings,
  FileText,
  HeartHandshake,
} from 'lucide-react';
import { Button } from '@/components/UI';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    id: 1,
    icon: Shirt,
    text: 'Our workers are well trained.',
  },
  {
    id: 2,
    icon: Handshake,
    text: 'Our workers are good mannered.',
  },
  {
    id: 3,
    icon: Settings,
    text: 'Our equipments are properly handled.',
  },
  {
    id: 4,
    icon: FileText,
    text: 'We provide proper identification cards.',
  },
  {
    id: 5,
    icon: HeartHandshake,
    text: 'We take care of proper disposal.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      {/* Main Content */}
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Leading Washing Company</span>
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.description}>
            Our goal is to provide affordable and quality car cleaning services
            as per customer's convenience and satisfaction.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className={styles.item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={48} className={styles.icon} />
                </div>
                <p className={styles.itemText}>{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
