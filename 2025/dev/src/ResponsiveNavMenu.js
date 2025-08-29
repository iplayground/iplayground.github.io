// ResponsiveNavMenu.jsx
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ResponsiveNavMenu.css";
import LanguageSelector from "./LanguageSelector";
import logo_small from './assets/logo_small.png';

const ResponsiveNavMenu = ({ scrollToSection }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = (id) => {
    window.location.hash = `#${id}`;
    scrollToSection(id);
    setOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
  
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="nav-container">
      <img src={logo_small} alt="logo_small" className="app-small-logo" />
        <div className="nav-desktop">
            <div className="navigation-buttons">
                <button onClick={() => handleClick("about")}>{t("about.title")}</button>
                <button onClick={() => handleClick("schedule")}>{t("schedule.title")}</button>
                <button onClick={() => handleClick("speakers")}>{t("speakers.title")}</button>
                <button onClick={() => handleClick("staff")}>{t("staff.title")}</button>
                <button onClick={() => handleClick("sponsors")}>{t("sponsors.sponsorsTitle")}</button>
            </div>
            <div className="link-button">
              <a
                href="https://hackmd.io/@iPlayground/2025"
                target="_blank"
                rel="noopener noreferrer"
                className="join-link-button"
              >
                {t("hackMD")}
              </a>
            </div>
            <LanguageSelector/>
        </div>
        <div className="nav-mobile">
        <button
            ref={buttonRef}
            className="hamburger-btn"
            onClick={() => setOpen((prev) => !prev)}>☰
            </button>
        {open && (
          <div className="mobile-fullscreen-menu" ref={menuRef}>
            <div className="mobile-menu-links">
              <button onClick={() => handleClick("about")}>{t("about.title")}</button>
              <button onClick={() => handleClick("schedule")}>{t("schedule.title")}</button>
              <button onClick={() => handleClick("speakers")}>{t("speakers.title")}</button>
              <button onClick={() => handleClick("staff")}>{t("staff.title")}</button>
              <button onClick={() => handleClick("sponsors")}>{t("sponsors.sponsorsTitle")}</button>
              <a
                href="https://hackmd.io/@iPlayground/2025"
                target="_blank"
              >
                {t("hackMD")}
              </a>
            </div>
            <div className="mobile-language-select">
              <button onClick={() => changeLanguage("tw")}>🇹🇼 {t('lang.zh')}</button>
              <button onClick={() => changeLanguage("en")}>🇺🇸 {t('lang.en')}</button>
              <button onClick={() => changeLanguage("jp")}>🇯🇵 {t('lang.ja')}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveNavMenu;