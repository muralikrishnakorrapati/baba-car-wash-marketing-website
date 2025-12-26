import Link from 'next/link';
import { Home, SearchX } from 'lucide-react';
import { Button } from '@/components/UI';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 - Page Not Found',
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
          <SearchX className={styles.icon} size={80} strokeWidth={1.5} />
        </div>

        <h1 className={styles.title}>Page Not Found</h1>

        <p className={styles.description}>
          Oops! The page you are looking for seems to have wandered off into the
          digital void.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.link}>
            <Button
              variant="primary"
              size="small"
              className={styles.button}
              leftIcon={<Home size={18} />}
            >
              Back to Home
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
