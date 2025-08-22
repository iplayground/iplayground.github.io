import React, { useState, useEffect } from "react";
import './Schedule.css';
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import { FaRegClock } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import hackMD_icon from './assets/hackMD_icon.png';
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter, FaSquareThreads, FaGlobe } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Schedule = () => {
  const { t, i18n } = useTranslation();
  const [events, setEvents] = useState({ day1: [], day2: [] });
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch(t("schedule.apiUrl"))
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Failed to load schedule.json:", err));
  }, [i18n.language]);

  useEffect(() => {
    fetch(t("speakers.apiUrl"))
      .then(res => res.json())
      .then(data => setSpeakers(data))
      .catch(err => console.error("Failed to load speakers.json:", err));
  }, [i18n.language]);

  const EventCard = ({ event, speakers }) => {
    const [expanded, setExpanded] = useState(false);
    const canExpand = !!event.description || !!event.speaker;

    const speakerData = event.speakerID ? speakers.find(s => s.id === event.speakerID) : null;

    return (
      <div className="schedule-card">
        <div
          className="schedule-header"
          onClick={canExpand ? () => setExpanded(!expanded) : undefined}
          style={{ cursor: canExpand ? "pointer" : "default" }}
        >
          <div>
            <div className="schedule-time-container">
              <FaRegClock />
              <div className="schedule-time">{event.time}</div>
            </div>
            <div className="schedule-title">{event.title}</div>
          </div>
          {canExpand && (
            <div className="expand-icon">{expanded ? '▼' : '▶'}</div>
          )}
        </div>
        <div className="schedule-tags">
          {event.tags && event.tags.map((tag, i) => (
            <span key={i} className="schedule-tag">{tag}</span>
          ))}
        </div>
        {canExpand && expanded && (
          <div className="schedule-body">
            <div className="speaker-row">
              <RxAvatar className="speaker-icon" />
              {event.speaker && <div className="speaker-info">{event.speaker}</div>}
            </div>
            {event.description && event.description.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
            {event.hackMD && <div className="link-row" onClick={() => window.open(event.hackMD, "_blank")}>
              <img src={hackMD_icon} alt="HackMD" />
              <span className="link-text">{t("schedule.HackMDtitle")}</span>
            </div>}
            <div className="speaker-sns">
                          {speakerData.fb && (
                            <a className="sns-icon" href={speakerData.fb} target="_blank" rel="noopener noreferrer">
                              <SlSocialFacebook />
                            </a>
                          )}
                          {speakerData.github && (
                            <a className="sns-icon" href={speakerData.github} target="_blank" rel="noopener noreferrer">
                              <FaGithubSquare />
                            </a>
                          )}
                          {speakerData.linkedin && (
                            <a className="sns-icon" href={speakerData.linkedin} target="_blank" rel="noopener noreferrer">
                              <FaLinkedin />
                            </a>
                          )}
                          {speakerData.x && (
                            <a className="sns-icon" href={speakerData.x} target="_blank" rel="noopener noreferrer">
                              <FaXTwitter />
                            </a>
                          )}
                          {speakerData.threads && (
                            <a className="sns-icon" href={speakerData.threads} target="_blank" rel="noopener noreferrer">
                              <FaSquareThreads />
                            </a>
                          )}
                          {speakerData.url && (
                            <a className="sns-icon" href={speakerData.url} target="_blank" rel="noopener noreferrer">
                              <FaGlobe />
                            </a>
                          )}
              </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="schedule" className="schedule-section">
      <LogoStyleTitle text={t("schedule.title")} />
      <h1 className="day-title">Day 1</h1>
      <div className="schedule-list">
        {events.day1.map((event, index) => (
          <EventCard key={index} event={event} speakers={speakers} />
        ))}
      </div>
      <h1 className="day-title">Day 2</h1>
      <div className="schedule-list">
        {events.day2.map((event, index) => (
          <EventCard key={index} event={event} speakers={speakers} />
        ))}
      </div>
    </section>
  );
};

export default Schedule;