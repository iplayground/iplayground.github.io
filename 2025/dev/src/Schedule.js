import React, { useState, useEffect } from "react";
import './Schedule.css';
import { useTranslation } from "react-i18next";
import LogoStyleTitle from "./LogoStyleTitle";
import { FaRegClock } from "react-icons/fa6";

const Schedule = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState({ day1: [], day2: [] });

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/iplayground/SessionData/refs/heads/2025/v1/schedule.json")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Failed to load schedule.json:", err));
  }, []);

  const EventCard = ({ event }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div className="schedule-card">
        <div className="schedule-header" onClick={() => setExpanded(!expanded)}>
          <div>
            <div className="schedule-time-container">
              <FaRegClock />
              <div className="schedule-time">{event.time}</div>
            </div>
            <div className="schedule-title">{event.title}</div>
          </div>
          <div className="expand-icon">{expanded ? '▼' : '▶'}</div>
        </div>
        <div className="schedule-tags">
          {event.tags && event.tags.map((tag, i) => (
            <span key={i} className="schedule-tag">{tag}</span>
          ))}
        </div>
        {expanded && (
          <div className="schedule-body">
            <div className="speaker-info">{event.speaker}</div>
            {event.description && <div className="schedule-description">{event.description}</div>}
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
          <EventCard key={index} event={event} />
        ))}
      </div>
      <h1 className="day-title">Day 2</h1>
      <div className="schedule-list">
        {events.day2.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Schedule;