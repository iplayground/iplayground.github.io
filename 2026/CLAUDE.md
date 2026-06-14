# CLAUDE.md

本文件提供 AI 協作工具在此 repo 工作時的指引。

## 專案說明

**iPlayground 2026** 的靜態行銷網站（iOS Taipei 社群年度大會）。位於父 repo `iplayground.github.io` 的 `2026/` 子資料夾，透過 GitHub Pages 部署。舊年份（`2018/`、`2024/` 等）為同層資料夾，各有獨立的舊版程式碼；除非特別指定，只編輯 `2026/`。

## 指令

Vite 僅作為開發伺服器使用，**沒有 build 步驟**，網站以原始 HTML/CSS/JS 直接部署至 GitHub Pages。

```bash
yarn install        # Yarn 4，使用 node-modules linker（.yarnrc.yml）
yarn dev            # Vite 開發伺服器，目前 port 見 package.json
yarn preview        # 同 port，預覽模式
```

沒有測試、lint 或型別檢查腳本。`package.json` 是目前實際 port 的唯一依據。

## 架構

### 兩個入口 HTML 頁面，共用同一資料層

- `index.html` — 主頁面（約 2300 行，從第 579 行起有大型 inline `<script>`）
- `news.html` — 新聞列表 + 文章詳情（由 `?id=N` query param 驅動）

兩個頁面在 `DOMContentLoaded` 時**並行 fetch `data/` 內的 JSON**，client-side 渲染。沒有 router 或框架，純 ES6 + template literals。

### 資料層（`data/*.json`）

所有內容存放於 JSON。**修改文字請編輯 JSON，不要動 HTML 字串。** 完整 schema 見 `docs/data/README.md`。主要檔案：

| 檔案 | 使用頁面 |
|------|---------|
| `iplayground_news.json` | 兩頁（新聞列表 + 文章內文） |
| `iplayground_agenda.json` | index（議程卡片 + modal） |
| `iplayground_speakers.json` | index（講者格狀列表） |
| `iplayground_staff.json` | index（工作人員格狀列表） |
| `iplayground_cfp_steps.json` | index（CFP 時間軸） |
| `iplayground_links.json` | 兩頁（社群、CFP 表單、贊助、COC、聯絡信箱） |
| `iplayground_config.json` | 兩頁（footer 標語、場地地圖嵌入網址） |
| `iplayground_i18n.json` | 兩頁（UI 字串表） |
| `confetti-control.json` | index（彩帶彩蛋開關） |

雙語欄位格式為 `{ "zh": "...", "en": "..." }`。JS helper `localized(value, lang)` 負責解包，傳入完整物件，不要預先攤平。

### i18n 模式

- `iplayground_i18n.json` 對應 key → `{ zh, en }`。
- HTML 元素宣告 `data-i18n="some_key"`（並包含預設中文值作為 fallback）。
- `applyLang(lang)` 走訪 DOM 替換；值可包含 HTML，因此使用 `innerHTML` 設定。
- 特殊 key `footer_tagline` 標記為 `__from_config__`，從 `iplayground_config.json` 取值。
- 新增可翻譯字串時：在 `iplayground_i18n.json` 加入 key（zh + en），再在元素上加 `data-i18n="that_key"`。不要在 JS render 函數裡寫死字串，改用 `localized()` 或從 `I18N_DATA` 讀取。

### 外部連結模式

連結不寫在 HTML 裡。元素使用 `data-link="cfp_form"` / `data-link="social_discord"` / `data-link="contact_support"` 等屬性，`applyLinks(linksJson)` 在執行時從 `iplayground_links.json` 注入 `href`。新連結加在 JSON，不要寫 inline。

### 主題 / 設計 token

