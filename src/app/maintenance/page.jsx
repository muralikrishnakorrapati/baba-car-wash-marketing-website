'use client';

import { Construction, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/UI';
import styles from './page.module.css';

export default function MaintenancePage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundText}>503</div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Construction className={styles.icon} size={80} strokeWidth={1.5} />
        </div>

        <h1 className={styles.title}>Under Maintenance</h1>

        <p className={styles.description}>
          We are currently performing scheduled maintenance to improve your
          experience. Please check back soon.
        </p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            size="small"
            className={styles.button}
            leftIcon={<RefreshCcw size={18} />}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>

      <div className={styles.decoration}>
        <div className={styles.blob} />
        <div className={styles.blob} />
      </div>
    </div>
  );
}
