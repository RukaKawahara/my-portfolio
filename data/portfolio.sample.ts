// ===========================
// 使い方：このファイルを portfolio.ts にコピーして編集してください
// cp data/portfolio.sample.ts data/portfolio.ts
// ===========================

// ===========================
// サイト共通情報
// ===========================
export const siteInfo = {
  name: "Your Name",
  heroHeading: "Hi, I'm",
  heroHighlight: "Your Name",
  heroSuffix: "",
  description: "フロントエンドエンジニアとして、使いやすくて美しいUIをつくることが好きです。",
  aboutTitle: "About Me",
  aboutBody: [
    "エンジニアとして〇年以上の経験を持ちます。",
    "〇〇・〇〇を中心に、〇〇を使ったUI開発が得意です。",
    "デザインにもこだわりを持ち、〇〇を活用しながら開発しています。",
  ],
};

// ===========================
// SNSリンク
// ===========================
export const socialLinks = {
  github: "https://github.com/your-username",
  linkedin: "",
  x: "",
};

// ===========================
// 基本プロフィール
// ===========================
export const profile = {
  name: "Your Name",
  nameJa: "ヤマダ タロウ",
  title: "Frontend Engineer",
  tagline: "使いやすくて、美しいUIをつくることが好きです。",
  bio: [
    "エンジニアとして〇年以上の経験を持ちます。",
    "〇〇・〇〇を中心に、〇〇を使ったUI開発が得意です。",
    "デザインにもこだわりを持ち、〇〇を活用しながら開発しています。",
  ],
  avatarUrl: "/images/avatar.jpg",
  email: "your@email.com",
  sns: {
    github: "https://github.com/your-username",
    linkedin: "",
    twitter: "",
  },
};

// ===========================
// 特徴カード（Aboutセクション）
// ===========================
export const features = [
  { icon: "✨", label: "Clean Code", desc: "読みやすく保守しやすいコードを意識します" },
  { icon: "🎨", label: "Modern UI", desc: "デザインにこだわったUI実装が得意です" },
  { icon: "🤝", label: "Team Player", desc: "チームでの開発経験を大切にしています" },
  { icon: "🌱", label: "Growth", desc: "新技術のキャッチアップを欠かしません" },
];

// ===========================
// スキル
// ===========================
export const skills = {
  frontend: {
    items: ["React", "Next.js", "TypeScript", "JavaScript", "SCSS", "CSS"],
  },
  backend: {
    items: ["Node.js", "PostgreSQL"],
  },
  infra: {
    items: ["Git", "GitHub", "Vercel"],
  },
};

// ===========================
// 制作実績
// ===========================
export const projects = [
  {
    id: 1,
    title: "プロジェクト名",
    description: "プロジェクトの概要を記述してください。使用技術や工夫した点などを書くと効果的です。",
    tags: ["Next.js", "TypeScript"],
    tagColor: "pink" as const,
    githubUrl: "https://github.com/your-username/your-repo",
    liveUrl: "",
    thumbnail: "/images/project-01.png",
  },
  {
    id: 2,
    title: "プロジェクト名",
    description: "プロジェクトの概要を記述してください。使用技術や工夫した点などを書くと効果的です。",
    tags: ["React", "TypeScript"],
    tagColor: "mint" as const,
    githubUrl: "https://github.com/your-username/your-repo",
    liveUrl: "",
    thumbnail: "/images/project-02.png",
  },
];

// ===========================
// 職務経歴
// ===========================
export const careers = [
  {
    id: 1,
    color: "pink",
    company: "株式会社〇〇",
    title: "Frontend Engineer",
    period: "20XX - 現在",
    description: "担当業務の概要を記述してください。",
  },
  {
    id: 2,
    color: "mint",
    company: "株式会社△△",
    title: "Web Developer",
    period: "20XX - 20XX",
    description: "担当業務の概要を記述してください。",
  },
];
