import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { init } from '../utils/twitch';
import type { Coaches } from '../types';

type CoachesProps = {
  data: Coaches[];
};

const Coaches: React.FC<CoachesProps> = ({ data }) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="coachestitle">
        <h2 id="ttitle">Coaches</h2>
      </div>
      <div className="coaches">
        {data.map((person, i) => (
          <div key={i} className="coachespiece" style={{ position: 'relative' }}>
            <div className="title">{person.name}</div>

            <div
              className="face"
              style={{ backgroundImage: `url(${person.image})` }}
            ></div>

            <div className="links">
              {person.links.map((link, j) => {
                const platform = link.platform.toLowerCase();
                const iconMap = {
                  metafy: ['fak', 'metafy'],
                } as const;

                const icon = iconMap[platform as keyof typeof iconMap];
                const iconClass = `fa-kit fa-${platform}`;

                return (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={icon} className={iconClass} bounce/>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Coaches;
