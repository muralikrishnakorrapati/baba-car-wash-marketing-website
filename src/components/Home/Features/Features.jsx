'use client';

import { motion } from 'framer-motion';
import {
  Tag,
  Award,
  Smile,
  Leaf,
  Users,
  Clock,
  Headphones,
  Truck,
} from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    id: 1,
    icon: Tag,
    title: 'Affordable Price',
    description: 'Get Tour Service Within Affordable Price.',
    color: '#FFD700', // Gold
  },
  {
    id: 2,
    icon: Award,
    title: 'Quality Service',
    description: 'Get A Quality Service.',
    color: '#FFD700',
  },
  {
    id: 3,
    icon: Smile,
    title: 'Customer Satisfaction',
    description: 'Get Customer full Satisfaction.',
    color: '#FFD700',
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use biodegradable products.',
    color: '#FFD700',
  },
  {
    id: 5,
    icon: Users,
    title: 'Expert Team',
    description: 'Professional and experienced staff.',
    color: '#FFD700',
  },
  {
    id: 6,
    icon: Clock,
    title: 'Time Saving',
    description: 'Quick and efficient service delivery.',
    color: '#FFD700',
  },
  {
    id: 7,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to answer your queries.',
    color: '#FFD700',
  },
  {
    id: 8,
    icon: Truck,
    title: 'Mobile Service',
    description: 'We come to your location anywhere.',
    color: '#FFD700',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Features</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className={styles.card}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{feature.title}</h3>
                  <p className={styles.description}>{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
