import './Sponsors.css';
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import LogoGrid from './LogoGrid';
import { useEffect, useState } from 'react';
import SponsorsLevelIcon from './SponsorsLevelIcon';
import diamond from './assets/diamond.png';
import sliver from './assets/sliver.png';
import copper from './assets/copper.png';
import logo_icon from "./logo.png";
import { MdAttachMoney } from "react-icons/md";


const IndividualCard = ({ name, title, photo, url }) => {
  const photoSrc = photo && photo.trim() !== "" ? photo : logo_icon;
    const CardInner = (
      <div className="staff-card">
        <div className="card-top">
          <div className="card-photo-wrapper">
            <img className="card-photo" src={photoSrc} alt={name} />
            <MdAttachMoney className="individual-corner-logo"/>
          </div>
        </div>
        <div className="individual-card-info">
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

const Sponsors = () => {
  const { t } = useTranslation();
  const [sponsors, setSponsors] = useState({sponsors: []});
  
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/iplayground/SessionData/refs/heads/2025/v1/sponsors.json")
        .then((res) => res.json())
        .then((data) => setSponsors(data))
        .catch((error) => console.error("Failed to load staff.json:", error));
    }, []);

    const diamondItems = sponsors?.sponsors?.find(s => s.title === "鑽石級")?.items ?? [];
    const sliverItems = sponsors?.sponsors?.find(s => s.title === "白銀級")?.items ?? [];
    const copperItems = sponsors?.sponsors?.find(s => s.title === "青銅級")?.items ?? [];
    const specialItems = sponsors?.sponsors?.find(s => s.title === "特別贊助")?.items ?? [];

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="special-thanks-section">
        <LogoStyleTitle className="sponsors-title" text={t("sponsors.specialThankstitle")} />
        <LogoGrid data={sponsors.partner} columns={3} />
      </div>
      <div className="center-section">
        <LogoStyleTitle className="sponsors-title" text={t("sponsors.sponsorsTitle")} />
          <div className='level-section'>
            <SponsorsLevelIcon iconSrc={diamond} label={t("sponsors.diamond")}/>
          </div>
          <LogoGrid className="diamond" data={diamondItems} columns={1} />
          <div className='level-section'>
            <SponsorsLevelIcon iconSrc={sliver} label={t("sponsors.silver")}/>
          </div>
          <LogoGrid className="sliver" data={sliverItems} columns={1} />
          <div className='copper-level-section'>
            <SponsorsLevelIcon iconSrc={copper} label={t("sponsors.bronze")}/>
          </div>
          <LogoGrid className="copper" data={copperItems} columns={2} />
          <div className='copper-level-section'>
            <SponsorsLevelIcon label={t("sponsors.special")}/>
          </div>
          <LogoGrid className="sliver" data={specialItems} columns={1} />
      </div>
      <div className='individual-background'>
        <div className="individual-section">
        <LogoStyleTitle text={t("sponsors.individualSponsorsTitle")} />
        <div className="staffs-grid">
          {(sponsors.personal ?? []).map((person, index) => (
            <IndividualCard
              key={index}
              name={person.name}
              title={person.title}
              photo={person.icon}
              url={person.link}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
    
  );
};

export default Sponsors;