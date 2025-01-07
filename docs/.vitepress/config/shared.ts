import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'Pinece',

  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
  },
})
