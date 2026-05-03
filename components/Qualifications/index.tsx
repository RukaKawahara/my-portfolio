/* 資格セクションコンポーネント */
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { qualifications } from '@/data/portfolio';
import styles from './Qualifications.module.css';

export default function Qualifications() {
  return (
    <section id="qualifications" className={styles.section}>
      <SectionHeader title="資格" subtitle="取得した資格・認定をご紹介します" />
      <ul className={styles.list}>
        {qualifications.map((q) => (
          <li key={q.id} className={styles.item}>
            <div className={styles.left}>
              <span className={styles.year}>{q.year}</span>
            </div>
            <div className={styles.right}>
              <p className={styles.name}>{q.name}</p>
              {q.issuer && <p className={styles.issuer}>{q.issuer}</p>}
              {q.note && <Badge label={q.note} color="lavender" />}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
