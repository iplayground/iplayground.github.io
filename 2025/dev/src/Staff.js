import React from "react";
import "./Staff.css";
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";

const Staff = () => {
  const { t } = useTranslation();

  return (
    <section id="staff" className="section-staff">
        <LogoStyleTitle text={t("staff.title")} />
    </section>
  );
};

export default Staff;