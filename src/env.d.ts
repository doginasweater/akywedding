/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly AKY_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}