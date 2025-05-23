<template>
  <v-app-bar app color="background" class="px-15">
    <div class="d-flex align-center">
      <v-icon size="50px">
        <img src="/icons/Calculator.png" alt="Calculator" />
      </v-icon>

      <h5>Calculator</h5>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      @click="
        () => {
          toggleTheme();
          dark = !dark;
        }
      "
    >
      <v-icon>
        {{ !dark ? "mdi-weather-sunny" : "mdi-weather-night" }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<!-- ***  SCRIPT *** -->
<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const dark = ref(theme.global.current.value.dark);

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>
