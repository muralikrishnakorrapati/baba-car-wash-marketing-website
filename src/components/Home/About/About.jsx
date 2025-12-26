'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Text Content - Left */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>About Our Company</span>
              <h2 className={styles.title}>
                Largest Car Cleaning Services Network
              </h2>
            </div>

            <div className={styles.description}>
              <p>
                Baba Car Washing & Cleaning L.L.C is a professional car cleaning
                company established in Dubai, U.A.E registered in Dubai since
                2008. We are having one of the largest car cleaning services
                networks in Dubai with professionally managed staff.
              </p>
            </div>

            <div className={styles.servicesList}>
              <ol>
                <li>
                  Mobile car wash facility available now (anywhere in Dubai)
                  <ul>
                    <li>Sedan car (Internal & External - One Time)</li>
                    <li>4x4 car (Internal & External - One Time)</li>
                    <li>
                      The monthly facility is also available, for details call
                      us (+971)508091289 or email us
                      customerregistartion@babagroup.ae
                    </li>
                  </ul>
                </li>
                <li>
                  Card payment facility is available at service delivery
                  location now.
                </li>
              </ol>
            </div>

            <div className={styles.contactInfo}>
              <span className={styles.callLabel}>Call For Booking : </span>
              <a href="tel:+971552411075" className={styles.phoneNumber}>
                (+971) 552411075
              </a>
            </div>

            <div className={styles.ctaWrapper}>
              <Link href="/about">
                <Button variant="primary" size="medium">
                  Read More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageContainer}>
              <Image
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
                alt="Car Cleaning Service"
                fill
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageBorder} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
