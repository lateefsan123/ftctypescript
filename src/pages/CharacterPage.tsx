import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rawData from '../data/characters.json';

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import TechGrid from '../components/TechGrid';
import Streamers from '../components/Streamers';
import Labbers from '../components/Labbers';
import TourneyWins from '../components/TourneyWins';
import SidebarMenu from '../components/SidebarMenu';
import SectionLinks from '../components/SectionLinks';
import FooterNav from '../components/FooterNav';
import VideoPlayer from '../components/VideoPlayer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { CharacterData, CharactersMap } from '../types';

const data: CharactersMap = rawData;

type Params = {
  char: string;
};

const CharacterPage: React.FC = () => {
  const { char: characterSlug } = useParams<Params>();
  const character: CharacterData | undefined = data[characterSlug];
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  if (!character) {
    return <div style={{ padding: '2rem' }}>Character not found.</div>;
  }

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${character.background})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundSize: 'cover',
    minHeight: '100vh',
    backgroundColor: 'rgb(97, 176, 196)',
    position: 'relative',
  };

  return (
    <>
      <main style={backgroundStyle}>
        <Navbar name={character.name} styleData={character.navStyle} />
        <div className="navspace"></div>

        <Carousel
          data={character.carousel}
          profileImage={character.image}
          navStyle={character.navStyle}
        />

    
        {character.tournaments?.length > 0 && (
          <TourneyWins data={character.tournaments} onVideoSelect={setVideoUrl} />
        )}

        <div className="combotitle">
          <h2 id="ctitle">Tech</h2>
        </div>
        <TechGrid
          data={character.tech}
          characterSlug={characterSlug}
          onVideoSelect={setVideoUrl}
        />

        <div className="streamertitle">
          <h2 id="stitle">
            Streamers <i className="fa-solid fa-signal-stream" />
          </h2>
        </div>
        <Streamers data={character.streamers} />

        <div className="labbertitle">
          <h2 id="ltitle">Labbers</h2>
        </div>
        <Labbers data={character.labbers} />
      </main>

      {/* Back to Top Button */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to Top"
      >
        <FontAwesomeIcon icon={['fas', 'up']} size="lg" />
      </button>

      <SidebarMenu links={character.sidebar} styleData={character.navStyle} />
      <SectionLinks data={character.section} navStyle={character.navStyle} />
      <VideoPlayer url={videoUrl} onClose={() => setVideoUrl(null)} />
      <FooterNav />
    </>
  );
};

export default CharacterPage;
