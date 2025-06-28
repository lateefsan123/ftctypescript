// src/components/Carousel.tsx

import React, { useEffect, useState, useRef } from 'react';
import Slide from './Slide';
import Dots from './Dots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CarouselItem, NavStyle } from '../types';

type CarouselProps = {
  data: CarouselItem[];
  profileImage: string;
  navStyle?: NavStyle;
};

const Carousel: React.FC<CarouselProps> = ({ data, profileImage, navStyle }) => {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const centerColor = navStyle?.base?.centerColor || 'orange';

  const nextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % data.length);
      setFadeOut(false);
    }, 300);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 90000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="top" id="top">
      <div className="profilepic" style={{ backgroundImage: `url(${profileImage})` }} />
      <div className="description-container">
        <div className={`description ${fadeOut ? 'fade-out' : ''}`}>
          <Slide slide={data[index]} navStyle={navStyle} />
        </div>

        <Dots
          count={data.length}
          current={index}
          setIndex={setIndex}
          activeColor={centerColor}
        />

        <div className="arrow-next" onClick={nextSlide}>
          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
