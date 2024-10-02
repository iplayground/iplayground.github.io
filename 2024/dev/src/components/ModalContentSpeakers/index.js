import React from 'react';

import './styles.css';

export default ({ video_url, alt, speakers, position, title, topic, abstract, onClickCloseBtn, sns_url }) => (
  <div className="modal-content-speakers">
    <a className="modal-content-speakers__close-btn" onClick={onClickCloseBtn} >&nbsp;</a>
    <div className="modal-content-speakers__img-section">
      <a href={sns_url} target="_blank" rel="noopener noreferrer">
        <img className="modal-content-speakers__img" src={video_url !== null && video_url !== "" ? video_url : "https://raw.githubusercontent.com/iplayground/SessionData/2024/v1/images/speakers/nopic.png"} alt={alt} />
      </a>
    </div>
    <div className="modal-content-speakers__txt-section">
      <p className="modal-content-speakers__name"><strong>{speakers[0].name}</strong></p>
      <p className="modal-content-speakers__position">{position}</p>
      <p className="modal-content-speakers__topic"><strong>{speakers[0].bio}</strong></p>
      <p className="modal-content-speakers__intro">{speakers[0].bioDetail}</p>
    </div>
  </div>
);
