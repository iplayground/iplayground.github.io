import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css'; // 新增樣式檔

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [selected, setSelected] = useState(i18n.language.toUpperCase());

  const handleSelect = (code) => {
    setSelected(code);
    i18n.changeLanguage(code.toLowerCase());
  };

  const customLabels = {
    TW: t('lang.zh'),
    US: t('lang.en'),
    JP: t('lang.ja'),
  };

  return (
    <div className="language-selector-wrapper">
      <ReactFlagsSelect
        selected={selected}
        onSelect={handleSelect}
        countries={['TW', 'US', 'JP']}
        customLabels={customLabels}
        placeholder={`🌐 ${t('lang.placeholder')}`}
        className="custom-flags-select"
      />
    </div>
  );
};

export default LanguageSelector;