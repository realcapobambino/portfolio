// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/google-fonts'],
  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
  },
  googleFonts: {
    families: {
      'Bungee+Shade': true,
    },
  },

  // 
  //
  // 
  nitro: { prerender: { routes: ['/', '/portfolio', '/about'] } }
})