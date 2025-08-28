import React from "react";
import './About.css';
import { Trans, useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import img1 from './assets/2019Day1.JPG';
import img2 from './assets/2019Day2.JPG';
import img3 from './assets/2020.JPG';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <LogoStyleTitle text={t("about.title")} />
      <section className="intro-wrapper">
        <div className="intro-content">
          <div className="intro-text">
            <p>
            <Trans>about.section1</Trans>
            </p>
            <p>
            <Trans>about.section2</Trans>
            </p>
            <p>
            <Trans>about.section3</Trans>
            </p>
          </div>
            <div className="intro-images">
            <img src={img1} alt="現場照片1" />
            <img src={img2} alt="識別證照片" />
            <img src={img3} alt="報到現場" />
            </div>
        </div>
      </section>
    </section>
  );
};

export default About;