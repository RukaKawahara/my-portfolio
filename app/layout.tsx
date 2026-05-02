/* アプリ全体のレイアウト - Google Fontsとグローバルスタイルを読み込む */
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';

/* Plus Jakarta Sans: 本文・見出し用フォント */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

/* Space Grotesk: コード・ラベル用フォント */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Software Engineer Portfolio',
  description:
    '技術の力で、毎日の生活を少しだけ「楽しく」「便利に」するソフトウェアエンジニアのポートフォリオサイトです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
