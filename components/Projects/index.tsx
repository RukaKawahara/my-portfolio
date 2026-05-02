/* Projectsセクションコンポーネント */
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/portfolio';
import { getOgpImage } from '@/lib/getOgpImage';
import styles from './Projects.module.css';

/* プレースホルダーアイコンとスタイルのマッピング */
const placeholderConfig: Record<string, { icon: string; className: string }> = {
  pink: { icon: '📊', className: '' },
  mint: { icon: '🛍️', className: styles.thumbnailMint },
  lavender: { icon: '⚙️', className: styles.thumbnailLavender },
  gray: { icon: '📁', className: '' },
};

/* 技術カテゴリ → バッジ色のマッピング */
const techColorMap: Record<string, 'pink' | 'mint' | 'lavender'> = {
  // フロントエンド系 → ピンク
  HTML: 'pink', CSS: 'pink', SCSS: 'pink',
  JavaScript: 'pink', TypeScript: 'pink',
  React: 'pink', 'Next.js': 'pink', Astro: 'pink',
  // バックエンド・DB系 → ミント
  'Node.js': 'mint', 'Node.js（学習中）': 'mint',
  PostgreSQL: 'mint',
  Supabase: 'lavender',
  // ツール・インフラ系 → ラベンダー
  Git: 'lavender', GitHub: 'lavender',
  Vercel: 'lavender', Figma: 'lavender',
  'CSS Modules': 'lavender',
};

export default async function Projects() {
  /* 全プロジェクトのOGP画像をまとめて取得 */
  const ogpImages = await Promise.all(
    projects.map((p) => (p.liveUrl ? getOgpImage(p.liveUrl) : Promise.resolve(null)))
  );

  return (
    <section id="projects" className={styles.section}>
      <SectionHeader title="制作実績" subtitle="自分で開発したプロジェクトの一部をご紹介します" />
      <div className={styles.grid}>
        {projects.map((project, i) => {
          const placeholder = placeholderConfig[project.tagColor];
          const href = project.liveUrl || project.githubUrl;
          const ogpImage = ogpImages[i];
          return (
            <a
              key={project.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {/* サムネイル：OGP画像があれば表示、なければプレースホルダー */}
              <div className={`${styles.thumbnail} ${ogpImage ? '' : placeholder.className}`}>
                {ogpImage ? (
                  <Image
                    src={ogpImage}
                    alt={project.title}
                    fill
                    className={styles.ogpImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className={styles.thumbnailPlaceholder}>{placeholder.icon}</div>
                )}
              </div>

              {/* カード内容 */}
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <Badge key={tag} label={tag} color={techColorMap[tag] ?? 'pink'} />
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
