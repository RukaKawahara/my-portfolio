# Portfolio

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules**
- **react-icons**

## セクション構成

| セクション | 内容 |
|---|---|
| Hero | 自己紹介・プロフィール写真 |
| About | 経歴紹介・特徴カード |
| Skills | フロントエンド・バックエンド・インフラのスキルセット |
| Projects | 制作実績 |
| Career | 職務経歴・タイムライン |
| Hobby | AIイラストギャラリー（PC：グリッド / SP：カルーセル） |
| Contact | お問い合わせフォーム |

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

## 環境変数

`.env.example` をコピーして `.env.local` を作成し、値を設定してください。

```bash
cp .env.example .env.local
```

| 変数名 | 説明 |
|---|---|
| `NEXT_PUBLIC_CONTACT_EMAIL` | お問い合わせフォームの送信先メールアドレス |

## Hobby 画像の追加

`public/images/hobby/` に画像ファイルを置くだけで Hobby セクションに自動反映されます。

```
public/
  images/
    hobby/
      01.png
      02.png
      ...
```

- 対応形式：`.png` / `.jpg` / `.jpeg` / `.webp` / `.gif`
- ファイル名の昇順で表示されます
- フォルダが空の場合はセクション自体が非表示になります

## データのカスタマイズ

`data/portfolio.ts` にサイト上の実データをすべて集約しています。
テンプレートとして使う場合は `data/portfolio.sample.ts` をコピーして編集してください。

```bash
cp data/portfolio.sample.ts data/portfolio.ts
```

## デプロイ

Vercel へのデプロイ時は、ダッシュボードの **Settings → Environment Variables** に環境変数を設定した後、リデプロイしてください。
