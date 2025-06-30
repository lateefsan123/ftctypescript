// Style and theme configuration for characters
export type NavStyle = {
  base?: {
    backgroundColor?: string;
    color?: string;
    firstColor?: string;
    centerColor?: string;
    buttonBorder?: string;
    buttonColor?: string;
  };
  scrolled?: {
    backgroundColor?: string;
    color?: string;
    firstColor?: string;
    centerColor?: string;
    buttonBorder?: string;
    buttonColor?: string;
  };
  [key: string]: any;
};

// Carousel items of various types
export type CarouselItem = {
  type?: 'text' | 'achievement' | 'replay' | 'replaysmaller' | 'custom';
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  className?: string;
  content?: string;
  buttonLabel?: string;
  buttonIcon?: string;
  buttonLink?: string;
};

// Sidebar or section links
export type SectionLink = {
  title: string;
  url: string;
};

// A single tech/tutorial video entry
export type TechItem = {
  title: string;
  description: string;
  skill: 'beginner' | 'intermediate' | 'advanced' | string;
  link: string;
  image: string;
  '--base-color'?: string;
  '--dark-color'?: string;
  '--light-color'?: string;
};

// Streamer or labber social link
export type SocialLink = {
  platform: string;
  url: string;
  streamer?: string; // only needed for Twitch integration
};

// Streamer profile
export type Streamer = {
  name: string;
  image: string;
  links: SocialLink[];
};

// Labber profile
export type Labber = {
  name: string;
  image: string;
  links: SocialLink[];
};

export type Coaches = {
  name: string;
  image: string;
  links: SocialLink[];
};


// Tournament appearance
export type Tournament = {
  name: string;
  image: string;
  link: string;
  className?: string; // optional for layout flexibility
};

// A single character's full data entry
export type CharacterData = {
  name: string;
  image: string;
  background: string;
  navStyle: NavStyle;
  carousel: CarouselItem[];
  tech: TechItem[];
  streamers: Streamer[];
  labbers: Labber[];
  tournaments?: Tournament[];
  sidebar: SectionLink[];
  section: SectionLink[];
};

// Full map of all characters (e.g., `character.json`)
export type CharactersMap = Record<string, CharacterData>;
