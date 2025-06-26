// src/components/Slide.tsx

import React from 'react';
import type { CarouselItem, NavStyle } from '../types';

type SlideProps = {
  slide: CarouselItem;
  navStyle?: NavStyle;
};

const Slide: React.FC<SlideProps> = ({ slide, navStyle }) => {
  const {
    type,
    title,
    description,
    image,
    link,
    className = '',
    buttonLabel,
    buttonIcon,
    buttonLink,
    content,
  } = slide;

  const centerColor = navStyle?.base?.centerColor || 'orange';

  switch (type) {
    case 'achievement':
      return (
        <div
          className={`carousel-slide achievement ${className}`}
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => window.open(link, '_blank')}
        >
          <div className="redbull">{title}</div>
        </div>
      );

    case 'replay':
    case 'replaysmaller':
      return (
        <div className={`carousel-slide replay ${className}`}>
          <div className="leftthird">
            <h3>{title}</h3>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  color: centerColor,
                  border: `2px solid ${centerColor}`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = `-5px 5px 0px 0px ${centerColor}`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = 'none')
                }
              >
                {buttonLabel} <i className={buttonIcon}></i>
              </button>
            </a>
          </div>
          <div
            className="rightthird"
            style={{
              backgroundImage: `url(${image})`,
              ...(type === 'replaysmaller' ? { backgroundSize: 'contain' } : {}),
            }}
          />
        </div>
      );

    case 'text':
      const styledTitle = title?.replace('{color}', centerColor);
      return (
        <div className={`carousel-slide text ${className}`}>
          <h3 dangerouslySetInnerHTML={{ __html: styledTitle || '' }} />
          <p dangerouslySetInnerHTML={{ __html: description || '' }} />
        </div>
      );

    case 'custom':
      return (
        <div
          className={`carousel-slide ${className}`}
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
      );

    default:
      return (
        <div className="carousel-slide">
          <p>Unsupported slide type</p>
        </div>
      );
  }
};

export default Slide;
