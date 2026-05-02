/* Footerコンポーネント */
import { siteInfo } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>© 2026 {siteInfo.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
