// src/components/TourneyWins.tsx

import React from 'react';
import type { Tournament } from '../types';

type TourneyWinsProps = {
  data?: Tournament[];
  onVideoSelect: (url: string) => void;
};

const TourneyWins: React.FC<TourneyWinsProps> = ({ data = [], onVideoSelect }) => {
  if (!data || data.length === 0) return null;

  return (
    <>
    <div className="tourneytitle">
          <h2 id="ttitle">Majors Won</h2>
        </div>
    <div className="tourneywins">
      {data.map((tourney, i) => (
        <div
          key={i}
          className="tourney-frame"
          onClick={() => onVideoSelect(tourney.link)}
        >
          <div
            className={`tourney ${tourney.className || ''}`}
            style={{ backgroundImage: `url(${tourney.image})` }}
          />
          <p>{tourney.name}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default TourneyWins;
