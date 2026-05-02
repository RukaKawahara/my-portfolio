/* Skillsセクションコンポーネント */
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import { skills } from '@/data/portfolio';
import styles from './Skills.module.css';

/* スキルカードの定義 */
const skillCards = [
  {
    key: 'frontend',
    title: 'Frontend',
    icon: '⬡',
    iconClass: styles.iconPink,
    color: 'pink' as const,
    items: skills.frontend.items,
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: '◈',
    iconClass: styles.iconMint,
    color: 'mint' as const,
    items: skills.backend.items,
  },
  {
    key: 'infra',
    title: 'Infra / Tool',
    icon: '◎',
    iconClass: styles.iconLavender,
    color: 'lavender' as const,
    items: skills.infra.items,
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeader
        title="スキルセット"
        subtitle="最新の技術スタックをバランスよく活用しています"
      />
      <div className={styles.grid}>
        {skillCards.map((card) => (
          <div key={card.key} className={styles.card}>
            <div className={`${styles.iconWrap} ${card.iconClass}`}>
              {card.icon}
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.badges}>
              {card.items.map((skill) => (
                <Badge key={skill} label={skill} color={card.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
