import { ProxyOptions, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import autoprefixer from 'autoprefixer'

const componentsAliases = ['atoms', 'modecules', 'organisms', 'templates', 'pages'];
const aliases = ['constants', 'models', 'utils', 'assets', 'plugins', 'apis', 'stores'];

const proxy: (url: string) => Record<string, string | ProxyOptions> = (url: string) => {
  return {
    '/api': {
      target: url,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },
  resolve: {
    alias: componentsAliases.map(alias => ({
      find: `@${alias}`,
      replacement: fileURLToPath(new URL(`./src/components/${alias}`, import.meta.url))
    })).concat(
      aliases.map(alias => ({
        find: `@${alias}`, replacement: fileURLToPath(new URL(`./src/${alias}`, import.meta.url))
      }))
    )
  },
  envDir: './env',
  server: {
    proxy: proxy('http://localhost:5173/mocks')
  },
  preview: {
    proxy: proxy('http://localhost:4173/mocks')
  },
})
