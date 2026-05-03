/* Heroセクションコンポーネント */
import Image from 'next/image';
import { FiSmile } from 'react-icons/fi';
import Badge from '@/components/ui/Badge';
import { siteInfo, profile } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      {/* 左側：テキストエリア */}
      <div className={styles.content}>
        <div className={styles.heroBadge}>
          <FiSmile size={16} />
          WELCOME TO MY PORTFOLIO
        </div>
        <h1 className={styles.heading}>
          {siteInfo.heroHeading}
          <br />
          <span className={styles.headingHighlight}>{siteInfo.heroHighlight}</span>
          {siteInfo.heroSuffix}
        </h1>
        <p className={styles.description}>{siteInfo.description}</p>
      </div>

      {/* 右側：プロフィール写真エリア */}
      <div className={styles.imageArea}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageDecoPink} />
          <div className={styles.imageDecoLavender} />
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={320}
            height={320}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
