import { defineConfig } from '@pandacss/dev';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  theme: {
    extend: {},
  },

  optimize: isProduction,
  hash: isProduction,
  minify: isProduction,

  jsxFramework: 'react',

  gitignore: true,

  staticCss: {
    recipes: '*',
  },

  outdir: 'styled-system',
});
