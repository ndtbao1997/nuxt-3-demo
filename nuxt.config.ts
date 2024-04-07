// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {
          name: 'description', content: 'Everything about Nuxt 3'
        }
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'}
      ]
    }
  }
})
