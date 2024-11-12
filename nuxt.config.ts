// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.80.1/phaser.min.js', type: 'text/javascript' },
      ]
    },
  },
  // css: [
  //   // Ajouter votre style CSS global
  //   {
  //     hid: 'global-styles',
  //     cssText: `
  //       body {
  //         margin: 0;
  //         background-color: #29adff;
  //       }
  //     `
  //   }
  // ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})


