import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SectionLink, NavStyle } from '../types';

type SectionLinksProps = {
  data: SectionLink[];
  navStyle?: NavStyle;
};

const SectionLinks: React.FC<SectionLinksProps> = ({ data, navStyle = {} }) => {
  const [playing, setPlaying] = useState(false);

  if (!Array.isArray(data)) return null;

  const musicItem = data.find((item) => item.title.toLowerCase() === 'music');
  const links = data.filter((item) => item.title.toLowerCase() !== 'music');
  const centerColor = navStyle?.base?.centerColor || '#ffffff';

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement | null;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!playing);
  };

  const iconMap: Record<string, [string, string]> = {
    discord: ['fab', 'discord'],
    'frame-data': ['fas', 'table-list'],
    document: ['fas', 'file-lines'],
  };

  // Converts "rgb(r,g,b)" to "rgba(r,g,b,0.35)"
  const backgroundColor =
    centerColor.includes('rgb') && centerColor.includes(',')
      ? centerColor.replace('rgb', 'rgba').replace(')', ', 0.35)')
      : 'rgba(0, 0, 0, 0.35)';

  return (
    <>
      <div
        className="section"
        style={{
          backgroundColor,
          padding: '0.75rem 1rem',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {links.map((item, i) => {
          const key = item.title.toLowerCase();
          const icon = iconMap[key];
          if (!icon) return null;

          return (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="icon-button"
            >
              <FontAwesomeIcon
                icon={icon}
                style={{ color: '#ffffff' }}
                size="xl"
              />
            </a>
          );
        })}

        {musicItem && (
          <div
            id="playBtn"
            className={`icon-button ${playing ? 'play' : ''}`}
            title={playing ? 'Pause Theme' : 'Play Theme'}
            onClick={toggleMusic}
            style={{ color: centerColor }}
          >
            <FontAwesomeIcon
              icon={['fas', playing ? 'play-pause' : 'play']}
              size="xl"
            />
          </div>
        )}
      </div>

      {musicItem && (
        <audio id="bgMusic" src={`/music/${musicItem.url}`} />
      )}
    </>
  );
};

export default SectionLinks;
