import { useEffect, useState } from "react";
import "./Staff.css";
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import logo_icon from "./logo.png";

const StaffCard = ({ name, title, photo, url }) => {
  const photoSrc = photo && photo.trim() !== "" ? photo : logo_icon;
    const CardInner = (
      <div className="staff-card">
        <div className="card-top">
          <img className="card-photo" src={photoSrc} alt={name} />
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
      CardInner
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