export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt"
  ],
  "colorMode": {
    "preference": "dark"
  },
  app: {
    head: {
      title: 'Anawan - 1 abonné = 1 ligne de code',
      meta: [
        { name: 'charset', content: 'UTF-8' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#29adff' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})


