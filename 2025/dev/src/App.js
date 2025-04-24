import logo_2024 from './assets/logo_2024.png';
import background_2025 from './assets/background_2025.png';
import logo_small from './assets/logo_small.png';
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import './i18n/i18n';
import LanguageSelector from './LanguageSelector';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={background_2025} alt="background" className="App-background" />
        <div>
          <LanguageSelector />
          <img src={logo_small} alt="logo_small" className="App-small-logo" />
        </div>

        <h1 className="main-title">
         {<Trans>mainTitle</Trans>}
        </h1>
        
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
