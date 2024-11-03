import React from 'react';
import _ from "lodash";
import { Trans } from 'react-i18next';
import './styles.css';

export default ({ session, onClickCloseBtn, speakers }) => {
  console.log('Schedule: ' ,session)
  return (
    <div className="modal-content-schedule">
      <a className="modal-content-schedule__close-btn" onClick={onClickCloseBtn} >&nbsp;</a>
      <div className="modal-content-schedule__txt-section">
        <p className="modal-content-schedule__topic">{session.topic}</p>
        <p className='modal-content-schedule_details'><Trans>schedule.details.title</Trans></p>
        <div>
          {
            _.map(session.tags, (tag) =>
              <div className="modal_tag">
                <img className="modal_tag_image" style={{ verticalAlign: "middle" }} src={require("../../images/" + tag + ".png")} alt='{tag}' />
                <span style={{ lineHeight: "32px" }}>{(() => {
                  switch (tag) {
                    case "english_talk": return "英語演說";
                    case "no_record": return "不提供錄影";
                    case "public_address": return "聯播場次";
                    default: return null;
                  }
                }
                )()}</span>
              </div>
            )
          }
        </div>
        <p dangerouslySetInnerHTML={{ __html: session.description }}></p>
        {(session.vodURL || session.hackmdURL) && (
            <div className='other_links_phone'>
              {session.vodURL && (
                <a href={session.vodURL} target="_blank" className='iconLinks'>
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  <span style={{ marginLeft: "0.5em" }}>Seminar Video</span>
                </a>
              )}
              {session.hackmdURL && (
                <a href={session.hackmdURL} target="_blank" className='iconLinks'>
                  <i className="fa fa-file-text" aria-hidden="true"></i>
                  <span style={{ marginLeft: "1.4em" }}>HackMD共筆</span>
                </a>
              )}
            </div>
        )}
        <div style={{ display: 'flex' }}>
          <div className='bottom-content'>
            <div className="modal-content-schedule_subtitle">{<Trans>schedule.speaker.title</Trans>}</div>
            <div className='modal-speaker-detail-speaker'>
              {

                _.map(session.presenter, ({ name, imgURL, snsURL }) =>
                    <div className="modal-speaker-detail-container">
                      <a href={snsURL} target="_blank" rel="noopener noreferrer">
                        <img className="modal-content-speakers__img" src={imgURL} alt="{name}" />
                      </a>
                      <p className="modal-content-schedule__presenter">{name}</p>
                    </div>
                )
              }
              {
                _.map(session.presenter2, ({ name, imgURL, snsURL }) =>
                  <div>
                    <div className="modal-speaker-detail-container">
                      <a href={snsURL} target="_blank" rel="noopener noreferrer">
                        <img className="modal-content-speakers__img" src={imgURL} alt="{name}" />
                      </a>
                      <p className="modal-content-schedule__presenter">{name}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          {(session.vodURL || session.hackmdURL) && (
            <div className='other_links_computer'>
              {session.vodURL && (
                <a href={session.vodURL} target="_blank" className='iconLinks'>
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  <span style={{ marginLeft: "0.5em" }}>Seminar Video</span>
                </a>
              )}
              {session.hackmdURL && (
                <a href={session.hackmdURL} target="_blank" className='iconLinks'>
                  <i className="fa fa-file-text" aria-hidden="true"></i>
                  <span style={{ marginLeft: "1.4em" }}>HackMD共筆</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
};
