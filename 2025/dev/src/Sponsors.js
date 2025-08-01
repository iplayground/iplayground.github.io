import './Sponsors.css';
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import LogoGrid from './LogoGrid';
import { useEffect, useState } from 'react';
import SponsorsLevelIcon from './SponsorsLevelIcon';
import diamond from './assets/diamond.png';
import sliver from './assets/sliver.png';
import copper from './assets/copper.png';

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
            <LogoStyleTitle className="special-thanks-title" text={t("sponsors.specialThankstitle")} />
            <LogoGrid data={sponsors.partner} columns={3} />
        </div>
        <div className="center-section">
            <LogoStyleTitle text={t("sponsors.sponsorsTitle")} />
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
            <div className='level-section'>
                <span className="icon-label-container">{t("sponsors.special")}</span>
            </div>
            <LogoGrid  data={specialItems} columns={1} />
        </div>
      {/* <div className="individual-section">
        <LogoStyleTitle text={t("sponsors.individualSponsorsTitle")} />
      </div> */}
    </section>
  );
};

export default Sponsors;