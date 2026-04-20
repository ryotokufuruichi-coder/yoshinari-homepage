# 吉成株式会社 HP構築・マーケティング Plan

> 更新日: 2026-04-13 ｜ ドメイン: yoshinarcorp.com

---

## 1. プロジェクト概要

| 項目 | 内容 |
|------|------|
| ドメイン | yoshinarcorp.com（Google Domains取得済み） |
| ホスティング | GitHub Pages（無料） |
| 技術スタック | HTML / CSS / JavaScript（手書き） |
| デザイン | クリーン・ミニマル（白基調） |
| アカウント | **ryotoku.furuichi@yoshinarcorp.com（全作業このアカウントで実施）** |
| Gitリポジトリ | GitHub（プライベート） |

---

## 2. ページ構成

| ページ | ファイル | JSON-LDタイプ | 内容 |
|--------|----------|---------------|------|
| トップ | index.html | Organization | ヒーロー・会社概要・サービス紹介 |
| 事業内容 | services.html | WebPage | SNS・ブランディング・HP制作・FP |
| 会社概要 | about.html | AboutPage | 代表紹介・経歴・理念 |
| お問い合わせ | contact.html | ContactPage | お問い合わせフォーム |
| エラー | 404.html | — | カスタム404ページ |

---

## 3. 完了済み作業

### 3.1 HP開発（2026-04-12）

- HTML/CSS/JSで全5ページ構築（レスポンシブ対応）
- GitHub Pagesデプロイ（CNAME設定・カスタムドメイン接続）
- OGP・メタタグ設定（og:title, og:description, og:image, Twitter Card）
- ファビコン・OGP画像作成（favicon.svg, OGP画像.png, ceo-profile.jpg）
- sitemap.xml（4ページ）・robots.txt設定

### 3.2 SEO対策（2026-04-12）

- canonical URL追加（全4ページ）
- JSON-LD構造化データ追加（Organization / WebPage / AboutPage / ContactPage）
- Google Search Console登録（DNS TXTレコードでドメイン認証済み）
- サイトマップ送信（4ページ検出・ステータス「成功」）
- Gitコミット: `5e0039a` — "SEO強化: canonical URL・構造化データ（JSON-LD）を全ページに追加"

### 3.3 マーケティング（2026-04-12〜13）

- Googleビジネスプロフィール作成開始（ビジネス名・カテゴリ・連絡先・説明文設定済み）
- Google Adsスマートキャンペーン作成（見出し5本・説明文2本を最適化済み）
- Google Ads用画像3点作成（スクエア1200×1200、横長1200×628、ロゴ1200×1200）

### 3.4 アクセス解析（2026-04-13）

- Google Analytics（GA4）導入 — 測定ID: **G-PL3QRM702Z**
- 全5ページ（index, services, about, contact, 404）にトラッキングコード埋め込み済み
- アカウント: ryotoku.furuichi@yoshinarcorp.com / プロパティ: yoshinarcorp.com

### 3.5 Search Console インデックス最適化（2026-04-16）

- sitemap.xml 更新（lastmod → 2026-04-16 / changefreq追加）
- 4ページ（index/services/about/contact）に `<meta name="robots" content="index, follow, max-image-preview:large">` を明示追加
- 同ページに `<meta name="googlebot" ...>` も追加（クロール意図を明確化）
- 404.html に `<meta name="robots" content="noindex, follow">` を追加（ベストプラクティス）
- ※Search Consoleの3つのメッセージ（noindex/リダイレクト/代替ページ）はいずれも情報提供メッセージであり、既存HTMLには問題なしと検証済み

---

## 4. 残タスク（TODO）

- [x] **Git Push（SEO変更分）** ✅（2026-04-13）
- [x] **Google Analytics導入** ✅（2026-04-13）
- [x] **Search Console インデックス最適化** ✅（2026-04-16 robots meta / sitemap更新）
- [ ] **Git Push（GA4 + SEO追加分）** — ローカルターミナルから `git commit -am "..." && git push origin main`
- [ ] **Googleビジネスプロフィール完了** — 画像アップロード・確認・公開
- [ ] **Search Consoleでインデックス再リクエスト** — デプロイ後、URL検査ツールで「インデックス登録をリクエスト」

---

## 5. Google Ads 広告コピー

### 見出し（5本）

1. 吉成株式会社｜経営をトータル支援
2. SNSマーケティングはプロにお任せ
3. 経営からFPまでトータル支援
4. 大手広告代理店出身の代表が対応
5. 経理財務業務はプロにお任せ

### 説明文（2本）

1. SNS・ブランディング・HP制作・FPでビジネスをトータルサポート
2. 大手広告代理店出身の代表が直接対応。経営コンサルから資産形成まで。まずは無料相談から。

---

## 6. SEO設定詳細

### Google Search Console

| 設定項目 | 値 |
|----------|---|
| 認証方法 | DNS TXTレコード |
| サイトマップURL | https://yoshinarcorp.com/sitemap.xml |
| 検出ページ数 | 4 |
| ステータス | 成功 |

### 構造化データ（JSON-LD）

各ページに適切なschema.orgタイプを設定済み。代表者情報（古市良徳・代表取締役）・会社情報を含む。

### Google Analytics（GA4）

| 設定項目 | 値 |
|----------|---|
| 測定ID | G-PL3QRM702Z |
| プロパティ名 | yoshinarcorp.com |
| 対象ページ | 全5ページ（index, services, about, contact, 404） |
| 導入日 | 2026-04-13 |

---

## 7. ファイル一覧

```
yoshinarcorp.com/
├── index.html              # トップページ
├── services.html           # 事業内容
├── about.html              # 会社概要
├── contact.html            # お問い合わせ
├── 404.html                # カスタム404
├── css/
│   └── style.css           # 共通スタイルシート
├── js/
│   └── main.js             # 共通JavaScript
├── images/
│   ├── favicon.svg         # ファビコン
│   ├── OGP画像.png          # OGPシェア画像（2848×1504）
│   ├── ceo-profile.jpg     # 代表プロフィール写真
│   ├── google-ads-square.png    # Google Ads スクエア（1200×1200）
│   ├── google-ads-landscape.png # Google Ads 横長（1200×628）
│   └── google-ads-logo.png      # Google Ads ロゴ（1200×1200）
├── sitemap.xml             # サイトマップ（4ページ）
├── robots.txt              # クローラー制御
├── CNAME                   # GitHub Pagesドメイン設定
├── 吉成HP_進捗管理表.xlsx    # Excel進捗管理表
└── 吉成HP_Plan.docx        # Word版Planドキュメント
```

---

## 8. Gitコミット履歴

| Hash | メッセージ | 日付 |
|------|-----------|------|
| `bc91ff1` | 吉成株式会社HP 初回リリース | 2026-04-12 11:23 |
| `7c47bdd` | 個人ファイル削除・ルート構造に修正 | 2026-04-12 11:29 |
| `5e0039a` | SEO強化: canonical URL・構造化データ追加 | 2026-04-12 14:19 |

---

## 9. 重要な注意事項

- **全作業は必ず ryotoku.furuichi@yoshinarcorp.com アカウントで実施すること**
- Git Pushはローカルターミナルから実行（サンドボックス環境では認証不可）
- Google Adsの画像アップロード・予算設定は手動対応が必要
- このドキュメントは作業内容の変更時に随時更新すること
