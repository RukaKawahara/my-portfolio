/* Hobbyセクション（Server Component）
   public/images/hobby/ の画像を自動取得してCarouselに渡す */
import fs from 'fs';
import path from 'path';
import SectionHeader from '@/components/ui/SectionHeader';
import HobbyCarousel from './HobbyCarousel';

export type HobbyItem = { src: string; alt: string };

function getHobbyImages(): HobbyItem[] {
  const hobbyDir = path.join(process.cwd(), 'public/images/hobby');
  try {
    return fs.readdirSync(hobbyDir)
      .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
      .sort()
      .map((file, i) => ({
        src: `/images/hobby/${file}`,
        alt: `AIイラスト ${String(i + 1).padStart(2, '0')}`,
      }));
  } catch {
    return [];
  }
}

export default function Hobby() {
  const images = getHobbyImages();
  if (images.length === 0) return null;

  return (
    <section id="hobby">
      <SectionHeader
        title="Hobby"
        subtitle="AIを使ってイラストを生成しています"
      />
      <HobbyCarousel images={images} />
    </section>
  );
}
