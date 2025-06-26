import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { init } from '../utils/twitch'; // your Twitch live check logic

const Streamers = ({ data }) => {
  useEffect(() => {
    init(); // checks who is live
  }, []);

  return (
    <div className="streamers">
      {data.map((person, i) => (
        <div key={i} className="streamerpiece" style={{ position: 'relative' }}>
          <div className="title">{person.name}</div>

          {/* Profile Image */}
          <div
            className="face"
            style={{ backgroundImage: `url(${person.image})` }}
          ></div>

          {/* Live Badge (initially hidden) */}
          <div className="islive" style={{ display: 'none' }}>
            
          </div>

          {/* Social/Stream Links */}
          <div className="links">
            {person.links.map((link, j) => {
              const platform = link.platform.toLowerCase();
              const iconMap = {
                twitch: ['fab', 'twitch'],
                youtube: ['fab', 'youtube'],
                twitter: ['fab', 'x-twitter'],
              };
              const icon = iconMap[platform];
              const iconClass = `fa-brands fa-${platform}`;

              return (
                <a
                  key={j}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform === 'twitch' ? (
                    <FontAwesomeIcon
                      icon={icon}
                      className={`${iconClass} livebuttonn`}
                      data-streamer={link.streamer}
                    />
                  ) : platform === 'twitter' ? (
                    <div className="twitterholder">
                      <FontAwesomeIcon icon={icon} className={iconClass} />
                    </div>
                  ) : (
                    <FontAwesomeIcon icon={icon} className={iconClass} />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Streamers;
