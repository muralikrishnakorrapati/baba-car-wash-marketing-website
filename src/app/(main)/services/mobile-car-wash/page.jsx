'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
} from 'lucide-react';
import { BookingForm } from '@/components/BookingForm';
import styles from './page.module.css';
import Image from 'next/image';

export default function MobileCarWashPage() {
  const features = [
    {
      icon: <MapPin size={32} />,
      title: 'Doorstep Service',
      description: 'We come to your location - home, office, or parking spot',
    },
    {
      icon: <Clock size={32} />,
      title: 'Flexible Timing',
      description: 'Schedule at your convenience, 7 days a week',
    },
    {
      icon: <Shield size={32} />,
      title: 'Professional Team',
      description: 'Trained and certified car wash specialists',
    },
    {
      icon: <Star size={32} />,
      title: 'Premium Products',
      description: 'Eco-friendly and car-safe cleaning materials',
    },
  ];

  const benefits = [
    'Save time - no need to drive to car wash',
    'Convenient scheduling at your preferred time',
    'Professional service with guaranteed quality',
    'Eco-friendly products that protect your car',
    'Weekly, bi-weekly, or custom packages available',
    'Competitive pricing with no hidden charges',
  ];

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
            <div className={styles.badge}>
              <Sparkles size={20} />
              <span>Premium Mobile Service</span>
            </div>
            <h1 className={styles.heroTitle}>Mobile Car Wash Service</h1>
            <p className={styles.heroDescription}>
              Professional car washing brought to your doorstep. Experience
              convenience without compromising on quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionSubtitle}>Why Choose Us</span>
            <h2 className={styles.sectionTitle}>Mobile Car Wash Benefits</h2>
          </motion.div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.benefitsContent}>
            <motion.div
              className={styles.benefitsText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionSubtitle}>Our Promise</span>
              <h2 className={styles.sectionTitle}>What You Get</h2>
              <p className={styles.benefitsDescription}>
                Our mobile car wash service is designed to provide you with the
                ultimate convenience while maintaining the highest standards of
                quality and professionalism.
              </p>

              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className={styles.benefitItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className={styles.checkIcon} size={20} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={styles.benefitsImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src="/image1.avif"
                  alt="Professional mobile car wash service"
                  width={800}
                  height={600}
                  className={styles.image}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className={styles.bookingSection}>
        <div className={styles.sectionContainer}>
          <BookingForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Experience Premium Car Care?
          </h2>
          <p className={styles.ctaDescription}>
            Book your mobile car wash appointment today and let us bring the
            shine to you!
          </p>
        </div>
      </section>
    </div>
  );
}
