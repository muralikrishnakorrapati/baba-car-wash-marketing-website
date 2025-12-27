'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Home,
  Users,
  Clock,
  Shield,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { BookingForm } from '@/components/BookingForm';
import styles from './page.module.css';

export default function HouseCleaningPage() {
  const cleaningTips = [
    {
      title: 'Cleaning For Guests',
      description:
        '"If you can clean only one room before company arrives, tackle the bathroom. This is the only room where people spend time solo and may have the time and tendency to notice a mess."',
    },
    {
      title: 'Removing Food Odors',
      description:
        '"When your plastic storage containers start to smell like the food that was in them, wash them with hot water and two tablespoons of baking soda."',
    },
    {
      title: 'Dusting Lamp Shades',
      description:
        '"If your vacuum attachment doesn\'t work on cloth lampshades, dust the shades with a lint roller."',
    },
    {
      title: 'Wiping Up',
      description:
        '"Baby wipes are useful for quick surface cleanups in kitchens and bathrooms. They also are great for cleaning up after craft projects."',
    },
    {
      title: 'Removing Stickers',
      description:
        '"To remove stubborn price tags from items like dishes and glassware, use a cotton pad or Q-tip soaked with rubbing alcohol. The alcohol dissolves the sticky glue and doesn\'t mess up manicure."',
    },
    {
      title: 'Eliminating Wax Spills',
      description:
        '"To remove hardened wax from fabric, place a paper towel or a brown paper bag on top of the wax and press with an iron on low heat. The paper absorbs the wax, and your iron stays clean."',
    },
  ];

  const features = [
    {
      icon: <Home size={40} />,
      title: 'Professional Team',
      description: 'Trained and experienced cleaning professionals',
    },
    {
      icon: <Clock size={40} />,
      title: 'Flexible Scheduling',
      description: 'Service available at your convenient time',
    },
    {
      icon: <Shield size={40} />,
      title: 'Quality Assured',
      description: '100% satisfaction guarantee on all services',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Eco-Friendly Products',
      description: 'Safe and environmentally friendly cleaning solutions',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            House <span className={styles.highlight}>Cleaning</span>
          </motion.h1>
        </div>
      </section>

      {/* Saibaba Cleaning Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionSubtitle}>Services</span>
            <h2 className={styles.sectionTitle}>Saibaba Cleaning Services</h2>
          </motion.div>

          <motion.div
            className={styles.servicesBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className={styles.servicesText}>
              Dubai is known for its luxury infrastructure and maintains this
              reputation around the world. These standards are noted all over be
              it homes, shopping malls, offices, and commercial schools. To
              maintain these five-star standards there is one important factor
              cleanness and that's where we come in.
            </p>
            <p className={styles.servicesText}>
              Many ex-pats in Dubai find it really hard to do the cleaning in
              their homes not that they can't but because time is very limited.
              Being in a city where there are tones of things to do, places to
              visit enjoy some fun time with family & friends but all you have
              is only weekends and surely you cant spend the only free time you
              have on moping and cleaning the house. But despite these a clean
              environment in your house must be maintained and we are here to
              give you a hand.
            </p>
            <p className={styles.servicesText}>
              Here's where <strong>babagroup cleaning service</strong> comes in.
              We are at babagroup.ae offers you professionally trained cleaners
              to make your house sparkling clean. we provide services to all of
              the Dubai areas from Dubai Marina to Dubai silicon oasis. Just
              make a call at (+971) 508091289 and your trained professional
              cleaners In Dubai will be at your doors step to make your day
              easier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
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

      {/* Cleaning Tips Section */}
      <section className={styles.tipsSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.tipsTitle}>Cleaning Tips</h2>
          </motion.div>

          <motion.div
            className={styles.tipsBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {cleaningTips.map((tip, index) => (
              <div key={index} className={styles.tipItem}>
                <div className={styles.tipHeader}>
                  <Lightbulb size={20} className={styles.tipIcon} />
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                </div>
                <p className={styles.tipDescription}>{tip.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionSubtitle}>Why Choose Us</span>
            <h2 className={styles.sectionTitle}>
              Professional House Cleaning Services
            </h2>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {[
              'Experienced and vetted cleaning professionals',
              'Customized cleaning plans for your needs',
              'Use of eco-friendly cleaning products',
              'Flexible scheduling including weekends',
              'Competitive pricing with no hidden fees',
              'Complete insurance coverage for your peace of mind',
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle2 className={styles.checkIcon} size={24} />
                <span className={styles.benefitText}>{benefit}</span>
              </motion.div>
            ))}
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
          <h2 className={styles.ctaTitle}>Ready for a Sparkling Clean Home?</h2>
          <p className={styles.ctaDescription}>
            Let our professional cleaners transform your space. Book your house
            cleaning service today!
          </p>
        </div>
      </section>
    </div>
  );
}
