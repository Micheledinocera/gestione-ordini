const path = require('path');
let development = process.env.NODE_ENV !== 'production'
let baseURL = development? "/" : "/gestione-ordini/"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // runtimeConfig:{
  //   public:{
  //     cryptoSecret:process.env.CRYPTO_SECRET
  //   }
  // },
  css: ["@/assets/main.sass"],
  components: [
    { path: '~/components/', pathPrefix: false },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/variables.sass"'
        },
      },
    },
  },
  modules: [
    'nuxt-vuefire',
    '@davestewart/nuxt-scrollbar',
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    appCheck: {
      // debug: development,
      isTokenAutoRefreshEnabled: true,
      provider: 'ReCaptchaV3',
      // Find the instructions in the Firebase documentation, link above
      key: '6Lccqo4oAAAAANhGma5l8_cDEFDeXgy1l-k1F3lS',
    },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/docs')
    }
  },
  app: {
    baseURL: baseURL
  },
})
