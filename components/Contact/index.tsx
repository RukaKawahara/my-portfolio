/* Contactセクションコンポーネント */
import { SiGithub, SiQiita } from 'react-icons/si';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { socialLinks } from '@/data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <SectionHeader
        title="お問い合わせ"
        subtitle="お気軽にご連絡ください"
      />
      <div className={styles.formWrap}>
        <div className={styles.comingSoonBadge}>Coming Soon</div>
        <form className={`${styles.form} ${styles.disabled}`} action="#" method="post">
          {/* お名前・メールアドレス */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">お名前</label>
              <input id="name" name="name" type="text" className={styles.input} placeholder="山田 太郎" disabled />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">メールアドレス</label>
              <input id="email" name="email" type="email" className={styles.input} placeholder="example@mail.com" disabled />
            </div>
          </div>
          {/* 件名 */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">件名</label>
            <input id="subject" name="subject" type="text" className={styles.input} placeholder="お仕事のご相談など" disabled />
          </div>
          {/* メッセージ */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">メッセージ</label>
            <textarea id="message" name="message" className={styles.textarea} placeholder="メッセージを入力してください" rows={5} disabled />
          </div>
          <div className={styles.submitArea}>
            <Button variant="primary" size="lg" disabled>送信する</Button>
          </div>
        </form>
      </div>

      {/* SNSアイコン */}
      <div className={styles.social}>
        <a
          href={socialLinks.github}
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <SiGithub size={22} />
        </a>
        <a
          href={socialLinks.qiita}
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Qiita"
        >
          <SiQiita size={22} />
        </a>
      </div>
    </section>
  );
}
