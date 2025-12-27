'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

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

  // Navigation menu items with submenus
  const navItems = [
    { id: 'home', label: 'Home', path: '/', submenu: null },
    {
      id: 'about',
      label: 'About Us',
      path: '/about',
      submenu: [
        { label: 'Work Schedules', path: '/about/work-schedules' },
        { label: 'Communities', path: '/about/communities' },
        { label: 'Terms & Conditions', path: '/terms' },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      path: '/services',
      submenu: [
        { label: 'Car Wash & Cleaning', path: '/services/car-wash' },
        { label: 'Mobile Car Wash Service', path: '/services/mobile-car-wash' },
        { label: 'House Cleaning', path: '/services/house-cleaning' },
      ],
    },
    // { id: 'gallery', label: 'Gallery', path: '/gallery', submenu: null },
    { id: 'contact', label: 'Contact Us', path: '/contact', submenu: null },
  ];

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
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className={styles.navItem}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.id)}
                  onMouseLeave={() => item.submenu && handleMouseLeave()}
                >
                  {item.submenu ? (
                    <>
                      <Link
                        href={item.path}
                        className={`${styles.navLink} ${
                          pathname === item.path ||
                          pathname.startsWith(item.path + '/')
                            ? styles.active
                            : ''
                        }`}
                        onClick={onClose}
                      >
                        {item.label}
                        <ChevronDown size={16} className={styles.chevron} />
                      </Link>
                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.div
                            className={styles.submenu}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.path}
                                className={styles.submenuLink}
                                onClick={onClose}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`${styles.navLink} ${
                        pathname === item.path ? styles.active : ''
                      }`}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}

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
