# iPlayground 2026 改版紀錄

---

### `a14c42b` · 2026.04.27

調整文字尺寸、刪除多餘資料、移動檔案

- 區塊標題（striped-title）字型尺寸統一調整為 36px
- 移除未使用的資源檔案：`fix_pixel.py`、`icon/`、`img/bg.jpg`、`img/logo_b64.txt`、`img/test02.png`、`svg/diamond.svg`、`svg/heart.svg`、`svg/logo.svg`、`svg/map.svg`
- 將 `svg/` 資料夾移入 `img/svg/`，並更新所有路徑引用

---

### `dc4ebf0` · 2026.04.27

修改按鈕文字、修正文字顏色

- 贊助按鈕文字從「推薦贊助廠商」改為「尋找贊助商」（中英文同步）
- 修正區塊標題在深色／淺色模式下的文字顏色
- 統一所有帶裝飾符號的區塊標題使用 `striped-title`

---

### `ace2932` · 2026.04.27

修正英文按鈕內容、移除多餘的符號

- 修正英文版 i18n 按鈕文字
- 移除 UI 中多餘的裝飾符號

---

### `ab02c3f` · 2026.04.27

調整 iPlayground HIG 風格介面

- 首頁與 news 頁套用 iOS HIG 風格色彩與 grouped layout
- 固定頂部導覽列，保留外觀與語言切換入口
- 統一首頁區塊、卡片、CTA 與重複列表間距規則
- 調整 news 左側選單尺寸、間距、選取狀態與亮暗模式對比
- 修正手機選單暗模式文字與背景可讀性
- 修正 hero CTA 同寬並保留投稿按鈕光暈效果
- 更新倒數單位與頁尾 logo 顯示邏輯
- 隱藏 news 頁 footer 活動區塊

---

### `62e2583` · 2026.04.26

sync shared news and footer content

- 新增 `shared-content.js` 作為共用資料來源
- 首頁與 news 頁改用同一份最新消息與 footer 社群介紹文
- 移除兩頁重複維護的 NEWS_DATA 內容
- news 文章頁兩欄版面置中並限制整體寬度
- 收斂 news 文章標題、內文與分享區垂直間距

---

### `cc75cb0` · 2026.04.26

update iPlayground sponsorship content

- 新增贊助商徵求公告並同步至 news 文章頁
- 新增文章 OG / Twitter metadata 與複製連結功能
- Hero 區新增贊助商 CTA 按鈕
- 簡化桌面導覽列，隱藏尚未就緒的區塊
- 更新 footer 連結、tagline 寬度與手機版 footer 排版
- 更新 pixel crown 圖示設計
- 新增工作人員圖片資源

---

### `5be0db6` · 2026.04.26

新增點綴彩蛋

---

### `0971d5b` · 2026.04.26

UI improvements: floating FAB buttons, photo wall randomization, social icons, logo updates, i18n fixes, mobile layout adjustments

---

### `d5e5369` · 2026.04.25

優化按鈕視覺效果

---

### `a3d4ce8` · 2026.04.25

優化背景播放

---

### `f470ed8` · 2026.04.25

修復手機版問題

---

### `f41da5a` · 2026.04.25

修改樣式

---
