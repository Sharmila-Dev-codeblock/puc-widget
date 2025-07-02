import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    define: {
    'process.env.NODE_ENV': JSON.stringify('development'), 
  },
  build: {
    lib: {
      entry: 'src/embedScript.tsx',
      name: 'PUCEmbed',
      formats: ['iife'],
      fileName: () => 'embedScript.js',
    },
    rollupOptions: {
      // external: ['react', 'react-dom'],
      // output: {
      //   globals: {
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //   },
      // },
    },
  },
})
