export default defineNuxtConfig({
  modules: [
    '@nuxt/ui', 
    '@nuxtjs/color-mode'
  ],
  css: ['./app/assets/css/main.css'],

  ui: {
    colorMode: false
  }
});