// src/components/Dots.tsx

import React from 'react';

type DotsProps = {
  count: number;
  current: number;
  setIndex: (index: number) => void;
  activeColor: string;
};

const Dots: React.FC<DotsProps> = ({ count, current, setIndex, activeColor }) => (
  <div className="carousel-dots">
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className={`dot ${i === current ? 'active' : ''}`}
        onClick={() => setIndex(i)}
        style={i === current ? { backgroundColor: activeColor } : {}}
      />
    ))}
  </div>
);

export default Dots;
