'use client';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ContactBar.module.css';

export default function ContactBar() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      text: '(+971) 43556460',
      href: 'tel:+97143556460',
    },
    {
      icon: Mail,
      label: 'Mail Us',
      text: 'customerregistartion@babagroup.ae',
      href: 'mailto:customerregistartion@babagroup.ae',
    },
    {
      icon: MapPin,
      label: 'Locate Us',
      text: 'Dubai, UAE',
      href: '#',
    },
    {
      icon: Clock,
      label: '24 Hours',
      text: 'Open 24/7',
      href: '#',
    },
  ];

  return (
    <motion.div
      className={styles.contactBar}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
    >
      <div className={styles.contactContainer}>
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.label}
              className={styles.contactItem}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            >
              <Link href={contact.href} className={styles.contactLink}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} size={20} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.label}>{contact.label}</span>
                  <span className={styles.text}>{contact.text}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
