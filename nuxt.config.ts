import { vuetifyModule } from "./vuetify-module";

export default defineNuxtConfig({
  ssr: false,
  
  modules: [
    vuetifyModule,
    // 'nuxt-windicss',
  ],

  css: [
    '~/scss/main.scss',
  ]
})
