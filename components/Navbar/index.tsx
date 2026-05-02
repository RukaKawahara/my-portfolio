/* ナビゲーションバーコンポーネント */
import { siteInfo } from '@/data/portfolio';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo}>{siteInfo.name}</a>
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
