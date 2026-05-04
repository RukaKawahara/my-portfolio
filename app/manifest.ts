import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ruka Kawahara | Frontend Engineer',
    short_name: 'Ruka Kawahara',
    description: 'フロントエンドエンジニアとして、デザイン通りの保守性の高いコードが書けるように心がけています。',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff8f8',
    theme_color: '#78555e',
    icons: [
      {
        src: '/images/kawahara_icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
