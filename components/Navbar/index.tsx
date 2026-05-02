/* ナビゲーションバーコンポーネント */
import { siteInfo } from '@/data/portfolio';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>{siteInfo.name}</span>
        <div className={styles.links}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
