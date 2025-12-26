'use client';

import { motion } from 'framer-motion';
import { HandCoins, Award, UserCheck, GitBranch } from 'lucide-react';
import styles from './Values.module.css';

const values = [
  {
    id: 1,
    icon: HandCoins,
    title: 'Convenience',
    description: 'Our services make keeping your vehicles in tip top shape.',
  },
  {
    id: 2,
    icon: Award,
    title: 'Quality',
    description:
      "We wash by hand to ensure that every last spot gets thoroughly cleaned. Anything less isn't good enough.",
  },
  {
    id: 3,
    icon: UserCheck,
    title: 'Experience',
    description:
      'All our employees are fully trained and come with all aspects in cleaning and years of experience.',
  },
  {
    id: 4,
    icon: GitBranch,
    title: 'Flexibility',
    description:
      'Our scheduling is flexible we come to you and work around your personal and corporate schedules.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

const Values = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Our Values</span>
          <h2 className={styles.title}>
            Our Cleaning Staff Is Always Available At Short Notice
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                className={styles.card}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={48} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDescription}>{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
