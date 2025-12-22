export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@barzhsieh/nuxt-content-mermaid'
  ],
  css: ['./app/assets/css/main.css'],

  i18n: {
    defaultLocale: 'id',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'id', name: 'Bahasa Indonesia' }
    ]
  },

  nitro: {
    routeRules: {
      '/': { redirect: '/en/introduction/introduction/welcome' }
    }
  },
  contentMermaid: {
    enabled: true,
  },
});
