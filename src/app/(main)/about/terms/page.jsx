'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function AboutTermsPage() {
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
            Terms and Conditions
          </motion.h1>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className={styles.termsSection}>
        <div className={styles.termsContainer}>
          {/* Section Header */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.subtitle}>About Our Company</span>
            <h2 className={styles.title}>Terms and Conditions</h2>
          </motion.div>

          <div className={styles.termsBox}>
            <ol className={styles.termsList}>
              <li>
                Car washing shall be conducted during convenient hours of the
                customer or schedule agreed by the customer.
              </li>
              <li>
                We maintain hygienically clean materials such as cleaning
                liquids, soft and medium-soft cloth towels which will not harm
                the car body or the outer surface of the car which enhances the
                shiny look of the car.
              </li>
              <li>
                The cars will be washed only if they are parked at the
                designated parking spaces as mentioned above.
              </li>
              <li>
                Baba Car Washing & Cleaning L.L.C (BCWC) shall not be
                responsible for any items missing from cars when left unlocked.
              </li>
              <li>
                BCWC shall not be responsible for any damages (or) failures
                caused by vandalism and acts of nature.
              </li>
              <li>The service will commence upon the agreed date.</li>
              <li>
                The contract can be terminated by the party after giving 30 days
                of verbal/ written notice.
              </li>
              <li>
                A typical car wash consists of the following:
                <ul className={styles.subList}>
                  <li>
                    <strong>a.</strong> Car body and windows will be free of any
                    removable stains, spots, fingerprints, dust, bird residue,
                    etc.
                  </li>
                  <li>
                    <strong>b.</strong> Tires to be free from dirt, dust, and
                    grease including alloy wheels.
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div className={styles.additionalNote}>
            <p>
              Keeping the car surrounding area tidy and free from cleaning
              residues, excess water and other waste/dirt.
            </p>
          </div>

          <div className={styles.disclaimer}>
            <h2>General Terms</h2>
            <p>
              By using our services, you agree to comply with and be bound by
              the following terms and conditions. Please review these terms
              carefully.
            </p>

            <h3>Service Agreement</h3>
            <p>
              All services are provided subject to availability and acceptance
              by BABA Car Washing & Cleaning L.L.C. We reserve the right to
              refuse service to anyone for any reason at any time.
            </p>

            <h3>Payment Terms</h3>
            <p>
              Payment is due upon completion of services unless otherwise agreed
              in writing. We accept various forms of payment including cash,
              credit cards, and bank transfers.
            </p>

            <h3>Liability</h3>
            <p>
              While we take utmost care in providing our services, BABA Car Wash
              is not liable for any pre-existing damage to vehicles or damage
              caused by circumstances beyond our control.
            </p>

            <h3>Privacy</h3>
            <p>
              Your privacy is important to us. Any personal information
              collected during the booking or service process will be used
              solely for the purpose of providing our services and will not be
              shared with third parties without your consent.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms and conditions at any
              time. Changes will be effective immediately upon posting on our
              website.
            </p>

            <h3>Contact Information</h3>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us through our contact page or customer service line.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
