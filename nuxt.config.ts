// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false
  },

  modules: ['@pinia/nuxt'],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  nitro: {
    serveStatic: true,
  },

  app: {
    head: {
      title: 'Admin Dashboard',

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    
    },

  },

  devServerHandlers: [],

  hooks: {
  },

  routeRules: {
    '/**': { middleware: 'auth' },
    '/': { middleware: 'auth' }, 
  },

  compatibilityDate: '2025-02-22',
})