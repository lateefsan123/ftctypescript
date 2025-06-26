// src/components/SidebarMenu.tsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/pro-solid-svg-icons';
import type { SectionLink, NavStyle } from '../types';

type SidebarMenuProps = {
  links: SectionLink[];
  styleData?: NavStyle;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ links, styleData = {} }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((prev) => !prev);

  if (!Array.isArray(links)) return null;

  const toggleColor = styleData?.scrolled?.firstColor || '#ea772b';

  return (
    <>
      <div
        className="toggle"
        onClick={toggleSidebar}
        style={
          {
            '--toggle-color': toggleColor,
          } as React.CSSProperties
        }
      >
        <FontAwesomeIcon icon={open ? faX : faBars} />
      </div>

      <div className={`sidebar ${open ? '' : 'hidden'}`} id="sidebarMenu">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SidebarMenu;
