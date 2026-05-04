/* Skillsセクションコンポーネント */
import { FiMonitor, FiDatabase, FiServer } from 'react-icons/fi';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import { skills } from '@/data/portfolio';
import styles from './Skills.module.css';

/* スキルカードの定義 */
const skillCards = [
  { key: 'frontend', title: 'Frontend',    icon: FiMonitor,  iconClass: styles.iconPink,     ...skills.frontend },
  { key: 'backend',  title: 'Backend',     icon: FiDatabase, iconClass: styles.iconBlue,     ...skills.backend  },
  { key: 'infra',    title: 'Infra / Tool', icon: FiServer,  iconClass: styles.iconLavender, ...skills.infra    },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeader
        title="スキルセット"
        subtitle="HTMLとSCSSを強みに、Next.jsでのモダン開発にも挑戦中"
      />
      <div className={styles.grid}>
        {skillCards.map((card) => (
          <div key={card.key} className={styles.card}>
            <div className={`${styles.iconWrap} ${card.iconClass}`}>
              <card.icon size={24} aria-hidden="true" />
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
