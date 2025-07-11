import './Speakers.css';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import logo_icon from "./logo.png";
import { GrSwift } from "react-icons/gr";
import SpeakerModal from "./SpeakerModal";

const SpeakerCard = ({ name, title, photo, onClick }) => {
  const photoSrc = photo && photo.trim() !== "" ? photo : logo_icon;
  return (
    <div className="card-link-wrapper" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="staff-card">
        <div className="card-top">
          <div className="card-photo-wrapper">
            <img className="card-photo" src={photoSrc} alt={name} />
            <GrSwift className="corner-logo"/>
          </div>
        </div>
        <div className="card-info">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  const { t } = useTranslation();
  const [speakers, setStaffs] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/iplayground/SessionData/refs/heads/2025/v1/speakers.json")
      .then((res) => res.json())
      .then((data) => setStaffs(data))
      .catch((error) => console.error("Failed to load speakers.json:", error));
  }, []);

  return (
    <section id="speakers" className="section-speakers">
      <LogoStyleTitle text={t("speakers.title")} />
      <div className="staffs-grid">
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            title={speaker.title}
            photo={speaker.photo}
            url={speaker.url}
            onClick={() => setSelected(speaker)}
          />
        ))}
      </div>
      <SpeakerModal
        open={!!selected}
        onClose={() => setSelected(null)}
        speaker={selected}
      />
    </section>
  );
};

export default Speakers;