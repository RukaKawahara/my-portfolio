/* Heroセクションコンポーネント */
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { siteInfo } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      {/* 左側：テキストエリア */}
      <div className={styles.content}>
        <Badge label="WELCOME TO MY PORTFOLIO" color="mint" />
        <h1 className={styles.heading}>
          {siteInfo.heroHeading}
          <br />
          <span className={styles.headingHighlight}>{siteInfo.heroHighlight}</span>
          {siteInfo.heroSuffix}
        </h1>
        <p className={styles.description}>{siteInfo.description}</p>
        <div className={styles.buttons}>
          <Button href="#projects" variant="primary" size="lg">
            プロジェクトを見る
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            お問い合わせ
          </Button>
        </div>
      </div>

      {/* 右側：プロフィール写真エリア */}
      <div className={styles.imageArea}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageDecoPink} />
          <div className={styles.imageDecoLavender} />
          {/* プレースホルダー：実際の写真に差し替え可能 */}
          <div className={styles.imagePlaceholder}>👨‍💻</div>
        </div>
      </div>
    </section>
  );
}
