// src/components/CharacterSelect.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/characters.json';
import type { CharacterData } from '../types';

const CharacterSelect: React.FC = () => {
  const characters = Object.keys(data) as Array<keyof typeof data>;

  return (
    <div className="charselect">
      <h2>Select a Character</h2>
      <div className="charselect-grid">
        {characters.map((key) => {
          const character: CharacterData = data[key];
          return (
            <Link key={key} to={`/${key}`} className="charselect-card">
              <div className={`charface ${key}`}></div>
              <p>{character.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterSelect;
