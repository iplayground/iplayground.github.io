import React from 'react';
import './SponsorsLevelIcon.css';

const SponsorsLevelIcon = ({ iconSrc, label, alt, width = 40, height = 40 }) => {
  return (
    <div className="line-cover">
      <div className="sponsors-level-wrapper">
        <div className="sponsors-level-line" />
          <div className="sponsors-level-content">
            {iconSrc && (
              <img
                src={iconSrc}
                alt={alt || label}
                className="sponsors-level-image"
                style={{ width: `${width}px`, height: `${height}px` }}
              />
            )}
            <span className="sponsors-level-text">{label}</span>
          </div>
        <div className="sponsors-level-line" />
      </div>
    </div>
  );
};

export default SponsorsLevelIcon;