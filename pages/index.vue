<template>
  <div class="d-flex flex-column h-100">
    <!-- Header -->
    <MyHeader />

    <!-- <Calculator /> -->
    <v-main>
      <v-container>
        <!-- Calculator Component -->
        <Calculator />
      </v-container>
    </v-main>
  </div>
</template>
<script setup>
import MyHeader from "~/components/MyHeader.vue";
import Calculator from "~/components/Calculator.vue";
</script>
