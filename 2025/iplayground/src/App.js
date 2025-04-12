import logo_2024 from './assets/logo_2024.png';
import logo_small from './assets/logo_small.png';
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import './i18n/i18n';

function App() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tw' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_2024} alt="background" className="App-background" />

        {/* <button className="lang-toggle" onClick={toggleLanguage}>
        <Trans>languageName</Trans>
        </button> */}

        {/* 語言切換 */}
        <div className="lang-toggle-wrapper">
          <span className={!isEnglish ? 'active-lang' : ''}>{<Trans>chineseLanguageName</Trans>}</span>
          <label className="lang-switch">
            <input
              type="checkbox"
              checked={isEnglish}
              onChange={toggleLanguage}
            />
            <span className="lang-slider"></span>
          </label>
          <span className={isEnglish ? 'active-lang' : ''}>{<Trans>englishLanguageName</Trans>}</span>
        </div>

        <img src={logo_small} alt="logo_small" className="App-small-logo" />

        <p>
          <span className="main-title">{<Trans>mainTitle</Trans>}</span>
        </p>
        <a
          className="App-link"
          href="https://forms.gle/AjnTJEYkA6sUR5Pp6"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<Trans>becomeASonsorLink</Trans>}
        </a>
        <a
          className="App-link"
          href="https://forms.gle/AjnTJEYkA6sUR5Pp6"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<Trans>becomeASpeakerLink</Trans>}
        </a>
      </header>
      <footer className="App-footer">
        iPlayground 2025 is organized by Taipei Elite Software Developer Association (77212283). All rights reserved.
      </footer>
    </div>
  );
}

export default App;
