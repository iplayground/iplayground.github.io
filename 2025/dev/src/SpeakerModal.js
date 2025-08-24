import React from "react";
import logo_icon from "./logo.png";
import "./SpeakerModal.css";
import { useTranslation } from "react-i18next";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter, FaSquareThreads, FaGlobe } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import hackMD_blue_icon from './assets/hackMD_blue_icon.png';

const SpeakerModal = ({ open, onClose, speaker }) => {
  const { t } = useTranslation();

  if (!open || !speaker) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
            <h1 className="modal-title">{t("speakers.modalTitle")}</h1>
            <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-speaker-row">
          <img
            className="modal-speaker-photo"
            src={speaker.photo && speaker.photo.trim() !== "" ? speaker.photo : logo_icon}
            alt={speaker.name}
          />
          <div className="modal-speaker-info">
            <h2 className="modal-speaker-name">{speaker.name}</h2>
            <p className="modal-speaker-title">{speaker.title}</p>
            <p className="modal-speaker-intro">
              {speaker.intro &&
                speaker.intro.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))
              }
            </p>
            {speaker.hackMD && <div className="modal-speaker-content" onClick={() => window.open(speaker.hackMD, "_blank")}>
              <img src={hackMD_blue_icon} alt="HackMD" />
              <span className="link-text">{t("schedule.HackMDtitle")}</span>
            </div>}
          </div>
        </div>
        <div className="modal-speaker-sns">
              {speaker.fb && (
                <a className="sns-icon" href={speaker.fb} target="_blank" rel="noopener noreferrer">
                  <SlSocialFacebook />
                </a>
              )}
              {speaker.github && (
                <a className="sns-icon" href={speaker.github} target="_blank" rel="noopener noreferrer">
                  <FaGithubSquare />
                </a>
              )}
              {speaker.linkedin && (
                <a className="sns-icon" href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {speaker.x && (
                <a className="sns-icon" href={speaker.x} target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </a>
              )}
              {speaker.threads && (
                <a className="sns-icon" href={speaker.threads} target="_blank" rel="noopener noreferrer">
                  <FaSquareThreads />
                </a>
              )}
              {speaker.url && (
                <a className="sns-icon" href={speaker.url} target="_blank" rel="noopener noreferrer">
                  <FaGlobe />
                </a>
              )}
          </div>
      </div>
    </div>
  );
};

export default SpeakerModal;