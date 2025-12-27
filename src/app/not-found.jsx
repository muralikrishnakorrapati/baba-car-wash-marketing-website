import Link from 'next/link';
import { Home, Car, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/UI';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 - Page Not Found | BABA Car Wash',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundText}>404</div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Car className={styles.carIcon} size={100} strokeWidth={1.5} />
          <Sparkles className={styles.sparkle} size={30} />
          <Sparkles className={styles.sparkle2} size={24} />
          <Sparkles className={styles.sparkle3} size={20} />
        </div>

        <h1 className={styles.title}>Oops! Wrong Turn</h1>

        <p className={styles.subtitle}>Error 404</p>

        <p className={styles.description}>
          Looks like this page took a detour! Don't worry, we'll get you back on
          track. While we locate the right page, why not book a premium car
          wash?
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.link}>
            <Button
              variant="primary"
              size="medium"
              className={styles.button}
              leftIcon={<Home size={20} />}
            >
              Back to Home
            </Button>
          </Link>
          <Link href="/contact" className={styles.link}>
            <Button
              variant="secondary"
              size="medium"
              className={styles.button}
              leftIcon={<Phone size={20} />}
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <div className={styles.decoration}>
        <div className={styles.blob} />
        <div className={styles.blob} />
      </div>
    </div>
  );
}
