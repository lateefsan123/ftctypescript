// src/components/VideoPlayer.tsx

import React, { useEffect } from 'react';

type VideoPlayerProps = {
  url?: string;
  onClose: () => void;
};

const isEmbeddableVideo = (url?: string): boolean => {
  return (
    !!url &&
    (url.includes('youtube.com/embed') || url.includes('player.vimeo.com'))
  );
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, onClose }) => {
  useEffect(() => {
    if (url && !isEmbeddableVideo(url)) {
      window.open(url, '_blank');
      onClose(); // Close modal if the link is not embeddable
    }
  }, [url, onClose]);

  if (!url || !isEmbeddableVideo(url)) return null;

  return (
    <div className="videoplayer active" onClick={onClose}>
      <button className="close-btn" onClick={onClose}>×</button>
      <iframe
        src={url}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onClick={(e) => e.stopPropagation()}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
