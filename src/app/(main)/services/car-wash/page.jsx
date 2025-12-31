'use client';

import { motion } from 'framer-motion';
import {
  Droplets,
  SprayCanIcon,
  Sparkles,
  Wind,
  Gauge,
  ShieldCheck,
  CheckCircle,
  Car,
} from 'lucide-react';
import { BookingForm } from '@/components/BookingForm';
import styles from './page.module.css';
import Image from 'next/image';

export default function CarWashPage() {
  const cleaningTypes = [
    {
      icon: <Wind size={48} />,
      title: 'Dust Removal',
      description: 'Thorough dust removal from all exterior surfaces',
    },
    {
      icon: <Droplets size={48} />,
      title: 'Body Wash',
      description: 'Complete body wash with premium cleaning products',
    },
    {
      icon: <Sparkles size={48} />,
      title: 'Glass Cleaning',
      description: 'Crystal clear glass cleaning for maximum visibility',
    },
    {
      icon: <Gauge size={48} />,
      title: 'Wheels Cleaning',
      description: 'Deep cleaning of wheels and alloy rims',
    },
    {
      icon: <ShieldCheck size={48} />,
      title: 'Tire Polishing',
      description: 'Professional tire polishing for a complete finish',
    },
  ];

  const methodSteps = [
    {
      number: '1',
      text: 'The water-based product is sprayed onto the surface, allowing the soaps and special lubricants to liquefy and dissolve dirt on contact.',
    },
    {
      number: '2',
      text: 'Microfiber towels are then used to clean the surface and soak up the liquefied dirt. The second clean microfiber towel is for buffing giving the car a good wax-like shine. The use of a second microfiber towel ensures there are no wax smearing on windows and no white residue on rubber trim.',
    },
    {
      number: '3',
      text: 'For each car, we use up to four microfiber cloths to wipe off the solution from the body, mirrors, and tires of the car.',
    },
  ];

  const processSteps = [
    {
      number: 1,
      image: '/image1.avif',
      text: 'Make sure vehicle is in a shaded area.',
    },
    {
      number: 2,
      image: '/image2.avif',
      text: 'Have two clean, microfiber towels.',
    },
    {
      number: 3,
      image: '/image3.avif',
      text: 'Shake bottle of Auto Wash.',
    },
    {
      number: 4,
      image: '/image4.avif',
      text: 'Spray Auto Wash onto one, folded microfiber towel until moist.',
    },
    {
      number: 5,
      image: '/image1.avif',
      text: 'Spray on a designated surface area of the vehicle.',
    },
    {
      number: 6,
      image: '/image2.avif',
      text: 'Softly wipe the area with moist, folded microfiber towel.',
    },
    {
      number: 7,
      image: '/image3.avif',
      text: 'Immediately wipe off light haze with the second dry, microfiber towel.',
    },
    {
      number: 8,
      image: '/image4.avif',
      text: 'Repeat steps 1-7 until vehicle and rims are cleaned, polished & protected.',
    },
  ];

  const bookingSteps = [
    'The service provider will provide interested customers with a booking form.',
    'Customers wishing to take up a washing plan will duly complete the form and pay the sum as agreed upon.',
    'The service provider shall issue official receipt to the customer for the cash collected against services rendered and a copy of such receipt shall immediately be communicated to the Owner for its records.',
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
            Car Wash & Cleaning
          </motion.h1>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className={styles.servicesOfferedSection}>
        <div className={styles.sectionContainer}>
          {/* Section Header */}
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionSubtitle}>What We Do</span>
            <h2 className={styles.sectionTitle}>Services Offered</h2>
          </motion.div>

          <motion.div
            className={styles.servicesOfferedContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.servicesOfferedText}>
              <div className={styles.purpleBox}>
                <p className={styles.description}>
                  Our service network is spread across one of most of the
                  prestigious residential buildings and complexes and townships
                  around Dubai. We charge as per our agreed terms and conditions
                  for manual car cleaning services in a professionally trained
                  cleaning staff at the convenience of customer's homes and
                  office parking areas. We offer special package rates for our
                  monthly, Weekly contracts in residential buildings and
                  establishments as per mutually agreed terms.
                </p>
              </div>
            </div>
            <div className={styles.servicesOfferedImage}>
              <div className={styles.imageFrame}>
                <Image
                  src="/image1.avif"
                  alt="Car washing service"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Cleaning Section */}
      <section className={styles.typesSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionSubtitle}>We Offer</span>
            <h2 className={styles.sectionTitle}>Types Of Cleaning</h2>
          </motion.div>

          <div className={styles.typesGrid}>
            {cleaningTypes.map((type, index) => (
              <motion.div
                key={index}
                className={styles.typeCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconDiamond}>
                  <div className={styles.iconCircle}>{type.icon}</div>
                </div>
                <div className={styles.typeBox}>
                  <h3 className={styles.typeTitle}>{type.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Method of Statement Section */}
      <section className={styles.methodSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.methodContent}>
            <motion.div
              className={styles.methodImage}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.hexagonImage}>
                <Image
                  src="/image2.avif"
                  alt="Car cleaning method"
                  width={450}
                  height={450}
                  className={styles.image}
                />
              </div>
            </motion.div>

            <motion.div
              className={styles.methodText}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.methodTitle}>Method of Statement</h2>
              <div className={styles.methodBox}>
                {methodSteps.map((step, index) => (
                  <div key={index} className={styles.methodStep}>
                    <span className={styles.stepNumber}>{step.number}.</span>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Is Done Section */}
      <section className={styles.processSection}>
        <div className={styles.processBg}>
          <motion.div
            className={styles.processHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.processTitle}>How It Is Done</h2>
          </motion.div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.processCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={styles.stepBadge}>{step.number}</div>
                <div className={styles.processImageWrapper}>
                  <Image
                    src={step.image}
                    alt={`Step ${step.number}`}
                    width={300}
                    height={200}
                    className={styles.processImage}
                  />
                </div>
                <p className={styles.processText}>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className={styles.bookingProcessSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionSubtitle}>Booking Process</span>
            <h2 className={styles.sectionTitle}>How To Book</h2>
          </motion.div>

          <div className={styles.bookingGrid}>
            {bookingSteps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.bookingCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className={styles.bookingText}>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do Section */}
      <section className={styles.howWeDoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.howWeDoContent}>
            <motion.div
              className={styles.howWeDoText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionSubtitle}>Our Services</span>
              <h2 className={styles.howWeDoTitle}>How We Do?</h2>
              <div className={styles.howWeDoBox}>
                <p className={styles.howWeDoDescription}>
                  <strong>
                    We can wash, polish, and protect an average-sized family car
                    in less than 20 minutes using our water-less car wash
                    formula.
                  </strong>
                </p>
                <p className={styles.howWeDoDescription}>
                  <strong>How do We do?</strong>
                </p>
                <p className={styles.howWeDoDescription}>
                  Unlike traditional car washing methods using a hose or a
                  bucket often damage and scratch the paintwork of your vehicle
                  due to the high salt content of water in the Middle East. This
                  causes rapid oxidation of your vehicle's paintwork. Our car
                  wash does not require water, as we use a special wash and
                  polish technique. Our process uses an exclusive polymer
                  compound that lifts the dirt from the surface of the paint and
                  encapsulates it in a polymer lubricant. We then remove the
                  dirt with a high-quality microfiber cloth and we do this
                  without causing a single scratch on your car. We usually apply
                  a Silicone Free Environ Tire Dresser, which totally
                  revitalizes the luster and the appearance of the tire and
                  seals against traffic film, moisture, and dust.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.howWeDoImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageWhiteFrame}>
                <Image
                  src="/image3.avif"
                  alt="Professional car wash"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className={styles.bookingFormSection}>
        <div className={styles.sectionContainer}>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
