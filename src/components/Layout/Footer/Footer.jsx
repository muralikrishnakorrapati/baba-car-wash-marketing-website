'use client';

import styles from './Footer.module.css';
import FooterContent from './FooterContent';
import FooterBottom from './FooterBottom';

/**
 * ============================================================================
 * <Footer /> Component
 * ============================================================================
 *
 * Elegant footer with two main sections:
 * 1. About: Brand logo, description, and social links
 * 2. Quick Links: Essential navigation links
 *
 * Features:
 * - Clean, minimal design
 * - Responsive flexbox layout
 * - Theme-aware colors
 * - Smooth hover transitions
 * - Social media integration
 *
 * ============================================================================
 */

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
