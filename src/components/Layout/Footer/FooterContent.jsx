'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import styles from './Footer.module.css';

const FooterContent = () => {
  const serviceLinks = [
    { name: 'Dust Removal', href: '/services/dust-removal' },
    { name: 'Body Wash', href: '/services/body-wash' },
    { name: 'Glass Cleaning', href: '/services/glass-cleaning' },
    { name: 'Wheel Cleaning', href: '/services/wheel-cleaning' },
    { name: 'Tire Polishing', href: '/services/tire-polishing' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Baba Car Washing & Cleaning L.L.C',
      subtext: 'P.O.Box: 126297, Dubai, UAE',
    },
    {
      icon: Phone,
      text: '(+971) 43556460',
      href: 'tel:+97143556460',
    },
    {
      icon: Mail,
      text: 'customerregistartion@babagroup.ae',
      href: 'mailto:customerregistartion@babagroup.ae',
    },
  ];

  return (
    <div className={styles.content}>
      {/* Quick Links - Left */}
      <motion.div
        className={styles.linksSection}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h3 className={styles.sectionTitle}>Quick Links</h3>
        <ul className={styles.linkList}>
          {quickLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={link.href} className={styles.link}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Logo and Business Info - Center */}
      <motion.div
        className={styles.centerSection}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo.svg"
              alt="Baba Car Wash Logo"
              width={220}
              height={56}
              className={styles.logo}
            />
          </Link>
        </motion.div>
        <motion.h3
          className={styles.businessName}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          BABA CAR WASHING & CLEANING L.L.C
        </motion.h3>

        {/* Contact Information */}
        <motion.div
          className={styles.contactList}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const content = (
              <motion.div
                className={styles.contactItem}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Icon className={styles.contactIcon} size={18} />
                <div className={styles.contactText}>
                  <span className={styles.contactMain}>{contact.text}</span>
                  {contact.subtext && (
                    <span className={styles.contactSub}>{contact.subtext}</span>
                  )}
                </div>
              </motion.div>
            );

            return contact.href ? (
              <Link
                key={index}
                href={contact.href}
                className={styles.contactLink}
              >
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `${0.7 + index * 0.05}s` }}
              >
                <Icon size={20} />
                <span className={styles.srOnly}>{social.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Services - Right */}
      <motion.div
        className={styles.policySection}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h3 className={styles.sectionTitle}>Services</h3>
        <ul className={styles.policyList}>
          {serviceLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={link.href} className={styles.policyLink}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default FooterContent;