- CSS 自定義屬性驅動一切，主旋鈕是 `:root` 的 `--hue`（0–360），搭配 `oklch()` 衍生的 `--accent`、`--accent-2`、`--accent-3`。
- 模式切換透過 `document.documentElement.dataset.mode`（`light` | `dark` | `auto`）；`auto` 遵循 `prefers-color-scheme`。
- 使用者偏好存在 `localStorage`：`lang`、`appearance`、`hue`。
- `index.html` 有 `EDITMODE-BEGIN` / `EDITMODE-END` 標記，包住 `TWEAKS` 字面值（hue、mode、keyArt、wordmarkStyle），供外部編輯器原地修改。保留這些註解。

### CSS 組織

CSS 已模組化，不要把新樣式放回 `index.html`：

- `css/shared.css` — nav、footer、tokens、typography、模式/語言切換（兩頁共用）
- `css/main.css` — index 專用區塊（hero、agenda、FAQ、照片牆等）
- `css/news.css` — news.html 專用
- `css/fab.css` — 浮動按鈕（模式/語言/回頂），兩頁共用
- `css/confetti.css` — index 彩帶彩蛋

`shared-content.js` 是已棄用的空殼，僅保留以避免舊參照 404，不要在此放新邏輯；共用邏輯改透過 `data/*.json` 共享。

### 靜態圖片

路徑規則與資料夾慣例見 `docs/assets.md`。摘要：

- `img/svg/logo_header_light.svg` / `logo_header_dark.svg` — 導覽列 logo，依主題透過 CSS 切換
- `img/staff/`、`img/speaker/`、`img/slider/` — 由 JSON `photo` 路徑引用
- `photo` 缺失時 fallback 至 `img/staff/staff_sample.png`（由 render JS 處理）

## 工作流程注意事項

- 此 repo 的 commit 訊息使用**繁體中文**，標題 ≤ 50 字，細節以條列補充，請符合 `git log` 的現有風格。
- 父 repo（`iplayground.github.io/`）直接從 `master` 透過 GitHub Pages 部署，除 `git push` 外沒有額外的 build/deploy 步驟。
- 使用者透過 `https://iplayground.io/2026/`（CNAME）開啟網站，因此所有資源路徑必須為相對路徑（`img/...`、`data/...`、`css/...`），不可使用絕對路徑（`/img/...`）。

## 設計脈絡

完整版含設計理由見 `PRODUCT.md`。

### 使用者
台灣 Apple 平台開發者（繁體中文為主，支援英文）。三類受眾：CFP 投稿者 → 與會者 → 贊助商。志工自辦，**與 Apple Inc. 無關**，免責聲明是必要的。

### 品牌個性
**精工 · 技術 · 社群。** HIG 等級的克制、開發者視角的細節、邊角的志工溫度（彩帶、照片牆、翻牌倒數）。語氣：精準但不生硬。不使用 Apple 的「我們」。

### 美學方向
- **深色為主**，支援淺色。執行時預設維持 `auto`。
- **調色盤**（精確 hex，不可自動調色）：`#000000` 底色 · `#282C20` 表面 · `oklch(0.60 0.03 130)` 輔色 · `#D2FF00` 信號色（≤10% 使用）。
- **字型**：Michroma（display 標題，全大寫）、Geist（body 拉丁）、PingFang TC → Noto Sans TC（body CJK）、Geist Mono（等寬）。Inter 和 JetBrains Mono 禁用，遇到請替換。
- 硬性禁止：不可用 `border-left/right > 1px` 裝飾條、不可用 `background-clip: text` 漸層文字、不可用 AI 新創 cyan/purple 發光風格。

### 設計原則
1. **信號色克制** — `#D2FF00` 僅作信號旗，不作裝飾。
2. **寬字幕用於標題，中性 grotesk 用於內文** — Michroma 不用於段落。
3. **雙語不妥協** — 每個元件都要在繁中和英文下測試。
4. **志工溫度在邊角** — 保留彩蛋，不讓它們主導 above-the-fold。
5. **HIG 結構，非 HIG 色彩** — 借用 Apple 的間距節奏，拒絕 Apple 的中性灰調色盤。
