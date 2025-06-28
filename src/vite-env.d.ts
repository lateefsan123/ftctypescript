/// <reference types="vite/client" />

// Env variables from .env
interface ImportMetaEnv {
  readonly VITE_TWITCH_CLIENT_ID: string;
  readonly VITE_TWITCH_CLIENT_SECRET: string;
  // Add more as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Asset imports
declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
