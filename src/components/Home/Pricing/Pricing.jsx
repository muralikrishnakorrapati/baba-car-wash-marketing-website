'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/UI';
import styles from './Pricing.module.css';

const plans = [
  {
    id: 1,
    title: 'One Time Wash',
    price: '20',
    currency: 'AED',
    subtitle: 'Available only',
    features: [],
    highlight: false,
  },
  {
    id: 2,
    title: 'Once A Week',
    sedanPrice: '60',
    suvPrice: '80',
    currency: 'AED',
    subtitle: '4-5 washes a month',
    features: ['SEDAN CAR', '4*4 CARS'],
    highlight: false,
  },
  {
    id: 3,
    title: 'Thrice A Week',
    sedanPrice: '100',
    suvPrice: '120',
    currency: 'AED',
    subtitle: '12-14 washes a month',
    features: ['SEDAN CAR', '4*4 CARS'],
    highlight: true,
  },
  {
    id: 4,
    title: 'Six Times A Week',
    sedanPrice: '150',
    suvPrice: '170',
    currency: 'AED',
    subtitle: '26 washes a month',
    features: ['SEDAN CAR', '4*4 CARS'],
    highlight: false,
  },
  {
    id: 5,
    title: 'Mobile Carwash',
    sedanPrice: '35',
    suvPrice: '45',
    currency: 'AED',
    subtitle: 'On Demand',
    features: ['SEDAN CAR', '4*4 CARS'],
    highlight: false,
  },
];

const Pricing = () => {
  const router = useRouter();

  return (
    <section className={styles.section}>
      {/* CTA Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <h2 className={styles.bannerTitle}>
            HOUSE CLEANING SERVICES OFFERED
          </h2>
          <Button
            variant="outline"
            className={styles.bannerButton}
            onClick={() => router.push('/appointment')}
          >
            Get A Quote
          </Button>
        </div>
      </div>

      <div className={styles.container} id="pricing-plans">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Washing Price</span>
          <h2 className={styles.title}>Choose Your Plan</h2>
          <p className={styles.description}>
            The following are our standard monthly rates and packages.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`${styles.card} ${
                plan.highlight ? styles.highlight : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className={styles.planTitle}>{plan.title}</h3>

              {plan.price ? (
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>{plan.currency}</span>
                  <span className={styles.price}>{plan.price}</span>
                </div>
              ) : (
                <div className={styles.multiPrice}>
                  <div className={styles.priceRow}>
                    <span className={styles.carType}>SEDAN CAR</span>
                    <div className={styles.priceWrapperSmall}>
                      <span className={styles.currencySmall}>
                        {plan.currency}
                      </span>
                      <span className={styles.priceSmall}>
                        {plan.sedanPrice}
                      </span>
                    </div>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.carType}>4*4 CARS</span>
                    <div className={styles.priceWrapperSmall}>
                      <span className={styles.currencySmall}>
                        {plan.currency}
                      </span>
                      <span className={styles.priceSmall}>{plan.suvPrice}</span>
                    </div>
                  </div>
                </div>
              )}

              <p className={styles.planSubtitle}>{plan.subtitle}</p>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className={styles.button}
                fullWidth
                onClick={() => router.push('/appointment')}
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
