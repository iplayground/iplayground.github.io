import { useEffect, useState } from "react";
import "./Staff.css";
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import logo_icon from "./logo.png";
import logoStyle_title from './assets/logoStyle_title.png';

const StaffCard = ({ name, title, photo, url }) => {
  const photoSrc = photo && photo.trim() !== "" ? photo : logo_icon;
    const CardInner = (
      <div className="staff-card">
        <div className="card-top">
          <div className="card-photo-wrapper">
            <img className="card-photo" src={photoSrc} alt={name} />
            <img className="corner-logo" src={logoStyle_title} alt="corner logo" />
          </div>
        </div>
        <div className="card-info">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    );
  
    return url ? (
      <a href={url} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
        {CardInner}
      </a>
    ) : (
      <a className="card-link-wrapper">{CardInner}</a>
    );
  };

const Staff = () => {
  const { t } = useTranslation();
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/iplayground/SessionData/refs/heads/2025/v1/staffs.json")
      .then((res) => res.json())
      .then((data) => setStaffs(data))
      .catch((error) => console.error("Failed to load staff.json:", error));
  }, []);

  return (
    <section id="staff" className="section-staff">
        <LogoStyleTitle text={t("staff.title")} />
        <div className="staffs-grid">
      {staffs.map((staff, index) => (
        <StaffCard
          key={index}
          name={staff.name}
          title={staff.title}
          photo={staff.photo}
          url={staff.url}
        />
      ))}
    </div>
    </section>
  );
};

export default Staff;