
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterNav: React.FC = () => {
  return (
    <footer className="mobile-navbar">
      <div className="footer-links">
        <a href="#ctitle">
          <FontAwesomeIcon icon={['fas', 'bolt']} className="fa-solid fa-bolt" />
          <span>Tech</span>
        </a>
        <a href="#stitle">
          <FontAwesomeIcon icon={['fas', 'video']} className="fa-solid fa-video" />
          <span>Streamers</span>
        </a>
        <a href="#ltitle">
          <FontAwesomeIcon icon={['fas', 'flask']} className="fa-solid fa-flask" />
          <span>Labbers</span>
        </a>
      </div>
    </footer>
  );
};

export default FooterNav;
