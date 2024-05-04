/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_TITLE: string;
    VITE_API_URL: string;
    VITE_API_MOCK?: unknown;
    hasOwnProperty(key: 'VITE_API_URL' | 'VITE_API_MOCK'): boolean;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}