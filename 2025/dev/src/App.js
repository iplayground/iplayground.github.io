import background_2025 from './assets/background_2025.png';
import logo_small from './assets/logo_small.png';
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import './i18n/i18n';
import LanguageSelector from './LanguageSelector';

function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    images[fileName] = r(key);
  });
  return images;
}

// ✅ 預先載入 assets 資料夾中的所有圖片（僅限單層）
const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function App() {
  const { t } = useTranslation();
  const appleInviteImage = t('appleInviesImage'); // 從翻譯中取得圖片檔名
  const imageSrc = images[appleInviteImage]; // 根據檔名找出對應圖片

  return (
    <div className="App">
      <header className="App-header">
        <img src={background_2025} alt="background" className="App-background" />
        <div>
          <LanguageSelector />
          <img src={logo_small} alt="logo_small" className="App-small-logo" />
        </div>

        <div className="main-title-container">
          <h1 className="main-title">
            <Trans>mainTitle</Trans>
          </h1>
          {imageSrc && (
            <a href="https://www.icloud.com/invites/083anHc2R-WHQa3psGabNHOIA" target="_blank" rel="noopener noreferrer">
            <img
              src={imageSrc}
              alt="Localized banner"
              className="main-title-image"
            />
            </a>
          )}
        </div>
        
        <a
          className="App-link"
          href={t('becomeASonsorLink')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {<Trans>becomeASonsorTitle</Trans>}
        </a>
        <a
          className="App-link"
          href={t('becomeASpeakerLink')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {<Trans>becomeASpeakerTitle</Trans>}
        </a>
      </header>
      <footer className="App-footer">
        iPlayground 2025 is organized by Taipei Elite Software Developer Association (77212283). All rights reserved.
      </footer>
    </div>
  );
}

export default App;
