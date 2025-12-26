'use client';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './TopBar.module.css';
import { ThemeSwitcher } from '@/components/UI';

export default function TopBar({ onToggleMenu, isMenuOpen }) {
  return (
    <motion.div
      className={styles.topBar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Business Name */}
      <motion.div
        className={styles.businessName}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        BABA CAR WASHING & CLEANING L.L.C
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        className={styles.menuButton}
        onClick={onToggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Actions Section */}
      <motion.div
        className={styles.actions}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <ThemeSwitcher />
      </motion.div>
    </motion.div>
  );
}
