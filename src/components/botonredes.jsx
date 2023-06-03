import React from 'react';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { facebook } from 'react-icons-kit/fa/facebook';
import { instagram } from 'react-icons-kit/fa/instagram';
import '../estilos/SocialButtons.css';
import { Link } from 'react-router-dom';

const SocialButtons = ({ size }) => {
  const buttonStyle = {
    width: size,
    height: size,
  };
  return (
    <div className="containredes">
      <div className="columnredes">
        <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <button className="social-button twitter-button" style={buttonStyle}>
            <Icon icon={twitter} size={35} />
          </button>
        </Link>
      </div>
      <div className="columnredes">
        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <button className="social-button facebook-button" style={buttonStyle}>
            <Icon icon={facebook} size={35} />
          </button>
        </Link>
      </div>
      <div className="columnredes">
        <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <button className="social-button instagram-button" style={buttonStyle}>
            <Icon icon={instagram} size={35} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SocialButtons;
