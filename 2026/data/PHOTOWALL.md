# 照片牆說明文件

照片牆分兩處：**Hero 區塊**（首頁背景）和 **Staff 區塊**（工作人員背景）。  
兩者共用同一份照片清單，各自有獨立的視覺參數。

---

## 照片清單

**檔案：** `data/iplayground_slider.json`

```json
[
  "照片檔名1.jpg",
  "照片檔名2.jpg"
]
```

- 照片實體放在 `img/slider/` 資料夾
- 新增照片：把檔案丟進 `img/slider/`，再把檔名加進 JSON 陣列
- 沒有數量上限，照片越多重複率越低
- 每次載入頁面會自動隨機排列

---

## 視覺參數

**參考檔：** `data/iplayground_photowall.json`（僅供對照記錄，實際生效位置見下方）

### Hero 照片牆

實際修改位置：`css/main.css` → `.photo-wall`

| 參數 | CSS 屬性 | 目前值 | 說明 |
|------|----------|--------|------|
| `opacity_dark` | `opacity` | `1` | 深色模式照片透明度（0–1，越高越明顯） |
| `opacity_light` | `opacity`（light mode） | `0.28` | 淺色模式照片透明度 |
| `grayscale` | `filter: grayscale()` | `0.4` | 去飽和度（0 = 全彩，1 = 全灰） |
| `saturate` | `filter: saturate()` | `0.6` | 飽和度倍率 |
| `contrast` | `filter: contrast()` | `1.05` | 對比度倍率 |
| `cols` | `grid-template-columns` | `4` | 欄數 |
| `gap_px` | `gap` / `padding` | `12px` | 欄間距 |
| `animation_base_duration_s` | `animation-duration`（CSS base） | `240s` | 滾動週期基準值 |
| `animation_random_extra_s` | `animation-duration`（JS random） | `+0~160s` | 各欄隨機額外時間，讓欄速不一致 |

### Staff 照片牆

實際修改位置：`css/main.css` → `.section-staff .photo-wall`

| 參數 | CSS 屬性 | 目前值 | 說明 |
|------|----------|--------|------|
| `opacity` | `opacity` | `0.35` | 照片透明度（0–1） |
| `grayscale` | `filter: grayscale()` | `0.5` | 去飽和度 |
| `cols` | `grid-template-columns` | `5` | 欄數 |
| `gap_px` | `gap` / `padding` | `10px` | 欄間距 |
| `animation_base_duration_s` | `animation-duration`（CSS base） | `280s` | 滾動週期基準值 |
| `animation_random_extra_s` | `animation-duration`（JS random） | `+0~160s` | 各欄隨機額外時間 |
| `curtain_opacity` | `.staff-curtain` `opacity` | `0.8` | 遮罩透明度（越高遮越多，照片越不明顯） |

---

## 調整速度

**速度 = `animation_base_duration_s`（秒數越大越慢）**

- 目前 Hero：`240s` 基準，各欄隨機 `240~400s`
- 目前 Staff：`280s` 基準，各欄隨機 `280~440s`

修改位置：
1. `css/main.css` → `.photo-wall .pw-col { animation: pw-drift Xs ... }` （Hero base）
2. `css/main.css` → `.section-staff .photo-wall .pw-col { animation: pw-drift Xs ... }` （Staff base）
3. `index.html` → `initPhotoWalls` 裡的 `animationDuration` 行（JS random range）

---

## 調整遮罩（Staff 區塊）

`.section-staff .staff-curtain { opacity: 0.8; }`

- 遮罩是從透明到背景色的 radial gradient
- `opacity` 越高 → 遮越多 → 照片越不明顯
- `opacity` 越低 → 遮越少 → 照片越明顯
- 建議範圍：`0.5`（明顯）～ `0.9`（幾乎看不到）

---

## 注意事項

- `iplayground_photowall.json` 是**記錄用**，不會被程式讀取，修改後要手動同步到 CSS
- 滾動動畫用 `transform: translateY(-50%)` 實現無縫循環，不要修改這個值
- `prefers-reduced-motion` 會自動停止動畫（無障礙設計，不要移除）
