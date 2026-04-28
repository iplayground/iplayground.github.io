# iPlayground 資料說明文件

所有網站資料集中在 `data/` 資料夾，以 JSON 格式儲存。  
修改資料只需編輯對應的 JSON 檔，不需要動 `index.html`。

---

## 檔案總覽

| 檔案 | 用途 |
|------|------|
| `iplayground_staff.json` | 工作人員名單 |
| `iplayground_news.json` | 最新消息列表 |
| `iplayground_agenda.json` | 議程列表 |
| `iplayground_cfp_steps.json` | 徵稿流程步驟 |
| `iplayground_config.json` | 全域設定（venue、footer 文字） |
| `iplayground_links.json` | 所有對外連結（社群、重要連結、聯絡信箱） |
| `iplayground_i18n.json` | 多語系介面文字（中文 / 英文） |

---

## iplayground_staff.json

工作人員卡片，每筆為一位成員。

```json
[
  {
    "name": "顯示名稱",
    "role": "職稱",
    "photo": "img/staff/檔名.jpg",
    "link": "https://twitter.com/帳號"
  }
]
```

| 欄位 | 說明 |
|------|------|
| `name` | 顯示名稱 |
| `role` | 職稱，顯示於名字下方 |
| `photo` | 照片路徑，留空或路徑錯誤時自動補 `img/staff/staff_sample.png` |
| `link` | 點擊頭像的連結，留空字串 `""` 則不加超連結 |

新增成員：在陣列末尾加一筆物件即可，一排自動顯示 6 人。

---

## iplayground_news.json

最新消息列表，依時間倒序排列（最新在最前）。

```json
[
  {
    "date": "2026.04.26",
    "title": {
      "zh": "中文標題",
      "en": "English Title"
    },
    "content": {
      "zh": "<p>中文內容，支援 HTML</p>",
      "en": "<p>English content, HTML supported</p>"
    },
    "url": "https://連結網址"
  }
]
```

| 欄位 | 說明 |
|------|------|
| `date` | 日期，格式 `YYYY.MM.DD` |
| `title` | 標題，支援中英文 |
| `content` | 內文，支援 HTML 標籤 |
| `url` | 點擊後的連結，站內錨點用 `#`，外部連結用完整 URL |

---

## iplayground_agenda.json

議程列表，每筆為一個議程項目。

```json
[
  {
    "time": "10:00",
    "track": "ios",
    "tag": "iOS",
    "title": "議程標題",
    "sub": "副標題或說明",
    "speaker": {
      "name": "講者姓名",
      "avatar": "頭像文字或 emoji"
    }
  }
]
```

| 欄位 | 說明 |
|------|------|
| `time` | 時間，如 `10:00` |
| `track` | 分類篩選用，可用值：`ios` / `ai` / `product` / `other` |
| `tag` | 顯示的標籤文字 |
| `title` | 議程標題 |
| `sub` | 副標題 |
| `speaker.name` | 講者姓名或時長說明 |
| `speaker.avatar` | 頭像顯示文字（縮寫、emoji 皆可） |

---

## iplayground_cfp_steps.json

徵稿流程的時間軸步驟，依序顯示。

```json
[
  {
    "name": { "zh": "4 月底", "en": "End of April" },
    "role": { "zh": "Step 01 · 標題", "en": "Step 01 · Title" },
    "topic": { "zh": "說明文字", "en": "Description" },
    "pic": "Idea",
    "threshold": "2026-04-30"
  }
]
```

| 欄位 | 說明 |
|------|------|
| `name` | 時間點顯示文字 |
| `role` | 步驟標題 |
| `topic` | 步驟說明 |
| `pic` | 圖示識別字（目前為文字佔位） |
| `threshold` | 判斷該步驟是否已過期的日期，格式 `YYYY-MM-DD` |

---

## iplayground_config.json

全域設定，不常變動。

```json
{
  "footerTagline": {
    "zh": "中文介紹文字",
    "en": "English description"
  },
  "venue": {
    "name": { "zh": "政大公企中心", "en": "NCCU CPBAE" },
    "mapUrl": "Google Maps embed URL",
    "parkingMapUrl": "停車場 Google Maps embed URL"
  }
}
```

| 欄位 | 說明 |
|------|------|
| `footerTagline` | Footer 底部的活動介紹文字 |
| `venue.mapUrl` | 會場 Google Maps 嵌入網址 |
| `venue.parkingMapUrl` | 停車場 Google Maps 嵌入網址 |

---

## iplayground_links.json

所有對外連結集中管理，修改一處全站同步。

```json
{
  "social": [
    {
      "id": "discord",
      "label": "Discord",
      "url": "https://discord.gg/...",
      "icon": "img/svg/media/discord.svg"
    }
  ],
  "important": {
    "cfp_form": "https://forms.gle/...",
    "sponsor_referral": "https://discord.com/...",
    "venue_traffic": "https://...",
    "coc": "https://github.com/..."
  },
  "contact": {
    "support": "mailto:support@iplayground.io",
    "cfp": "mailto:session@iplayground.io",
    "sponsor": "mailto:support@iplayground.io"
  }
}
```

### social
Hero 區塊與 Footer 的社群平台按鈕，順序即顯示順序。

| 欄位 | 說明 |
|------|------|
| `id` | 唯一識別，HTML 中以 `data-link="social_<id>"` 引用 |
| `label` | 無障礙標籤（aria-label） |
| `url` | 連結網址 |
| `icon` | SVG 圖示路徑 |

### important
重要功能連結，HTML 中以 `data-link="<key>"` 引用。

| Key | 用途 |
|-----|------|
| `cfp_form` | 講者投稿表單 |
| `sponsor_referral` | 贊助商洽談連結 |
| `venue_traffic` | 交通資訊頁面 |
| `coc` | 行為準則頁面 |

### contact
聯絡信箱，HTML 中以 `data-link="contact_<key>"` 引用。

---

## iplayground_i18n.json

所有介面文字的多語系對照，採 **key 為主軸** 的結構，中英文並排方便翻譯對照。

```json
{
  "nav_news": { "zh": "最新消息", "en": "Latest News" },
  "hero_date": { "zh": "7/25(六)～7/26(日)", "en": "July 25 (Sat) – 26 (Sun)" }
}
```

### 新增翻譯文字

1. 在 JSON 加一行：
   ```json
   "my_key": { "zh": "中文", "en": "English" }
   ```
2. HTML 元素加上屬性：
   ```html
   <span data-i18n="my_key">預設文字</span>
   ```
3. 支援 HTML 標籤，例如：
   ```json
   "news_heading": { "zh": "掌握 <span class=\"gradient\">iPlayground</span> 的動態", "en": "..." }
   ```

### 特殊 key

| Key | 說明 |
|-----|------|
| `footer_tagline` | 自動從 `iplayground_config.json` 的 `footerTagline` 取值，JSON 中標記為 `__from_config__` |
| `countdown_days/hours/minutes/seconds` | 倒數計時器單位，獨立四個 key |
