# iPlayground 2026 - 官方網站

## 📋 項目概述

**iPlayground 2026** 是由 iOS Taipei 社群志工自主舉辦的年度開發者聚會官方網站。本活動與 Apple Inc. 無關，旨在為開發者提供技術分享、經驗交流和社群互動的平台。

## ✨ 主要功能

### 1. **主頁面 (iOS Meetup.html)**
- **Hero 區塊**：展示活動主題「徵稿中」，並實時倒數至投稿截止時間
- **最新消息區塊**：展示來自 NEWS_DATA 的最新公告，支持點擊跳轉至完整文章
- **徵稿重點**：介紹投稿流程和支持信息
- **主題標籤**：展示 40+ 個潛在講題標籤（Swift、AI、Career、SwiftUI 等）
- **時程規劃**：以時間軸展示從靈感到大會當天的六個步驟
- **議程展示**：示例議程和議題分類
- **常見問題**：可折疊的 FAQ 區塊
- **Footer 導航**：包含活動、社群、聯絡等多個導航菜單

### 2. **新聞詳情頁面 (news.html)**
- **列表視圖**：展示所有新聞摘要
- **詳情視圖**：展示單篇新聞的完整內容
- **側邊欄導航**：快速切換不同新聞
- **移動端選擇器**：在小屏幕上提供下拉菜單選擇
- **完整 Footer**：和主頁保持一致的導航結構

### 3. **跨頁面特性**
- **雙語支持**：中文/英文切換
- **主題切換**：自動/亮色/深色模式
- **響應式設計**：適配桌面、平板、手機
- **實時倒數**：每秒更新投稿截止倒數計時
- **持久化設置**：使用 localStorage 保存語言和主題偏好

## 🏗️ 程式架構

### 技術棧
```
HTML5
├── CSS3（CSS Variables、Grid、Flexbox）
│   └── 動態主題系統（--hue, --accent 等變量）
└── 原生 JavaScript（ES6+）
    ├── 動態數據渲染
    ├── 事件監聽和交互
    └── 本地存儲管理
```

### 文件結構

```
iPlayground/
├── iOS Meetup.html          # 主頁面
├── news.html                 # 新聞詳情頁面
├── Design System.html        # 設計系統頁面（待完善）
├── tokens.css               # CSS 變量定義（可選）
└── README.md                # 本文檔
```

### 核心模塊

#### 1. **數據層 (NEWS_DATA)**
```javascript
const NEWS_DATA = [
  {
    date: "2026.04.22",
    title: "iPlayground 2026 徵稿正式開啟！",
    content: "詳細內容...",
    url: "#"
  },
  // ...
]
```
- 所有頁面共享同一數據源
- 支持日期、標題、內容、URL 四個字段

#### 2. **主題系統**
```css
:root {
  --hue: 230;                    /* 主色相 */
  --accent: oklch(...);          /* 主色 */
  --accent-2: oklch(...);        /* 輔色 1 */
  --accent-3: oklch(...);        /* 輔色 2 */
  --bg, --surface, --ink, ...    /* 其他設計標記 */
}
```
- 使用 CSS 自定義屬性實現動態主題
- 支持實時色相調整（0-360°）
- 自動適應淺色/深色模式

#### 3. **渲染引擎**
```javascript
// 主要渲染函數
renderNews()      // 渲染新聞列表
renderAgenda()    // 渲染議程
renderSpeakers()  // 渲染時程
renderFaq()       // 渲染常見問題
```

#### 4. **國際化 (i18n)**
```javascript
const I18N = {
  zh: { hero_sub: "...", cta_submit: "..." },
  en: { hero_sub: "...", cta_submit: "..." }
}
applyLang(lang)   // 動態切換語言
```

#### 5. **交互功能**
- **倒數計時器**：每秒更新，使用 CSS 翻轉動畫
- **FAQ 展開收起**：點擊切換 `.open` 類名
- **議程篩選**：支持按類別（iOS、AI、產品）篩選
- **新聞導航**：支持側邊欄和移動端下拉菜單切換

### 關鍵代碼片段

#### 倒數計時器
```javascript
function tickCountdown() {
  const target = new Date("2026-06-19T24:00:00+08:00").getTime();
  const diff = Math.max(0, target - Date.now());
  flipSet("d", Math.floor(diff / 86400000));  // 天
  flipSet("h", Math.floor((diff % 86400000) / 3600000));  // 小時
  // ... 分鐘和秒數
}
```

#### 動態主題應用
```javascript
function applyTweaks(t) {
  document.documentElement.style.setProperty("--hue", t.hue);
  document.documentElement.dataset.mode = t.mode;
  // 更新 Hero 視覺效果（極光、網格、純色）
  // 更新標題風格（行內 vs 堆疊）
}
```

#### 新聞渲染
```javascript
function renderNews() {
  const visible = NEWS_DATA.slice(0, MAX_DISPLAY);
  list.innerHTML = visible.map((n, i) => `
    <a class="news-row" href="news.html?id=${i}">
      <div class="date">${n.date}</div>
      <div class="summary">${truncate(n.title, 30)}</div>
    </a>
  `).join("");
}
```

## 🎨 設計特點

### 視覺設計
- **漸變色彩**：使用 `linear-gradient()` 和 `oklch()` 色彩模型
- **毛玻璃效果**：`backdrop-filter: blur()`
- **動畫**：翻轉卡片、脈沖效果、平滑過渡
- **排版**：使用 clamp() 實現流體排版

### 響應式設計
- 斷點：980px、900px、768px、640px、520px
- 主要方案：
  - 桌面：側邊欄 + 主內容
  - 平板：單列布局
  - 手機：簡化導航、下拉菜單

## 📝 使用說明

### 本地開發
1. 在瀏覽器中直接打開 `iOS Meetup.html` 或 `news.html`
2. 無需構建工具，開箱即用

### 修改數據
編輯 `NEWS_DATA` 陣列以更新新聞內容：
```javascript
const NEWS_DATA = [
  {
    date: "YYYY.MM.DD",
    title: "新聞標題",
    content: "新聞摘要",
    url: "#"
  },
  // ...
]
```

### 修改主題色
調整 `:root` 的 `--hue` 值（0-360）：
```css
:root {
  --hue: 230;  /* 改為其他數值 */
}
```

### 支持新語言
1. 在 `I18N` 物件中新增語言代碼
2. 在 HTML 中添加對應的語言按鈕

## 🚀 性能優化

- 原生 JavaScript，無第三方依賴
- CSS 動畫使用 `transform` 和 `opacity`
- 事件委託減少事件監聽器數量
- 條件渲染避免 DOM 過度操作

## 📱 支援情況

| 功能 | 桌面 | 平板 | 手機 |
|------|------|------|------|
| 基本內容 | ✓ | ✓ | ✓ |
| 倒數計時 | ✓ | ✓ | ✓ |
| 多語言 | ✓ | ✓ | ✓ |
| 主題切換 | ✓ | ✓ | ✓ |
| 新聞導航 | ✓ | ✓ | ✓（下拉菜單） |

## 📄 授權

© 2026 iOS Taipei Community · Independent, Non-Commercial

本活動與 Apple Inc. 無關。
