<!-- ***  TEMPLATE *** -->
<template>
  <div class="calculator">
    <div class="display">
      <div class="operation" style="min-height: 1.5rem">{{ operation }}</div>
      <div class="result" style="min-height: 2rem">{{ result }}</div>
    </div>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-row v-for="(row, rowIndex) in buttonsLayout" :key="rowIndex">
          <v-col v-for="(button, buttonIndex) in row" :key="buttonIndex">
            <v-hover v-slot:default="{ isHovering, btn }">
              <v-btn
                @click="handleClick(button)"
                :color="
                  isHovering
                    ? button.hoverEqual
                      ? 'hoverEquals'
                      : button.color === 'numberPad'
                      ? 'hoverFunctions'
                      : 'hoverNumberPad'
                    : button.color || 'numberPad'
                "
                :class="button"
                v-bind="btn"
                block
              >
                <span v-html="button.label"></span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<!-- ***  SCRIPT *** -->
<script setup>
import useCalculator from "@/composables/useCalculator";

const { operation, result, buttonsLayout, handleClick } = useCalculator();
</script>

<!-- ***  STYLE *** -->
<style scoped src="@/assets/style.css"></style>
