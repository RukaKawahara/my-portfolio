以下の仕様でエンジニア向けポートフォリオサイトをNext.jsで実装してください。

## 技術スタック
- Next.js 14（App Router）
- CSS Modules（通常のCSS、CSSフレームワークは使わない）
- TypeScript

## デザイン仕様
`/design` フォルダ内の以下のファイルを必ず参照してください。
- `DESIGN.md`：カラー・タイポグラフィ・スペーシング・コンポーネント仕様
- `screen.png`：実際のデザインスクリーンショット
- `code.html`：Stitchが出力したHTMLの参考実装

## デザイントークン管理

### styles/tokens.css
DESIGN.mdの値をすべてCSS変数として定義する。
各コンポーネントはこの変数のみを参照し、色・サイズを直書きしない。

```css
:root {
  /* Colors */
  --color-bg: #fff8f8;
  --color-surface: #ffffff;
  --color-text: #1e1b1b;
  --color-text-sub: #4f4446;
  --color-primary: #78555e;
  --color-primary-container: #ffd1dc;
  --color-secondary: #2f6a3f;
  --color-secondary-container: #b2f2bb;
  --color-tertiary: #605a7c;
  --color-tertiary-container: #e1d8ff;
  --color-outline: #817476;

  /* Typography */
  --font-main: 'Plus Jakarta Sans', sans-serif;
  --font-code: 'Space Grotesk', monospace;
  --text-h1: 48px;
  --text-h2: 32px;
  --text-h3: 24px;
  --text-body-lg: 18px;
  --text-body-md: 16px;
  --text-code: 14px;

  /* Spacing */
  --space-unit: 8px;
  --space-sm: 12px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;
  --container-max: 1140px;
  --gutter: 24px;

  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 1.5rem;
  --radius-lg: 2rem;
  --radius-xl: 3rem;
  --radius-full: 999px;

  /* Shadow（Neomorphism-lite） */
  --shadow-card: 6px 6px 20px rgba(0,0,0,0.03),
                 -6px -6px 20px rgba(255,255,255,0.8);
  --shadow-card-hover: 8px 8px 24px rgba(0,0,0,0.06),
                       -8px -8px 24px rgba(255,255,255,0.9);
  --shadow-inset: inset 2px 2px 8px rgba(0,0,0,0.06),
                  inset -2px -2px 8px rgba(255,255,255,0.8);
}
```

### styles/globals.css
- tokens.cssをimport
- CSSリセット
- body・html の共通スタイル
- スムーズスクロール（scroll-behavior: smooth）

## 共通UIコンポーネント（components/ui/）
以下を汎用コンポーネントとして作成し、各セクションから使い回す。

### Button.tsx
- props: `variant`（primary | secondary）, `size`（md | lg）, `href`（任意）
- primary：ピンク背景・白文字・ピル型
- secondary：ラベンダーborder・透明背景・ピル型
- hoverでscale(1.05)

### Card.tsx
- props: `children`, `className`（任意）
- 白背景・radius-xl・var(--shadow-card)
- hoverでvar(--shadow-card-hover)

### Badge.tsx
- props: `label`, `color`（pink | mint | lavender）
- ピル型・各カラーの10%opacity背景
- スキルタグ・バッジ・ラベルに使い回す

### SectionHeader.tsx
- props: `title`, `subtitle`（任意）
- 中央揃え・h2スタイル・サブテキスト付き

## ページ構成（シングルページスクロール・日本語メイン）

1. **Hero セクション**
   - 左：見出し・サブテキスト・Buttonコンポーネント×2
   - 右：プロフィール写真（プレースホルダー）
   - ミント緑のBadgeコンポーネント「WELCOME TO MY PORTFOLIO」

2. **About セクション**
   - 左：自己紹介テキスト（ダミー文）
   - 右：Cardコンポーネント×4（Clean Code / Modern UI / Team Player / Growth）

3. **Skills セクション（スキルセット）**
   - SectionHeaderコンポーネント使用
   - Cardコンポーネント×3（Frontend / Backend / Infra・Tool）
   - スキルはBadgeコンポーネントで表示

4. **Projects セクション（制作実績）**
   - SectionHeaderコンポーネント使用
   - Cardコンポーネントをベースにサムネイル・タイトル・説明・Badgeタグ
   - ダミーデータで2〜3件

5. **Career セクション（経歴）**
   - SectionHeaderコンポーネント使用
   - 縦タイムライン（ミント緑ライン）
   - ダミーデータで3件

6. **Contact セクション（お問い合わせ）**
   - SectionHeaderコンポーネント使用
   - フォーム：お名前・メールアドレス・件名・メッセージ
   - 入力フィールドはvar(--shadow-inset)で凹み表現
   - Buttonコンポーネント（primary）で送信ボタン
   - SNSアイコン：GitHub / LinkedIn / X

## ファイル構成
styles/
  tokens.css
  globals.css
app/
  layout.tsx     ← tokens.css・globals.cssをimport、Google Fonts読み込み
  page.tsx
components/
  ui/
    Button.tsx / Button.module.css
    Card.tsx / Card.module.css
    Badge.tsx / Badge.module.css
    SectionHeader.tsx / SectionHeader.module.css
  Navbar.tsx / Navbar.module.css
  Hero.tsx / Hero.module.css
  About.tsx / About.module.css
  Skills.tsx / Skills.module.css
  Projects.tsx / Projects.module.css
  Career.tsx / Career.module.css
  Contact.tsx / Contact.module.css
  Footer.tsx / Footer.module.css
data/
  portfolio.ts
design/
  DESIGN.md / screen.png / code.html

## 注意事項
- アニメーションは使わない（ホバーのみCSSで最小限）
- 色・サイズの直書き禁止。必ずCSS変数を使う
- 各セクションにid属性を付けてスムーズスクロール可能にする
- 画像はNext.jsのImageコンポーネントを使用
- すべての実データは data/portfolio.ts に集約する
- コードには日本語コメントを入れる