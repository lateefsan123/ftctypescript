// src/components/MusicPlayer.tsx

import React from 'react';

type MusicPlayerProps = {
  url?: string;
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({ url }) => {
  if (!url) return null;

  return (
    <audio autoPlay loop>
      <source src={`/music/${url}`} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MusicPlayer;
