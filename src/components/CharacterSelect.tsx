import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterSelectPage.module.css';

import kimGif from './characterGifs/kimgif.gif';
import rashidGif from './characterGifs/rashidgif.gif';
import kenMastersGif from './characterGifs/kenmasters.gif';
import akumaGif from './characterGifs/akumagif.gif';
import bisonGif from './characterGifs/bisongif.gif';
import blankaGif from './characterGifs/blankagif.gif';
import cammyGif from './characterGifs/cammygif.gif';
import chunliGif from './characterGifs/chunligif.gif';
import deejayGif from './characterGifs/deejaygif.gif';
import dhalsimGif from './characterGifs/simgif.gif';
import hondaGif from './characterGifs/hondagif.gif';
import edGif from './characterGifs/edgif.gif';
import jamieGif from './characterGifs/jamiegif.gif';
import jpGif from './characterGifs/jpgif.gif';
import juriGif from './characterGifs/jurigif.gif';
import ryuGif from './characterGifs/ryu.gif';
import terryGif from './characterGifs/terrygif.gif';
import zangiefGif from './characterGifs/gief.gif';
import akiGif from './characterGifs/akigif.gif';
import lilyGif from './characterGifs/lily.gif';
import manonGif from './characterGifs/ManonGif.gif';
import lukeGif from './characterGifs/luke.gif';
import guileGif from './characterGifs/newguile.gif';
import marisaGif from './characterGifs/MarissaGif.gif';
import maiGif from './characterGifs/MaiGif.gif';
import elenaGif from './characterGifs/elena.gif';
import sagat from './characterGifs/sagat.png';

const characterData = {
  char1: { name: 'Kimberly', weight: '134', height: "5'6", archetype: 'Rushdown', easeOfUse: 'Normal', num: 'no4', background: `url(${kimGif})` },
  char2: { name: 'Rashid', weight: '187', height: "5'10", archetype: 'Rushdown', easeOfUse: 'Hard', num: 'no19', background: `url(${rashidGif})` },
  char3: { name: 'Ken', weight: '183', height: "5'9", archetype: 'Shoto', easeOfUse: 'Normal', num: 'no15', background: `url(${kenMastersGif})` },
  char4: { name: 'Akuma', weight: '198', height: "5'10", archetype: 'Shoto', easeOfUse: 'Normal', num: 'no22', background: `url(${akumaGif})` },
  char5: { name: 'Bison', weight: '247', height: "6'0", archetype: 'Rushdown', easeOfUse: 'Hard', num: 'no23', background: `url(${bisonGif})` },
  char6: { name: 'Blanka', weight: '216', height: "6'4", archetype: 'Trickster', easeOfUse: 'Normal', num: 'no24', background: `url(${blankaGif})` },
  char7: { name: 'Cammy', weight: '134', height: "5'5", archetype: 'Rushdown', easeOfUse: 'Normal', num: 'no10', background: `url(${cammyGif})` },
  char8: { name: 'Chun-Li', weight: 'secret♡', height: "5'7", archetype: 'Defensive', easeOfUse: 'Hard', num: 'no16', background: `url(${chunliGif})` },
  char9: { name: 'DeeJay', weight: '203', height: "6'0", archetype: 'Trickster', easeOfUse: 'Normal', num: 'no9', background: `url(${deejayGif})` },
  char10: { name: 'Dhalsim', weight: '106', height: "5'9", archetype: 'Zoner', easeOfUse: 'Hard', num: 'no18', background: `url(${dhalsimGif})` },
  char11: { name: 'Honda', weight: '302', height: "6'1", archetype: 'Defensive', easeOfUse: 'Normal', num: 'no12', background: `url(${hondaGif})` },
  char12: { name: 'Ed', weight: '190', height: "6'0", archetype: 'Defensive', easeOfUse: 'Hard', num: 'no21', background: `url(${edGif})` },
  char13: { name: 'Jamie', weight: '170', height: "5'9", archetype: 'Trickster', easeOfUse: 'Normal', num: 'no2', background: `url(${jamieGif})` },
  char14: { name: 'JP', weight: '214', height: "6'3", archetype: 'Zoner', easeOfUse: 'Hard', num: 'no7', background: `url(${jpGif})` },
  char15: { name: 'Juri', weight: '126', height: "5'5", archetype: 'Rushdown', easeOfUse: 'Hard', num: 'no8', background: `url(${juriGif})` },
  char16: { name: 'Ryu', weight: '187', height: "5'9", archetype: 'Shoto', easeOfUse: 'Normal', num: 'no11', background: `url(${ryuGif})` },
  char17: { name: 'Terry', weight: '170', height: "6'0", archetype: 'Shoto', easeOfUse: 'Normal', num: 'no17', background: `url(${terryGif})` },
  char18: { name: 'Zangief', weight: '399', height: "7'0", archetype: 'Grappler', easeOfUse: 'Hard', num: 'no17', background: `url(${zangiefGif})` },
  char19: { name: 'Aki', weight: '126', height: "5'8", archetype: 'Rushdown/Zoner', easeOfUse: 'Hard', num: 'no20', background: `url(${akiGif})` },
  char20: { name: 'Lily', weight: '106', height: "5'3", archetype: 'Grappler', easeOfUse: 'Easy', num: 'no6', background: `url(${lilyGif})` },
  char21: { name: 'Manon', weight: '145', height: "6'1", archetype: 'Grappler', easeOfUse: 'Normal', num: 'no3', background: `url(${manonGif})` },
  char22: { name: 'Luke', weight: '198', height: "6'1", archetype: 'Shoto', easeOfUse: 'Normal', num: 'no1', background: `url(${lukeGif})` },
  char23: { name: 'Guile', weight: '218', height: "6'0", archetype: 'Zoner', easeOfUse: 'Normal', num: 'no14', background: `url(${guileGif})` },
  char24: { name: 'Marisa', weight: '269', height: "6'8", archetype: 'Big Body', easeOfUse: 'Easy', num: 'no5', background: `url(${marisaGif})` },
  char25: { name: 'Mai', weight: '110', height: "5'5", archetype: 'Rushdown', easeOfUse: 'Normal', num: 'no25', background: `url(${maiGif})` },
  char26: { name: 'Elena', weight: '129', height: "6'1", archetype: 'Defensive', easeOfUse: 'Hard', num: 'no26', background: `url(${elenaGif})` },
  char27: { name: 'Sagat', weight: '98kg', height: "7'5", archetype: 'Defensive', easeOfUse: 'Normal', num: 'no27', background: `url(${sagat})` },
};

