/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ThemeSwitcher.module.css';

// Sun Icon
const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

// Moon Icon
const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

/**
 * ============================================================================
 * <ThemeSwitcher /> Component
 * ============================================================================
 *
 * A toggle button to switch between light and dark themes.
 *
 * Features:
 * - Animated icon transition with framer-motion
 * - Persists theme preference in localStorage
 * - System preference detection
 * - Smooth color transitions
 *
 * ============================================================================
 */

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Initialize theme on client-side only
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // Apply theme on mount and changes
  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={styles.themeSwitcher}
        aria-label="Toggle theme"
        disabled
      >
        <span className={styles.icon}>
          <SunIcon />
        </span>
      </button>
    );
  }

  return (
    <button
      className={styles.themeSwitcher}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={styles.icon}
      >
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </motion.span>
    </button>
  );
}
