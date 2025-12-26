'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import TopBar from './TopBar/TopBar';
import NavBar from './NavBar/NavBar';

/**
 * ============================================================================
 * <Header /> Component
 * ============================================================================
 *
 * Main navigation header with two sections:
 * 1. Top Bar: Logo, Theme Switcher, Search, Login
 * 2. Nav Bar: Categories with dropdown subcategories
 *
 * Features:
 * - Sticky positioning
 * - Animated dropdowns with framer-motion
 * - Theme-aware colors
 * - Responsive design
 * - Hover effects
 *
 * ============================================================================
 */

export default function Header({ categories = [] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <TopBar onToggleMenu={toggleMenu} isMenuOpen={isMobileMenuOpen} />
      <NavBar
        isOpen={isMobileMenuOpen}
        onClose={closeMenu}
        categories={categories}
      />
    </header>
  );
}
