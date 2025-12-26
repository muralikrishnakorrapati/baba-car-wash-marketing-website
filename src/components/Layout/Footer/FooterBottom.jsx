'use client';

import { Heart } from 'lucide-react';
import styles from './Footer.module.css';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.bottom}>
      <p className={styles.copyright}>
        © {currentYear} BABA CAR WASHING & CLEANING L.L.C. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBottom;
