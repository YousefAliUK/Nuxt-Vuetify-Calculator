// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  /* vuetify options */
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          background: "#f3f3f3",
          functions: "#f9f9f9",
          numberPad: "#ffffff",
          equals: "#7e533e",
          hoverNumberPad: "#f9f9f9",
          hoverFunctions: "#ffffff",
          hoverEquals: "#8a6350",
        },
      },
      dark: {
        colors: {
          background: "#202020",
          functions: "#323232",
          numberPad: "#3b3b3b",
          equals: "#d3ba9d",
          hoverNumberPad: "#323232",
          hoverFunctions: "#3b3b3b",
          hoverEquals: "#c0aa90",
        },
      },
    },
  },
});
