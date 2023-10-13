<script lang="ts" setup>
import { usePine } from "@/package";
import { computed } from "vue";

const pine = usePine();
const isDark = computed(() => pine.theme === "dark");
</script>
<template>
  <div id="pine-app" :class="{ dark: isDark }">
    <div class="pine-main">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/global.scss";
@import "@/assets/tooltip.scss";

#pine-app {
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;

  .pine-main {
    max-height: 100%;
    overflow: auto;
  }
}
</style>
