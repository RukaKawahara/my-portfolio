/* Aboutセクションコンポーネント */
import { siteInfo } from '@/data/portfolio';
import styles from './About.module.css';

/* 特徴カードデータ */
const features = [
  { icon: '✦', label: 'Clean Code', color: 'var(--color-primary)' },
  { icon: '✧', label: 'Modern UI', color: 'var(--color-secondary)' },
  { icon: '✦', label: 'Team Player', color: 'var(--color-tertiary)' },
  { icon: '✧', label: 'Growth', color: 'var(--color-on-primary-container)' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        {/* 左側：自己紹介テキスト */}
        <div className={styles.textArea}>
          <h2 className={styles.title}>{siteInfo.aboutTitle}</h2>
          {siteInfo.aboutBody.map((text, i) => (
            <p key={i} className={styles.paragraph}>
              {text}
            </p>
          ))}
        </div>

        {/* 右側：特徴カード×4 */}
        <div className={styles.cardGrid}>
          {features.map((f) => (
            <div key={f.label} className={styles.featureCard}>
              <span className={styles.featureIcon} style={{ color: f.color }}>
                {f.icon}
              </span>
              <span className={styles.featureLabel}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
