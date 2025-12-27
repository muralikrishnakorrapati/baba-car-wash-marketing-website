'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './CommunitiesGrid.module.css';

/**
 * ============================================================================
 * CommunitiesGrid Component
 * ============================================================================
 * Displays the communities served in a grid layout
 * ============================================================================
 */

const communities = [
  {
    id: 1,
    name: 'AL BARSHA',
    image: '/al-barsha.jpg',
  },
  {
    id: 2,
    name: 'AL SUFOUH DUBAI',
    image: '/al-sufouh-dubai.jpg',
  },
  {
    id: 3,
    name: 'CIRCLE-MALL',
    image: '/circle-mall.jpg',
  },
  {
    id: 4,
    name: 'DUBAI MARINA',
    image: '/dubai-marina.jpg',
  },
  {
    id: 5,
    name: 'THE HILLS',
    image: '/the-hills.jpg',
  },
  {
    id: 6,
    name: 'JVT',
    image: '/jvt.jpg',
  },
  {
    id: 7,
    name: 'DUBAI-MARINA',
    image: '/dubai-marina-2.jpg',
  },
  {
    id: 8,
    name: 'NAKHEEL MALL-PALM JUMEIRAH',
    image: '/nakheel-mall-palm-jumeirah.jpg',
  },
];

const CommunitiesGrid = () => {
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
          <span className={styles.subtitle}>About Our Company</span>
          <h2 className={styles.title}>Communities</h2>
        </motion.div>

        {/* Communities Grid */}
        <div className={styles.grid}>
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              className={styles.communityCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={community.image}
                  alt={community.name}
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.nameBar}>
                <h3 className={styles.communityName}>{community.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitiesGrid;
