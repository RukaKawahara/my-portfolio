/* Careerセクションコンポーネント */
import SectionHeader from '@/components/ui/SectionHeader';
import { careers } from '@/data/portfolio';
import styles from './Career.module.css';

export default function Career() {
  return (
    <section id="career" className={styles.section}>
      <SectionHeader title="経歴" subtitle="これまでのキャリアパスをご紹介します" />
      <div className={styles.timeline}>
        {careers.map((career) => (
          <div key={career.id} className={`${styles.item} ${styles[career.color]}`}>
            <div className={styles.dot} />
            <p className={styles.period}>{career.period}</p>
            <h3 className={styles.jobTitle}>{career.title}</h3>
            <p className={styles.company}>{career.company}</p>
            <p className={styles.description}>{career.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
