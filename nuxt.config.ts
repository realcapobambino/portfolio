// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon', 
  //'@nuxtjs/google-fonts'
  ],
  colorMode: {
    preference: '', // default theme
    dataValue: 'theme', // activate data-theme specified in layouts/default.vue
    fallback: '', // fallback theme
  },
  // googleFonts: {
  //   families: {
  //     'Bungee+Shade': true,
  //     'Raleway': true,
  //   },
  // },
  // 
  // SEO and Meta
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Charles Wahome',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }],
      meta: [
        { name: 'description', content: 'Charles Wahome is a software engineer and a web developer.' },
        { name: 'keywords', content: 'Charles Wahome, charleswahome,  capo bambino, capo, bambino, Charles, Kariuki, Wahome, Charles Kariuki, Charles Kariuki Wahome ,software engineer, web developer, web designer, web developer in Kenya, software engineer in Kenya, web designer in Kenya' },
        { name: 'author', content: 'Charles Wahome' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'google', content: 'nositelinkssearchbox' },
        { name: 'google', content: 'notranslate' },
      ],
    },
  },
  nitro: {
    //
    //
  },
})