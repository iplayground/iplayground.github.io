# 靜態圖片與路徑慣例

本站透過 **GitHub Pages** 以子路徑發佈（例如 `https://iplayground.io/2026/`），因此 HTML／JSON 內的資源路徑必須為**相對路徑**，不要使用以 `/` 開頭的絕對路徑（例如勿寫 `/img/...`）。

## 目錄分工

| 路徑 | 用途 |
|------|------|
| `img/svg/logo_header_light.svg` | 導覽列亮色主題 Logo |
| `img/svg/logo_header_dark.svg` | 導覽列暗色主題 Logo |
| `img/svg/` | 其他向量圖（含 `media/` 社群圖示等） |
| `img/staff/` | 工作人員照片；JSON `photo` 指向此處 |
| `img/speaker/` | 講者照片 |
| `img/slider/` | 輪播／展示用圖 |

## JSON 內的 `photo` / `icon`

- 工作人員、講者等欄位使用相對於站點根目錄的路徑，例如 `img/staff/foo.jpg`、`img/speaker/bar.png`。
- 若 `photo` 缺失或檔案不存在，前端會 fallback 至 `img/staff/staff_sample.png`（行為見渲染腳本）。

## 新增資產時

- 檔名使用小寫、連字號或底線皆可，與現有目錄內檔案風格一致為佳。
- 更新 JSON 後以瀏覽器實際開頁確認圖片可載入（注意快取）。
