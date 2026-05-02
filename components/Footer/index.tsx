/* Footerコンポーネント */
import { siteInfo, socialLinks } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>{siteInfo.name}</span>
        <nav className={styles.links}>
          <a href={socialLinks.github} className={styles.link} target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href={socialLinks.linkedin} className={styles.link} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.x} className={styles.link} target="_blank" rel="noopener noreferrer">
            X
          </a>
        </nav>
        <span className={styles.copy}>© 2025 {siteInfo.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
