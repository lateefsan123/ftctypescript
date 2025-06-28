
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { init } from '../utils/twitch';
import type { Labber } from '../types';

type LabbersProps = {
  data: Labber[];
};

const Labbers: React.FC<LabbersProps> = ({ data }) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="labbers">
      {data.map((person, i) => (
        <div key={i} className="labberpiece" style={{ position: 'relative' }}>
          <div className="title">{person.name}</div>

          <div
            className="face"
            style={{ backgroundImage: `url(${person.image})` }}
          ></div>

          <div className="islive" style={{ display: 'none', zIndex: 1 }}></div>

          <div className="links">
            {person.links.map((link, j) => {
              const platform = link.platform.toLowerCase();
              const iconMap = {
                twitch: ['fab', 'twitch'],
                youtube: ['fab', 'youtube'],
                twitter: ['fab', 'x-twitter'],
              } as const;

              const icon = iconMap[platform as keyof typeof iconMap];
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

export default Labbers;
