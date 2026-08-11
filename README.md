# Daniel Hau — Portfolio

個人作品集網站，以 Next.js 16 + Tailwind CSS v4 建置，採用單色基調 + 科技藍的設計系統，支援淺色/深色模式、GSAP 進場動畫、Lenis 平滑捲動，以及完整的 SEO 結構化資料。

## 功能

- 下載履歷：Hero、導覽列、聯絡區共 3 個入口，檔案為 `public/Daniel-H-CV.pdf`
- Instagram 連結：聯絡區與頁尾
- WhatsApp / Email 聯絡卡
- 作品焦點（Focus Areas）、教育、經歷、獎項、技能區塊
- 淺色/深色模式切換
- 響應式設計（手機、平板、桌面）
- SEO：Person JSON-LD、Open Graph、meta 描述
- 無障礙：WCAG AA 對比度、鍵盤焦點、`prefers-reduced-motion` 支援

## 開發

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # 啟動 production server
```

## 自訂內容

所有個人資料集中在 [`lib/site.ts`](lib/site.ts)，包含：

- 姓名、職稱、學校、tagline、Email、電話、WhatsApp
- **Instagram**：把 `instagram` 欄位換成你的真實帳號網址
- 作品焦點、經歷、獎項、教育、技能

更新後重新執行 `npm run build` 即可。

## 更換履歷 PDF

把新的 PDF 命名為 `Daniel-H-CV.pdf`，覆蓋 `public/` 下同名檔案即可（檔名可自行調整，並同步更新 `lib/site.ts` 的 `resumeUrl`）。

## 部署

建議部署到 Vercel（免費）：

1. 把此資料夾推上 GitHub
2. 到 [vercel.com](https://vercel.com) 匯入 repo
3. 框架選擇 Next.js，其餘採預設即可

## 技術棧

- Next.js 16（App Router、靜態預渲染）
- Tailwind CSS v4
- GSAP + ScrollTrigger（Hero 進場動畫）
- Lenis（平滑捲動）
- next-themes（主題切換）
- lucide-react（介面圖示）

## 設計系統

- 淺色背景 `#FAFAFA`、深色背景 `#0F172A`
- 強調色 `#2563EB`（淺色）/ `#3B82F6`（深色）
- 字型：Archivo（標題）+ Space Grotesk（內文）
