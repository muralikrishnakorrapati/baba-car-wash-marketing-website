'use client';

import { motion } from 'framer-motion';
import { Clock, Phone, MapPin } from 'lucide-react';
import { BookingForm } from '@/components/BookingForm';
import styles from './page.module.css';

export default function AppointmentPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>Book Your Appointment</h1>
            <p className={styles.heroDescription}>
              Schedule your car wash or cleaning service at your convenience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className={styles.formSection}>
        <div className={styles.sectionContainer}>
          <BookingForm />
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.infoGrid}>
            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Clock className={styles.infoIcon} size={32} />
              <h3 className={styles.infoTitle}>Flexible Timing</h3>
              <p className={styles.infoDescription}>
                We're available 7 days a week from 8:00 AM to 6:00 PM
              </p>
            </motion.div>

            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Phone className={styles.infoIcon} size={32} />
              <h3 className={styles.infoTitle}>Quick Response</h3>
              <p className={styles.infoDescription}>
                We'll confirm your appointment within 2 hours
              </p>
            </motion.div>

            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className={styles.infoIcon} size={32} />
              <h3 className={styles.infoTitle}>Mobile Service</h3>
              <p className={styles.infoDescription}>
                We come to your preferred location anywhere in Dubai
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
