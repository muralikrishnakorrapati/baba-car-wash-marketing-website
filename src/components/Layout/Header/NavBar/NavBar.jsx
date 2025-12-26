'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  X,
  User,
  Youtube,
  Facebook,
  Disc,
  Twitter,
  Music,
  ChevronDown,
} from 'lucide-react';
import { ThemeSwitcher, Button } from '@/components/UI';
import styles from './NavBar.module.css';
import { toTitleCase } from '@/utils/helpers/stringUtils';

export default function NavBar({
  isOpen,
  onClose,
  categories: rawCategories = [],
}) {
  const categories = useMemo(() => {
    return rawCategories.map((category) => ({
      id: category.id,
      name: toTitleCase(category.name),
      slug: `/${category.slug}`,
      subCategories: (category.subCategories || []).map((subCat) => ({
        id: subCat.id,
        name: toTitleCase(subCat.name),
        slug: `/${category.slug}/${subCat.slug}`,
      })),
    }));
  }, [rawCategories]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        onClose();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  const handleMouseEnter = (categoryId) => {
    if (window.innerWidth > 768) {
      setActiveDropdown(categoryId);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveDropdown(null);
    }
  };

  const handleMobileClick = (categoryId) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === categoryId ? null : categoryId);
    }
  };

  return (
    <>
      <nav className={`${styles.navBar} ${isOpen ? styles.open : ''}`}>
        {/* Mobile Header (Sticky) */}
        <div className={styles.mobileHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
          <Link href="/" className={styles.mobileLogo} onClick={onClose}>
            <Image
              src="/logo.svg"
              alt="Baba Car Wash Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
          <div className={styles.mobileThemeSwitcher}>
            <ThemeSwitcher />
          </div>
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.navContainer}>
            {/* Desktop Logo - Left */}
            <Link href="/" className={styles.desktopLogo} onClick={onClose}>
              <Image
                src="/logo.svg"
                alt="Baba Car Wash Logo"
                width={140}
                height={36}
                priority
              />
            </Link>

            <ul className={styles.navList}>
              {/* Home Link */}
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/" className={styles.navLink} onClick={onClose}>
                  Home
                </Link>
              </motion.li>

              {/* About Us Link */}
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/about"
                  className={styles.navLink}
                  onClick={onClose}
                >
                  About Us
                </Link>
              </motion.li>

              {/* Services Link */}
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/services"
                  className={styles.navLink}
                  onClick={onClose}
                >
                  Services
                </Link>
              </motion.li>

              {/* Gallery Link */}
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/gallery"
                  className={styles.navLink}
                  onClick={onClose}
                >
                  Gallery
                </Link>
              </motion.li>

              {/* Contact Us Link */}
              <motion.li
                className={styles.navItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/contact"
                  className={styles.navLink}
                  onClick={onClose}
                >
                  Contact Us
                </Link>
              </motion.li>
              {/* Login Button */}
              <li className={`${styles.navItem} ${styles.signInButton}`}>
                <Button
                  variant="primary"
                  size="small"
                  shape="soft"
                  btnColor="var(--color-secondary)"
                >
                  Sign In
                </Button>
              </li>
            </ul>

            {/* Mobile Footer Section */}
            <div className={styles.mobileFooter}>
              <Button size="medium" variant="secondary" fullWidth>
                Sign In
              </Button>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <Youtube size={20} />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Facebook size={20} />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Disc size={20} />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Twitter size={20} />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Music size={20} />
                </a>
              </div>

              <div className={styles.footerLinks}>
                <div className={styles.footerRow}>
                  <Link href="/privacy" onClick={onClose}>
                    Privacy Policy
                  </Link>
                  <span>|</span>
                  <Link href="/terms" onClick={onClose}>
                    Terms and Conditions
                  </Link>
                  <span>|</span>
                  <Link href="/faqs" onClick={onClose}>
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
