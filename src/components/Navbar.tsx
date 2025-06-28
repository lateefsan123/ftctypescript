

import React, { useEffect, useState } from 'react';
import type { NavStyle } from '../types';

type NavbarProps = {
  name: string;
  styleData?: NavStyle;
};

const Navbar: React.FC<NavbarProps> = ({ name, styleData = {} }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const current = scrolled ? styleData.scrolled : styleData.base;
  const centerColor = current?.centerColor || 'orange';
  const linkTextColor = scrolled ? 'white' : 'black';

  return (
    <nav style={{ backgroundColor: current?.backgroundColor, color: current?.color }}>
      <h2 className="titletop">
        <span className="first" style={{ color: current?.firstColor }}>{name}</span>{' '}
        <span className="center" style={{ color: centerColor }}>Center</span>
      </h2>

      <div className="nav">
        <a href="#ctitle">
          <span
            className="nav-link"
            style={{
              '--underline-color': current?.firstColor,
              color: linkTextColor,
            } as React.CSSProperties}
          >
            Tech
          </span>
        </a>
        <a href="#stitle">
          <span
            className="nav-link"
            style={{
              '--underline-color': current?.firstColor,
              color: linkTextColor,
            } as React.CSSProperties}
          >
            Streamers
          </span>
        </a>
        <a href="#ltitle">
          <span
            className="nav-link"
            style={{
              '--underline-color': current?.firstColor,
              color: linkTextColor,
            } as React.CSSProperties}
          >
            Labbers
          </span>
        </a>
      </div>

      <a href="/">
        <button
          className={`changechar ${scrolled ? 'scrolled' : ''}`}
          style={{
            border: current?.buttonBorder,
            color: current?.buttonColor,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = scrolled ? 'transparent' : centerColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          change character
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
