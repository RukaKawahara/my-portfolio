'use client';

/* ナビゲーションバーコンポーネント（SP：ハンバーガーメニュー） */
import { useState, useEffect } from 'react';
import { siteInfo } from '@/data/portfolio';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* メニュー開閉に合わせてbodyにクラスを付け外し */
  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => { document.body.classList.remove('menu-open'); };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#hero" className={styles.logo}>{siteInfo.name}</a>

          {/* PC用リンク */}
          <div className={styles.links}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </a>
            ))}
          </div>

          {/* ハンバーガーボタン（SP用） */}
          <button
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </nav>

        {/* SP用ドロワーメニュー */}
        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.drawerLink}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      {/* オーバーレイ：headerの外に置くことでheaderより下のz-indexに収まる */}
      {isOpen && (
        <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
}
