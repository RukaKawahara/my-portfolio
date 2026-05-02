/* Projectsセクションコンポーネント */
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/portfolio';
import styles from './Projects.module.css';

/* プレースホルダーアイコンとスタイルのマッピング */
const placeholderConfig: Record<string, { icon: string; className: string }> = {
  pink: { icon: '📊', className: '' },
  mint: { icon: '🛍️', className: styles.thumbnailMint },
  lavender: { icon: '⚙️', className: styles.thumbnailLavender },
};

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <SectionHeader title="制作実績" subtitle="これまで手がけたプロジェクトの一部をご紹介します" />
      <div className={styles.grid}>
        {projects.map((project) => {
          const placeholder = placeholderConfig[project.tagColor];
          return (
            <div key={project.id} className={styles.card}>
              {/* サムネイル */}
              <div className={`${styles.thumbnail} ${placeholder.className}`}>
                <div className={styles.thumbnailPlaceholder}>{placeholder.icon}</div>
              </div>

              {/* カード内容 */}
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <Badge key={tag} label={tag} color={project.tagColor} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
