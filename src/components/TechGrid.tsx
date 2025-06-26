// src/components/TechGrid.tsx

import React from 'react';
import type { TechItem } from '../types';

type TechGridProps = {
  data: TechItem[];
  onVideoSelect: (url: string) => void;
};

const TechGrid: React.FC<TechGridProps> = ({ data, onVideoSelect }) => {
  return (
    <div className="combos">
      {data.map((item, i) => (
        <div
          key={i}
          className="combopiece"
          onClick={() => onVideoSelect(item.link)}
          style={
            {
              '--base-color': item['--base-color'],
              '--dark-color': item['--dark-color'],
              '--light-color': item['--light-color'],
            } as React.CSSProperties
          }
        >
          <div
            className="upper"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundColor: 'var(--base-color)',
            }}
          ></div>

          <div className="lower">
            <span className={`skill-tag ${item.skill.toLowerCase()}`}>
              {item.skill}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
