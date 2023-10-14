<script setup lang="ts">
import { ref } from "vue";

const switchForm = ref("");
</script>

<template>
  <div>
    <div>
      <PineSwitchTheme @change="(e) => (switchForm = e)"></PineSwitchTheme>
      {{ switchForm }}
    </div>
  </div>
</template>
