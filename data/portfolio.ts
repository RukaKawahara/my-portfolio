import { FiCode, FiPenTool, FiUsers, FiTrendingUp } from 'react-icons/fi';
import type { IconType } from 'react-icons';

// ===========================
// サイト共通情報
// ===========================
export const siteInfo = {
  name: "Ruka Kawahara",
  heroHeading: "Hi, I'm",
  heroHighlight: "Ruka Kawahara",
  heroSuffix: "",
  description: "フロントエンドエンジニアとして、デザイン通りの保守性の高いコードが書けるように心がけています。",
  aboutTitle: "About Me",
  aboutBody: [
    "フロントエンドエンジニアとして4年以上の経験を持ちます。",
    "HTMLやSCSSを使ったマークアップを始め、jsでの開発が得意です。また現在Next.jsを中心としたモダン開発も学習中です。",
    "デザインにもこだわりを持ち、FigmaやAIツールを活用しながら開発しています。",
  ],
};

// ===========================
// SNSリンク
// ===========================
export const socialLinks = {
  github: "https://github.com/RukaKawahara",
  qiita: "https://qiita.com/Ru22",
};

// ===========================
// 基本プロフィール
// ===========================
export const profile = {
  name: "Ruka Kawahara",
  nameJa: "カワハラ ルカ",
  title: "Frontend Engineer",
  tagline: "使いやすくて、美しいUIをつくることが好きです。",
  bio: [
    "フロントエンドエンジニアとして4年以上の経験を持ちます。",
    "デザイナーさんが仕上げたデザイン通りに実装することにこだわりを持ち、FigmaやAIツールを活用しながら開発しています。",
    "React・Next.jsを中心に、モダン開発を勉強しています。",
  ],
  avatarUrl: "/images/kawahara_icon.png",
  email: "your@email.com", // ← 要変更
  sns: {
    github: "https://github.com/RukaKawahara",
    linkedin: "", // ← あれば追加
    twitter: "",  // ← あれば追加
  },
};

// ===========================
// 特徴カード（Aboutセクション）
// ===========================
export const features: { label: string; icon: IconType }[] = [
  { label: 'Clean Code',    icon: FiCode       },
  { label: 'Design Sense',  icon: FiPenTool    },
  { label: 'Communication', icon: FiUsers      },
  { label: 'Growth',        icon: FiTrendingUp },
];

// ===========================
// スキル
// ===========================
export type SkillColor = 'pink' | 'mint' | 'lavender' | 'blue' | 'gray';

export const skills: {
  frontend: { color: SkillColor; items: string[] };
  backend:  { color: SkillColor; items: string[] };
  infra:    { color: SkillColor; items: string[] };
} = {
  frontend: {
    color: "pink",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "SCSS", "CSS", "JQuery"],
  },
  backend: {
    color: "blue",
    items: ["Node.js（学習中）"],
  },
  infra: {
    color: "lavender",
    items: ["Supabase", "firebase", "Vercel", "Git", "GitHub", "Figma", "AI開発"],
  },
};

// ===========================
// 制作実績
// ===========================
export const projects = [
  {
    id: 1,
    title: "レシピメモアプリ",
    description:
      "レシピの作成・編集・削除、お気に入り機能、ジャンル管理ができるレシピ管理アプリ。Next.js + Supabaseで構築し、Vercelにデプロイ済み。",
    tags: ["Next.js", "TypeScript", "SCSS", "Supabase", "Vercel", "AI開発"],
    tagColor: "gray" as const,
    githubUrl: "https://github.com/RukaKawahara/memo-recipe-app",
    liveUrl: "https://memo-recipe-app.vercel.app",
    thumbnail: "/images/project-recipe.png",
  },
  {
    id: 2,
    title: "コーディング練習（HTML&CSS プラクティスブック）",
    description:
      "「HTML&CSS コーディング・プラクティスブック 1」付属のデザインカンプ通りに実装。ピクセルパーフェクトな再現を意識して制作。",
    tags: ["Astro", "SCSS", "TypeScript", "JavaScript", "Vercel"],
    tagColor: "gray" as const,
    githubUrl: "",
    liveUrl: "https://1-git-main-rukas-projects-10c7bfda.vercel.app/",
    thumbnail: "/images/project-coding-practice.png",
  },
];

// ===========================
// 資格
// ===========================
export const qualifications = [
  {
    id: 1,
    year: "2021.08.16",
    name: "ITパスポート試験",
    issuer: "IPA 独立行政法人情報処理推進機構",
    note: "",
  },
  {
    id: 2,
    year: "2024.02.15",
    name: "基本情報技術者",
    issuer: "IPA 独立行政法人情報処理推進機構",
    note: "",
  },
  {
    id: 3,
    year: "2024.03.14",
    name: "情報セキュリティマネジメント",
    issuer: "IPA 独立行政法人情報処理推進機構",
    note: "",
  },
  {
    id: 4,
    year: "2026.02.08",
    name: "「HTML5レベル1」認定プロフェッショナル",
    issuer: "特定非営利活動法人 LPI-Japan",
    note: "",
  },
];

// ===========================
// 職務経歴
// ===========================
export const careers = [
  {
    id: 1,
    color: "pink",
    company: "株式会社ニジボックス",
    title: "Frontend Engineer",
    period: "2023 - 現在",
    description: "マークアップ、jsでのエンハンス、保守業務をはじめ、Nextを用いたモダン開発を用いたプロジェクトにもアサイン。",
  },
  {
    id: 2,
    color: "mint",
    company: "ワウテック株式会社",
    title: "Frontend Engineer",
    period: "2022 - 2023",
    description: "Javascript+HTML+CSSを用い、自社製ビジネスチャットWowTalkの制作・保守を担当。フロントエンドの基礎を習得。",
  },
];