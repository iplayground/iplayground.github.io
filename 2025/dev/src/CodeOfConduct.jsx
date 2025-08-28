import React from 'react';
import './CodeOfConduct.css';
import background_2025_medium from './assets/background_2025_medium.png';
import background_2025_small from './assets/background_2025_small.png';
import LogoStyleTitle from "./LogoStyleTitle";
import { useTranslation } from "react-i18next";
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const CodeOfConduct = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  const [content, setContent] = React.useState(t('codeOfConduct.content'));

  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  

  React.useEffect(() => {
  setContent(t('codeOfConduct.content'));
}, [i18n.language, t]);

  // const codeOfConductText = t('codeOfConduct.content');
  // console.log(codeOfConductText)

  return (
    <div className='coc-background'>
      <header>
          <picture>
            <source media="(max-width: 760px)" srcSet={background_2025_small} />
            <source media="(max-width: 1279px)" srcSet={background_2025_medium} />
          </picture>
          <LogoStyleTitle text={t("codeOfConduct.title")} />
          <section className="content-wrapper">
            <div className="intro-content">
              <div>
                <ReactMarkdown key={i18n.language}>{content}</ReactMarkdown>
              </div>
            </div>
          </section>
        </header>
    </div>
  )
};

export default CodeOfConduct;