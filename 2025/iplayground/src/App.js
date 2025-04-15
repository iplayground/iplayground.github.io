import logo_2024 from './assets/logo_2024.png';
import logo_small from './assets/logo_small.png';
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import './i18n/i18n';
import LanguageSelector from './LanguageSelector';

function App() {
  const { i18n, t } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tw' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_2024} alt="background" className="App-background" />

        <LanguageSelector/>

        <img src={logo_small} alt="logo_small" className="App-small-logo" />

        <p>
          <span className="main-title">{<Trans>mainTitle</Trans>}</span>
        </p>
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