const fighters = Object.entries(characterData).map(([charId, data]) => ({
  charId,
  link: data.name.toLowerCase().replace(/[^a-z0-9]/gi, '-'),
  name: data.name,
}));

const CharacterSelect: React.FC = () => {
  const [selectedFighter, setSelectedFighter] = useState(characterData.char1);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const rowSize = 5;
      const total = fighters.length;
      let next = focusedIndex;

      switch (e.key) {
        case 'ArrowRight':
          next = (focusedIndex + 1) % total;
          break;
        case 'ArrowLeft':
          next = (focusedIndex - 1 + total) % total;
          break;
        case 'ArrowDown':
          next = (focusedIndex + rowSize) % total;
          break;
        case 'ArrowUp':
          next = (focusedIndex - rowSize + total) % total;
          break;
        default:
          return;
      }

      setFocusedIndex(next);
      document.querySelectorAll(`.${styles.fighter}`)[next]?.focus();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex]);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.holder}>
          <div className={styles.top}>Select Your Fighter</div>
        </div>
        <div className={styles.middle}>
          {fighters.map((fighter, index) => (
            <Link key={fighter.charId} to={`/${fighter.link}`}>
              <button
                className={`${styles.fighter} ${styles.out} ${styles[fighter.link.toLowerCase()]}`}
                data-fighter={fighter.charId}
                onMouseEnter={() => setSelectedFighter(characterData[fighter.charId])}
                tabIndex={index === focusedIndex ? 0 : -1}
              >
                <span>{fighter.name}</span>
                <span className={styles.live}></span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.top}>
          <p className={styles.charname}>{selectedFighter.name}</p>
          <p className={styles.charnumber}>{selectedFighter.num}</p>
        </div>
        <div className={styles.middle}>
          <div className={styles.details}>
            <div className={styles.weight}>
              <p className={styles.header}>Weight</p>
              <p>{selectedFighter.weight}</p>
            </div>
            <div className={styles.height}>
              <p className={styles.header}>Height</p>
              <p>{selectedFighter.height}</p>
            </div>
            <div className={styles.archetype}>
              <p className={styles.header}>Archetype</p>
              <p>{selectedFighter.archetype}</p>
            </div>
            <div className={styles.easeOfUse}>
              <p className={styles.header}>Ease of Use</p>
              <p>{selectedFighter.easeOfUse}</p>
            </div>
          </div>
          <div
            className={styles.preview}
            style={{
              backgroundImage: selectedFighter.background,
              opacity: selectedFighter.opacity || 1,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
