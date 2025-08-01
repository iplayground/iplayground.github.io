import background_2025 from './assets/background_2025.png';
import background_2025_medium from './assets/background_2025_medium.png';
import background_2025_small from './assets/background_2025_small.png';
import logo_small from './assets/logo_small.png';
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import './i18n/i18n';
import About from "./About";
import Schedule from "./Schedule";
import Staff from "./Staff";
import Location from "./Location";
import Speakers from "./Speakers";
import ResponsiveNavMenu from './ResponsiveNavMenu';
import { FaEnvelope, FaDiscord, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { useEffect } from 'react';

function App() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <picture>
          <source media="(max-width: 760px)" srcSet={background_2025_small} />
          <source media="(max-width: 1279px)" srcSet={background_2025_medium} />
          <img src={background_2025} alt="background" className="App-background" />
        </picture>
        <div className="navigation-wrapper">
          <ResponsiveNavMenu scrollToSection={scrollToSection} />
        </div>
        <h1 className="title">iPlayground<br />2025</h1>
        <div className="location">
          <Trans>addressTitle</Trans>
          <span className="datetime">2025.08.30-08.31</span>
        </div>
      </header>
      <main className='App-main'>
        <About id="about" />
        <Schedule id="schedule" />
        <Speakers id="speakers" />
        <Staff id="staff" />
        <Location id="venue" />
      </main>
      <div className="substack-embed-wrapper">
        <iframe
          src="https://iplayground.substack.com/embed"
          width="100%"
          height="400"
          style={{ border: "1px solid #ccc", borderRadius: "8px", background: "white" }}
          title="Substack Subscribe"
        ></iframe>
      </div>
      <footer className="App-footer">
        <img src={logo_small} alt="logo_small" className="footer-logo" />

        <div className="footer-icons">
          <a href="mailto:support@iplayground.io" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com/theiPlayground/" target="_blank" rel="noopener noreferrer">
            <SlSocialFacebook />
          </a>
          <a href="https://discord.gg/xS8yMKbbjB" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
          <a href="https://twitter.com/theiPlayground" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://youtube.com/@iplaygroundtaiwan" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-copy">
        iPlayground 2025 is organized by Taipei Elite Software Developer Association (77212283). All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
