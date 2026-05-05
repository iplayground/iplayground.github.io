# iPlayground JSON 資料結構說明

本文件用「資訊區」整理目前站點主要資料來源與欄位，方便後續維護與擴充。操作向說明與範例見 [README.md](README.md)。

## 1) 議程（Sessions）
- 檔案：`data/iplayground_agenda.json`
- 用途：一般 session / break / special 議程資料

每筆物件欄位：
- `day`: 數字，1 或 2
- `time`: 時段字串，例如 `10:55 - 11:45`
- `track`: 類型，例如 `ios` / `break` / `special`
- `noModal`: 是否停用彈窗（通常 break 為 `true`）
- `title`: `{ zh, en }`
- `tags`: `{ zh: string[], en: string[] }`
- `speaker`: `null` 或物件
- `speaker.name`: `{ zh, en }`
- `speaker.avatar`: 圖片路徑
- `speaker.social`: 社群陣列（可為空）
- `description`: `{ zh, en }`
- `hackmd`: 字串（可空）

## 2) Workshop
- 檔案：`data/iplayground_workshops.json`
- 用途：工作坊資料（每天 4 場，獨立管理）
- 欄位結構：與議程資料一致，主要差異如下：
- `track`: 固定為 `workshop`
- `tags`: 建議第一個標籤為 `Workshop`，第二個標籤為場地（例如 `Room A`）

### 前端載入邏輯
- `index.html` 會先載入議程資料，再載入 `iplayground_workshops.json`
- 會將 workshop 合併進同一個 `AGENDA` 陣列，供 `SESSIONS / WORKSHOPS` 篩選使用

## 3) 講者（Speakers）
- 檔案：`data/iplayground_speakers.json`
- 用途：講者區塊與講者彈窗

每筆物件欄位：
- `name`
- `role`
- `company`
- `bio`
- `photo`
- `social`: 物件，常見鍵：
- `facebook`
- `twitter`（或 `x`）
- `instagram`
- `github`
- `linkedin`
- `threads`
- `url`

## 4) 工作人員（Staff）
- 檔案：`data/iplayground_staff.json`
- 用途：工作人員區塊

每筆物件欄位：
- `name`
- `role`
- `photo`
- `link`

## 5) 通用資料（Footer / 導覽連結）
- 檔案：`data/iplayground_links.json`
- 用途：社群、重要連結、聯絡資訊

頂層結構：
- `social`: 陣列
- `important`: 物件
- `contact`: 物件

`social` 每筆欄位：
- `id`
- `label`
- `url`
- `icon`

`important` 常見鍵：
- `cfp_form`（可為 `{ zh, en }`）
- `sponsor_referral`
- `venue_traffic`
- `coc`

`contact` 常見鍵：
- `support`
- `cfp`
- `sponsor`

