// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  modules: ["vuetify-nuxt-module", "nuxt-mdi"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: "./vuetify.config.ts", // <== you can omit it
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // experimental: {
  //   renderJsonPayloads: false,
  // },
});