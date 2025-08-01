import React from 'react';
import './SponsorsLevelIcon.css';

const SponsorsLevelIcon = ({ iconSrc, label, alt, width = 40, height = 40 }) => {
  return (
    <div className="icon-label-container">
      <img
        src={iconSrc}
        alt={alt || label}
        className="icon-label-image"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <span className="icon-label-text">{label}</span>
    </div>
  );
};

export default SponsorsLevelIcon;