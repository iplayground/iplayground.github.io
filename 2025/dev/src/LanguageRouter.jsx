import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import App from './App';

const supportedLangs = ['tw', 'en', 'jp'];

const LanguageRouter = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && supportedLangs.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <App />;
};

export default LanguageRouter;