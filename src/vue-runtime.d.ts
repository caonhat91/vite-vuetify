/// <reference types="vite/client" />

export { }

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $env: ImportMetaEnv;
        // Add other global properties here
    }
}