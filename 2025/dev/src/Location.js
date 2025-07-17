import LogoStyleTitle from "./LogoStyleTitle";
import './Location.css';
import { Trans, useTranslation } from "react-i18next";

const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <section id="venue" className="location-section">
      <LogoStyleTitle className="logo-title" text={t("location.title")} />

      <div className="location-text">
        <h3><Trans>addressTitle</Trans></h3>
        <p><Trans>location.address</Trans></p>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          allowFullScreen=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.116827838206!2d121.52504637615309!3d25.030109038446767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98364e9ea0f%3A0xc1736c6258ca4f72!2z5pS_5aSn5YWs5LyB5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1747361278407!5m2!1szh-TW!2stw"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="transport-info">
        <h2><Trans>location.transportationTitle</Trans></h2>

        <h3><Trans>location.byBusTitle</Trans></h3>
        <p><Trans>location.byBusContent</Trans></p>

        <h3><Trans>location.byMRTTitle</Trans></h3>
        <p><Trans>location.byMRTContent</Trans></p>

        <h3><Trans>location.contactNumberTitle</Trans></h3>
        <p><a href="tel:0223419151"><Trans>location.contactNumberContent</Trans></a></p>

        <h3><Trans>location.relatedLinksTitle</Trans></h3>
        <p><a href="https://cpbae.nccu.edu.tw/cpbae/traffic?random=1751004674691" className="transport-link" target="_blank" rel="noreferrer"><Trans>location.relatedLinksContent</Trans></a></p>
      </div>
    </section>
  );
};

export default LocationSection;