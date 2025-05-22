import LogoStyleTitle from "./LogoStyleTitle";
import './Location.css';

const LocationSection = () => {
  return (
    <section className="location-section">
      <LogoStyleTitle className="logo-title" text="活動地點" />

      <div className="location-text">
        <h3>政大公企中心</h3>
        <p>106 台北市大安區金華街 187 號</p>
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
    </section>
  );
};

export default LocationSection;