'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import TopBar from './TopBar/TopBar';
import ContactBar from './ContactBar/ContactBar';
import NavBar from './NavBar/NavBar';

/**
 * ============================================================================
 * <Header /> Component
 * ============================================================================
 *
 * Main navigation header with three sections:
 * 1. Top Bar: Business Name, Theme Switcher
 * 2. Contact Bar: Phone, Email, Location
 * 3. Nav Bar: Categories with dropdown subcategories
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
      <ContactBar />
      <NavBar
        isOpen={isMobileMenuOpen}
        onClose={closeMenu}
        categories={categories}
      />
    </header>
  );
}
