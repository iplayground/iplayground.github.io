import React from "react";
import './About.css';
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <LogoStyleTitle text={t("about.title")} />
    </section>
  );
};

export default About;