// ResponsiveNavMenu.jsx
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ResponsiveNavMenu.css";
import LanguageSelector from "./LanguageSelector";

const ResponsiveNavMenu = ({ scrollToSection }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = (id) => {
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
        <div className="nav-desktop">
            <div className="navigation-buttons">
                <button onClick={() => scrollToSection("about")}>{t("about.title")}</button>
                <button onClick={() => scrollToSection("staff")}>{t("staff.title")}</button>
            </div>
            <div className="link-button">
              <a
                href="https://iplayground.kktix.cc/events/2025general"
                target="_blank"
                rel="noopener noreferrer"
                className="join-link-button"
              >
                {t("join")}
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfVBC-aK-8TbnN49471DwQJZAds_Yi95HWraOi8aXj1gbqXyQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="join-link-button"
              >
                {t("becomeASpeakerTitle")}
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
              <button onClick={() => handleClick("staff")}>{t("staff.title")}</button>
              <a
                href="https://iplayground.kktix.cc/events/2025general"
                target="_blank"
              >
                {t("join")}
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfVBC-aK-8TbnN49471DwQJZAds_Yi95HWraOi8aXj1gbqXyQ/viewform"
                target="_blank"
              >
                {t("becomeASpeakerTitle")}
              </a>
            </div>
            <div className="mobile-language-select">
              <button onClick={() => changeLanguage("tw")}>🇹🇼 {t('lang.zh')}</button>
              <button onClick={() => changeLanguage("us")}>🇺🇸 {t('lang.en')}</button>
              <button onClick={() => changeLanguage("jp")}>🇯🇵 {t('lang.ja')}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveNavMenu;