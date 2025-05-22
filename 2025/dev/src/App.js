import background_2025 from './assets/background_2025.png';
import logo_small from './assets/logo_small.png';
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import './i18n/i18n';
import LanguageSelector from './LanguageSelector';
import About from "./About";
import Staff from "./Staff";
import Location from "./Location";

function App() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={background_2025} alt="background" className="App-background" />
        <div className="navigation-wrapper">
          <div className="navigation-buttons">
            <button onClick={() => scrollToSection("about")}>{t("about.title")}</button>
            <button onClick={() => scrollToSection("staff")}>{t("staff.title")}</button>
          </div>
          <LanguageSelector />
        </div>
        <img src={logo_small} alt="logo_small" className="App-small-logo" />
        <h1 className="title">iPlayground<br />2025</h1>
        <div className="location">
          <Trans>addressTitle</Trans>
          <span className="datetime">2025.08.30-08.31 13:00-18:00</span>
        </div>
      </header>
      <main className='App-main'>
        <About />
        <Staff />
        <Location />
      </main>
      <footer className="App-footer">
        iPlayground 2025 is organized by Taipei Elite Software Developer Association (77212283). All rights reserved.
      </footer>
    </div>
  );
}

export default App;
