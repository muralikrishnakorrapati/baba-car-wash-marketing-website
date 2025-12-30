'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SprayCan, Send } from 'lucide-react';
import { Button } from '@/components/UI';
import styles from './PremiumServices.module.css';

const services = [
  'Dust Removal',
  'Body Wash',
  'Glass Cleaning',
  'Wheels Cleaning',
  'Tire Polishing',
];

const PremiumServices = () => {
  const scrollToPlans = () => {
    const pricingSection = document.getElementById('pricing-plans');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>What We Do</span>
          <h2 className={styles.title}>Premium Washing Services</h2>
          <p className={styles.description}>
            Our service network is spread across one of most of the prestigious
            residential buildings and complexes and townships around Dubai.
          </p>
        </motion.div>

        <div className={styles.contentWrapper}>
          {/* Left Side - Service Card */}
          <motion.div
            className={styles.cardWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Types Of Cleaning</h3>
              <div className={styles.iconWrapper}>
                <SprayCan size={32} className={styles.icon} />
              </div>
              <p className={styles.cardText}>
                We offer special package rates for our monthly, weekly contracts
                in residential buildings.
              </p>
              <ul className={styles.serviceList}>
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className={styles.serviceItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Send size={16} className={styles.arrowIcon} />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
              <Button
                variant="primary"
                className={styles.button}
                onClick={scrollToPlans}
              >
                Get Plans
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/image4.avif"
              alt="Premium Car Interior"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
