# Daniel Hau — Signal Lab

個人作品集網站（Signal Lab），以 Next.js 16 + Tailwind CSS v4 建置。採用 OLED 暗色優先 + 青色訊號的設計系統，包含 GSAP 進場動畫、Lenis 平滑捲動、Command Palette（⌘K）、可篩選專案、專案詳細 Modal、CountUp 統計數字、技能跑馬燈與捲動進度條。

## 功能

- 下載履歷：Hero、導覽列、聯絡區多個入口，檔案為 `public/Daniel-H-CV.pdf`
- Instagram / WhatsApp / Email 聯絡卡
- Signal Lab 專案展示：6 個專案、類別篩選、專案詳細 Modal
- Command Palette（⌘K / Ctrl+K）：跳轉區段、開啟專案、複製 Email、下載履歷、切換主題
- 淺色/深色模式切換（預設深色）
- 響應式設計（手機、平板、桌面）
- SEO：Person JSON-LD、Open Graph、meta 描述
- 無障礙：WCAG AA 對比度、鍵盤焦點、`prefers-reduced-motion` 支援（動畫全部自動停用）

## 開發

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # 啟動 production server
npm run lint      # ESLint 檢查
```

## 自訂內容

所有個人資料集中在 [`lib/site.ts`](lib/site.ts)，包含：

- 姓名、職稱、學校、tagline、Email、電話、WhatsApp、狀態
- **Instagram**：把 `instagram` 欄位換成你的真實帳號網址
- 專案資料（`projects` 陣列）、焦點領域、經歷、獎項、教育、技能、統計數字

更新後重新執行 `npm run build` 即可。

## 更換履歷 PDF

把新的 PDF 命名為 `Daniel-H-CV.pdf`，覆蓋 `public/` 下同名檔案即可（檔名可自行調整，並同步更新 `lib/site.ts` 的 `resumeUrl`）。

## 部署（Vercel，免費）

1. 把此資料夾推上 GitHub（branch 為 `main`）：

   ```bash
   git remote add origin https://github.com/<你的帳號>/portfolio.git
   git push -u origin main
   ```

2. 到 [vercel.com](https://vercel.com) 用 GitHub 登入，匯入此 repo
3. 框架會自動偵測為 Next.js，其餘採預設即可
4. 部署完成後會獲得免費網址 `portfolio-xxx.vercel.app`

### 綁定自訂域名

1. 在 Vercel 專案 → Settings → Domains 輸入你的域名
2. 到域名註冊商（Cloudflare / Porkbun / Namecheap 等）新增 DNS 記錄：
   - `A` 記錄 → `76.76.21.21`
   - `CNAME` 記錄 → `cname.vercel-dns.com`
3. Vercel 會自動核發免費 SSL 憑證

## 技術棧

- Next.js 16（App Router、靜態預渲染）
- Tailwind CSS v4
- GSAP + ScrollTrigger（Hero 進場動畫）
- Lenis（平滑捲動）
- next-themes（主題切換）
- lucide-react（介面圖示）

## 設計系統

- OLED 暗色優先：背景 `#05070A`，強調色 `#2EE6C5`（青色訊號）
- 淺色模式：背景 `#F4F7F8`，強調色 `#0D9488`
- 琥珀色 `#FBBF24` 用於獎項與亮點
- 字型：Syne（標題）+ DM Sans（內文）+ JetBrains Mono（等寬）
