// src/utils/iconLibrary.ts

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faBars,
  faBolt,
  faFileLines,
  faFlask,
  faPlay,
  faTableList,
  faVideo,
  faX,
  faSignalStream,
  faPlayPause,
  faUp,
} from '@fortawesome/pro-solid-svg-icons';


import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const faMetafy: IconDefinition = {
  prefix: 'fak',
  iconName: 'metafy',
  icon: [
    672,
    512,
    [],
    'e000',
    'M575.7 418c0 .4-.2 .8-.4 1.1s-.5 .6-.8 .8s-.7 .4-1.1 .4s-.8 .1-1.1 0c-53.2-14.4-139.6-23.9-237.3-23.9s-184.1 9.4-237.3 23.9c-.4 .1-.8 .1-1.1 0s-.7-.2-1.1-.4s-.6-.5-.8-.8s-.3-.7-.4-1.1L67 183.7c-.1-.3 0-.6 .1-.9s.3-.6 .6-.7s.6-.3 .9-.3s.6 0 .9 .2l149.2 73.4c1.1 .6 2.4 .8 3.6 .5s2.3-1 3.1-2L333.5 97c.2-.2 .4-.4 .6-.6s.5-.2 .8-.2s.6 .1 .8 .2s.5 .3 .6 .6L444.6 253.7c.7 1.1 1.8 1.8 3 2.2s2.6 .2 3.7-.4l149.2-73.4c.3-.1 .6-.2 .9-.2s.6 .1 .9 .3s.5 .4 .6 .7s.2 .6 .1 .9L575.7 418zM464.4 183.4L339.5 2.3c-.5-.7-1.2-1.3-1.9-1.7s-1.6-.6-2.5-.6s-1.7 .2-2.5 .6s-1.4 1-1.9 1.7l-124.9 181c-.4 .5-.9 .9-1.5 1.1s-1.3 .1-1.9-.2L8.1 88.6c-.9-.4-1.8-.6-2.8-.5s-1.9 .4-2.7 1s-1.4 1.3-1.8 2.2s-.5 1.9-.4 2.8l42.1 361c3.1 31.2 132.9 56.3 292.6 56.3s289.5-25.1 292.6-56.3l42.1-361c.1-1 0-1.9-.4-2.8s-1-1.7-1.8-2.2s-1.7-.9-2.7-1s-1.9 .1-2.8 .5L467.7 184.1c-.6 .3-1.2 .4-1.8 .2s-1.2-.5-1.6-1zM405.9 317.7c3.5-25.8-5.9-48.4-21-50.5s-30.1 17.1-33.6 43s5.9 48.4 21 50.5s30.1-17 33.6-43zM520 331.5c2.9-21.1-4.7-39.5-16.9-41.2s-24.6 14-27.3 35.1s4.8 39.5 17 41.2s24.5-13.9 27.2-35.1z'
  ],
};



import {
  faTwitch,
  faYoutube,
  faXTwitter,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';


library.add(
  faArrowRight,
  faBars,
  faBolt,
  faFileLines,
  faFlask,
  faPlay,
  faTableList,
  faVideo,
  faX,
  faSignalStream,
  faTwitch,
  faYoutube,
  faXTwitter,
  faDiscord,
  faPlayPause,
  faUp,
);

library.add(faMetafy);
