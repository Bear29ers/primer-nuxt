// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: ['/assets/css/style.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt 3 Basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for Beginners' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
});
