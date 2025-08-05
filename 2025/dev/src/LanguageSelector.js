import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';
import { IoLanguage } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [selectLang, setSelectLang] = useState("Language");

  const toggleMenu = () => setOpen((prev) => !prev);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (lang) => {
    const langLower = lang.toLowerCase();
    i18n.changeLanguage(langLower);
    setSelectLang(lang);
    setOpen(false);

    const currentPath = location.pathname.split('/').slice(2).join('/');
    navigate(`/${langLower}/${currentPath}`);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <div className="lang-selector" ref={menuRef}>
      <button className='lang-button' onClick={toggleMenu}>
        <IoLanguage /><span className='lang-code'>{selectLang}</span>
        </button>
      {open && (
        <div className='lang-dropdown'>
          <button onClick={() => handleChange('TW')}>繁體中文</button>
          <button onClick={() => handleChange('EN')}>English</button>
          <button onClick={() => handleChange('JP')}>日本語</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;