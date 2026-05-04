'use client';
/* Contactセクションコンポーネント */
import { useRef } from 'react';
import { SiGithub, SiQiita } from 'react-icons/si';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { socialLinks } from '@/data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name    = nameRef.current?.value ?? '';
    const email   = emailRef.current?.value ?? '';
    const subject = subjectRef.current?.value ?? '';
    const message = messageRef.current?.value ?? '';

    const body = `お名前：${name}\nメールアドレス：${email}\n\n${message}`;
    const mailto = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className={styles.section}>
      <SectionHeader
        title="お問い合わせ"
        subtitle="お気軽にご連絡ください"
      />
      <div className={styles.formWrap}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* お名前・メールアドレス */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">お名前</label>
              <input ref={nameRef} id="name" name="name" type="text" className={styles.input} placeholder="山田 太郎" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">メールアドレス</label>
              <input ref={emailRef} id="email" name="email" type="email" className={styles.input} placeholder="example@mail.com" autoComplete="email" required />
            </div>
          </div>
          {/* 件名 */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">件名</label>
            <input ref={subjectRef} id="subject" name="subject" type="text" className={styles.input} placeholder="お仕事のご相談など" autoComplete="off" />
          </div>
          {/* メッセージ */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">メッセージ</label>
            <textarea ref={messageRef} id="message" name="message" className={styles.textarea} placeholder="メッセージを入力してください" rows={5} required />
          </div>
          <div className={styles.submitArea}>
            <Button variant="primary" size="lg">送信する</Button>
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
