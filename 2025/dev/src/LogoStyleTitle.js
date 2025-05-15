import React from 'react';
import PropTypes from 'prop-types';
import './LogoStyleTitle.css';
import logoStyle_title from './assets/logoStyle_title.png';

const LogoStyleTitle = ({ text }) => {
  return (
    <div className="decorated-heading">
      <div className="heading-icons">
        <img src={logoStyle_title} alt="" />
      </div>

      <h2 className="heading-text">{text}</h2>

      <div className="heading-icons">
      <img src={logoStyle_title} alt="" />
      </div>
    </div>
  );
};

LogoStyleTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LogoStyleTitle;