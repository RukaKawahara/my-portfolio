/* Aboutセクションコンポーネント */
import { siteInfo, features } from '@/data/portfolio';
import styles from './About.module.css';

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
              <f.icon className={styles.featureIcon} aria-hidden="true" />
              <span className={styles.featureLabel}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
